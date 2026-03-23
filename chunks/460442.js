r.d(t, { Yb: () => h, gS: () => I, oU: () => m });
var i = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    s = r(158954),
    u = r(827734),
    o = r(492518),
    d = r(985018),
    c = r(865444);
function a(e) {
    let { icon: t, style: r } = e;
    return (0, i.jsx)("div", { className: l()(c.Lw, r), children: t });
}
function I(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(a, {
        style: l()(c.AI, t && c.mW),
        icon: (0, i.jsx)(s.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(c.x6, c.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function h(e) {
    let { count: t } = e;
    return (0, i.jsx)(a, {
        style: c.RF,
        icon: (0, i.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function m(e) {
    let { isHoveringOrFocusing: t, loading: r } = e;
    return (0, i.jsx)(a, {
        style: l()(c.U4, { [c.HI]: t || r }),
        icon: r ? (0, i.jsx)(o.k, {}) : (0, i.jsx)(s.yhu, { size: "lg", color: u.A.unsafe_rawColors.WHITE_500 }),
    });
}
