"use strict";
n.d(t, { G8: () => h, SG: () => m, pp: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(582754),
    l = n(397927),
    u = n(235986),
    c = n(652215),
    d = n(872066),
    _ = n(885106);
let { Provider: f, Consumer: p } = i.createContext(c.NJ8.DARK);
class h extends i.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: i, offsetX: s, offsetY: l, style: c } = this.props;
        return (0, r.jsx)(p, {
            children: (f) =>
                (0, r.jsx)(u.A.Child, {
                    grow: 0,
                    className: a()(d.Sl, _.C2),
                    style: {
                        ...c,
                        width: n,
                        height: i,
                        marginLeft: s,
                        marginTop: l,
                        backgroundImage: `url(${((0, o.Mw))(f) ? t : e})`,
                    },
                }),
        });
    }
}
let m = (e) => {
    let { children: t, className: n, noteClassName: i, note: s, style: o } = e;
    return (0, r.jsxs)(u.A.Child, {
        grow: 0,
        direction: u.A.Direction.VERTICAL,
        style: o,
        children: [
            null != t && (0, r.jsx)(l.H, { className: a()(n, d.DD), children: t }),
            null != s ? (0, r.jsx)("div", { className: a()(i, d.Qq, _.Ot), children: s }) : null,
        ],
    });
};
function E(e) {
    let { children: t, theme: n, className: i, style: s } = e;
    return (0, r.jsx)(f, {
        value: n,
        children: (0, r.jsx)(u.A, {
            direction: u.A.Direction.VERTICAL,
            align: u.A.Align.CENTER,
            justify: u.A.Justify.CENTER,
            className: a()(d.iE, i),
            style: s,
            children: t,
        }),
    });
}
