"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(253018),
    l = n(711371),
    u = n(562650);
function c(e, t) {
    let { attributes: n, children: i, element: a } = t;
    return "gameMentionInput" === a.type ? (0, r.jsx)(d, { attributes: n, element: a, children: i }) : null;
}
let d = (e) => {
    let { element: t, attributes: n, children: a } = e,
        c = (0, o.f7)(),
        d = (0, o.zL)(),
        _ = (0, o.RV)(),
        f = s()(u.S0, u.xP, u.lB, { [u.t$]: d && c, [u.$2]: t.error }),
        h = i.useCallback(() => {
            l.VW.isVoid(_, t);
        }, [_, t]),
        p = (0, r.jsx)("span", { className: u._K, children: a });
    return (0, r.jsxs)("span", {
        ...n,
        className: f,
        children: [
            (0, r.jsxs)("span", { className: u.gA, contentEditable: !1, onClick: h, children: ["@game", "​"] }),
            p,
            (0, r.jsx)("span", { contentEditable: !1, children: "​" }),
        ],
    });
};
