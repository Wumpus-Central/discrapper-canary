n.d(t, { Z: () => v }), n(388685), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(314897);
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
let l = 30,
    c = 15,
    u = {},
    d = {},
    f = {};
function _(e) {
    return 'packetsSent' in e;
}
function p(e, t, n, r, i) {
    var a, o, s, l, c, u, d, f, p, h, m, g, E, b, y, v;
    let O = r.find((e) => 'video' === e.type);
    if (
        (null == n &&
            (n = {
                packetsSentOrReceived: 0,
                packetsLost: 0,
                packetLossRate: 0,
                frameRate: 0,
                resolution: 0,
                numDatapoints: 0,
                frameRateAggregated: 0,
                resolutionAggregated: 0,
                minVersion: e
            }),
        null == O)
    )
        return n;
    let I = _(O) ? (null != (o = O.packetsSent) ? o : 0) : null != (s = O.packetsReceived) ? s : 0,
        S = _(O) ? (null != (l = O.packetsLost) ? l : 0) : null != (c = O.packetsLost) ? c : 0,
        T = _(O) ? (null != (u = O.frameRateEncode) ? u : 0) : null != (d = O.frameRateDecode) ? d : 0,
        N = null != (f = null == (a = O.resolution) ? void 0 : a.height) ? f : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += T), (n.resolutionAggregated += N);
    let A = null == i ? void 0 : i.find((e) => 'video' === e.type);
    if (null != A && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = _(A) ? (null != (h = A.packetsSent) ? h : 0) : null != (m = A.packetsReceived) ? m : 0,
            t = _(A) ? (null != (g = A.packetsLost) ? g : 0) : null != (E = A.packetsLost) ? E : 0,
            r = _(A) ? (null != (b = A.frameRateEncode) ? b : 0) : null != (y = A.frameRateDecode) ? y : 0,
            i = null != (v = null == (p = A.resolution) ? void 0 : p.height) ? v : 0;
        (n.frameRateAggregated -= r), (n.resolutionAggregated -= i), (n.packetsSentOrReceived = I - e), (n.packetsLost = S - t);
    } else (n.packetsSentOrReceived = I), (n.packetsLost = S);
    return (n.frameRate = n.frameRateAggregated / n.numDatapoints), (n.resolution = n.resolutionAggregated / n.numDatapoints), (n.packetLossRate = n.packetsLost / (n.packetsSentOrReceived + n.packetsLost)), n;
}
function h(e, t, n, r) {
    var i, a;
    null == e[t] && (e[t] = {});
    let s = o.default.getId();
    for (let o of ((e[t][s] = p(n.version, null != (i = null == r ? void 0 : r.version) ? i : 0, e[t][s], n.stats.rtp.outbound, null == r ? void 0 : r.stats.rtp.outbound)), Object.keys(n.stats.rtp.inbound))) e[t][o] = p(n.version, null != (a = null == r ? void 0 : r.version) ? a : 0, e[t][o], n.stats.rtp.inbound[o], null == r ? void 0 : r.stats.rtp.inbound[o]);
}
function m(e) {
    let { connectionStats: t } = e,
        n = {};
    for (let e of t) {
        var r;
        let t,
            { mediaEngineConnectionId: i } = e;
        0 !== i.length && ((n[i] = e), i in u || (u[i] = []), u[i].push(e), u[i].length > l && (t = u[i].shift()), h(f, i, e, null != (r = b(i, c)) ? r : void 0), h(d, i, e, t));
    }
}
function g(e) {
    let { mediaEngineConnectionId: t } = e;
    null != t && (delete u[t], delete d[t], delete f[t]);
}
function E(e) {
    var t, n;
    let { userId: r, mediaEngineConnectionId: i } = e;
    if (null == i) return !1;
    (null == (t = d[i]) ? void 0 : t[r]) != null && delete d[i][r], (null == (n = f[i]) ? void 0 : n[r]) != null && delete f[i][r];
}
function b(e, t) {
    if (null == e) return null;
    let n = u[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class y extends (r = i.ZP.Store) {
    getConnectionStats(e) {
        return b(e, 0);
    }
    getLastConnectionStats(e) {
        return b(e, 1);
    }
    getStatsHistory(e) {
        var t;
        return null == e ? [] : null != (t = u[e]) ? t : [];
    }
    getAccumulatedPerformanceStats(e, t, n) {
        var r, i;
        return null == e ? null : null != (i = null == (r = ('long' === n ? d : f)[e]) ? void 0 : r[t]) ? i : null;
    }
}
s(y, 'displayName', 'MediaEngineStatsStore');
let v = new y(a.Z, {
    MEDIA_ENGINE_CONNECTION_STATS: m,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: g,
    RTC_CONNECTION_VIDEO: E
});
