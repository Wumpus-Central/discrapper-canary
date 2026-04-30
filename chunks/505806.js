"use strict";
n.d(t, { A: () => a }), n(321073);
var i = n(64700),
    r = n(451988);
class s extends i.Component {
    _interval = new r.IX();
    static defaultProps = { numUpdatesToShow: 30, updateInterval: 500, pointsToSmooth: 10 };
    constructor(e) {
        super(e);
        const t = this.props.getHistoricalTotalBytes(),
            n = this.calculateInitialDeltaBytes(t);
        this.state = {
            deltaBytes: n,
            smoothedDeltaBytes: this.smoothDeltaBytes(n),
            lastTotalBytes: null != t[0] ? t[0].bytes : 0,
        };
    }
    componentDidMount() {
        this.update(), this._interval.start(this.props.updateInterval, this.update);
    }
    componentWillUnmount() {
        this._interval.stop();
    }
    calculateInitialDeltaBytes(e) {
        let { numUpdatesToShow: t, updateInterval: n, pointsToSmooth: i } = this.props,
            r = Date.now(),
            s = 0,
            a = 0,
            o = [],
            l = null != e[0] ? e[0].bytes : 0;
        for (; s < t + i; s++) {
            let t,
                i = r - (s + 1) * n;
            for (; a < e.length; )
                if ((t = e[a]).timestamp > i) a++;
                else break;
            if (a === e.length) break;
            null != t && (o.push(l - t.bytes), (l = t.bytes));
        }
        for (; s < t + i; s++) o.push(0);
        return o.reverse(), o;
    }
    smoothDeltaBytes(e) {
        let { pointsToSmooth: t } = this.props,
            n = [];
        for (let i = 0; i < e.length - t; i++) {
            let r = 0;
            for (let n = 0; n < t; n++) r += e[i + n];
            n.push(r / t);
        }
        return n;
    }
    update = () => {
        let { onUpdate: e, numUpdatesToShow: t, pointsToSmooth: n, updateInterval: i } = this.props,
            r = this.props.getHistoricalTotalBytes(),
            s = null != r[0] ? r[0].bytes : 0,
            a = [...this.state.deltaBytes.slice(1, t + n), s - this.state.lastTotalBytes];
        this.setState(
            { deltaBytes: a, smoothedDeltaBytes: this.smoothDeltaBytes(a), lastTotalBytes: s },
            () => null != e && e(i),
        );
    };
    render() {
        let { numUpdatesToShow: e, updateInterval: t, children: n } = this.props;
        return n(this.state.smoothedDeltaBytes, t, e);
    }
}
let a = s;
