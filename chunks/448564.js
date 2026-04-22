n.d(t, { A: () => a });
var i = n(311907),
    l = n(73153);
let s = { canSeeEnableMonetizationForGuilds: new Set() };
class r extends i.Ay.PersistedStore {
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
let a = new r(l.h, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
        s.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
            (s.canSeeEnableMonetizationForGuilds = new Set(s.canSeeEnableMonetizationForGuilds).add(e.guildId));
    },
});
