n.d(t, { H: () => f });
var r = n(442837),
    i = n(592125),
    a = n(430824),
    o = n(914010),
    s = n(251625),
    l = n(945577),
    c = n(981631);
function u(e, t, n, r, i, a) {
    return i
        ? { type: c.aib.FAVORITES }
        : null != e && null != n
          ? {
                type: c.aib.GUILD,
                guildId: e,
            }
          : null == t || null == r
            ? null
            : r.isPrivate() && a
              ? { type: c.aib.DMS }
              : {
                    type: c.aib.CHANNEL,
                    channelId: t,
                };
}
let d = (0, s.oH)(u);
function f(e) {
    let { guildId: t, channelId: n } = e,
        s = (0, l.UX)({ location: "useDesktopSearchContext" });
    return (0, r.e7)([a.Z, i.Z, o.Z], () => {
        let e = a.Z.getGuild(t),
            r = i.Z.getChannel(n);
        return d(t, n, e, r, o.Z.getGuildId() === c.I_8, s);
    });
}
