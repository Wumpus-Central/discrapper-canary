"use strict";
n.d(t, { BF: () => p, Yb: () => A, gS: () => h, oU: () => f });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(158954),
    r = n(827734),
    o = n(492518),
    d = n(985018),
    c = n(865444);
function u(e) {
    let { icon: t, style: n } = e;
    return (0, i.jsx)("div", { className: l()(c.Lw, n), children: t });
}
function h(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(u, {
        style: l()(c.AI, t && c.mW),
        icon: (0, i.jsx)(a.rOg, {
            size: "custom",
            color: r.A.colors.WHITE,
            width: 38,
            height: 38,
            className: l()(c.x6, c.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function p(e) {
    let { count: t } = e;
    return (0, i.jsx)(u, {
        style: c.RF,
        icon: (0, i.jsxs)(a.EYj, { variant: "text-sm/medium", color: "always-white", children: ["+", t + 1] }),
    });
}
function A(e) {
    let { count: t } = e;
    return (0, i.jsx)(u, {
        style: c.RF,
        icon: (0, i.jsx)(a.EYj, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function f(e) {
    let { isHoveringOrFocusing: t, loading: n } = e;
    return (0, i.jsx)(u, {
        style: l()(c.U4, { [c.HI]: t || n }),
        icon: n ? (0, i.jsx)(o.k, {}) : (0, i.jsx)(a.pa$, { size: "lg", color: r.A.unsafe_rawColors.WHITE_500 }),
    });
}
