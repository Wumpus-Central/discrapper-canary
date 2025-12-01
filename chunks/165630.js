n.d(t, { Z: () => h }), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(381496),
    s = n(430824);
function l(e, t, n) {
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
let c = 86400000,
    u = {},
    d = () => {
        u = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0,
        };
    };
function f(e) {
    let { guildAffinities: t } = e;
    (u.guildAffinities = []),
        (u.guildAffinitiesByGuildId = {}),
        (u.lastFetched = Date.now()),
        t.forEach((e, t) => {
            let { affinity: n, guild_id: r } = e,
                i = {
                    score: n,
                    guildId: r,
                    index: t,
                };
            (u.guildAffinitiesByGuildId[r] = i), u.guildAffinities.push(i);
        });
}
function p() {
    return Date.now() - u.lastFetched > c && (0, o.j)(), !1;
}
function _() {
    d();
}
d();
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (u = e), this.waitFor(s.Z);
    }
    getState() {
        return u;
    }
    getGuildAffinity(e) {
        return u.guildAffinitiesByGuildId[e];
    }
    get affinities() {
        return u.guildAffinities;
    }
    get hasRequestResolved() {
        return 0 !== u.lastFetched;
    }
}
l(m, "displayName", "GuildAffinitiesStore"), l(m, "persistKey", "GuildAffinitiesStore");
let h = new m(a.Z, {
    CONNECTION_OPEN: p,
    LOAD_GUILD_AFFINITIES_SUCCESS: f,
    LOGOUT: _,
});
