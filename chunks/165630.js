n.d(t, { Z: () => m }), n(653041);
var r,
    i = n(442837),
    s = n(570140),
    a = n(381496),
    l = n(430824);
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
class u extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(l.Z);
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
        return Date.now() - c.lastFetched > 86400000 && (0, a.j)(), !1;
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (c.guildAffinities = []),
            (c.guildAffinitiesByGuildId = {}),
            (c.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: r } = e,
                    i = {
                        score: n,
                        guildId: r,
                        index: t
                    };
                (c.guildAffinitiesByGuildId[r] = i), c.guildAffinities.push(i);
            });
    },
    LOGOUT: function () {
        d();
    }
});
