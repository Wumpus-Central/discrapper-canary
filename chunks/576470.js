n.d(i, {
    A: () => g,
}),
    n(896048);
var e,
    r = n(627968),
    E = n(64700),
    s = n(735438),
    l = n.n(s),
    S = n(405269),
    o = n(985018);

function a(t, i, n) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[i] = n),
        t
    );
}
class A extends (e = E.PureComponent) {
    componentDidMount() {
        let { intervalDuration: t, onInterval: i } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == i || i();
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: i, showUnits: n, className: e } = this.props,
            E = [t.days, t.hours, t.minutes, t.seconds],
            s = [
                o.intl.string(o.t["6m/6nM"]),
                o.intl.string(o.t.n7dksO),
                o.intl.string(o.t["1LyF1h"]),
                o.intl.string(o.t.QJyuxY),
            ];
        if (0 === t.days) E.shift();
        else if (!i) {
            let t = E.shift();
            E[0] += 24 * t;
        }
        let S = l()(E)
            .map((t) => (t < 10 ? "0".concat(t) : t))
            .map((t, i) => [
                i > 0 && !n ? ":" : " ",
                (0, r.jsxs)(
                    "span",
                    {
                        children: [t, n ? s[E.length - i - 1] : null],
                    },
                    i,
                ),
            ])
            .flatten()
            .value();
        return (0, r.jsx)("span", {
            className: e,
            children: S,
        });
    }
    render() {
        let { deadline: t, children: i, className: n, stopAtOneSec: e } = this.props;
        if (t === 1 / 0)
            return (0, r.jsx)("span", {
                className: n,
                "aria-label": o.intl.string(o.t.PqEzn8),
                children: "∞",
            });
        let E = (0, S.Tf)(Date.now(), t, e);
        return null != i ? i(E, this.defaultRender.bind(this, E)) : this.defaultRender(E);
    }
    constructor(...t) {
        super(...t), a(this, "_interval", void 0);
    }
}
a(A, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1e3,
});
let g = A;
