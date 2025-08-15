n.d(t, { H: () => d });
var r = n(442837),
    s = n(592125),
    l = n(430824),
    a = n(914010),
    i = n(251625),
    o = n(945577),
    c = n(981631);
let u = (0, i.oH)(function (e, t, n, r, s, l) {
    return s
        ? { type: c.aib.FAVORITES }
        : null != e && null != n
          ? {
                type: c.aib.GUILD,
                guildId: e,
            }
          : null == t || null == r
            ? null
            : r.isPrivate() && l
              ? { type: c.aib.DMS }
              : {
                    type: c.aib.CHANNEL,
                    channelId: t,
                };
});
function d(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, o.UX)({ location: "useDesktopSearchContext" });
    return (0, r.e7)([l.Z, s.Z, a.Z], () => {
        let e = l.Z.getGuild(t),
            r = s.Z.getChannel(n);
        return u(t, n, e, r, a.Z.getGuildId() === c.I_8, i);
    });
}
