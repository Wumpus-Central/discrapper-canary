e.d(n, { Z: () => p }), e(388685);
var l,
    i = e(951288),
    a = e(647438),
    s = e(392711),
    r = e.n(s),
    o = e(55935),
    u = e(388032);
function c(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[n] = e),
        t
    );
}
class d extends (l = a.PureComponent) {
    componentDidMount() {
        let { intervalDuration: t, onInterval: n } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == n || n();
        }, t);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(t) {
        let { showDays: n, showUnits: e, className: l } = this.props,
            a = [t.days, t.hours, t.minutes, t.seconds],
            s = [
                u.intl.string(u.t["6m/6nJ"]),
                u.intl.string(u.t.n7dksL),
                u.intl.string(u.t["1LyF1t"]),
                u.intl.string(u.t.QJyuxc),
            ];
        if (0 === t.days) a.shift();
        else if (!n) {
            let t = a.shift();
            a[0] += 24 * t;
        }
        let o = r()(a)
            .map((t) => (t < 10 ? "0".concat(t) : t))
            .map((t, n) => [
                n > 0 && !e ? ":" : " ",
                (0, i.jsxs)(
                    "span",
                    {
                        children: [t, e ? s[a.length - n - 1] : null],
                    },
                    n,
                ),
            ])
            .flatten()
            .value();
        return (0, i.jsx)("span", {
            className: l,
            children: o,
        });
    }
    render() {
        let { deadline: t, children: n, className: e, stopAtOneSec: l } = this.props;
        if (t === 1 / 0)
            return (0, i.jsx)("span", {
                className: e,
                "aria-label": u.intl.string(u.t.PqEzn5),
                children: "\u221E",
            });
        let a = (0, o.TD)(Date.now(), t, l);
        return null != n ? n(a, this.defaultRender.bind(this, a)) : this.defaultRender(a);
    }
    constructor(...t) {
        super(...t), c(this, "_interval", void 0);
    }
}
c(d, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let p = d;
