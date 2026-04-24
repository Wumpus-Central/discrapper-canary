n.d(t, { A: () => u }), n(321073);
var i = n(17928),
    a = n(228366),
    r = n(636537),
    l = n(652215),
    s = n(71393);
let o = {},
    c = () => {
        o = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
    };
c();
class d extends i.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (o = e), this.waitFor(s.A);
    }
    getState() {
        return o;
    }
    getGuildAffinity(e) {
        return o.guildAffinitiesByGuildId[e];
    }
    get affinities() {
        return o.guildAffinities;
    }
    get hasRequestResolved() {
        return 0 !== o.lastFetched;
    }
}
let u = new d(a.h, {
    CONNECTION_OPEN: function () {
        return (
            Date.now() - o.lastFetched > 864e5 &&
                r.Bo.get({ url: l.Rsh.GUILD_AFFINITIES, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => {
                        let {
                            body: { guild_affinities: t },
                        } = e;
                        a.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: t });
                    },
                    () => {
                        a.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
                    },
                ),
            !1
        );
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (o.guildAffinities = []),
            (o.guildAffinitiesByGuildId = {}),
            (o.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: i } = e,
                    a = { score: n, guildId: i, index: t };
                (o.guildAffinitiesByGuildId[i] = a), o.guildAffinities.push(a);
            });
    },
    LOGOUT: function () {
        c();
    },
});
