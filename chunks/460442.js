n.d(t, { Yb: () => I, gS: () => m, oU: () => h });
var s = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    l = n(158954),
    o = n(827734),
    u = n(492518),
    d = n(985018),
    a = n(85474);
function c(e) {
    let { icon: t, style: n } = e;
    return (0, s.jsx)("div", { className: i()(a.Lw, n), children: t });
}
function m(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, s.jsx)(c, {
        style: i()(a.AI, t && a.mW),
        icon: (0, s.jsx)(l.rOg, {
            size: "custom",
            color: o.A.colors.WHITE,
            width: 38,
            height: 38,
            className: i()(a.x6, a.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function I(e) {
    let { count: t } = e;
    return (0, s.jsx)(c, {
        style: a.RF,
        icon: (0, s.jsx)(l.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function h(e) {
    let { isHoveringOrFocusing: t, loading: n } = e;
    return (0, s.jsx)(c, {
        style: i()(a.U4, { [a.HI]: t || n }),
        icon: n ? (0, s.jsx)(u.k, {}) : (0, s.jsx)(l.yhu, { size: "lg", color: o.A.unsafe_rawColors.WHITE_500 }),
    });
}
