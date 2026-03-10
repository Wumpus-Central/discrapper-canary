n.d(t, { A: () => d });
var a = n(627968);
n(64700);
var i = n(435371),
    l = n(397927),
    r = n(769015),
    s = n(985018),
    o = n(999584);
function c(e) {
    let { application: t, children: n } = e;
    return (0, a.jsx)(i.un, {
        asset: (0, a.jsx)(r.A, { size: r.M.MEDIUM_LARGE, game: t }),
        body: s.intl.format(s.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": s.intl.string(s.t["5nMcv1"]),
        children: (0, a.jsx)(l.DUT, { tag: "span", children: n }),
    });
}
function d(e) {
    let { application: t, compact: n, children: i } = e;
    return (0, a.jsxs)(c, {
        application: t,
        children: [n ? null : (0, a.jsx)(l._xR, { className: o.Gt, size: "custom", width: 14, height: 14 }), i],
    });
}
