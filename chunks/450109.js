n.d(t, { Z: () => _ }), n(539854), n(388685);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = 30,
    l = {};
function c(e) {
    let { connectionStats: t } = e,
        n = {};
    for (let e of t) {
        let { mediaEngineConnectionId: t } = e;
        0 !== t.length && ((n[t] = e), t in l || (l[t] = []), l[t].push(e), l[t].length > s && l[t].shift());
    }
}
function u(e) {
    let { mediaEngineConnectionId: t } = e;
    null != t && delete l[t];
}
function d(e, t) {
    if (null == e) return null;
    let n = l[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class f extends (r = i.ZP.Store) {
    getConnectionStats(e) {
        return d(e, 0);
    }
    getLastConnectionStats(e) {
        return d(e, 1);
    }
    getStatsHistory(e) {
        var t;
        return null == e ? [] : null != (t = l[e]) ? t : [];
    }
}
a(f, 'displayName', 'MediaEngineStatsStore');
let _ = new f(o.Z, {
    MEDIA_ENGINE_CONNECTION_STATS: c,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: u
});
