n.d(t, { Z: () => c }), n(388685);
var r,
    i = n(442837),
    l = n(570140);
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
let a = { canSeeEnableMonetizationForGuilds: new Set() };
class o extends (r = i.ZP.PersistedStore) {
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
s(o, "displayName", "CreatorMonetizationPersistedStore"),
    s(o, "persistKey", "CreatorMonetizationPersistedStore"),
    s(o, "migrations", []);
let c = new o(l.Z, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
        a.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
            (a.canSeeEnableMonetizationForGuilds = new Set(a.canSeeEnableMonetizationForGuilds).add(e.guildId));
    },
});
