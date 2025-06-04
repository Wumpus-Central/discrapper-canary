n.d(t, { Z: () => m });
var r,
    i = n(442837),
    o = n(570140),
    a = n(981631);
function s(e, t, n) {
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
    c = null,
    u = 86400000,
    d = 3600000;
function f() {
    (l = {}), (c = null);
}
function _(e) {
    let { statistics: t } = e;
    t.forEach((e) => {
        l[e.application_id] = e;
    }),
        (c = Date.now());
}
function p(e) {
    let { duration: t, applicationId: n, distributor: r } = e,
        i = l[n],
        o = new Date().toISOString(),
        s = 0,
        c = 0;
    if (null != i) {
        var u;
        (s = i.total_duration), (c = null != (u = i.total_discord_sku_duration) ? u : 0);
    }
    (s += t),
        r === a.GQo.DISCORD && (c += t),
        (l[n] = {
            application_id: n,
            total_duration: s,
            last_played_at: o,
            total_discord_sku_duration: c
        });
}
class h extends (r = i.ZP.Store) {
    get applicationStatistics() {
        return l;
    }
    get lastFetched() {
        return c;
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
            let e = Math.floor((Date.now() - new Date(t.last_played_at).getTime()) / u),
                r = Math.floor((1000 * t.total_duration) / d);
            0 === e ? (n += 50) : e >= 1 && e < 2 ? (n += 40) : e >= 2 && e < 4 ? (n += 30) : e >= 4 && e < 7 ? (n += 20) : e >= 7 && (n += 10), 0 === r ? (n += 0) : r >= 1 && r < 12 ? (n += 10) : r >= 12 && r < 168 ? (n += 20) : r >= 168 && r < 720 ? (n += 40) : r >= 720 && (n += 50);
        }
        return n;
    }
}
s(h, 'displayName', 'LibraryApplicationStatisticsStore');
let m = new h(o.Z, {
    USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: _,
    ACTIVITY_UPDATE_START: p,
    LOGOUT: f
});
