n.d(t, { H: () => d });
var r = n(498607),
    i = n.n(r),
    a = n(442837),
    o = n(592125),
    s = n(430824),
    l = n(914010),
    c = n(945577),
    u = n(981631);
function d(e) {
    let { guildId: t, channelId: n } = e,
        r = (0, c.UX)({ location: "useDesktopSearchContext" });
    return (0, a.e7)(
        [s.Z, o.Z, l.Z],
        () => {
            let e = s.Z.getGuild(t),
                i = o.Z.getChannel(n);
            return l.Z.getGuildId() === u.I_8
                ? { type: u.aib.FAVORITES }
                : null != t && null != e
                  ? {
                        type: u.aib.GUILD,
                        guildId: t,
                    }
                  : null != n && null != i && i.isPrivate()
                    ? r
                        ? { type: u.aib.DMS }
                        : {
                              type: u.aib.CHANNEL,
                              channelId: n,
                          }
                    : null;
        },
        [n, t, r],
        i(),
    );
}
