n.d(t, { Z: () => i });
var r = n(981631);
function i(e) {
    return !(
        __OVERLAY__ ||
        null == e ||
        e.id === r.ME ||
        e.id === r.I_8 ||
        !e.features.has(r.GuildFeatures.COMMUNITY) ||
        !e.features.has(r.GuildFeatures.GUILD_SERVER_GUIDE) ||
        !e.features.has(r.GuildFeatures.GUILD_ONBOARDING)
    );
}
