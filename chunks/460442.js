n.d(t, { Yb: () => m, gS: () => f, oU: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    c = n(947641),
    l = n(834730),
    u = n(559758),
    o = n(661531),
    a = n(492518),
    d = n(375708),
    h = n(916101);
function x(e) {
    let { icon: t, style: n } = e;
    return (0, i.jsx)("div", { className: s()(h.Lw, n), children: t });
}
function f(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(x, {
        style: s()(h.AI, t && h.mW),
        icon: (0, i.jsx)(c.r, {
            size: "custom",
            color: o.A.colors.WHITE,
            width: 38,
            height: 38,
            className: s()(h.x6, h.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function m(e) {
    let { count: t } = e;
    return (0, i.jsx)(x, {
        style: h.RF,
        icon: (0, i.jsx)(l.E, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function _(e) {
    let { isHoveringOrFocusing: t, loading: n } = e;
    return (0, i.jsx)(x, {
        style: s()(h.U4, { [h.HI]: t || n }),
        icon: n ? (0, i.jsx)(a.k, {}) : (0, i.jsx)(u.y, { size: "lg", color: o.A.unsafe_rawColors.WHITE_500 }),
    });
}
