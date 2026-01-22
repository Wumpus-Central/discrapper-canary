n.d(t, { A: () => m }), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(317097),
    o = n(311907),
    l = n(827734),
    c = n(397927),
    u = n(775602),
    d = n(7250),
    f = n(986558);
let p = l.A.unsafe_rawColors.PRIMARY_300,
    _ = l.A.unsafe_rawColors.WHITE,
    h = l.A.unsafe_rawColors.PRIMARY_630;
function m(e) {
    let { color: t, size: n, forcedIconColor: i, className: l, iconClassName: m } = e,
        [g, E] = (0, o.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]),
        b = (0, c.rdh)(p).hex(),
        y = null != t ? t : b,
        O = (0, s.$k)((0, s.LX)(y), !1, g ? E : null),
        A = (0, c.rdh)(_).hex(),
        v = (0, c.rdh)(h).hex(),
        S =
            null != i
                ? i
                : (0, d.j)({
                      backgroundColor: y,
                      colors: [A, v],
                  }),
        I = n / 8;
    return (0, r.jsx)("div", {
        style: {
            background: O,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: "".concat(n, "px"),
        },
        className: l,
        children: (0, r.jsx)(c.qYV, {
            size: "custom",
            color: S,
            className: a()(f.w, m),
            width: n - 2 * I,
            height: n - 2 * I,
            style: { margin: I },
        }),
    });
}
