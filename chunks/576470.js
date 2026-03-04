n.d(i, { A: () => A });
var e = n(627968),
    r = n(64700),
    E = n(735438),
    s = n.n(E),
    l = n(405269),
    S = n(985018);
class o extends r.PureComponent {
    static defaultProps = { showDays: !0, showUnits: !1, stopAtOneSec: !1, intervalDuration: 1e3 };
    _interval;
    componentDidMount() {
        let { intervalDuration: t, onInterval: i } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), i?.();
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: i, showUnits: n, className: r } = this.props,
            E = [t.days, t.hours, t.minutes, t.seconds],
            l = [
                S.intl.string(S.t["6m/6nM"]),
                S.intl.string(S.t.n7dksO),
                S.intl.string(S.t["1LyF1h"]),
                S.intl.string(S.t.QJyuxY),
            ];
        if (0 === t.days) E.shift();
        else if (!i) {
            let t = E.shift();
            E[0] += 24 * t;
        }
        let o = s()(E)
            .map((t) => (t < 10 ? `0${t}` : t))
            .map((t, i) => [
                i > 0 && !n ? ":" : " ",
                (0, e.jsxs)("span", { children: [t, n ? l[E.length - i - 1] : null] }, i),
            ])
            .flatten()
            .value();
        return (0, e.jsx)("span", { className: r, children: o });
    }
    render() {
        let { deadline: t, children: i, className: n, stopAtOneSec: r } = this.props;
        if (t === 1 / 0)
            return (0, e.jsx)("span", { className: n, "aria-label": S.intl.string(S.t.PqEzn8), children: "∞" });
        let E = (0, l.Tf)(Date.now(), t, r);
        return null != i ? i(E, this.defaultRender.bind(this, E)) : this.defaultRender(E);
    }
}
let A = o;
