"use strict";
n.d(t, { A: () => c, J: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(985018),
    l = n(654739);
let u = { standard: l.mQ };
function c(e) {
    let { timeRemaining: t, variant: n, text: i, Icon: c = a.gqV } = e;
    return (0, r.jsxs)("div", {
        className: s()(l.jt, l.qw, u[n]),
        children: [
            (0, r.jsx)(c, { size: "xs", color: "currentColor" }),
            (0, r.jsxs)("div", {
                className: l.Yu,
                children: [
                    (0, r.jsxs)(a.EYj, {
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: [o.intl.string(o.t.yYEZGi), null != t && ` (${t})`],
                    }),
                    (0, r.jsx)("div", {
                        className: l.fb,
                        children: (0, r.jsx)(a.EYj, { variant: "text-sm/medium", color: "currentColor", children: i }),
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { text: t, Icon: n = a.gqV } = e;
    return (0, r.jsxs)("div", {
        className: s()(l.jt, l.Cu),
        children: [
            (0, r.jsx)(n, { size: "xs", color: "currentColor" }),
            (0, r.jsx)(a.EYj, { variant: "text-sm/medium", color: "currentColor", className: l.Ct, children: t }),
        ],
    });
}
