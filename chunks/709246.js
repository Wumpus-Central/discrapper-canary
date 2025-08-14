n.d(t, { Z: () => c }), n(388685);
var r,
    i = n(442837),
    l = n(570140);
function a(e, t, n) {
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
let s = { canSeeEnableMonetizationForGuilds: new Set() };
class o extends (r = i.ZP.PersistedStore) {
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
a(o, "displayName", "CreatorMonetizationPersistedStore"),
    a(o, "persistKey", "CreatorMonetizationPersistedStore"),
    a(o, "migrations", []);
let c = new o(l.Z, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
        s.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
            (s.canSeeEnableMonetizationForGuilds = new Set(s.canSeeEnableMonetizationForGuilds).add(e.guildId));
    },
});
