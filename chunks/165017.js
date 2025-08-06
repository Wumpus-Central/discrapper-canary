n.d(t, { H: () => f }), n(415506);
var r = n(442837),
    i = n(592125),
    o = n(430824),
    a = n(914010),
    s = n(251625),
    l = n(945577),
    c = n(981631);
function u(e, t, n, r, i, o) {
    return i
        ? { type: c.aib.FAVORITES }
        : null != e && null != n
          ? {
                type: c.aib.GUILD,
                guildId: e,
            }
          : null == t || null == r
            ? null
            : r.isPrivate() && o
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
    return (0, r.e7)([o.Z, i.Z, a.Z], () => {
        let e = o.Z.getGuild(t),
            r = i.Z.getChannel(n);
        return d(t, n, e, r, a.Z.getGuildId() === c.I_8, s);
    });
}
