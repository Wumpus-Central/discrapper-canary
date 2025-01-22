var i,
    a = r(47120);
var o = r(442837),
    s = r(902704),
    l = r(570140),
    u = r(709054);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function d(e, n, r) {
    return ''.concat(e, ',').concat(n, ',').concat(r);
}
let f = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    p = f();
function h(e) {
    var n;
    let { leaderboardResponse: r, intervalOffset: i } = e;
    if (0 !== i) return !1;
    let { leaderboard: a } = r,
        o = d(a.guild_id, a.leaderboard_id, a.interval_start),
        l = {
            ranks: a.users.map((e) => e.user_id),
            ttl: u.default.extractTimestamp(a.interval_end)
        },
        c = p.currentLeaderboardRanks[o];
    if ((0, s.E)(l.ranks, null !== (n = null == c ? void 0 : c.ranks) && void 0 !== n ? n : [])) return !1;
    (p.prevLeaderboardRanks[o] = c), (p.currentLeaderboardRanks[o] = l);
}
function _() {
    let e = Date.now();
    for (let [n, r] of Object.entries(p.prevLeaderboardRanks)) (null == r || e > r.ttl) && delete p.prevLeaderboardRanks[n];
    for (let [n, r] of Object.entries(p.currentLeaderboardRanks)) (null == r || e > r.ttl) && delete p.currentLeaderboardRanks[n];
}
class m extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        return (
            (p = {
                ...p,
                ...(null != e ? e : {})
            }),
            _(),
            !0
        );
    }
    getState() {
        return p;
    }
    getPrevLeaderboardRanks(e, n, r) {
        let i = d(e, n, r);
        return p.prevLeaderboardRanks[i];
    }
    getCurrentLeaderboardRanks(e, n, r) {
        let i = d(e, n, r);
        return p.currentLeaderboardRanks[i];
    }
    reset() {
        p = f();
    }
}
c(m, 'displayName', 'GuildLeaderboardRanksStore'), c(m, 'persistKey', 'GuildLeaderboardRanksStore'), (n.Z = new m(l.Z, { SET_GUILD_LEADERBOARD: h }));
