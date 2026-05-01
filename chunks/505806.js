n.d(t, { A: () => s }), n(321073);
var i = n(64700),
    a = n(451988);
class r extends i.Component {
    _interval = new a.IX();
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
            a = Date.now(),
            r = 0,
            s = 0,
            l = [],
            o = null != e[0] ? e[0].bytes : 0;
        for (; r < t + i; r++) {
            let t,
                i = a - (r + 1) * n;
            for (; s < e.length; )
                if ((t = e[s]).timestamp > i) s++;
                else break;
            if (s === e.length) break;
            null != t && (l.push(o - t.bytes), (o = t.bytes));
        }
        for (; r < t + i; r++) l.push(0);
        return l.reverse(), l;
    }
    smoothDeltaBytes(e) {
        let { pointsToSmooth: t } = this.props,
            n = [];
        for (let i = 0; i < e.length - t; i++) {
            let a = 0;
            for (let n = 0; n < t; n++) a += e[i + n];
            n.push(a / t);
        }
        return n;
    }
    update = () => {
        let { onUpdate: e, numUpdatesToShow: t, pointsToSmooth: n, updateInterval: i } = this.props,
            a = this.props.getHistoricalTotalBytes(),
            r = null != a[0] ? a[0].bytes : 0,
            s = [...this.state.deltaBytes.slice(1, t + n), r - this.state.lastTotalBytes];
        this.setState(
            { deltaBytes: s, smoothedDeltaBytes: this.smoothDeltaBytes(s), lastTotalBytes: r },
            () => null != e && e(i),
        );
    };
    render() {
        let { numUpdatesToShow: e, updateInterval: t, children: n } = this.props;
        return n(this.state.smoothedDeltaBytes, t, e);
    }
}
let s = r;
