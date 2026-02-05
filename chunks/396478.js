"use strict";
n.d(t, { G8: () => h, SG: () => m, pp: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(582754),
    l = n(397927),
    u = n(235986),
    c = n(652215),
    d = n(537356),
    _ = n(473169);
let { Provider: f, Consumer: p } = i.createContext(c.NJ8.DARK);
class h extends i.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: i, offsetX: a, offsetY: l, style: c } = this.props;
        return (0, r.jsx)(p, {
            children: (f) =>
                (0, r.jsx)(u.A.Child, {
                    grow: 0,
                    className: s()(d.Sl, _.C2),
                    style: {
                        ...c,
                        width: n,
                        height: i,
                        marginLeft: a,
                        marginTop: l,
                        backgroundImage: `url(${((0, o.Mw))(f) ? t : e})`,
                    },
                }),
        });
    }
}
let m = (e) => {
    let { children: t, className: n, noteClassName: i, note: a, style: o } = e;
    return (0, r.jsxs)(u.A.Child, {
        grow: 0,
        direction: u.A.Direction.VERTICAL,
        style: o,
        children: [
            null != t && (0, r.jsx)(l.H, { className: s()(n, d.DD), children: t }),
            null != a ? (0, r.jsx)("div", { className: s()(i, d.Qq, _.Ot), children: a }) : null,
        ],
    });
};
function g(e) {
    let { children: t, theme: n, className: i, style: a } = e;
    return (0, r.jsx)(f, {
        value: n,
        children: (0, r.jsx)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            justify: u.A.Justify.CENTER,
            className: s()(d.iE, i),
            style: a,
            children: t,
        }),
    });
}
