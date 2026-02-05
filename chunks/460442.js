n.d(t, { BF: () => h, Yb: () => A, gS: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(158954),
    r = n(827734),
    o = n(985018),
    d = n(865444);
function c(e) {
    let { icon: t, style: n } = e;
    return (0, i.jsx)("div", { className: s()(d.Lw, n), children: t });
}
function u(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(c, {
        style: s()(d.AI, t && d.mW),
        icon: (0, i.jsx)(a.rOg, {
            size: "custom",
            color: r.A.colors.WHITE,
            width: 38,
            height: 38,
            className: s()(d.x6, d.AI),
            "aria-label": o.intl.string(o.t.L5Pt9L),
        }),
    });
}
function h(e) {
    let { count: t } = e;
    return (0, i.jsx)(c, {
        style: d.RF,
        icon: (0, i.jsxs)(a.EYj, { variant: "text-sm/medium", color: "always-white", children: ["+", t + 1] }),
    });
}
function A(e) {
    let { count: t } = e;
    return (0, i.jsx)(c, {
        style: d.RF,
        icon: (0, i.jsx)(a.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: o.intl.format(o.t.F6iMs4, { count: t }),
        }),
    });
}
