e.d(s, { A: () => w });
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
    p = e(394549);
let g = l.A.unsafe_rawColors.PRIMARY_300,
    A = l.A.unsafe_rawColors.WHITE,
    f = l.A.unsafe_rawColors.PRIMARY_630;
function w(r) {
    let { color: s, size: e, forcedIconColor: o, className: l, iconClassName: w } = r,
        [b, k] = (0, i.yK)([c.A], () => [c.A.desaturateUserColors, c.A.saturation]),
        C = (0, u.r)(g).hex(),
        _ = s ?? C,
        x = (0, n.$k)((0, n.LX)(_), !1, b ? k : null),
        y = (0, u.r)(A).hex(),
        R = (0, u.r)(f).hex(),
        j = null != o ? o : (0, d.j)({ backgroundColor: _, colors: [y, R] }),
        m = e / 8;
    return (0, t.jsx)("div", {
        style: { background: x, width: e, height: e, borderRadius: e, lineHeight: `${e}px` },
        className: l,
        children: (0, t.jsx)(h.q, {
            size: "custom",
            color: j,
            className: a()(p.w, w),
            width: e - 2 * m,
            height: e - 2 * m,
            style: { margin: m },
        }),
    });
}
