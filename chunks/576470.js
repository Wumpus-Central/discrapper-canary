"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    s = n.n(a),
    l = n(58703),
    o = n(375708);
class d extends r.PureComponent {
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
        let { showDays: t, showUnits: n, className: r } = this.props,
            a = [e.days, e.hours, e.minutes, e.seconds],
            l = [
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
        let d = s()(a)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, i.jsxs)("span", { children: [e, n ? l[a.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, i.jsx)("span", { className: r, children: d });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)("span", { className: n, "aria-label": o.intl.string(o.t.PqEzn8), children: "\u221E" });
        let a = (0, l.Tf)(Date.now(), e, r);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
}
let c = d;
