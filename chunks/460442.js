r.d(t, { Yb: () => h, gS: () => I, oU: () => m });
var i = r(627968);
r(64700);
var n = r(503698),
    l = r.n(n),
    s = r(158954),
    u = r(827734),
    o = r(492518),
    d = r(985018),
    a = r(85474);
function c(e) {
    let { icon: t, style: r } = e;
    return (0, i.jsx)("div", { className: l()(a.Lw, r), children: t });
}
function I(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(c, {
        style: l()(a.AI, t && a.mW),
        icon: (0, i.jsx)(s.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(a.x6, a.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function h(e) {
    let { count: t } = e;
    return (0, i.jsx)(c, {
        style: a.RF,
        icon: (0, i.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function m(e) {
    let { isHoveringOrFocusing: t, loading: r } = e;
    return (0, i.jsx)(c, {
        style: l()(a.U4, { [a.HI]: t || r }),
        icon: r ? (0, i.jsx)(o.k, {}) : (0, i.jsx)(s.yhu, { size: "lg", color: u.A.unsafe_rawColors.WHITE_500 }),
    });
}
