r.d(t, { J: () => d });
var s = r(33851),
    n = r.n(s),
    l = r(311907),
    a = r(253932),
    i = r(734057),
    o = r(71393),
    u = r(967198),
    c = r(652215);
function d(e) {
    let { guildId: t, channelId: r } = e,
        s = a.Hu.useSetting();
    return (0, l.bG)(
        [o.A, i.A, u.A],
        () => {
            let e = o.A.getGuild(t),
                n = i.A.getChannel(r);
            return u.A.getGuildId() === c.YYv
                ? { type: c.I4_.FAVORITES }
                : null != t && null != e
                  ? { type: c.I4_.GUILD, guildId: t }
                  : null != r && null != n && n.isPrivate()
                    ? s
                        ? { type: c.I4_.DMS }
                        : { type: c.I4_.CHANNEL, channelId: r }
                    : null;
        },
        [r, t, s],
        n(),
    );
}
