n.d(t, { A: () => s }), n(321073);
var i = n(582128),
    r = n(451988);
class a extends i.Component {
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
            a = 0,
            s = 0,
            l = [],
            o = null != e[0] ? e[0].bytes : 0;
        for (; a < t + i; a++) {
            let t,
                i = r - (a + 1) * n;
            for (; s < e.length; )
                if ((t = e[s]).timestamp > i) s++;
                else break;
            if (s === e.length) break;
            null != t && (l.push(o - t.bytes), (o = t.bytes));
        }
        for (; a < t + i; a++) l.push(0);
        return l.reverse(), l;
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
            a = null != r[0] ? r[0].bytes : 0,
            s = [...this.state.deltaBytes.slice(1, t + n), a - this.state.lastTotalBytes];
        this.setState(
            { deltaBytes: s, smoothedDeltaBytes: this.smoothDeltaBytes(s), lastTotalBytes: a },
            () => null != e && e(i),
        );
    };
    render() {
        let { numUpdatesToShow: e, updateInterval: t, children: n } = this.props;
        return n(this.state.smoothedDeltaBytes, t, e);
    }
}
let s = a;
