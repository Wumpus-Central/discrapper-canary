n.d(t, { Z: () => m }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(866442),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(607070),
    d = n(393951),
    f = n(181071);
let _ = l.Z.unsafe_rawColors.PRIMARY_300,
    p = l.Z.unsafe_rawColors.WHITE_500,
    h = l.Z.unsafe_rawColors.PRIMARY_630;
function m(e) {
    let { color: t, size: n, forcedIconColor: i, className: l, iconClassName: m } = e,
        [g, E] = (0, s.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.saturation]),
        b = (0, c.dQu)(_).hex(),
        y = null != t ? t : b,
        v = (0, a.ho)((0, a._i)(y), !1, g ? E : null),
        O = (0, c.dQu)(p).hex(),
        I = (0, c.dQu)(h).hex(),
        S =
            null != i
                ? i
                : (0, d.B)({
                      backgroundColor: y,
                      colors: [O, I]
                  }),
        T = n / 8;
    return (0, r.jsx)('div', {
        style: {
            background: v,
            width: n,
            height: n,
            borderRadius: n,
            lineHeight: ''.concat(n, 'px')
        },
        className: l,
        children: (0, r.jsx)(c.xPt, {
            size: 'custom',
            color: S,
            className: o()(f.linkIcon, m),
            width: n - 2 * T,
            height: n - 2 * T,
            style: { margin: T }
        })
    });
}
