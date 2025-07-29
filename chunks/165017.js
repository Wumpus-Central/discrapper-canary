(n.d(t, { H: () => d }), n(415506));
var r = n(442837),
    i = n(592125),
    l = n(430824),
    a = n(914010),
    o = n(251625),
    c = n(945577),
    s = n(981631);
let u = (0, o.oH)(function (e, t, n, r, i, l) {
    return i
        ? { type: s.aib.FAVORITES }
        : null != e && null != n
          ? {
                type: s.aib.GUILD,
                guildId: e
            }
          : null == t || null == r
            ? null
            : r.isPrivate() && l
              ? { type: s.aib.DMS }
              : {
                    type: s.aib.CHANNEL,
                    channelId: t
                };
});
function d(e) {
    let { guildId: t, channelId: n } = e,
        o = (0, c.U)({ location: 'useDesktopSearchContext' });
    return (0, r.e7)([l.Z, i.Z, a.Z], () => {
        let e = l.Z.getGuild(t),
            r = i.Z.getChannel(n);
        return u(t, n, e, r, a.Z.getGuildId() === s.I_8, o);
    });
}
