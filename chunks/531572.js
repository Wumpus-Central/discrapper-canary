n.d(t, { Z: () => c });
var i,
    l = n(442837),
    r = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = {};
class s extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (a = e);
    }
    getState() {
        return a;
    }
    getCountForGuild(e) {
        return a[e];
    }
}
o(s, 'displayName', 'GuildBoostingProgressBarPersistedStore'), o(s, 'persistKey', 'PremiumGuildProgressBarPersistedStore');
let c = new s(r.Z, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        a = {
            ...a,
            [t]: n
        };
    }
});
