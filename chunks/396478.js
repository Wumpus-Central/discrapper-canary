"use strict";
n.d(t, { G8: () => p, SG: () => E, pp: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(462887),
    l = n(707554),
    u = n(235986),
    c = n(652215),
    d = n(352709),
    _ = n(818050);
let { Provider: f, Consumer: h } = r.createContext(c.NJ8.DARK);
class p extends r.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: r, offsetX: s, offsetY: l, style: c } = this.props;
        return (0, i.jsx)(h, {
            children: (f) =>
                (0, i.jsx)(u.A.Child, {
                    grow: 0,
                    className: a()(d.Sl, _.C2),
                    style: {
                        ...c,
                        width: n,
                        height: r,
                        marginLeft: s,
                        marginTop: l,
                        backgroundImage: `url(${((0, o.M))(f) ? t : e})`,
                    },
                }),
        });
    }
}
let E = (e) => {
    let { children: t, className: n, noteClassName: r, note: s, style: o } = e;
    return (0, i.jsxs)(u.A.Child, {
        grow: 0,
        direction: u.A.Direction.VERTICAL,
        style: o,
        children: [
            null != t && (0, i.jsx)(l.H, { className: a()(n, d.DD), children: t }),
            null != s ? (0, i.jsx)("div", { className: a()(r, d.Qq, _.Ot), children: s }) : null,
        ],
    });
};
function m(e) {
    let { children: t, theme: n, className: r, style: s } = e;
    return (0, i.jsx)(f, {
        value: n,
        children: (0, i.jsx)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            justify: u.A.Justify.CENTER,
            className: a()(d.iE, r),
            style: s,
            children: t,
        }),
    });
}
