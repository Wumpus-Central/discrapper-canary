var l = u(811315),
    n = u.n(l),
    i = u(855986),
    r = u(5180),
    s = u(253932),
    d = u(734057),
    g = u(71393),
    a = u(967198),
    A = u(652215);
u.d(
    t,
    {},
    {
        J: function (e) {
            let { guildId: t, channelId: u } = e,
                l = s.Hu.useSetting();
            return (0, i.bG)(
                [g.A, d.A, a.A],
                () => {
                    let e = g.A.getGuild(t),
                        n = d.A.getChannel(u),
                        i = a.A.getGuildId();
                    if ((0, r.ai)(i)) {
                        if (null != n) {
                            if (n.isPrivate()) return { type: A.I4_.CHANNEL, channelId: u };
                            let e = n.getGuildId();
                            if (null != e) return { type: A.I4_.GUILD_CHANNEL, guildId: e, channelId: u };
                        }
                        return null;
                    }
                    return null != t && null != e
                        ? { type: A.I4_.GUILD, guildId: t }
                        : null != u && null != n && n.isPrivate()
                          ? l
                              ? { type: A.I4_.DMS }
                              : { type: A.I4_.CHANNEL, channelId: u }
                          : null;
                },
                [u, t, l],
                n(),
            );
        },
    },
);
