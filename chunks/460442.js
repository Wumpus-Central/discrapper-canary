n.d(t, {
    g: () => d,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(158954),
    o = n(827734),
    s = n(985018),
    c = n(865444);

function u(e) {
    let { icon: t, style: n } = e;
    return (0, r.jsx)("div", {
        className: i()(c.Lw, n),
        children: t,
    });
}

function d(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, r.jsx)(u, {
        style: i()(c.AI, t && c.mW),
        icon: (0, r.jsx)(a.rOg, {
            size: "custom",
            color: o.A.colors.WHITE,
            width: 38,
            height: 38,
            className: i()(c.x6, c.AI),
            "aria-label": s.intl.string(s.t.L5Pt9L),
        }),
    });
}
