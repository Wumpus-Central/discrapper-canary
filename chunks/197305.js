n.d(t, { A: () => m }), n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(213012),
    o = n(71393);
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
    return Date.now() - u.lastFetched > c && (0, s.I)(), !1;
}
function _() {
    d();
}
d();
class h extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (u = e), this.waitFor(o.A);
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
l(h, "displayName", "GuildAffinitiesStore"), l(h, "persistKey", "GuildAffinitiesStore");
let m = new h(a.h, {
    CONNECTION_OPEN: p,
    LOAD_GUILD_AFFINITIES_SUCCESS: f,
    LOGOUT: _,
});
