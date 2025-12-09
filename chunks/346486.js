n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    l = n(392711),
    o = n.n(l),
    s = n(55935),
    d = n(388032);
function c(e, t, n) {
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
class u extends (r = a.PureComponent) {
    componentDidMount() {
        let { intervalDuration: e, onInterval: t } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == t || t();
        }, e);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
        let { showDays: t, showUnits: n, className: r } = this.props,
            a = [e.days, e.hours, e.minutes, e.seconds],
            l = [
                d.intl.string(d.t["6m/6nM"]),
                d.intl.string(d.t.n7dksO),
                d.intl.string(d.t["1LyF1h"]),
                d.intl.string(d.t.QJyuxY),
            ];
        if (0 === e.days) a.shift();
        else if (!t) {
            let e = a.shift();
            a[0] += 24 * e;
        }
        let s = o()(a)
            .map((e) => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, i.jsxs)(
                    "span",
                    {
                        children: [e, n ? l[a.length - t - 1] : null],
                    },
                    t,
                ),
            ])
            .flatten()
            .value();
        return (0, i.jsx)("span", {
            className: r,
            children: s,
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)("span", {
                className: n,
                "aria-label": d.intl.string(d.t.PqEzn8),
                children: "\u221E",
            });
        let a = (0, s.TD)(Date.now(), e, r);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
    constructor(...e) {
        super(...e), c(this, "_interval", void 0);
    }
}
c(u, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let p = u;
