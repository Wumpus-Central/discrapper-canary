i.d(e, { Yb: () => m, gS: () => j, oU: () => p });
var s = i(627968);
i(64700);
var n = i(503698),
    o = i.n(n),
    r = i(947641),
    c = i(834730),
    l = i(559758),
    a = i(661531),
    u = i(492518),
    x = i(375708),
    h = i(916101);
function d(t) {
    let { icon: e, style: i } = t;
    return (0, s.jsx)("div", { className: o()(h.Lw, i), children: e });
}
function j(t) {
    let { isHoveringOrFocusing: e } = t;
    return (0, s.jsx)(d, {
        style: o()(h.AI, e && h.mW),
        icon: (0, s.jsx)(r.r, {
            size: "custom",
            color: a.A.colors.WHITE,
            width: 38,
            height: 38,
            className: o()(h.x6, h.AI),
            "aria-label": x.intl.string(x.t.L5Pt9L),
        }),
    });
}
function m(t) {
    let { count: e } = t;
    return (0, s.jsx)(d, {
        style: h.RF,
        icon: (0, s.jsx)(c.E, {
            variant: "text-sm/medium",
            color: "text-overlay-light",
            children: x.intl.format(x.t.F6iMs4, { count: e }),
        }),
    });
}
function p(t) {
    let { isHoveringOrFocusing: e, loading: i } = t;
    return (0, s.jsx)(d, {
        style: o()(h.U4, { [h.HI]: e || i }),
        icon: i ? (0, s.jsx)(u.k, {}) : (0, s.jsx)(l.y, { size: "lg", color: a.A.unsafe_rawColors.WHITE_500 }),
    });
}
