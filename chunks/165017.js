n.d(t, { H: () => d });
var r = n(498607),
    i = n.n(r),
    a = n(442837),
    o = n(695346),
    s = n(592125),
    l = n(430824),
    c = n(914010),
    u = n(981631);
function d(e) {
    let { guildId: t, channelId: n } = e,
        r = o.rR.useSetting();
    return (0, a.e7)(
        [l.Z, s.Z, c.Z],
        () => {
            let e = l.Z.getGuild(t),
                i = s.Z.getChannel(n);
            return c.Z.getGuildId() === u.I_8
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
