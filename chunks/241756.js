n.d(t, {
    A: () => a,
});
var r = n(834757),
    l = n(562153),
    i = n(985018);

function a(e, t, n) {
    let a = (0, r.AO)(n),
        s = l.Ay.getName(e.getGuildId(), e.id, t);
    return null == n
        ? s
        : (null == a ? void 0 : a.name) != null
          ? i.intl.formatToPlainString(i.t["9jpVOZ"], {
                applicationName: null == a ? void 0 : a.name,
                username: s,
            })
          : i.intl.formatToPlainString(i.t["+h0Z59"], {
                username: s,
            });
}
