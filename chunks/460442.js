"use strict";
n.d(t, { Yb: () => p, gS: () => h, oU: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(947641),
    o = n(834730),
    l = n(559758),
    u = n(661531),
    c = n(492518),
    d = n(375708),
    _ = n(916101);
function f(e) {
    let { icon: t, style: n } = e;
    return (0, i.jsx)("div", { className: s()(_.Lw, n), children: t });
}
function h(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(f, {
        style: s()(_.AI, t && _.mW),
        icon: (0, i.jsx)(a.r, {
            size: "custom",
            color: u.A.colors.WHITE,
            width: 38,
            height: 38,
            className: s()(_.x6, _.AI),
            "aria-label": d.intl.string(d.t.L5Pt9L),
        }),
    });
}
function p(e) {
    let { count: t } = e;
    return (0, i.jsx)(f, {
        style: _.RF,
        icon: (0, i.jsx)(o.E, {
            variant: "text-sm/medium",
            color: "always-white",
            children: d.intl.format(d.t.F6iMs4, { count: t }),
        }),
    });
}
function E(e) {
    let { isHoveringOrFocusing: t, loading: n } = e;
    return (0, i.jsx)(f, {
        style: s()(_.U4, { [_.HI]: t || n }),
        icon: n ? (0, i.jsx)(c.k, {}) : (0, i.jsx)(l.y, { size: "lg", color: u.A.unsafe_rawColors.WHITE_500 }),
    });
}
