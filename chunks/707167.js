n.d(t, {
    A: () => i,
});
var r = n(652215);

function i(e) {
    return !(
        __OVERLAY__ ||
        null == e ||
        e.id === r.ME ||
        e.id === r.YYv ||
        !e.features.has(r.GuildFeatures.COMMUNITY) ||
        !e.features.has(r.GuildFeatures.GUILD_SERVER_GUIDE) ||
        !e.features.has(r.GuildFeatures.GUILD_ONBOARDING)
    );
}
