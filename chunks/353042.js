n.d(t, { Z: () => s }), n(653041), n(47120);
var i,
    l = n(192379),
    r = n(846519);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o extends (i = l.Component) {
    componentDidMount() {
        this.update(), this._interval.start(this.props.updateInterval, this.update);
    }
    componentWillUnmount() {
        this._interval.stop();
    }
    calculateInitialDeltaBytes(e) {
        let { numUpdatesToShow: t, updateInterval: n, pointsToSmooth: i } = this.props,
            l = Date.now(),
            r = 0,
            a = 0,
            o = [],
            s = null != e[0] ? e[0].bytes : 0;
        for (; r < t + i; r++) {
            let t;
            let i = l - (r + 1) * n;
            for (; a < e.length; )
                if ((t = e[a]).timestamp > i) a++;
                else break;
            if (a === e.length) break;
            null != t && (o.push(s - t.bytes), (s = t.bytes));
        }
        for (; r < t + i; r++) o.push(0);
        return o.reverse(), o;
    }
    smoothDeltaBytes(e) {
        let { pointsToSmooth: t } = this.props,
            n = [];
        for (let i = 0; i < e.length - t; i++) {
            let l = 0;
            for (let n = 0; n < t; n++) l += e[i + n];
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
            a(this, '_interval', new r.Xp()),
            a(this, 'update', () => {
                let { onUpdate: e, numUpdatesToShow: t, pointsToSmooth: n, updateInterval: i } = this.props,
                    l = this.props.getHistoricalTotalBytes(),
                    r = null != l[0] ? l[0].bytes : 0,
                    a = [...this.state.deltaBytes.slice(1, t + n), r - this.state.lastTotalBytes];
                this.setState(
                    {
                        deltaBytes: a,
                        smoothedDeltaBytes: this.smoothDeltaBytes(a),
                        lastTotalBytes: r
                    },
                    () => null != e && e(i)
                );
            });
        let t = this.props.getHistoricalTotalBytes(),
            n = this.calculateInitialDeltaBytes(t);
        this.state = {
            deltaBytes: n,
            smoothedDeltaBytes: this.smoothDeltaBytes(n),
            lastTotalBytes: null != t[0] ? t[0].bytes : 0
        };
    }
}
a(o, 'defaultProps', {
    numUpdatesToShow: 30,
    updateInterval: 500,
    pointsToSmooth: 10
});
let s = o;
