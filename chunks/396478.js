l.d(e, { G8: () => f, SG: () => g, pp: () => A });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(462887),
    o = l(707554),
    c = l(235986),
    d = l(652215),
    u = l(352709),
    h = l(818050);
let { Provider: p, Consumer: _ } = i.createContext(d.NJ8.DARK);
class f extends i.PureComponent {
    render() {
        let { lightSrc: t, darkSrc: e, width: l, height: i, offsetX: s, offsetY: o, style: d } = this.props;
        return (0, n.jsx)(_, {
            children: (p) =>
                (0, n.jsx)(c.A.Child, {
                    grow: 0,
                    className: a()(u.Sl, h.C2),
                    style: {
                        ...d,
                        width: l,
                        height: i,
                        marginLeft: s,
                        marginTop: o,
                        backgroundImage: `url(${((0, r.M))(p) ? e : t})`,
                    },
                }),
        });
    }
}
let g = (t) => {
    let { children: e, className: l, noteClassName: i, note: s, style: r } = t;
    return (0, n.jsxs)(c.A.Child, {
        grow: 0,
        direction: c.A.Direction.VERTICAL,
        style: r,
        children: [
            null != e && (0, n.jsx)(o.H, { className: a()(l, u.DD), children: e }),
            null != s ? (0, n.jsx)("div", { className: a()(i, u.Qq, h.Ot), children: s }) : null,
        ],
    });
};
function A(t) {
    let { children: e, theme: l, className: i, style: s } = t;
    return (0, n.jsx)(p, {
        value: l,
        children: (0, n.jsx)(c.A, {
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.CENTER,
            justify: c.A.Justify.CENTER,
            className: a()(u.iE, i),
            style: s,
            children: e,
        }),
    });
}
