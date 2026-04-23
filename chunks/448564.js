n.d(t, { A: () => r });
var i = n(17928),
    l = n(228366);
let s = { canSeeEnableMonetizationForGuilds: new Set() };
class a extends i.Ay.PersistedStore {
    static displayName = "CreatorMonetizationPersistedStore";
    static persistKey = "CreatorMonetizationPersistedStore";
    static migrations = [];
    initialize(e) {
        null != e && (s.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds));
    }
    getState() {
        return s;
    }
    hasSeenCreatorOnboardingForGuild(e) {
        return s.canSeeEnableMonetizationForGuilds.has(e);
    }
}
let r = new a(l.h, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
        s.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
            (s.canSeeEnableMonetizationForGuilds = new Set(s.canSeeEnableMonetizationForGuilds).add(e.guildId));
    },
});
