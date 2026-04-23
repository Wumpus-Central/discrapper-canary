l.d(t, { A: () => c });
var n = l(627968),
    i = l(64700),
    a = l(735438),
    s = l.n(a),
    r = l(405269),
    o = l(985018);
class u extends i.PureComponent {
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
        let { showDays: t, showUnits: l, className: i } = this.props,
            a = [e.days, e.hours, e.minutes, e.seconds],
            r = [
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
        let u = s()(a)
            .map((e) => (e < 10 ? `0${e}` : e))
            .map((e, t) => [
                t > 0 && !l ? ":" : " ",
                (0, n.jsxs)("span", { children: [e, l ? r[a.length - t - 1] : null] }, t),
            ])
            .flatten()
            .value();
        return (0, n.jsx)("span", { className: i, children: u });
    }
    render() {
        let { deadline: e, children: t, className: l, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, n.jsx)("span", { className: l, "aria-label": o.intl.string(o.t.PqEzn8), children: "∞" });
        let a = (0, r.Tf)(Date.now(), e, i);
        return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
}
let c = u;
