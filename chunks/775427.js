n.d(t, { J: () => d });
var r = n(33851),
    i = n.n(r),
    a = n(311907),
    s = n(253932),
    o = n(734057),
    l = n(71393),
    c = n(967198),
    u = n(652215);
function d(e) {
    let { guildId: t, channelId: n } = e,
        r = s.Hu.useSetting();
    return (0, a.bG)(
        [l.A, o.A, c.A],
        () => {
            let e = l.A.getGuild(t),
                i = o.A.getChannel(n);
            return c.A.getGuildId() === u.YYv
                ? { type: u.I4_.FAVORITES }
                : null != t && null != e
                  ? {
                        type: u.I4_.GUILD,
                        guildId: t,
                    }
                  : null != n && null != i && i.isPrivate()
                    ? r
                        ? { type: u.I4_.DMS }
                        : {
                              type: u.I4_.CHANNEL,
                              channelId: n,
                          }
                    : null;
        },
        [n, t, r],
        i(),
    );
}
