r.d(t, { J: () => d });
var l = r(33851),
    n = r.n(l),
    s = r(17928),
    a = r(5180),
    i = r(253932),
    u = r(734057),
    o = r(71393),
    c = r(967198),
    h = r(652215);
function d(e) {
    let { guildId: t, channelId: r } = e,
        l = i.Hu.useSetting();
    return (0, s.bG)(
        [o.A, u.A, c.A],
        () => {
            let e = o.A.getGuild(t),
                n = u.A.getChannel(r),
                s = c.A.getGuildId();
            if ((0, a.ai)(s)) {
                if (null != n) {
                    if (n.isPrivate()) return { type: h.I4_.CHANNEL, channelId: r };
                    let e = n.getGuildId();
                    if (null != e) return { type: h.I4_.GUILD_CHANNEL, guildId: e, channelId: r };
                }
                return null;
            }
            return null != t && null != e
                ? { type: h.I4_.GUILD, guildId: t }
                : null != r && null != n && n.isPrivate()
                  ? l
                      ? { type: h.I4_.DMS }
                      : { type: h.I4_.CHANNEL, channelId: r }
                  : null;
        },
        [r, t, l],
        n(),
    );
}
