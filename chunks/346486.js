n.d(t, { Z: () => h }), n(388685);
var l,
    r = n(54381),
    i = n(473749),
    a = n(392711),
    s = n.n(a),
    o = n(55935),
    u = n(388032);
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
class d extends (l = i.PureComponent) {
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
        let { showDays: t, showUnits: n, className: l } = this.props,
            i = [e.days, e.hours, e.minutes, e.seconds],
            a = [
                u.intl.string(u.t["6m/6nM"]),
                u.intl.string(u.t.n7dksO),
                u.intl.string(u.t["1LyF1h"]),
                u.intl.string(u.t.QJyuxY),
            ];
        if (0 === e.days) i.shift();
        else if (!t) {
            let e = i.shift();
            i[0] += 24 * e;
        }
        let o = s()(i)
            .map((e) => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, r.jsxs)(
                    "span",
                    {
                        children: [e, n ? a[i.length - t - 1] : null],
                    },
                    t,
                ),
            ])
            .flatten()
            .value();
        return (0, r.jsx)("span", {
            className: l,
            children: o,
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: l } = this.props;
        if (e === 1 / 0)
            return (0, r.jsx)("span", {
                className: n,
                "aria-label": u.intl.string(u.t.PqEzn8),
                children: "\u221E",
            });
        let i = (0, o.TD)(Date.now(), e, l);
        return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i);
    }
    constructor(...e) {
        super(...e), c(this, "_interval", void 0);
    }
}
c(d, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let h = d;
