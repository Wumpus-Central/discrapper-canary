"use strict";
n.d(t, { Yb: () => h, gS: () => A, oU: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(947641),
    l = n(834730),
    o = n(559758),
    d = n(661531),
    c = n(492518),
    u = n(375708),
    _ = n(916101);
function E(e) {
    let { icon: t, style: n } = e;
    return (0, i.jsx)("div", { className: a()(_.Lw, n), children: t });
}
function A(e) {
    let { isHoveringOrFocusing: t } = e;
    return (0, i.jsx)(E, {
        style: a()(_.AI, t && _.mW),
        icon: (0, i.jsx)(s.r, {
            size: "custom",
            color: d.A.colors.WHITE,
            width: 38,
            height: 38,
            className: a()(_.x6, _.AI),
            "aria-label": u.intl.string(u.t.L5Pt9L),
        }),
    });
}
function h(e) {
    let { count: t } = e;
    return (0, i.jsx)(E, {
        style: _.RF,
        icon: (0, i.jsx)(l.E, {
            variant: "text-sm/medium",
            color: "text-overlay-light",
            children: u.intl.format(u.t.F6iMs4, { count: t }),
        }),
    });
}
function I(e) {
    let { isHoveringOrFocusing: t, loading: n } = e;
    return (0, i.jsx)(E, {
        style: a()(_.U4, { [_.HI]: t || n }),
        icon: n ? (0, i.jsx)(c.k, {}) : (0, i.jsx)(o.y, { size: "lg", color: d.A.unsafe_rawColors.WHITE_500 }),
    });
}
