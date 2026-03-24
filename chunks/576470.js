"use strict";
a.d(t, { A: () => c });
var n = a(627968),
    i = a(64700),
    r = a(735438),
    s = a.n(r),
    l = a(405269),
    o = a(985018);
class _ extends i.PureComponent {
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
        let { showDays: t, showUnits: a, className: i } = this.props,
            r = [e.days, e.hours, e.minutes, e.seconds],
            l = [
                o.intl.string(o.t["6m/6nM"]),
                o.intl.string(o.t.n7dksO),
                o.intl.string(o.t["1LyF1h"]),
                o.intl.string(o.t.QJyuxY),
            ];
        if (0 === e.days) r.shift();
        else if (!t) {
            let e = r.shift();
            r[0] += 24 * e;
        }
        let _ = s()(r)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !a ? ":" : " ",
                (0, n.jsxs)("span", { children: [e, a ? l[r.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, n.jsx)("span", { className: i, children: _ });
    }
    render() {
        let { deadline: e, children: t, className: a, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, n.jsx)("span", { className: a, "aria-label": o.intl.string(o.t.PqEzn8), children: "∞" });
        let r = (0, l.Tf)(Date.now(), e, i);
        return null != t ? t(r, this.defaultRender.bind(this, r)) : this.defaultRender(r);
    }
}
let c = _;
