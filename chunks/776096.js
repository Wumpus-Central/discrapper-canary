"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(636537),
    a = n(652215),
    o = n(71393);
let l = {},
    u = () => {
        l = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
    };
u();
class c extends i.Ay.PersistedStore {
    static displayName = "GuildAffinitiesStore";
    static persistKey = "GuildAffinitiesStore";
    initialize(e) {
        null != e && (l = e), this.waitFor(o.A);
    }
    getState() {
        return l;
    }
    getGuildAffinity(e) {
        return l.guildAffinitiesByGuildId[e];
    }
    get affinities() {
        return l.guildAffinities;
    }
    get hasRequestResolved() {
        return 0 !== l.lastFetched;
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: function () {
        return (
            Date.now() - l.lastFetched > 864e5 &&
                s.Bo.get({ url: a.Rsh.GUILD_AFFINITIES, oldFormErrors: !0, rejectWithError: !1 }).then(
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
        (l.guildAffinities = []),
            (l.guildAffinitiesByGuildId = {}),
            (l.lastFetched = Date.now()),
            t.forEach((e, t) => {
                let { affinity: n, guild_id: i } = e,
                    r = { score: n, guildId: i, index: t };
                (l.guildAffinitiesByGuildId[i] = r), l.guildAffinities.push(r);
            });
    },
    LOGOUT: function () {
        u();
    },
});
