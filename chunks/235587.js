n.d(t, { Z: () => m }), n(388685);
var r,
    i = n(442837),
    a = n(902704),
    o = n(570140),
    s = n(709054);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t, n) {
    return ''.concat(e, ',').concat(t, ',').concat(n);
}
let d = () => ({
        currentLeaderboardRanks: {},
        prevLeaderboardRanks: {}
    }),
    _ = d();
function f(e) {
    var t;
    let { leaderboardResponse: n, intervalOffset: r } = e;
    if (0 !== r) return !1;
    let { leaderboard: i } = n,
        o = u(i.guild_id, i.leaderboard_id, i.interval_start),
        l = {
            ranks: i.users.map((e) => e.user_id),
            ttl: s.default.extractTimestamp(i.interval_end)
        },
        c = _.currentLeaderboardRanks[o];
    if ((0, a.E)(l.ranks, null != (t = null == c ? void 0 : c.ranks) ? t : [])) return !1;
    (_.prevLeaderboardRanks[o] = c), (_.currentLeaderboardRanks[o] = l);
}
function p() {
    let e = Date.now();
    for (let [t, n] of Object.entries(_.prevLeaderboardRanks)) (null == n || e > n.ttl) && delete _.prevLeaderboardRanks[t];
    for (let [t, n] of Object.entries(_.currentLeaderboardRanks)) (null == n || e > n.ttl) && delete _.currentLeaderboardRanks[t];
}
class h extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        return (_ = c({}, _, null != e ? e : {})), p(), !0;
    }
    getState() {
        return _;
    }
    getPrevLeaderboardRanks(e, t, n) {
        let r = u(e, t, n);
        return _.prevLeaderboardRanks[r];
    }
    getCurrentLeaderboardRanks(e, t, n) {
        let r = u(e, t, n);
        return _.currentLeaderboardRanks[r];
    }
    reset() {
        _ = d();
    }
}
l(h, 'displayName', 'GuildLeaderboardRanksStore'), l(h, 'persistKey', 'GuildLeaderboardRanksStore');
let m = new h(o.Z, { SET_GUILD_LEADERBOARD: f });
