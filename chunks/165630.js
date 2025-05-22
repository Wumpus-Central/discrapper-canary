n.d(t, { Z: () => m }), n(539854);
var i,
    r = n(442837),
    s = n(570140),
    l = n(381496),
    a = n(430824);
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
let c = {},
    d = () => {
        c = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0
        };
    };
d();
class u extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(a.Z);
    }
    getState() {
        return c;
    }
    getGuildAffinity(e) {
        return c.guildAffinitiesByGuildId[e];
    }
    get affinities() {
        return c.guildAffinities;
    }
    get hasRequestResolved() {
        return 0 !== c.lastFetched;
    }
}
o(u, 'displayName', 'GuildAffinitiesStore'), o(u, 'persistKey', 'GuildAffinitiesStore');
let m = new u(s.Z, {
    CONNECTION_OPEN: function () {
        return Date.now() - c.lastFetched > 86400000 && (0, l.j)(), !1;
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (c.guildAffinities = []),
            (c.guildAffinitiesByGuildId = {}),
            (c.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: i } = e,
                    r = {
                        score: n,
                        guildId: i,
                        index: t
                    };
                (c.guildAffinitiesByGuildId[i] = r), c.guildAffinities.push(r);
            });
    },
    LOGOUT: function () {
        d();
    }
});
