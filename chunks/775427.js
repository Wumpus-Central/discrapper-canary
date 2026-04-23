r.d(t, { J: () => d });
var n = r(33851),
    s = r.n(n),
    l = r(311907),
    a = r(5180),
    i = r(253932),
    o = r(734057),
    u = r(71393),
    c = r(967198),
    h = r(652215);
function d(e) {
    let { guildId: t, channelId: r } = e,
        n = i.Hu.useSetting();
    return (0, l.bG)(
        [u.A, o.A, c.A],
        () => {
            let e = u.A.getGuild(t),
                s = o.A.getChannel(r),
                l = c.A.getGuildId();
            if ((0, a.ai)(l)) {
                if (null != s) {
                    if (s.isPrivate()) return { type: h.I4_.CHANNEL, channelId: r };
                    let e = s.getGuildId();
                    if (null != e) return { type: h.I4_.GUILD_CHANNEL, guildId: e, channelId: r };
                }
                return null;
            }
            return null != t && null != e
                ? { type: h.I4_.GUILD, guildId: t }
                : null != r && null != s && s.isPrivate()
                  ? n
                      ? { type: h.I4_.DMS }
                      : { type: h.I4_.CHANNEL, channelId: r }
                  : null;
        },
        [r, t, n],
        s(),
    );
}
