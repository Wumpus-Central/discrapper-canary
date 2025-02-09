c.d(e, { Z: () => u }), c(47120);
var d,
    a = c(442837),
    s = c(902704),
    n = c(570140),
    o = c(709054);
function f(t, e, c) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: c,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = c),
        t
    );
}
function i(t, e, c) {
    return ''.concat(t, ',').concat(e, ',').concat(c);
}
let p = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    r = p();
class b extends (d = a.ZP.PersistedStore) {
    initialize(t) {
        return (
            (r = {
                ...r,
                ...(null != t ? t : {})
            }),
            !(function () {
                let t = Date.now();
                for (let [e, c] of Object.entries(r.prevLeaderboardRanks)) (null == c || t > c.ttl) && delete r.prevLeaderboardRanks[e];
                for (let [e, c] of Object.entries(r.currentLeaderboardRanks)) (null == c || t > c.ttl) && delete r.currentLeaderboardRanks[e];
            })(),
            !0
        );
    }
    getState() {
        return r;
    }
    getPrevLeaderboardRanks(t, e, c) {
        let d = i(t, e, c);
        return r.prevLeaderboardRanks[d];
    }
    getCurrentLeaderboardRanks(t, e, c) {
        let d = i(t, e, c);
        return r.currentLeaderboardRanks[d];
    }
    reset() {
        r = p();
    }
}
f(b, 'displayName', 'GuildLeaderboardRanksStore'), f(b, 'persistKey', 'GuildLeaderboardRanksStore');
let u = new b(n.Z, {
    SET_GUILD_LEADERBOARD: function (t) {
        var e;
        let { leaderboardResponse: c, intervalOffset: d } = t;
        if (0 !== d) return !1;
        let { leaderboard: a } = c,
            n = i(a.guild_id, a.leaderboard_id, a.interval_start),
            f = {
                ranks: a.users.map((t) => t.user_id),
                ttl: o.default.extractTimestamp(a.interval_end)
            },
            p = r.currentLeaderboardRanks[n];
        if ((0, s.E)(f.ranks, null !== (e = null == p ? void 0 : p.ranks) && void 0 !== e ? e : [])) return !1;
        (r.prevLeaderboardRanks[n] = p), (r.currentLeaderboardRanks[n] = f);
    }
});
