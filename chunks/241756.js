n.d(t, { A: () => a });
var i = n(834757),
    l = n(562153),
    s = n(985018);
function a(e, t, n) {
    let a = (0, i.AO)(n),
        r = l.Ay.getName(e.getGuildId(), e.id, t);
    return null == n
        ? r
        : a?.name != null
          ? s.intl.formatToPlainString(s.t["9jpVOZ"], { applicationName: a?.name, username: r })
          : s.intl.formatToPlainString(s.t["+h0Z59"], { username: r });
}
