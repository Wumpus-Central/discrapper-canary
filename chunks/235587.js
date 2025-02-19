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
function p(t, e, c) {
    return ''.concat(t, ',').concat(e, ',').concat(c);
}
let i = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    r = i();
class b extends (d = a.ZP.PersistedStore) {
    initialize(t) {
        return (
            (r = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var c = null != arguments[e] ? arguments[e] : {},
                        d = Object.keys(c);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (d = d.concat(
                            Object.getOwnPropertySymbols(c).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(c, t).enumerable;
                            })
                        )),
                        d.forEach(function (e) {
                            f(t, e, c[e]);
                        });
                }
                return t;
            })({}, r, null != t ? t : {})),
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
        let d = p(t, e, c);
        return r.prevLeaderboardRanks[d];
    }
    getCurrentLeaderboardRanks(t, e, c) {
        let d = p(t, e, c);
        return r.currentLeaderboardRanks[d];
    }
    reset() {
        r = i();
    }
}
f(b, 'displayName', 'GuildLeaderboardRanksStore'), f(b, 'persistKey', 'GuildLeaderboardRanksStore');
let u = new b(n.Z, {
    SET_GUILD_LEADERBOARD: function (t) {
        var e;
        let { leaderboardResponse: c, intervalOffset: d } = t;
        if (0 !== d) return !1;
        let { leaderboard: a } = c,
            n = p(a.guild_id, a.leaderboard_id, a.interval_start),
            f = {
                ranks: a.users.map((t) => t.user_id),
                ttl: o.default.extractTimestamp(a.interval_end)
            },
            i = r.currentLeaderboardRanks[n];
        if ((0, s.E)(f.ranks, null !== (e = null == i ? void 0 : i.ranks) && void 0 !== e ? e : [])) return !1;
        (r.prevLeaderboardRanks[n] = i), (r.currentLeaderboardRanks[n] = f);
    }
});
