n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(442837),
    a = n(902704),
    s = n(570140),
    o = n(709054);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e, t, n) {
    return ''.concat(e, ',').concat(t, ',').concat(n);
}
let c = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    d = c();
function f(e) {
    var t;
    let { leaderboardResponse: n, intervalOffset: i } = e;
    if (0 !== i) return !1;
    let { leaderboard: r } = n,
        s = u(r.guild_id, r.leaderboard_id, r.interval_start),
        l = {
            ranks: r.users.map((e) => e.user_id),
            ttl: o.default.extractTimestamp(r.interval_end)
        },
        c = d.currentLeaderboardRanks[s];
    if ((0, a.E)(l.ranks, null !== (t = null == c ? void 0 : c.ranks) && void 0 !== t ? t : [])) return !1;
    (d.prevLeaderboardRanks[s] = c), (d.currentLeaderboardRanks[s] = l);
}
function _() {
    let e = Date.now();
    for (let [t, n] of Object.entries(d.prevLeaderboardRanks)) (null == n || e > n.ttl) && delete d.prevLeaderboardRanks[t];
    for (let [t, n] of Object.entries(d.currentLeaderboardRanks)) (null == n || e > n.ttl) && delete d.currentLeaderboardRanks[t];
}
class p extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        return (
            (d = {
                ...d,
                ...(null != e ? e : {})
            }),
            _(),
            !0
        );
    }
    getState() {
        return d;
    }
    getPrevLeaderboardRanks(e, t, n) {
        let i = u(e, t, n);
        return d.prevLeaderboardRanks[i];
    }
    getCurrentLeaderboardRanks(e, t, n) {
        let i = u(e, t, n);
        return d.currentLeaderboardRanks[i];
    }
    reset() {
        d = c();
    }
}
l(p, 'displayName', 'GuildLeaderboardRanksStore'), l(p, 'persistKey', 'GuildLeaderboardRanksStore');
let h = new p(s.Z, { SET_GUILD_LEADERBOARD: f });
