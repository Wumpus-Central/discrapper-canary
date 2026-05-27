"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(58703),
    l = n(375708);
class u extends r.PureComponent {
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
            s = [e.days, e.hours, e.minutes, e.seconds],
            o = [
                l.intl.string(l.t["6m/6nM"]),
                l.intl.string(l.t.n7dksO),
                l.intl.string(l.t["1LyF1h"]),
                l.intl.string(l.t.QJyuxY),
            ];
        if (0 === e.days) s.shift();
        else if (!t) {
            let e = s.shift();
            s[0] += 24 * e;
        }
        let u = a()(s)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, i.jsxs)("span", { children: [e, n ? o[s.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, i.jsx)("span", { className: r, children: u });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)("span", { className: n, "aria-label": l.intl.string(l.t.PqEzn8), children: "\u221E" });
        let s = (0, o.Tf)(Date.now(), e, r);
        return null != t ? t(s, this.defaultRender.bind(this, s)) : this.defaultRender(s);
    }
}
let c = u;
