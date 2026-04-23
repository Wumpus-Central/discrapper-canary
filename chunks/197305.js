n.d(t, { A: () => d }), n(321073);
var i = n(311907),
    l = n(73153),
    a = n(213012),
    s = n(71393);
let r = {},
    o = () => {
        r = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
    };
o();
class c extends i.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (r = e), this.waitFor(s.A);
    }
    getState() {
        return r;
    }
    getGuildAffinity(e) {
        return r.guildAffinitiesByGuildId[e];
    }
    get affinities() {
        return r.guildAffinities;
    }
    get hasRequestResolved() {
        return 0 !== r.lastFetched;
    }
}
let d = new c(l.h, {
    CONNECTION_OPEN: function () {
        return Date.now() - r.lastFetched > 864e5 && (0, a.I)(), !1;
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (r.guildAffinities = []),
            (r.guildAffinitiesByGuildId = {}),
            (r.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: i } = e,
                    l = { score: n, guildId: i, index: t };
                (r.guildAffinitiesByGuildId[i] = l), r.guildAffinities.push(l);
            });
    },
    LOGOUT: function () {
        o();
    },
});
