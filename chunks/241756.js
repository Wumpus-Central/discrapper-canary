n.d(t, { A: () => s });
var i = n(834757),
    a = n(562153),
    l = n(985018);
function s(e, t, n) {
    let s = (0, i.AO)(n),
        r = a.Ay.getName(e.getGuildId(), e.id, t);
    return null == n
        ? r
        : s?.name != null
          ? l.intl.formatToPlainString(l.t["9jpVOZ"], { applicationName: s?.name, username: r })
          : l.intl.formatToPlainString(l.t["+h0Z59"], { username: r });
}
