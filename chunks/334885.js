i.d(t, { A: () => r, B: () => d });
var n = i(17928),
    l = i(71393),
    s = i(591346),
    a = i(652215);
function r(e) {
    let { guildId: t, location: i } = e,
        { enableHistoryHover: r } = (0, s.G8)({ guildId: t, location: i }),
        d = (0, n.bG)([l.A], () => l.A.getGuild(t));
    return r && null != d && !d.features.has(a.GuildFeatures.VOICE_CHANNEL_HISTORY_DISABLED);
}
function d(e) {
    let { guildId: t, location: i } = e,
        { enableHistoryHover: n } = (0, s.NH)({ guildId: t, location: i }),
        r = l.A.getGuild(t);
    return n && null != r && !r.features.has(a.GuildFeatures.VOICE_CHANNEL_HISTORY_DISABLED);
}
