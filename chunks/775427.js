l.d(e, { J: () => A });
var u = l(811315),
    n = l.n(u),
    i = l(17928),
    r = l(5180),
    d = l(885386),
    p = l(734057),
    s = l(71393),
    I = l(967198),
    a = l(652215);
function A(t) {
    let { guildId: e, channelId: l } = t,
        u = d.Hu.useSetting();
    return (0, i.bG)(
        [s.A, p.A, I.A],
        () => {
            let t = s.A.getGuild(e),
                n = p.A.getChannel(l),
                i = I.A.getGuildId();
            if ((0, r.ai)(i)) {
                if (null != n) {
                    if (n.isPrivate()) return { type: a.I4_.CHANNEL, channelId: l };
                    let t = n.getGuildId();
                    if (null != t) return { type: a.I4_.GUILD_CHANNEL, guildId: t, channelId: l };
                }
                return null;
            }
            return null != e && null != t
                ? { type: a.I4_.GUILD, guildId: e }
                : null != l && null != n && n.isPrivate()
                  ? u
                      ? { type: a.I4_.DMS }
                      : { type: a.I4_.CHANNEL, channelId: l }
                  : null;
        },
        [l, e, u],
        n(),
    );
}
