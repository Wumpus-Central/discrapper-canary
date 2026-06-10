"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(317097),
    o = n(17928),
    l = n(661531),
    u = n(602853),
    c = n(173936),
    d = n(775602),
    _ = n(7250),
    h = n(394549);
let f = l.A.unsafe_rawColors.PRIMARY_300,
    p = l.A.unsafe_rawColors.WHITE,
    E = l.A.unsafe_rawColors.PRIMARY_630;
function m(e) {
    let { color: t, size: n, forcedIconColor: r, className: l, iconClassName: m } = e,
        [g, A] = (0, o.yK)([d.A], () => [d.A.desaturateUserColors, d.A.saturation]),
        I = (0, u.r)(f).hex(),
        T = t ?? I,
        S = (0, a.$k)((0, a.LX)(T), !1, g ? A : null),
        y = (0, u.r)(p).hex(),
        N = (0, u.r)(E).hex(),
        v = null != r ? r : (0, _.j)({ backgroundColor: T, colors: [y, N] }),
        C = n / 8;
    return (0, i.jsx)("div", {
        style: { background: S, width: n, height: n, borderRadius: n, lineHeight: `${n}px` },
        className: l,
        children: (0, i.jsx)(c.q, {
            size: "custom",
            color: v,
            className: s()(h.w, m),
            width: n - 2 * C,
            height: n - 2 * C,
            style: { margin: C },
        }),
    });
}
