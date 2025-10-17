n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    o = n(392711),
    a = n.n(o),
    s = n(55935),
    c = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class u extends (r = l.PureComponent) {
    componentDidMount() {
        let { intervalDuration: e, onInterval: t } = this.props;
        this._interval = setInterval(() => {
            this.forceUpdate(), null == t || t();
        }, e);
    }
    componentWillUnmount() {
        null != this._interval && clearInterval(this._interval);
    }
    defaultRender(e) {
        let { showDays: t, showUnits: n, className: r } = this.props,
            l = [e.days, e.hours, e.minutes, e.seconds],
            o = [
                c.intl.string(c.t["6m/6nJ"]),
                c.intl.string(c.t.n7dksL),
                c.intl.string(c.t["1LyF1t"]),
                c.intl.string(c.t.QJyuxc),
            ];
        if (0 === e.days) l.shift();
        else if (!t) {
            let e = l.shift();
            l[0] += 24 * e;
        }
        let s = a()(l)
            .map((e) => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, i.jsxs)(
                    "span",
                    {
                        children: [e, n ? o[l.length - t - 1] : null],
                    },
                    t,
                ),
            ])
            .flatten()
            .value();
        return (0, i.jsx)("span", {
            className: r,
            children: s,
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: r } = this.props;
        if (e === 1 / 0)
            return (0, i.jsx)("span", {
                className: n,
                "aria-label": c.intl.string(c.t.PqEzn5),
                children: "\u221E",
            });
        let l = (0, s.TD)(Date.now(), e, r);
        return null != t ? t(l, this.defaultRender.bind(this, l)) : this.defaultRender(l);
    }
    constructor(...e) {
        super(...e), d(this, "_interval", void 0);
    }
}
d(u, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let p = u;
