"use strict";
n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(435371),
    s = n(397927),
    a = n(769015),
    r = n(985018),
    o = n(999584);
function u(e) {
    let { application: t, children: n } = e;
    return (0, l.jsx)(i.un, {
        asset: (0, l.jsx)(a.A, { size: a.M.MEDIUM_LARGE, game: t }),
        body: r.intl.format(r.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": r.intl.string(r.t["5nMcv1"]),
        children: (0, l.jsx)(s.DUT, { tag: "span", children: n }),
    });
}
function c(e) {
    let { application: t, compact: n, children: i } = e;
    return (0, l.jsxs)(u, {
        application: t,
        children: [n ? null : (0, l.jsx)(s._xR, { className: o.Gt, size: "custom", width: 14, height: 14 }), i],
    });
}
