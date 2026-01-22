n.d(t, {
    A: () => o,
}),
    n(896048);
var r,
    i = n(311907),
    l = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let a = {
    canSeeEnableMonetizationForGuilds: new Set(),
};
class c extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (a.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds));
    }
    getState() {
        return a;
    }
    hasSeenCreatorOnboardingForGuild(e) {
        return a.canSeeEnableMonetizationForGuilds.has(e);
    }
}
s(c, "displayName", "CreatorMonetizationPersistedStore"),
    s(c, "persistKey", "CreatorMonetizationPersistedStore"),
    s(c, "migrations", []);
let o = new c(l.h, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
        a.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
            (a.canSeeEnableMonetizationForGuilds = new Set(a.canSeeEnableMonetizationForGuilds).add(e.guildId));
    },
});
