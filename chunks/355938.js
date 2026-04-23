"use strict";
n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var a = n(459192),
    s = n(939249),
    i = n(687966),
    r = n(769015),
    o = n(985018),
    c = n(873581);
function u(e) {
    let { application: t, children: n } = e;
    return (0, l.jsx)(a.u, {
        asset: (0, l.jsx)(r.A, { size: r.M.MEDIUM_LARGE, game: t }),
        body: o.intl.format(o.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": o.intl.string(o.t["5nMcv1"]),
        children: (0, l.jsx)(s.D, { tag: "span", children: n }),
    });
}
function d(e) {
    let { application: t, compact: n, children: a } = e;
    return (0, l.jsxs)(u, {
        application: t,
        children: [n ? null : (0, l.jsx)(i._, { className: c.Gt, size: "custom", width: 14, height: 14 }), a],
    });
}
