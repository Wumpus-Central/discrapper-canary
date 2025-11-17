n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(866442),
    a = n(692547),
    o = n(481060),
    s = n(220082),
    l = n(193528),
    c = n(993413),
    u = n(388032);
function d(e) {
    var t;
    let { user: n, savedUserColor: d, pendingColor: f, setPendingAccentColor: _ } = e,
        p = n.getAvatarURL(null, 80),
        h = (0, o.dQu)(a.Z.unsafe_rawColors.PRIMARY_530).hex(),
        m = (0, s.Cf)(p, h, !1),
        g = (0, i._i)(m[0]);
    return (0, r.jsx)(c.Z, {
        title: u.intl.string(u.t["/X3fkf"]),
        children: (0, r.jsx)(l.Z, {
            onChange: (e) => _(e),
            color: null != (t = null != f ? f : d) ? t : g,
            suggestedColors: m,
            showEyeDropper: !0,
        }),
    });
}
