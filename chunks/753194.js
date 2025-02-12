n.d(t, { Z: () => d }), n(47120);
var i = n(200651);
n(192379);
var a = n(866442),
    o = n(442837),
    r = n(692547),
    l = n(481060),
    c = n(607070),
    s = n(297700),
    _ = n(388032);
function d(e) {
    let t,
        { color: n, size: d, forcedIconColor: u, className: f, iconClassName: p, tooltipText: g } = e,
        [b, h] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
        m = (0, l.dQu)(r.Z.unsafe_rawColors.PRIMARY_300).hex(),
        C = (0, a._i)(null != n ? n : m),
        E = (0, a.ho)(C, !1, b ? h : null);
    return (
        (t = null != u ? u : 0.3 > (0, a.Bd)(C) ? r.Z.unsafe_rawColors.PRIMARY_630.css : r.Z.unsafe_rawColors.WHITE_500.css),
        (0, i.jsx)(l.ua7, {
            text: null != g ? g : _.intl.string(_.t.T3PvV1),
            children: (e) =>
                (0, i.jsx)(s.Z, {
                    ...e,
                    className: f,
                    color: E,
                    size: d,
                    children: (0, i.jsx)(l.kmB, {
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
