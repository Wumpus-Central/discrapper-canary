n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(317097),
    l = n(827734),
    a = n(602853),
    r = n(654107),
    o = n(911180),
    d = n(128450),
    u = n(985018);
function c(e) {
    let { user: t, savedUserColor: n, pendingColor: c, setPendingAccentColor: g } = e,
        m = t.getAvatarURL(null, 80),
        _ = (0, a.r)(l.A.unsafe_rawColors.PRIMARY_530).hex(),
        A = (0, r.rh)(m, _, !1),
        h = (0, s.LX)(A[0]);
    return (0, i.jsx)(d.A, {
        title: u.intl.string(u.t["/X3fkf"]),
        children: (0, i.jsx)(o.A, {
            onChange: (e) => g(e),
            color: c ?? n ?? h,
            suggestedColors: A,
            showEyeDropper: !0,
        }),
    });
}
