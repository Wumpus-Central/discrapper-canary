n.d(t, {
    A: () => m,
}),
    n(321073);
var r,
    l = n(311907),
    a = n(73153),
    i = n(213012),
    s = n(71393);

function o(e, t, n) {
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
let c = {},
    u = () => {
        c = {
            guildAffinitiesByGuildId: {},
            guildAffinities: [],
            lastFetched: 0,
        };
    };
u();
class d extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        null != e && (c = e), this.waitFor(s.A);
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
o(d, "displayName", "GuildAffinitiesStore"), o(d, "persistKey", "GuildAffinitiesStore");
let m = new d(a.h, {
    CONNECTION_OPEN: function () {
        return Date.now() - c.lastFetched > 864e5 && (0, i.I)(), !1;
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (c.guildAffinities = []),
            (c.guildAffinitiesByGuildId = {}),
            (c.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: r } = e,
                    l = {
                        score: n,
                        guildId: r,
                        index: t,
                    };
                (c.guildAffinitiesByGuildId[r] = l), c.guildAffinities.push(l);
            });
    },
    LOGOUT: function () {
        u();
    },
});
