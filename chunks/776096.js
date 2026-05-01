n.d(t, { A: () => c }), n(321073);
var i = n(17928),
    l = n(228366),
    s = n(636537),
    r = n(652215),
    a = n(71393);
let u = {},
    o = () => {
        u = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
    };
o();
class d extends i.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (u = e), this.waitFor(a.A);
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
let c = new d(l.h, {
    CONNECTION_OPEN: function () {
        return (
            Date.now() - u.lastFetched > 864e5 &&
                s.Bo.get({ url: r.Rsh.GUILD_AFFINITIES, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => {
                        let {
                            body: { guild_affinities: t },
                        } = e;
                        l.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: t });
                    },
                    () => {
                        l.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
                    },
                ),
            !1
        );
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        (u.guildAffinities = []),
            (u.guildAffinitiesByGuildId = {}),
            (u.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: i } = e,
                    l = { score: n, guildId: i, index: t };
                (u.guildAffinitiesByGuildId[i] = l), u.guildAffinities.push(l);
            });
    },
    LOGOUT: function () {
        o();
    },
});
