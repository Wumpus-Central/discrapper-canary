n.d(t, { A: () => s });
var i = n(834757),
    l = n(562153),
    a = n(375708);
function s(e, t, n) {
    let s = (0, i.AO)(n),
        r = l.Ay.getName(e.getGuildId(), e.id, t);
    return null == n
        ? r
        : s?.name != null
          ? a.intl.formatToPlainString(a.t["9jpVOZ"], { applicationName: s?.name, username: r })
          : a.intl.formatToPlainString(a.t["+h0Z59"], { username: r });
}
