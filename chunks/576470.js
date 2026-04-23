n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    r = n(735438),
    o = n.n(r),
    l = n(58703),
    s = n(985018);
class c extends i.PureComponent {
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
            r = [e.days, e.hours, e.minutes, e.seconds],
            l = [
                s.intl.string(s.t["6m/6nM"]),
                s.intl.string(s.t.n7dksO),
                s.intl.string(s.t["1LyF1h"]),
                s.intl.string(s.t.QJyuxY),
            ];
        if (0 === e.days) r.shift();
        else if (!t) {
            let e = r.shift();
            r[0] += 24 * e;
        }
        let c = o()(r)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, a.jsxs)("span", { children: [e, n ? l[r.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, a.jsx)("span", { className: i, children: c });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, a.jsx)("span", { className: n, "aria-label": s.intl.string(s.t.PqEzn8), children: "∞" });
        let r = (0, l.Tf)(Date.now(), e, i);
        return null != t ? t(r, this.defaultRender.bind(this, r)) : this.defaultRender(r);
    }
}
let _ = c;
