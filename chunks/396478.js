"use strict";
n.d(t, { G8: () => h, SG: () => b, pp: () => m });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(462887),
    o = n(707554),
    c = n(235986),
    d = n(652215),
    u = n(352709),
    _ = n(818050);
let { Provider: p, Consumer: f } = i.createContext(d.NJ8.DARK);
class h extends i.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: i, offsetX: a, offsetY: o, style: d } = this.props;
        return (0, r.jsx)(f, {
            children: (p) =>
                (0, r.jsx)(c.A.Child, {
                    grow: 0,
                    className: s()(u.Sl, _.C2),
                    style: {
                        ...d,
                        width: n,
                        height: i,
                        marginLeft: a,
                        marginTop: o,
                        backgroundImage: `url(${((0, l.M))(p) ? t : e})`,
                    },
                }),
        });
    }
}
let b = (e) => {
    let { children: t, className: n, noteClassName: i, note: a, style: l } = e;
    return (0, r.jsxs)(c.A.Child, {
        grow: 0,
        direction: c.A.Direction.VERTICAL,
        style: l,
        children: [
            null != t && (0, r.jsx)(o.H, { className: s()(n, u.DD), children: t }),
            null != a ? (0, r.jsx)("div", { className: s()(i, u.Qq, _.Ot), children: a }) : null,
        ],
    });
};
function m(e) {
    let { children: t, theme: n, className: i, style: a } = e;
    return (0, r.jsx)(p, {
        value: n,
        children: (0, r.jsx)(c.A, {
            direction: c.A.Direction.VERTICAL,
            align: c.A.Align.CENTER,
            justify: c.A.Justify.CENTER,
            className: s()(u.iE, i),
            style: a,
            children: t,
        }),
    });
}
