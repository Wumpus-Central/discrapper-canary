a.d(e, { Z: () => b }), a(47120);
var c,
    d = a(442837),
    s = a(902704),
    n = a(570140),
    f = a(709054);
function i(t, e, a) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = a),
        t
    );
}
function o(t, e, a) {
    return ''.concat(t, ',').concat(e, ',').concat(a);
}
let p = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    r = p();
class l extends (c = d.ZP.PersistedStore) {
    initialize(t) {
        r = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {},
                    c = Object.keys(a);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (c = c.concat(
                        Object.getOwnPropertySymbols(a).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(a, t).enumerable;
                        })
                    )),
                    c.forEach(function (e) {
                        i(t, e, a[e]);
                    });
            }
            return t;
        })({}, r, null != t ? t : {});
        let e = Date.now();
        for (let [t, a] of Object.entries(r.prevLeaderboardRanks)) (null == a || e > a.ttl) && delete r.prevLeaderboardRanks[t];
        for (let [t, a] of Object.entries(r.currentLeaderboardRanks)) (null == a || e > a.ttl) && delete r.currentLeaderboardRanks[t];
        return !0;
    }
    getState() {
        return r;
    }
    getPrevLeaderboardRanks(t, e, a) {
        let c = o(t, e, a);
        return r.prevLeaderboardRanks[c];
    }
    getCurrentLeaderboardRanks(t, e, a) {
        let c = o(t, e, a);
        return r.currentLeaderboardRanks[c];
    }
    reset() {
        r = p();
    }
}
i(l, 'displayName', 'GuildLeaderboardRanksStore'), i(l, 'persistKey', 'GuildLeaderboardRanksStore');
let b = new l(n.Z, {
    SET_GUILD_LEADERBOARD: function (t) {
        var e;
        let { leaderboardResponse: a, intervalOffset: c } = t;
        if (0 !== c) return !1;
        let { leaderboard: d } = a,
            n = o(d.guild_id, d.leaderboard_id, d.interval_start),
            i = {
                ranks: d.users.map((t) => t.user_id),
                ttl: f.default.extractTimestamp(d.interval_end)
            },
            p = r.currentLeaderboardRanks[n];
        if ((0, s.E)(i.ranks, null != (e = null == p ? void 0 : p.ranks) ? e : [])) return !1;
        (r.prevLeaderboardRanks[n] = p), (r.currentLeaderboardRanks[n] = i);
    }
});
