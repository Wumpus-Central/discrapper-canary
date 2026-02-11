"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(253018),
    o = n(40672);
function l(e, t) {
    let { attributes: n, children: i, element: a } = t;
    return "timestampMentionInput" === a.type ? (0, r.jsx)(u, { attributes: n, element: a, children: i }) : null;
}
let u = (e) => {
    let { element: t, attributes: n, children: i } = e,
        l = (0, s.f7)(),
        u = (0, s.zL)(),
        c = a()(o.S0, o.xP, o.FF, { [o.t$]: u && l, [o.$2]: t.error }),
        d = (0, r.jsx)("span", { className: o._K, children: i });
    return (0, r.jsxs)("span", {
        ...n,
        className: c,
        children: [
            (0, r.jsxs)("span", { className: o.gA, contentEditable: !1, children: ["@time", "​"] }),
            d,
            (0, r.jsx)("span", { contentEditable: !1, children: "​" }),
        ],
    });
};
