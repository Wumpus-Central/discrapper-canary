e.d(s, { A: () => f });
var t = e(627968);
e(64700);
var o = e(503698),
    a = e.n(o),
    n = e(317097),
    i = e(17928),
    l = e(661531),
    u = e(602853),
    h = e(173936),
    c = e(775602),
    d = e(7250),
    p = e(674613);
let g = l.A.unsafe_rawColors.PRIMARY_300,
    y = l.A.unsafe_rawColors.WHITE,
    A = l.A.unsafe_rawColors.PRIMARY_630;
function f(r) {
    let { color: s, size: e, forcedIconColor: o, className: l, iconClassName: f } = r,
        [w, b] = (0, i.yK)([c.Ay], () => [c.Ay.desaturateUserColors, c.Ay.saturation]),
        k = (0, u.r)(g).hex(),
        C = s ?? k,
        _ = (0, n.$k)((0, n.LX)(C), !1, w ? b : null),
        x = (0, u.r)(y).hex(),
        R = (0, u.r)(A).hex(),
        j = null != o ? o : (0, d.j)({ backgroundColor: C, colors: [x, R] }),
        m = e / 8;
    return (0, t.jsx)("div", {
        style: { background: _, width: e, height: e, borderRadius: e, lineHeight: `${e}px` },
        className: l,
        children: (0, t.jsx)(h.q, {
            size: "custom",
            color: j,
            className: a()(p.w, f),
            width: e - 2 * m,
            height: e - 2 * m,
            style: { margin: m },
        }),
    });
}
argin: v;
}})})}
