"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(73153);
let l = { canSeeEnableMonetizationForGuilds: new Set() };
class r extends i.Ay.PersistedStore {
    static displayName = "CreatorMonetizationPersistedStore";
    static persistKey = "CreatorMonetizationPersistedStore";
    static migrations = [];
    initialize(e) {
        null != e && (l.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds));
    }
    getState() {
        return l;
    }
    hasSeenCreatorOnboardingForGuild(e) {
        return l.canSeeEnableMonetizationForGuilds.has(e);
    }
}
let a = new r(s.h, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
        l.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
            (l.canSeeEnableMonetizationForGuilds = new Set(l.canSeeEnableMonetizationForGuilds).add(e.guildId));
    },
});
