l.d(n, { G8: () => g, SG: () => C, pp: () => A });
var t = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    a = l(297264),
    c = l(834730),
    d = l(462887),
    o = l(235986),
    u = l(652215),
    h = l(906114),
    p = l(221851);
let { Provider: m, Consumer: x } = r.createContext(u.NJ8.DARK);
class g extends r.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: n, width: l, height: r, offsetX: s, offsetY: a, style: c } = this.props;
        return (0, t.jsx)(x, {
            children: (u) =>
                (0, t.jsx)(o.A.Child, {
                    grow: 0,
                    className: i()(h.Sl, p.C2),
                    style: {
                        ...c,
                        width: l,
                        height: r,
                        marginLeft: s,
                        marginTop: a,
                        backgroundImage: `url(${(0, d.M)(u) ? n : e})`,
                    },
                }),
        });
    }
}
function C(e) {
    let { children: n, className: l, noteClassName: r, note: s, style: d } = e;
    return (0, t.jsxs)(o.A.Child, {
        grow: 0,
        style: d ?? void 0,
        children: [
            null != n &&
                (0, t.jsx)(a.D, {
                    color: "none",
                    variant: "heading-lg/semibold",
                    className: i()(l, h.DD),
                    children: n,
                }),
            null != s
                ? (0, t.jsx)(c.E, {
                      color: "text-muted",
                      variant: "text-md/normal",
                      className: i()(r, h.Qq, p.Ot),
                      children: s,
                  })
                : null,
        ],
    });
}
function A(e) {
    let { children: n, theme: l, className: r, style: s } = e;
    return (0, t.jsx)(m, {
        value: l,
        children: (0, t.jsx)(o.A, {
            direction: o.A.Direction.VERTICAL,
            align: o.A.Align.CENTER,
            justify: o.A.Justify.CENTER,
            className: i()(h.iE, r),
            style: s,
            children: n,
        }),
    });
}
