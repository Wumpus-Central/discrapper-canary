"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(816758),
    o = n(91299),
    l = n(544313);
function u(e) {
    let { children: t, className: n, contentClassName: i, color: u = "black", disabled: c = !1, ...d } = e;
    return (0, r.jsx)(o.A, {
        ...d,
        className: s()(l.x6, n, { [l.SU]: "black" === u, [l.AI]: "white" === u, [l.r9]: c }),
        disabled: c,
        children: (0, r.jsxs)(a.A, {
            className: l.PQ,
            children: [
                (0, r.jsx)("div", { className: l.Tp }),
                (0, r.jsx)("div", { className: s()(l.Qs, i), children: t }),
            ],
        }),
    });
}
