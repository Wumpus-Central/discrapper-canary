e.d(s, { A: () => f });
var t = e(477900);
e(582128);
var o = e(503698),
    a = e.n(o),
    n = e(317097),
    i = e(17928),
    l = e(661531),
    u = e(602853),
    c = e(173936),
    h = e(775602),
    d = e(7250),
    p = e(253421);
let g = l.A.unsafe_rawColors.PRIMARY_300,
    y = l.A.unsafe_rawColors.WHITE,
    A = l.A.unsafe_rawColors.PRIMARY_630;
function f(r) {
    let { color: s, size: e, forcedIconColor: o, className: l, iconClassName: f } = r,
        [k, w] = (0, i.yK)([h.Ay], () => [h.Ay.desaturateUserColors, h.Ay.saturation]),
        b = (0, u.r)(g).hex(),
        C = s ?? b,
        _ = (0, n.$k)((0, n.LX)(C), !1, k ? w : null),
        x = (0, u.r)(y).hex(),
        L = (0, u.r)(A).hex(),
        R = null != o ? o : (0, d.j)({ backgroundColor: C, colors: [x, L] }),
        j = e / 8;
    return (0, t.jsx)("div", {
        style: { background: _, width: e, height: e, borderRadius: e, lineHeight: `${e}px` },
        className: l,
        children: (0, t.jsx)(c.LinkIcon, {
            size: "custom",
            color: R,
            className: a()(p.w, f),
            width: e - 2 * j,
            height: e - 2 * j,
            style: { margin: j },
        }),
    });
}
