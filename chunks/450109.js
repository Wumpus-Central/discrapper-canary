n.d(t, { Z: () => S }), n(388685), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(569545),
    s = n(314897),
    l = n(959457);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = 30,
    d = 15,
    f = {},
    _ = {},
    p = {};
function h(e) {
    return "packetsSent" in e;
}
function m(e, t, n, r, i) {
    var a, o, s, l, c, u, d, f, _, p, m, g, E, b, y, O, v, I;
    let T = r.find((e) => "video" === e.type);
    if (
        (null == n &&
            (n = {
                packetsSentOrReceived: 0,
                packetsLost: 0,
                packetLossRate: 0,
                frameRate: 0,
                resolution: 0,
                entropy: 0,
                numDatapoints: 0,
                frameRateAggregated: 0,
                resolutionAggregated: 0,
                entropyAggregated: 0,
                minVersion: e,
            }),
        null == T)
    )
        return n;
    let S = h(T) ? (null != (o = T.packetsSent) ? o : 0) : null != (s = T.packetsReceived) ? s : 0,
        A = h(T) ? (null != (l = T.packetsLost) ? l : 0) : null != (c = T.packetsLost) ? c : 0,
        C = h(T) ? (null != (u = T.frameRateEncode) ? u : 0) : null != (d = T.frameRateDecode) ? d : 0,
        N = null != (f = null == (a = T.resolution) ? void 0 : a.height) ? f : 0,
        R = h(T) && null != (_ = T.videoEntropy) ? _ : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += C), (n.resolutionAggregated += N), (n.entropyAggregated += R);
    let P = null == i ? void 0 : i.find((e) => "video" === e.type);
    if (null != P && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = h(P) ? (null != (m = P.packetsSent) ? m : 0) : null != (g = P.packetsReceived) ? g : 0,
            t = h(P) ? (null != (E = P.packetsLost) ? E : 0) : null != (b = P.packetsLost) ? b : 0,
            r = h(P) ? (null != (y = P.frameRateEncode) ? y : 0) : null != (O = P.frameRateDecode) ? O : 0,
            i = h(P) && null != (v = P.videoEntropy) ? v : 0,
            a = null != (I = null == (p = P.resolution) ? void 0 : p.height) ? I : 0;
        (n.frameRateAggregated -= r),
            (n.resolutionAggregated -= a),
            (n.entropyAggregated -= i),
            (n.packetsSentOrReceived = S - e),
            (n.packetsLost = A - t);
    } else (n.packetsSentOrReceived = S), (n.packetsLost = A);
    return (
        (n.frameRate = n.frameRateAggregated / n.numDatapoints),
        (n.resolution = n.resolutionAggregated / n.numDatapoints),
        (n.entropy = n.entropyAggregated / n.numDatapoints),
        (n.packetLossRate = n.packetsLost / (n.packetsSentOrReceived + n.packetsLost)),
        n
    );
}
function g(e, t, n, r) {
    var i, a;
    null == e[t] && (e[t] = {});
    let o = s.default.getId();
    for (let s of ((e[t][o] = m(
        n.version,
        null != (i = null == r ? void 0 : r.version) ? i : 0,
        e[t][o],
        n.stats.rtp.outbound,
        null == r ? void 0 : r.stats.rtp.outbound,
    )),
    Object.keys(n.stats.rtp.inbound)))
        e[t][s] = m(
            n.version,
            null != (a = null == r ? void 0 : r.version) ? a : 0,
            e[t][s],
            n.stats.rtp.inbound[s],
            null == r ? void 0 : r.stats.rtp.inbound[s],
        );
}
function E(e) {
    let { connectionStats: t } = e,
        n = {};
    for (let e of t) {
        var r;
        let t,
            { mediaEngineConnectionId: i } = e;
        0 !== i.length &&
            ((n[i] = e),
            i in f || (f[i] = []),
            f[i].push(e),
            f[i].length > u && (t = f[i].shift()),
            g(p, i, e, null != (r = I(i, d)) ? r : void 0),
            g(_, i, e, t));
    }
}
function b(e, t) {
    var n, r;
    (null == (n = _[e]) ? void 0 : n[t]) != null && delete _[e][t],
        (null == (r = p[e]) ? void 0 : r[t]) != null && delete p[e][t];
}
function y(e) {
    let { mediaEngineConnectionId: t } = e;
    null != t && (delete f[t], delete _[t], delete p[t]);
}
function O(e) {
    let { userId: t, mediaEngineConnectionId: n } = e;
    if (null == n) return !1;
    b(n, t);
}
function v(e) {
    var t;
    let { streamKey: n, paused: r } = e;
    if (r) return !1;
    let i = null == (t = l.Z.getRTCConnection(n)) ? void 0 : t.getMediaEngineConnectionId();
    if (null == i) return !1;
    b(i, (0, o.my)(n).ownerId);
}
function I(e, t) {
    if (null == e) return null;
    let n = f[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class T extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default, l.Z);
    }
    getConnectionStats(e) {
        return I(e, 0);
    }
    getLastConnectionStats(e) {
        return I(e, 1);
    }
    getStatsHistory(e) {
        var t;
        return null == e ? [] : null != (t = f[e]) ? t : [];
    }
    getAccumulatedPerformanceStats(e, t, n) {
        var r, i;
        return null == e ? null : null != (i = null == (r = ("long" === n ? _ : p)[e]) ? void 0 : r[t]) ? i : null;
    }
}
c(T, "displayName", "MediaEngineStatsStore");
let S = new T(a.Z, {
    MEDIA_ENGINE_CONNECTION_STATS: E,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: y,
    STREAM_UPDATE: v,
    RTC_CONNECTION_VIDEO: O,
});
