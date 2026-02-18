"use strict";
n.d(t, { A: () => c, J: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(985018),
    l = n(974132);
let u = { standard: l.mQ };
function c(e) {
    let { timeRemaining: t, variant: n, text: i, Icon: c = s.gqV } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.jt, l.qw, u[n]),
        children: [
            (0, r.jsx)(c, { size: "xs", color: "currentColor" }),
            (0, r.jsxs)("div", {
                className: l.Yu,
                children: [
                    (0, r.jsxs)(s.EYj, {
                        variant: "text-sm/bold",
                        color: "currentColor",
                        children: [o.intl.string(o.t.yYEZGi), null != t && ` (${t})`],
                    }),
                    (0, r.jsx)("div", {
                        className: l.fb,
                        children: (0, r.jsx)(s.EYj, { variant: "text-sm/medium", color: "currentColor", children: i }),
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { text: t, Icon: n = s.gqV } = e;
    return (0, r.jsxs)("div", {
        className: a()(l.jt, l.Cu),
        children: [
            (0, r.jsx)(n, { size: "xs", color: "currentColor" }),
            (0, r.jsx)(s.EYj, { variant: "text-sm/medium", color: "currentColor", className: l.Ct, children: t }),
        ],
    });
}
