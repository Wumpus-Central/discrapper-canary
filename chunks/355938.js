"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var a = n(459192),
    r = n(939249),
    l = n(687966),
    s = n(769015),
    o = n(985018),
    c = n(873581);
function u(e) {
    let { application: t, children: n } = e;
    return (0, i.jsx)(a.u, {
        asset: (0, i.jsx)(s.A, { size: s.M.MEDIUM_LARGE, game: t }),
        body: o.intl.format(o.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": o.intl.string(o.t["5nMcv1"]),
        children: (0, i.jsx)(r.D, { tag: "span", children: n }),
    });
}
function d(e) {
    let { application: t, compact: n, children: a } = e;
    return (0, i.jsxs)(u, {
        application: t,
        children: [n ? null : (0, i.jsx)(l._, { className: c.Gt, size: "custom", width: 14, height: 14 }), a],
    });
}
