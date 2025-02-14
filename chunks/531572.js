n.d(t, { Z: () => c });
var i,
    l = n(442837),
    r = n(570140);
function a(e, t, n) {
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
let o = {};
class s extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o = e);
    }
    getState() {
        return o;
    }
    getCountForGuild(e) {
        return o[e];
    }
}
a(s, 'displayName', 'GuildBoostingProgressBarPersistedStore'), a(s, 'persistKey', 'PremiumGuildProgressBarPersistedStore');
let c = new s(r.Z, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        let { guildId: t, premiumCount: n } = e;
        o = {
            ...o,
            [t]: n
        };
    }
});
