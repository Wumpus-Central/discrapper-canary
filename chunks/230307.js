n.d(t, { Z: () => m });
var i,
    r = n(442837),
    a = n(570140),
    s = n(981631);
function o(e, t, n) {
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
let l = {},
    u = null,
    c = 86400000,
    d = 3600000;
function f() {
    (l = {}), (u = null);
}
function _(e) {
    let { statistics: t } = e;
    t.forEach((e) => {
        l[e.application_id] = e;
    }),
        (u = Date.now());
}
function p(e) {
    let { duration: t, applicationId: n, distributor: i } = e,
        r = l[n],
        a = new Date().toISOString(),
        o = 0,
        u = 0;
    if (null != r) {
        var c;
        (o = r.total_duration), (u = null !== (c = r.total_discord_sku_duration) && void 0 !== c ? c : 0);
    }
    (o += t),
        i === s.GQo.DISCORD && (u += t),
        (l[n] = {
            application_id: n,
            total_duration: o,
            last_played_at: a,
            total_discord_sku_duration: u
        });
}
class h extends (i = r.ZP.Store) {
    get applicationStatistics() {
        return l;
    }
    get lastFetched() {
        return u;
    }
    getGameDuration(e) {
        let t = l[e];
        return null != t ? t.total_duration : 0;
    }
    getLastPlayedDateTime(e) {
        let t = l[e];
        return null != t ? new Date(t.last_played_at).getTime() : null;
    }
    hasApplicationStatistic(e) {
        return null != l[e];
    }
    getCurrentUserStatisticsForApplication(e) {
        return l[e];
    }
    getQuickSwitcherScoreForApplication(e) {
        let t = l[e],
            n = 0;
        if (null != t) {
            let e = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / c),
                i = Math.floor((1000 * t.total_duration) / d);
            0 === e ? (n += 50) : e >= 1 && e < 2 ? (n += 40) : e >= 2 && e < 4 ? (n += 30) : e >= 4 && e < 7 ? (n += 20) : e >= 7 && (n += 10), 0 === i ? (n += 0) : i >= 1 && i < 12 ? (n += 10) : i >= 12 && i < 168 ? (n += 20) : i >= 168 && i < 720 ? (n += 40) : i >= 720 && (n += 50);
        }
        return n;
    }
}
o(h, 'displayName', 'LibraryApplicationStatisticsStore');
let m = new h(a.Z, {
    USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: _,
    ACTIVITY_UPDATE_START: p,
    LOGOUT: f
});
