n.d(t, { Z: () => p }), n(388685);
var i,
    r = n(951288),
    l = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(55935),
    u = n(388032);
function c(e, t, n) {
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
class d extends (i = l.PureComponent) {
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
            l = [e.days, e.hours, e.minutes, e.seconds],
            a = [
                u.intl.string(u.t["6m/6nJ"]),
                u.intl.string(u.t.n7dksL),
                u.intl.string(u.t["1LyF1t"]),
                u.intl.string(u.t.QJyuxc),
            ];
        if (0 === e.days) l.shift();
        else if (!t) {
            let e = l.shift();
            l[0] += 24 * e;
        }
        let s = o()(l)
            .map((e) => (e < 10 ? "0".concat(e) : e))
            .map((e, t) => [
                t > 0 && !n ? ":" : " ",
                (0, r.jsxs)(
                    "span",
                    {
                        children: [e, n ? a[l.length - t - 1] : null],
                    },
                    t,
                ),
            ])
            .flatten()
            .value();
        return (0, r.jsx)("span", {
            className: i,
            children: s,
        });
    }
    render() {
        let { deadline: e, children: t, className: n, stopAtOneSec: i } = this.props;
        if (e === 1 / 0)
            return (0, r.jsx)("span", {
                className: n,
                "aria-label": u.intl.string(u.t.PqEzn5),
                children: "\u221E",
            });
        let l = (0, s.TD)(Date.now(), e, i);
        return null != t ? t(l, this.defaultRender.bind(this, l)) : this.defaultRender(l);
    }
    constructor(...e) {
        super(...e), c(this, "_interval", void 0);
    }
}
c(d, "defaultProps", {
    showDays: !0,
    showUnits: !1,
    stopAtOneSec: !1,
    intervalDuration: 1000,
});
let p = d;
