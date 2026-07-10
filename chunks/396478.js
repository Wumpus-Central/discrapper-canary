"use strict";
n.d(t, { G8: () => h, SG: () => I, pp: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(462887),
    o = n(707554),
    d = n(235986),
    c = n(652215),
    u = n(849989),
    _ = n(373378);
let { Provider: E, Consumer: A } = r.createContext(c.NJ8.DARK);
class h extends r.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: r, offsetX: a, offsetY: o, style: c } = this.props;
        return (0, i.jsx)(A, {
            children: (E) =>
                (0, i.jsx)(d.A.Child, {
                    grow: 0,
                    className: s()(u.Sl, _.C2),
                    style: {
                        ...c,
                        width: n,
                        height: r,
                        marginLeft: a,
                        marginTop: o,
                        backgroundImage: `url(${((0, l.M))(E) ? t : e})`,
                    },
                }),
        });
    }
}
let I = (e) => {
    let { children: t, className: n, noteClassName: r, note: a, style: l } = e;
    return (0, i.jsxs)(d.A.Child, {
        grow: 0,
        direction: d.A.Direction.VERTICAL,
        style: l,
        children: [
            null != t && (0, i.jsx)(o.H, { className: s()(n, u.DD), children: t }),
            null != a ? (0, i.jsx)("div", { className: s()(r, u.Qq, _.Ot), children: a }) : null,
        ],
    });
};
function f(e) {
    let { children: t, theme: n, className: r, style: a } = e;
    return (0, i.jsx)(E, {
        value: n,
        children: (0, i.jsx)(d.A, {
            direction: d.A.Direction.VERTICAL,
            align: d.A.Align.CENTER,
            justify: d.A.Justify.CENTER,
            className: s()(u.iE, r),
            style: a,
            children: t,
        }),
    });
}
