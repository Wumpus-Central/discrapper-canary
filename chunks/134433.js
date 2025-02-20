n.d(t, { Z: () => f }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(866442),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(607070),
    d = n(504134);
function f(e) {
    let t,
        { color: n, size: i, forcedIconColor: f, className: p, iconClassName: _ } = e,
        [h, m] = (0, s.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.saturation]),
        g = (0, c.dQu)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
        E = (0, a._i)(null != n ? n : g),
        v = (0, a.ho)(E, !1, h ? m : null);
    t = null != f ? f : 0.3 > (0, a.Bd)(E) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css;
    let b = i / 8;
    return (0, r.jsx)('div', {
        style: {
            background: v,
            width: i,
            height: i,
            borderRadius: i,
            lineHeight: ''.concat(i, 'px')
        },
        className: p,
        children: (0, r.jsx)(c.xPt, {
            size: 'custom',
            color: t,
            className: o()(d.linkIcon, _),
            width: i - 2 * b,
            height: i - 2 * b,
            style: { margin: b }
        })
    });
}
