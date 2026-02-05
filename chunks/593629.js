n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(317097),
    r = n(827734),
    a = n(397927),
    l = n(654107),
    o = n(911180),
    c = n(128450),
    d = n(985018);
function u(e) {
    let { user: t, savedUserColor: n, pendingColor: u, setPendingAccentColor: _ } = e,
        m = t.getAvatarURL(null, 80),
        A = (0, a.rdh)(r.A.unsafe_rawColors.PRIMARY_530).hex(),
        g = (0, l.rh)(m, A, !1),
        E = (0, s.LX)(g[0]);
    return (0, i.jsx)(c.A, {
        title: d.intl.string(d.t["/X3fkf"]),
        children: (0, i.jsx)(o.A, {
            onChange: (e) => _(e),
            color: u ?? n ?? E,
            suggestedColors: g,
            showEyeDropper: !0,
        }),
    });
}
