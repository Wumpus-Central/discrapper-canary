n.d(t, {
    A: () => s,
    o: () => a,
});
var r = n(311907),
    i = n(71393),
    l = n(652215);

function s(e) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return null != t && t.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
    });
}

function a(e) {
    let t = i.A.getGuild(e);
    return null != t && t.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
}
