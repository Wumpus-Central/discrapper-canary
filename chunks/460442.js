i.d(t, { Yb: () => h, gS: () => I, oU: () => g });
var r = i(627968);
i(64700);
var l = i(503698),
    n = i.n(l),
    s = i(158954),
    a = i(827734),
    u = i(492518),
    o = i(985018),
    d = i(865444);
function c(e) {
    let { icon: t, style: i } = e;
    return (0, r.jsx)("div", { className: n()(d.Lw, i), children: t });
}
function I(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, r.jsx)(c, {
        style: n()(d.AI, t && d.mW),
        icon: (0, r.jsx)(s.rOg, {
            size: "custom",
            color: a.A.colors.WHITE,
            width: 38,
            height: 38,
            className: n()(d.x6, d.AI),
            "aria-label": o.intl.string(o.t.L5Pt9L),
        }),
    });
}
function h(e) {
    let { count: t } = e;
    return (0, r.jsx)(c, {
        style: d.RF,
        icon: (0, r.jsx)(s.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: o.intl.format(o.t.F6iMs4, { count: t }),
        }),
    });
}
function g(e) {
    let { isHoveringOrFocusing: t, loading: i } = e;
    return (0, r.jsx)(c, {
        style: n()(d.U4, { [d.HI]: t || i }),
        icon: i ? (0, r.jsx)(u.k, {}) : (0, r.jsx)(s.pa$, { size: "lg", color: a.A.unsafe_rawColors.WHITE_500 }),
    });
}
