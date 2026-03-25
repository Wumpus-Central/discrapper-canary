r.d(t, { J: () => h });
var n = r(33851),
    s = r.n(n),
    l = r(311907),
    a = r(5180),
    i = r(253932),
    o = r(734057),
    c = r(71393),
    u = r(967198),
    d = r(652215);
function h(e) {
    let { guildId: t, channelId: r } = e,
        n = i.Hu.useSetting();
    return (0, l.bG)(
        [c.A, o.A, u.A],
        () => {
            let e = c.A.getGuild(t),
                s = o.A.getChannel(r),
                l = u.A.getGuildId();
            if ((0, a.ai)(l)) {
                if (null != s) {
                    if (s.isPrivate()) return { type: d.I4_.CHANNEL, channelId: r };
                    let e = s.getGuildId();
                    if (null != e) return { type: d.I4_.GUILD_CHANNEL, guildId: e, channelId: r };
                }
                return null;
            }
            return null != t && null != e
                ? { type: d.I4_.GUILD, guildId: t }
                : null != r && null != s && s.isPrivate()
                  ? n
                      ? { type: d.I4_.DMS }
                      : { type: d.I4_.CHANNEL, channelId: r }
                  : null;
        },
        [r, t, n],
        s(),
    );
}
