n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(866442),
    s = n(692547),
    l = n(481060),
    a = n(220082),
    o = n(193528),
    c = n(993413),
    d = n(388032);
function u(e) {
    var t;
    let { user: n, savedUserColor: u, pendingColor: m, setPendingAccentColor: g } = e,
        p = n.getAvatarURL(null, 80),
        h = (0, l.dQu)(s.Z.unsafe_rawColors.PRIMARY_530).hex(),
        f = (0, a.Cf)(p, h, !1),
        b = (0, r._i)(f[0]);
    return (0, i.jsx)(c.Z, {
        title: d.intl.string(d.t['/X3fkZ']),
        children: (0, i.jsx)(o.Z, {
            onChange: (e) => g(e),
            color: null != (t = null != m ? m : u) ? t : b,
            suggestedColors: f,
            showEyeDropper: !0
        })
    });
}
