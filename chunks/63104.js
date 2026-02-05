"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(317097),
    o = n(311907),
    l = n(827734),
    u = n(397927),
    c = n(775602),
    d = n(7250),
    _ = n(986558);
let f = l.A.unsafe_rawColors.PRIMARY_300,
    p = l.A.unsafe_rawColors.WHITE,
    h = l.A.unsafe_rawColors.PRIMARY_630;
function m(e) {
    let { color: t, size: n, forcedIconColor: i, className: l, iconClassName: m } = e,
        [g, E] = (0, o.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        A = (0, u.rdh)(f).hex(),
        I = t ?? A,
        T = (0, s.$k)((0, s.LX)(I), !1, g ? E : null),
        y = (0, u.rdh)(p).hex(),
        S = (0, u.rdh)(h).hex(),
        v = null != i ? i : (0, d.j)({ backgroundColor: I, colors: [y, S] }),
        C = n / 8;
    return (0, r.jsx)("div", {
        style: { background: T, width: n, height: n, borderRadius: n, lineHeight: `${n}px` },
        className: l,
        children: (0, r.jsx)(u.qYV, {
            size: "custom",
            color: v,
            className: a()(_.w, m),
            width: n - 2 * C,
            height: n - 2 * C,
            style: { margin: C },
        }),
    });
}
