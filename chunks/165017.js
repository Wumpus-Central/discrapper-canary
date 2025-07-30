(n.d(t, { H: () => d }), n(415506));
var r = n(442837),
    i = n(592125),
    l = n(430824),
    a = n(914010),
    o = n(251625),
    s = n(945577),
    c = n(981631);
let u = (0, o.oH)(function (e, t, n, r, i, l) {
    return i
        ? { type: c.aib.FAVORITES }
        : null != e && null != n
          ? {
                type: c.aib.GUILD,
                guildId: e
            }
          : null == t || null == r
            ? null
            : r.isPrivate() && l
              ? { type: c.aib.DMS }
              : {
                    type: c.aib.CHANNEL,
                    channelId: t
                };
});
function d(e) {
    let { guildId: t, channelId: n } = e,
        o = (0, s.U)({ location: 'useDesktopSearchContext' });
    return (0, r.e7)([l.Z, i.Z, a.Z], () => {
        let e = l.Z.getGuild(t),
            r = i.Z.getChannel(n);
        return u(t, n, e, r, a.Z.getGuildId() === c.I_8, o);
    });
}
