n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var s = n(866442),
    r = n(692547),
    l = n(481060),
    a = n(220082),
    o = n(193528),
    c = n(993413),
    d = n(388032);
function u(e) {
    var t;
    let { user: n, savedUserColor: u, pendingColor: m, setPendingAccentColor: g } = e,
        h = n.getAvatarURL(null, 80),
        x = (0, l.dQu)(r.Z.unsafe_rawColors.PRIMARY_530).hex(),
        _ = (0, a.Cf)(h, x, !1),
        p = (0, s._i)(_[0]);
    return (0, i.jsx)(c.Z, {
        title: d.intl.string(d.t['/X3fkZ']),
        children: (0, i.jsx)(o.Z, {
            onChange: (e) => g(e),
            color: null !== (t = null != m ? m : u) && void 0 !== t ? t : p,
            suggestedColors: _,
            showEyeDropper: !0
        })
    });
}
