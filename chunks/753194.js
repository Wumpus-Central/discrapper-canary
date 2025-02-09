n.d(t, { Z: () => u }), n(47120);
var l = n(200651);
n(192379);
var i = n(866442),
    r = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(607070),
    d = n(297700),
    c = n(388032);
function u(e) {
    let t,
        { color: n, size: u, forcedIconColor: m, className: x, iconClassName: _, tooltipText: h } = e,
        [v, g] = (0, r.Wu)([o.Z], () => [o.Z.desaturateUserColors, o.Z.saturation]),
        p = (0, s.dQu)(a.Z.unsafe_rawColors.PRIMARY_300).hex(),
        f = (0, i._i)(null != n ? n : p),
        b = (0, i.ho)(f, !1, v ? g : null);
    return (
        (t = null != m ? m : 0.3 > (0, i.Bd)(f) ? a.Z.unsafe_rawColors.PRIMARY_630.css : a.Z.unsafe_rawColors.WHITE_500.css),
        (0, l.jsx)(s.ua7, {
            text: null != h ? h : c.intl.string(c.t.T3PvV1),
            children: (e) =>
                (0, l.jsx)(d.Z, {
                    ...e,
                    className: x,
                    color: b,
                    size: u,
                    children: (0, l.jsx)(s.kmB, {
                        size: 'custom',
                        color: t,
                        height: u,
                        width: u,
                        className: _
                    })
                })
        })
    );
}
