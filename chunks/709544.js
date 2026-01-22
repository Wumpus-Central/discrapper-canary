n.d(t, {
    A: () => c,
});
var r = n(311907),
    l = n(95701),
    i = n(734057),
    a = n(71393),
    s = n(309010),
    o = n(652215);

function c(e, t) {
    return (0, r.bG)([i.A, a.A, s.A], () => {
        let n = a.A.getGuild(t);
        if (
            !(
                (null == n ? void 0 : n.features.has(o.GuildFeatures.WELCOME_SCREEN_ENABLED)) === !0 &&
                n.features.has(o.GuildFeatures.COMMUNITY)
            ) ||
            n.features.has(o.GuildFeatures.GUILD_SERVER_GUIDE)
        )
            return !1;
        let r = i.A.getChannel(e);
        return e === s.A.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, l.ke)(r.type);
    });
}
