"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(435371),
    a = n(397927),
    s = n(769015),
    o = n(985018),
    l = n(999584);
function u(e) {
    let { application: t, children: n } = e;
    return (0, r.jsx)(i.un, {
        asset: (0, r.jsx)(s.A, { size: s.M.MEDIUM_LARGE, game: t }),
        body: o.intl.format(o.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": o.intl.string(o.t["5nMcv1"]),
        children: (0, r.jsx)(a.DUT, { tag: "span", children: n }),
    });
}
function c(e) {
    let { application: t, compact: n, children: i } = e;
    return (0, r.jsxs)(u, {
        application: t,
        children: [n ? null : (0, r.jsx)(a._xR, { className: l.Gt, size: "custom", width: 14, height: 14 }), i],
    });
}
