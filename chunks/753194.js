r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(866442),
    s = r(442837),
    l = r(692547),
    u = r(481060),
    c = r(607070),
    d = r(297700),
    f = r(388032);
function p(e) {
    let n,
        { color: r, size: i, forcedIconColor: p, className: h, iconClassName: _, tooltipText: m } = e,
        [g, E] = (0, s.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.saturation]),
        v = (0, u.useToken)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
        y = (0, o._i)(null != r ? r : v),
        b = (0, o.ho)(y, !1, g ? E : null);
    return (
        (n = null != p ? p : 0.3 > (0, o.Bd)(y) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css),
        (0, a.jsx)(u.Tooltip, {
            text: null != m ? m : f.intl.string(f.t.T3PvV1),
            children: (e) =>
                (0, a.jsx)(d.Z, {
                    ...e,
                    className: h,
                    color: b,
                    size: i,
                    children: (0, a.jsx)(u.CheckmarkSmallIcon, {
                        size: 'custom',
                        color: n,
                        height: i,
                        width: i,
                        className: _
                    })
                })
        })
    );
}
