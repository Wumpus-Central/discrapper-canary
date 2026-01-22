n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(317097),
    a = n(827734),
    s = n(397927),
    o = n(654107),
    l = n(911180),
    c = n(128450),
    u = n(985018);

function d(e) {
    var t;
    let { user: n, savedUserColor: d, pendingColor: f, setPendingAccentColor: p } = e,
        _ = n.getAvatarURL(null, 80),
        h = (0, s.rdh)(a.A.unsafe_rawColors.PRIMARY_530).hex(),
        m = (0, o.rh)(_, h, !1),
        g = (0, i.LX)(m[0]);
    return (0, r.jsx)(c.A, {
        title: u.intl.string(u.t["/X3fkf"]),
        children: (0, r.jsx)(l.A, {
            onChange: (e) => p(e),
            color: null != (t = null != f ? f : d) ? t : g,
            suggestedColors: m,
            showEyeDropper: !0,
        }),
    });
}
