n.d(t, { A: () => c });
var i = n(311907),
    l = n(95701),
    s = n(734057),
    a = n(71393),
    r = n(309010),
    o = n(652215);
function c(e, t) {
    return (0, i.bG)([s.A, a.A, r.A], () => {
        let n = a.A.getGuild(t);
        if (
            !(
                n?.features.has(o.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                n.features.has(o.GuildFeatures.COMMUNITY)
            ) ||
            n.features.has(o.GuildFeatures.GUILD_SERVER_GUIDE)
        )
            return !1;
        let i = s.A.getChannel(e);
        return e === r.A.getChannelId(t) && null != i && i.getGuildId() === n.id && (0, l.ke)(i.type);
    });
}
