"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(317097),
    a = n(311907),
    o = n(827734),
    c = n(602853),
    d = n(173936),
    u = n(775602),
    _ = n(7250),
    h = n(394549);
let m = o.A.unsafe_rawColors.PRIMARY_300,
    g = o.A.unsafe_rawColors.WHITE,
    p = o.A.unsafe_rawColors.PRIMARY_630;
function A(e) {
    let { color: t, size: n, forcedIconColor: s, className: o, iconClassName: A } = e,
        [f, E] = (0, a.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]),
        x = (0, c.r)(m).hex(),
        I = t ?? x,
        v = (0, l.$k)((0, l.LX)(I), !1, f ? E : null),
        N = (0, c.r)(g).hex(),
        j = (0, c.r)(p).hex(),
        C = null != s ? s : (0, _.j)({ backgroundColor: I, colors: [N, j] }),
        T = n / 8;
    return (0, i.jsx)("div", {
        style: { background: v, width: n, height: n, borderRadius: n, lineHeight: `${n}px` },
        className: o,
        children: (0, i.jsx)(d.q, {
            size: "custom",
            color: C,
            className: r()(h.w, A),
            width: n - 2 * T,
            height: n - 2 * T,
            style: { margin: T },
        }),
    });
}
