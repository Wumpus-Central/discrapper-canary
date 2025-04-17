n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(866442),
    s = n(692547),
    a = n(481060),
    l = n(220082),
    o = n(193528),
    c = n(993413),
    d = n(388032);
function u(e) {
    var t;
    let { user: n, savedUserColor: u, pendingColor: m, setPendingAccentColor: g } = e,
        p = n.getAvatarURL(null, 80),
        h = (0, a.dQu)(s.Z.unsafe_rawColors.PRIMARY_530).hex(),
        f = (0, l.Cf)(p, h, !1),
        b = (0, i._i)(f[0]);
    return (0, r.jsx)(c.Z, {
        title: d.NW.string(d.t['/X3fkZ']),
        children: (0, r.jsx)(o.Z, {
            onChange: (e) => g(e),
            color: null != (t = null != m ? m : u) ? t : b,
            suggestedColors: f,
            showEyeDropper: !0
        })
    });
}
