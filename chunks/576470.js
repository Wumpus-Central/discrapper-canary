"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    a = n(64700),
    s = n(735438),
    i = n.n(s),
    l = n(405269),
    o = n(985018);
class c extends a.PureComponent {
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
        let { showDays: t, showUnits: n, className: a } = this.props,
            s = [e.days, e.hours, e.minutes, e.seconds],
            l = [
                o.intl.string(o.t["6m/6nM"]),
                o.intl.string(o.t.n7dksO),
                o.intl.string(o.t["1LyF1h"]),
                o.intl.string(o.t.QJyuxY),
            ];
        if (0 === e.days) s.shift();
        else if (!t) {
            let e = s.shift();
            s[0] += 24 * e;
        }
        let c = i()(s)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, r.jsxs)("span", { children: [e, n ? l[s.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, r.jsx)("span", { className: a, children: c });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: a } = this.props;
        if (e === 1 / 0)
            return (0, r.jsx)("span", { className: n, "aria-label": o.intl.string(o.t.PqEzn8), children: "∞" });
        let s = (0, l.Tf)(Date.now(), e, a);
        return null != t ? t(s, this.defaultRender.bind(this, s)) : this.defaultRender(s);
    }
}
let d = c;
