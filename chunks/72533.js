n.d(t, { A: () => a, o: () => r });
var i = n(17928),
    l = n(71393),
    s = n(652215);
function a(e) {
    return (0, i.bG)([l.A], () => {
        let t = l.A.getGuild(e);
        return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
    });
}
function r(e) {
    let t = l.A.getGuild(e);
    return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
}
