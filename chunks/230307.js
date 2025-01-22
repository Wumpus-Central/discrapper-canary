var i,
    a = r(442837),
    o = r(570140),
    s = r(981631);
function l(e, n, r) {
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
let u = {},
    c = null,
    d = 86400000,
    f = 3600000;
function p() {
    (u = {}), (c = null);
}
function h(e) {
    let { statistics: n } = e;
    n.forEach((e) => {
        u[e.application_id] = e;
    }),
        (c = Date.now());
}
function _(e) {
    let { duration: n, applicationId: r, distributor: i } = e,
        a = u[r],
        o = new Date().toISOString(),
        l = 0,
        c = 0;
    if (null != a) {
        var d;
        (l = a.total_duration), (c = null !== (d = a.total_discord_sku_duration) && void 0 !== d ? d : 0);
    }
    (l += n),
        i === s.GQo.DISCORD && (c += n),
        (u[r] = {
            application_id: r,
            total_duration: l,
            last_played_at: o,
            total_discord_sku_duration: c
        });
}
class m extends (i = a.ZP.Store) {
    get applicationStatistics() {
        return u;
    }
    get lastFetched() {
        return c;
    }
    getGameDuration(e) {
        let n = u[e];
        return null != n ? n.total_duration : 0;
    }
    getLastPlayedDateTime(e) {
        let n = u[e];
        return null != n ? new Date(n.last_played_at).getTime() : null;
    }
    hasApplicationStatistic(e) {
        return null != u[e];
    }
    getCurrentUserStatisticsForApplication(e) {
        return u[e];
    }
    getQuickSwitcherScoreForApplication(e) {
        let n = u[e],
            r = 0;
        if (null != n) {
            let e = Date.now(),
                i = Math.floor((e - new Date(n.last_played_at).getTime()) / d),
                a = Math.floor((1000 * n.total_duration) / f);
            0 === i ? (r += 50) : i >= 1 && i < 2 ? (r += 40) : i >= 2 && i < 4 ? (r += 30) : i >= 4 && i < 7 ? (r += 20) : i >= 7 && (r += 10), 0 === a ? (r += 0) : a >= 1 && a < 12 ? (r += 10) : a >= 12 && a < 168 ? (r += 20) : a >= 168 && a < 720 ? (r += 40) : a >= 720 && (r += 50);
        }
        return r;
    }
}
l(m, 'displayName', 'LibraryApplicationStatisticsStore'),
    (n.Z = new m(o.Z, {
        USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: h,
        ACTIVITY_UPDATE_START: _,
        LOGOUT: p
    }));
