i.d(t, { Yb: () => h, gS: () => I, oU: () => S });
var r = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    n = i(158954),
    u = i(827734),
    a = i(492518),
    d = i(985018),
    o = i(865444);
function c(e) {
    let { icon: t, style: i } = e;
    return (0, r.jsx)("div", { className: s()(o.Lw, i), children: t });
}
function I(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, r.jsx)(c, {
        style: s()(o.AI, t && o.mW),
        icon: (0, r.jsx)(n.rOg, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: s()(o.x6, o.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function h(e) {
    let { count: t } = e;
    return (0, r.jsx)(c, {
        style: o.RF,
        icon: (0, r.jsx)(n.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function S(e) {
    let { isHoveringOrFocusing: t, loading: i } = e;
    return (0, r.jsx)(c, {
        style: s()(o.U4, { [o.HI]: t || i }),
        icon: i ? (0, r.jsx)(a.k, {}) : (0, r.jsx)(n.yhu, { size: "lg", color: u.A.unsafe_rawColors.WHITE_500 }),
    });
}
