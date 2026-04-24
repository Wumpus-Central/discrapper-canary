"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(58703),
    o = n(985018);
class d extends i.PureComponent {
    static defaultProps = { showDays: !0, showUnits: !1, stopAtOneSec: !1, intervalDuration: 1e3 };
    _interval;
    componentDidMount() {
        let { intervalDuration: e, onInterval: t } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), t?.();
        }, e);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
        let { showDays: t, showUnits: n, className: i } = this.props,
            a = [e.days, e.hours, e.minutes, e.seconds],
            s = [
                o.intl.string(o.t["6m/6nM"]),
                o.intl.string(o.t.n7dksO),
                o.intl.string(o.t["1LyF1h"]),
                o.intl.string(o.t.QJyuxY),
            ];
        if (0 === e.days) a.shift();
        else if (!t) {
            let e = a.shift();
            a[0] += 24 * e;
        }
        let d = l()(a)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, r.jsxs)("span", { children: [e, n ? s[a.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, r.jsx)("span", { className: i, children: d });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, r.jsx)("span", { className: n, "aria-label": o.intl.string(o.t.PqEzn8), children: "∞" });
        let a = (0, s.Tf)(Date.now(), e, i);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
}
let c = d;
