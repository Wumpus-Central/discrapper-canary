"use strict";
n.d(t, { A: () => r }), n(321073);
var i = n(64700),
    s = n(451988);
class l extends i.Component {
    _interval = new s.IX();
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
            s = Date.now(),
            l = 0,
            r = 0,
            a = [],
            o = null != e[0] ? e[0].bytes : 0;
        for (; l < t + i; l++) {
            let t,
                i = s - (l + 1) * n;
            for (; r < e.length; )
                if ((t = e[r]).timestamp > i) r++;
                else break;
            if (r === e.length) break;
            null != t && (a.push(o - t.bytes), (o = t.bytes));
        }
        for (; l < t + i; l++) a.push(0);
        return a.reverse(), a;
    }
    smoothDeltaBytes(e) {
        let { pointsToSmooth: t } = this.props,
            n = [];
        for (let i = 0; i < e.length - t; i++) {
            let s = 0;
            for (let n = 0; n < t; n++) s += e[i + n];
            n.push(s / t);
        }
        return n;
    }
    update = () => {
        let { onUpdate: e, numUpdatesToShow: t, pointsToSmooth: n, updateInterval: i } = this.props,
            s = this.props.getHistoricalTotalBytes(),
            l = null != s[0] ? s[0].bytes : 0,
            r = [...this.state.deltaBytes.slice(1, t + n), l - this.state.lastTotalBytes];
        this.setState(
            { deltaBytes: r, smoothedDeltaBytes: this.smoothDeltaBytes(r), lastTotalBytes: l },
            () => null != e && e(i),
        );
    };
    render() {
        let { numUpdatesToShow: e, updateInterval: t, children: n } = this.props;
        return n(this.state.smoothedDeltaBytes, t, e);
    }
}
let r = l;
