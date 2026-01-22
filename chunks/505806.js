n.d(t, { A: () => o }), n(321073), n(264879), n(896048);
var r,
    l = n(64700),
    i = n(451988);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s extends (r = l.Component) {
    componentDidMount() {
        this.update(), this._interval.start(this.props.updateInterval, this.update);
    }
    componentWillUnmount() {
        this._interval.stop();
    }
    calculateInitialDeltaBytes(e) {
        let { numUpdatesToShow: t, updateInterval: n, pointsToSmooth: r } = this.props,
            l = Date.now(),
            i = 0,
            a = 0,
            s = [],
            o = null != e[0] ? e[0].bytes : 0;
        for (; i < t + r; i++) {
            let t,
                r = l - (i + 1) * n;
            for (; a < e.length; )
                if ((t = e[a]).timestamp > r) a++;
                else break;
            if (a === e.length) break;
            null != t && (s.push(o - t.bytes), (o = t.bytes));
        }
        for (; i < t + r; i++) s.push(0);
        return s.reverse(), s;
    }
    smoothDeltaBytes(e) {
        let { pointsToSmooth: t } = this.props,
            n = [];
        for (let r = 0; r < e.length - t; r++) {
            let l = 0;
            for (let n = 0; n < t; n++) l += e[r + n];
            n.push(l / t);
        }
        return n;
    }
    render() {
        let { numUpdatesToShow: e, updateInterval: t, children: n } = this.props;
        return n(this.state.smoothedDeltaBytes, t, e);
    }
    constructor(e) {
        super(e),
            a(this, "_interval", new i.IX()),
            a(this, "update", () => {
                let { onUpdate: e, numUpdatesToShow: t, pointsToSmooth: n, updateInterval: r } = this.props,
                    l = this.props.getHistoricalTotalBytes(),
                    i = null != l[0] ? l[0].bytes : 0,
                    a = [...this.state.deltaBytes.slice(1, t + n), i - this.state.lastTotalBytes];
                this.setState(
                    {
                        deltaBytes: a,
                        smoothedDeltaBytes: this.smoothDeltaBytes(a),
                        lastTotalBytes: i,
                    },
                    () => null != e && e(r),
                );
            });
        const t = this.props.getHistoricalTotalBytes(),
            n = this.calculateInitialDeltaBytes(t);
        this.state = {
            deltaBytes: n,
            smoothedDeltaBytes: this.smoothDeltaBytes(n),
            lastTotalBytes: null != t[0] ? t[0].bytes : 0,
        };
    }
}
a(s, "defaultProps", {
    numUpdatesToShow: 30,
    updateInterval: 500,
    pointsToSmooth: 10,
});
let o = s;
