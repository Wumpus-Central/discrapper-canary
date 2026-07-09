n.d(t, { Yb: () => m, gS: () => f, oU: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    c = n(947641),
    l = n(834730),
    o = n(559758),
    u = n(661531),
    a = n(492518),
    d = n(375708),
    h = n(489925);
function x(e) {
    let { icon: t, style: n } = e;
    return (0, r.jsx)("div", { className: s()(h.Lw, n), children: t });
}
function f(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, r.jsx)(x, {
        style: s()(h.AI, t && h.mW),
        icon: (0, r.jsx)(c.r, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: s()(h.x6, h.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function m(e) {
    let { count: t } = e;
    return (0, r.jsx)(x, {
        style: h.RF,
        icon: (0, r.jsx)(l.E, {
            variant: "text-sm/medium",
            color: "text-overlay-light",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function _(e) {
    let { isHoveringOrFocusing: t, loading: n } = e;
    return (0, r.jsx)(x, {
        style: s()(h.U4, { [h.HI]: t || n }),
        icon: n ? (0, r.jsx)(a.k, {}) : (0, r.jsx)(o.y, { size: "lg", color: u.A.unsafe_rawColors.WHITE_500 }),
    });
}
