l.d(n, { G8: () => x, SG: () => C, pp: () => A });
var r = l(477900),
    s = l(582128),
    t = l(503698),
    i = l.n(t),
    a = l(534514),
    c = l(834730),
    d = l(462887),
    o = l(235986),
    u = l(652215),
    h = l(906114),
    p = l(221851);
let { Provider: m, Consumer: g } = s.createContext(u.NJ8.DARK);
class x extends s.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: n, width: l, height: s, offsetX: t, offsetY: a, style: c } = this.props;
        return (0, r.jsx)(g, {
            children: (u) =>
                (0, r.jsx)(o.A.Child, {
                    grow: 0,
                    className: i()(h.Sl, p.C2),
                    style: {
                        ...c,
                        width: l,
                        height: s,
                        marginLeft: t,
                        marginTop: a,
                        backgroundImage: `url(${(0, d.M)(u) ? n : e})`,
                    },
                }),
        });
    }
}
function C(e) {
    let { children: n, className: l, noteClassName: s, note: t, style: d } = e;
    return (0, r.jsxs)(o.A.Child, {
        grow: 0,
        style: d ?? void 0,
        children: [
            null != n &&
                (0, r.jsx)(a.D, {
                    color: "none",
                    variant: "heading-lg/semibold",
                    className: i()(l, h.DD),
                    children: n,
                }),
            null != t
                ? (0, r.jsx)(c.E, {
                      color: "text-muted",
                      variant: "body-md/normal",
                      className: i()(s, h.Qq, p.Ot),
                      children: t,
                  })
                : null,
        ],
    });
}
function A(e) {
    let { children: n, theme: l, className: s, style: t } = e;
    return (0, r.jsx)(m, {
        value: l,
        children: (0, r.jsx)(o.A, {
            direction: o.A.Direction.VERTICAL,
            align: o.A.Align.CENTER,
            justify: o.A.Justify.CENTER,
            className: i()(h.iE, s),
            style: t,
            children: n,
        }),
    });
}
