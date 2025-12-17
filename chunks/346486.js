n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(392711),
    l = n.n(o),
    c = n(55935),
    s = n(388032);
function d(e, t, n) {
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
class f extends (r = a.PureComponent) {
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
            o = [
                s.intl.string(s.t["6m/6nM"]),
                s.intl.string(s.t.n7dksO),
                s.intl.string(s.t["1LyF1h"]),
                s.intl.string(s.t.QJyuxY),
            ];
        if (0 === e.days) a.shift();
        else if (!t) {
            let e = a.shift();
            a[0] += 24 * e;
        }
        let c = l()(a)
            .map((e) => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, i.jsxs)(
                    "span",
                    {
                        children: [e, n ? o[a.length - t - 1] : null],
                    },
                    t,
                ),
            ])
            .flatten()
            .value();
        return (0, i.jsx)("span", {
            className: r,
            children: c,
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)("span", {
                className: n,
                "aria-label": s.intl.string(s.t.PqEzn8),
                children: "\u221E",
            });
        let a = (0, c.TD)(Date.now(), e, r);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
    constructor(...e) {
        super(...e), d(this, "_interval", void 0);
    }
}
d(f, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let u = f;
