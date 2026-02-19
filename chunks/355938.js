"use strict";
n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var s = n(435371),
    i = n(397927),
    r = n(769015),
    a = n(985018),
    o = n(999584);
function u(e) {
    let { application: t, children: n } = e;
    return (0, l.jsx)(s.un, {
        asset: (0, l.jsx)(r.A, { size: r.M.MEDIUM_LARGE, game: t }),
        body: a.intl.format(a.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": a.intl.string(a.t["5nMcv1"]),
        children: (0, l.jsx)(i.DUT, { tag: "span", children: n }),
    });
}
function c(e) {
    let { application: t, compact: n, children: s } = e;
    return (0, l.jsxs)(u, {
        application: t,
        children: [n ? null : (0, l.jsx)(i._xR, { className: o.Gt, size: "custom", width: 14, height: 14 }), s],
    });
}
