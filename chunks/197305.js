i.d(t, { A: () => c }), i(321073);
var n = i(311907),
    a = i(73153),
    l = i(213012),
    r = i(71393);
let s = {},
    o = () => {
        s = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
    };
o();
class d extends n.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (s = e), this.waitFor(r.A);
    }
    getState() {
        return s;
    }
    getGuildAffinity(e) {
        return s.guildAffinitiesByGuildId[e];
    }
    get affinities() {
        return s.guildAffinities;
    }
    get hasRequestResolved() {
        return 0 !== s.lastFetched;
    }
}
let c = new d(a.h, {
    CONNECTION_OPEN: function () {
        return Date.now() - s.lastFetched > 864e5 && (0, l.I)(), !1;
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (s.guildAffinities = []),
            (s.guildAffinitiesByGuildId = {}),
            (s.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: i, guild_id: n } = e,
                    a = { score: i, guildId: n, index: t };
                (s.guildAffinitiesByGuildId[n] = a), s.guildAffinities.push(a);
            });
    },
    LOGOUT: function () {
        o();
    },
});
