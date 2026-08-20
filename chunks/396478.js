n.d(l, { G8: () => A, SG: () => C, pp: () => g });
var t = n(477900),
    r = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(297264),
    c = n(834730),
    d = n(462887),
    o = n(235986),
    u = n(652215),
    h = n(906114),
    p = n(221851);
let { Provider: m, Consumer: x } = r.createContext(u.NJ8.DARK);
class A extends r.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: l, width: n, height: r, offsetX: i, offsetY: a, style: c } = this.props;
        return (0, t.jsx)(x, {
            children: (u) =>
                (0, t.jsx)(o.A.Child, {
                    grow: 0,
                    className: s()(h.Sl, p.C2),
                    style: {
                        ...c,
                        width: n,
                        height: r,
                        marginLeft: i,
                        marginTop: a,
                        backgroundImage: `url(${((0, d.M))(u) ? l : e})`,
                    },
                }),
        });
    }
}
let C = (e) => {
    let { children: l, className: n, noteClassName: r, note: i, style: d } = e;
    return (0, t.jsxs)(o.A.Child, {
        grow: 0,
        direction: o.A.Direction.VERTICAL,
        style: d,
        children: [
            null != l &&
                (0, t.jsx)(a.D, {
                    color: "none",
                    variant: "heading-lg/semibold",
                    className: s()(n, h.DD),
                    children: l,
                }),
            null != i
                ? (0, t.jsx)(c.E, {
                      color: "text-muted",
                      variant: "text-md/normal",
                      className: s()(r, h.Qq, p.Ot),
                      children: i,
                  })
                : null,
        ],
    });
};
function g(e) {
    let { children: l, theme: n, className: r, style: i } = e;
    return (0, t.jsx)(m, {
        value: n,
        children: (0, t.jsx)(o.A, {
            direction: o.A.Direction.VERTICAL,
            align: o.A.Align.CENTER,
            justify: o.A.Justify.CENTER,
            className: s()(h.iE, r),
            style: i,
            children: l,
        }),
    });
}
