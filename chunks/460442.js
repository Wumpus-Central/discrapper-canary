i.d(e, { Yb: () => m, gS: () => I, oU: () => A });
var s = i(627968);
i(64700);
var r = i(503698),
    n = i.n(r),
    o = i(947641),
    l = i(834730),
    c = i(559758),
    a = i(661531),
    u = i(492518),
    d = i(375708),
    h = i(916101);
function x(t) {
    let { icon: e, style: i } = t;
    return (0, s.jsx)("div", { className: n()(h.Lw, i), children: e });
}
function I(t) {
    let { isHoveringOrFocusing: e } = t;
    return (0, s.jsx)(x, {
        style: n()(h.AI, e && h.mW),
        icon: (0, s.jsx)(o.r, {
            size: "custom",
            color: a.A.colors.WHITE,
            width: 38,
            height: 38,
            className: n()(h.x6, h.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function m(t) {
    let { count: e } = t;
    return (0, s.jsx)(x, {
        style: h.RF,
        icon: (0, s.jsx)(l.E, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: e }),
        }),
    });
}
function A(t) {
    let { isHoveringOrFocusing: e, loading: i } = t;
    return (0, s.jsx)(x, {
        style: n()(h.U4, { [h.HI]: e || i }),
        icon: i ? (0, s.jsx)(u.k, {}) : (0, s.jsx)(c.y, { size: "lg", color: a.A.unsafe_rawColors.WHITE_500 }),
    });
}
