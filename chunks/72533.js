n.d(t, { A: () => r, o: () => a });
var i = n(311907),
    l = n(71393),
    s = n(652215);
function r(e) {
    return (0, i.bG)([l.A], () => {
        let t = l.A.getGuild(e);
        return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
    });
}
function a(e) {
    let t = l.A.getGuild(e);
    return null != t && t.features.has(s.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
}
