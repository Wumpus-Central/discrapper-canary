n.d(t, { Z: () => d }), n(47120);
var i = n(200651);
n(192379);
var r = n(866442),
    a = n(442837),
    s = n(692547),
    o = n(481060),
    l = n(607070),
    u = n(297700),
    c = n(388032);
function d(e) {
    let t,
        { color: n, size: d, forcedIconColor: f, className: _, iconClassName: p, tooltipText: h } = e,
        [m, g] = (0, a.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
        E = (0, o.dQu)(s.Z.unsafe_rawColors.PRIMARY_300).hex(),
        v = (0, r._i)(null != n ? n : E),
        y = (0, r.ho)(v, !1, m ? g : null);
    return (
        (t = null != f ? f : 0.3 > (0, r.Bd)(v) ? s.Z.unsafe_rawColors.PRIMARY_630.css : s.Z.unsafe_rawColors.WHITE_500.css),
        (0, i.jsx)(o.ua7, {
            text: null != h ? h : c.intl.string(c.t.T3PvV1),
            children: (e) =>
                (0, i.jsx)(u.Z, {
                    ...e,
                    className: _,
                    color: y,
                    size: d,
                    children: (0, i.jsx)(o.kmB, {
                        size: 'custom',
                        color: t,
                        height: d,
                        width: d,
                        className: p
                    })
                })
        })
    );
}
