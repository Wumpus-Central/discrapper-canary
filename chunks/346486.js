n.d(t, { Z: () => p }), n(388685);
var i,
    l = n(255367),
    r = n(73800),
    o = n(392711),
    a = n.n(o),
    c = n(55935),
    s = n(388032);
function u(e, t, n) {
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
class d extends (i = r.PureComponent) {
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
        let { showDays: t, showUnits: n, className: i } = this.props,
            r = [e.days, e.hours, e.minutes, e.seconds],
            o = [
                s.intl.string(s.t["6m/6nJ"]),
                s.intl.string(s.t.n7dksL),
                s.intl.string(s.t["1LyF1t"]),
                s.intl.string(s.t.QJyuxc),
            ];
        if (0 === e.days) r.shift();
        else if (!t) {
            let e = r.shift();
            r[0] += 24 * e;
        }
        let c = a()(r)
            .map((e) => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, l.jsxs)(
                    "span",
                    {
                        children: [e, n ? o[r.length - t - 1] : null],
                    },
                    t,
                ),
            ])
            .flatten()
            .value();
        return (0, l.jsx)("span", {
            className: i,
            children: c,
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, l.jsx)("span", {
                className: n,
                "aria-label": s.intl.string(s.t.PqEzn5),
                children: "\u221E",
            });
        let r = (0, c.TD)(Date.now(), e, i);
        return null != t ? t(r, this.defaultRender.bind(this, r)) : this.defaultRender(r);
    }
    constructor(...e) {
        super(...e), u(this, "_interval", void 0);
    }
}
u(d, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let p = d;
