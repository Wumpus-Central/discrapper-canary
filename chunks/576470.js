"use strict";
a.d(t, { A: () => _ });
var n = a(627968),
    r = a(64700),
    i = a(735438),
    s = a.n(i),
    l = a(405269),
    o = a(985018);
class c extends r.PureComponent {
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
        let { showDays: t, showUnits: a, className: r } = this.props,
            i = [e.days, e.hours, e.minutes, e.seconds],
            l = [
                o.intl.string(o.t["6m/6nM"]),
                o.intl.string(o.t.n7dksO),
                o.intl.string(o.t["1LyF1h"]),
                o.intl.string(o.t.QJyuxY),
            ];
        if (0 === e.days) i.shift();
        else if (!t) {
            let e = i.shift();
            i[0] += 24 * e;
        }
        let c = s()(i)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !a ? ":" : " ",
                (0, n.jsxs)("span", { children: [e, a ? l[i.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, n.jsx)("span", { className: r, children: c });
    }
    render() {
        let { deadline: e, children: t, className: a, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, n.jsx)("span", { className: a, "aria-label": o.intl.string(o.t.PqEzn8), children: "∞" });
        let i = (0, l.Tf)(Date.now(), e, r);
        return null != t ? t(i, this.defaultRender.bind(this, i)) : this.defaultRender(i);
    }
}
let _ = c;
