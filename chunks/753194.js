n.d(t, { Z: () => f }), n(388685);
var r = n(54381);
n(473749);
var i = n(866442),
    a = n(442837),
    o = n(692547),
    s = n(28664),
    l = n(481060),
    c = n(607070),
    u = n(297700),
    d = n(388032);
function f(e) {
    let t,
        { color: n, size: f, forcedIconColor: p, className: _, iconClassName: m, tooltipText: h } = e,
        [g, E] = (0, a.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
        b = (0, l.dQu)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
        y = (0, i._i)(null != n ? n : b),
        O = (0, i.ho)(y, !1, g ? E : null);
    return (
        (t =
            null != p
                ? p
                : 0.3 > (0, i.Bd)(y)
                  ? o.Z.unsafe_rawColors.PRIMARY_630.css
                  : o.Z.unsafe_rawColors.WHITE_500.css),
        (0, r.jsx)(s.u, {
            text: null != h ? h : d.intl.string(d.t.T3PvV4),
            children: (0, r.jsx)(u.Z, {
                className: _,
                color: O,
                size: f,
                children: (0, r.jsx)(l.kmB, {
                    size: "custom",
                    color: t,
                    height: f,
                    width: f,
                    className: m,
                }),
            }),
        })
    );
}
