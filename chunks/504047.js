(n.d(t, { A: () => c }), n(321073));
var i = n(855986),
    r = n(73153),
    l = n(620632),
    s = n(652215),
    a = n(71393);
let o = {};
function u() {
    o = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
}
u();
class d extends i.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        (null != e && (o = e), this.waitFor(a.A));
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
let c = new d(r.h, {
    CONNECTION_OPEN: function () {
        return (
            Date.now() - o.lastFetched > 864e5 &&
                l.Bo.get({ url: s.Rsh.GUILD_AFFINITIES, oldFormErrors: !0, rejectWithError: (0, l.fT)() }).then(
                    (e) => {
                        let {
                            body: { guild_affinities: t },
                        } = e;
                        r.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_SUCCESS", guildAffinities: t });
                    },
                    () => {
                        r.h.dispatch({ type: "LOAD_GUILD_AFFINITIES_FAILURE" });
                    },
                ),
            !1
        );
    },
    LOAD_GUILD_AFFINITIES_SUCCESS: function (e) {
        let { guildAffinities: t } = e;
        ((o.guildAffinities = []),
            (o.guildAffinitiesByGuildId = {}),
            (o.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: i } = e,
                    r = { score: n, guildId: i, index: t };
                ((o.guildAffinitiesByGuildId[i] = r), o.guildAffinities.push(r));
            }));
    },
    LOGOUT: function () {
        u();
    },
});
