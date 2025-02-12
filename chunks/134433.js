n.d(t, { Z: () => f }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(866442),
    o = n(442837),
    l = n(692547),
    u = n(481060),
    c = n(607070),
    d = n(956671);
function f(e) {
    let t,
        { color: n, size: r, forcedIconColor: f, className: _, iconClassName: p } = e,
        [h, m] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
        g = (0, u.dQu)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
        E = (0, s._i)(null != n ? n : g),
        v = (0, s.ho)(E, !1, h ? m : null);
    t = null != f ? f : 0.3 > (0, s.Bd)(E) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css;
    let y = r / 8;
    return (0, i.jsx)('div', {
        style: {
            background: v,
            width: r,
            height: r,
            borderRadius: r,
            lineHeight: ''.concat(r, 'px')
        },
        className: _,
        children: (0, i.jsx)(u.xPt, {
            size: 'custom',
            color: t,
            className: a()(d.linkIcon, p),
            width: r - 2 * y,
            height: r - 2 * y,
            style: { margin: y }
        })
    });
}
