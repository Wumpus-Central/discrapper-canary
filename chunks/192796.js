"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(253018),
    l = n(711371),
    u = n(40672);
function c(e, t) {
    let { attributes: n, children: i, element: s } = t;
    return "gameMentionInput" === s.type ? (0, r.jsx)(d, { attributes: n, element: s, children: i }) : null;
}
let d = (e) => {
    let { element: t, attributes: n, children: s } = e,
        c = (0, o.f7)(),
        d = (0, o.zL)(),
        _ = (0, o.RV)(),
        f = a()(u.S0, u.xP, u.lB, { [u.t$]: d && c, [u.$2]: t.error }),
        p = i.useCallback(() => {
            l.VW.isVoid(_, t);
        }, [_, t]),
        h = (0, r.jsx)("span", { className: u._K, children: s });
    return (0, r.jsxs)("span", {
        ...n,
        className: f,
        children: [
            (0, r.jsxs)("span", { className: u.gA, contentEditable: !1, onClick: p, children: ["@game", "​"] }),
            h,
            (0, r.jsx)("span", { contentEditable: !1, children: "​" }),
        ],
    });
};
