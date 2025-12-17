n.d(t, { Z: () => s }), n(539854), n(583741), n(388685);
var r,
    i = n(473749),
    l = n(846519);
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
class o extends (r = i.Component) {
    componentDidMount() {
        this.update(), this._interval.start(this.props.updateInterval, this.update);
    }
    componentWillUnmount() {
        this._interval.stop();
    }
    calculateInitialDeltaBytes(e) {
        let { numUpdatesToShow: t, updateInterval: n, pointsToSmooth: r } = this.props,
            i = Date.now(),
            l = 0,
            a = 0,
            o = [],
            s = null != e[0] ? e[0].bytes : 0;
        for (; l < t + r; l++) {
            let t,
                r = i - (l + 1) * n;
            for (; a < e.length; )
                if ((t = e[a]).timestamp > r) a++;
                else break;
            if (a === e.length) break;
            null != t && (o.push(s - t.bytes), (s = t.bytes));
        }
        for (; l < t + r; l++) o.push(0);
        return o.reverse(), o;
    }
    smoothDeltaBytes(e) {
        let { pointsToSmooth: t } = this.props,
            n = [];
        for (let r = 0; r < e.length - t; r++) {
            let i = 0;
            for (let n = 0; n < t; n++) i += e[r + n];
            n.push(i / t);
        }
        return n;
    }
    render() {
        let { numUpdatesToShow: e, updateInterval: t, children: n } = this.props;
        return n(this.state.smoothedDeltaBytes, t, e);
    }
    constructor(e) {
        super(e),
            a(this, "_interval", new l.Xp()),
            a(this, "update", () => {
                let { onUpdate: e, numUpdatesToShow: t, pointsToSmooth: n, updateInterval: r } = this.props,
                    i = this.props.getHistoricalTotalBytes(),
                    l = null != i[0] ? i[0].bytes : 0,
                    a = [...this.state.deltaBytes.slice(1, t + n), l - this.state.lastTotalBytes];
                this.setState(
                    {
                        deltaBytes: a,
                        smoothedDeltaBytes: this.smoothDeltaBytes(a),
                        lastTotalBytes: l,
                    },
                    () => null != e && e(r),
                );
            });
        let t = this.props.getHistoricalTotalBytes(),
            n = this.calculateInitialDeltaBytes(t);
        this.state = {
            deltaBytes: n,
            smoothedDeltaBytes: this.smoothDeltaBytes(n),
            lastTotalBytes: null != t[0] ? t[0].bytes : 0,
        };
    }
}
a(o, "defaultProps", {
    numUpdatesToShow: 30,
    updateInterval: 500,
    pointsToSmooth: 10,
});
let s = o;
