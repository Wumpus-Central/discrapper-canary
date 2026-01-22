n.d(t, { A: () => I }), n(896048), n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(652896),
    o = n(961350),
    l = n(162605);
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
    p = {},
    _ = {};
function h(e) {
    return "packetsSent" in e;
}
function m(e, t, n, r, i) {
    var a, s, o, l, c, u, d, f, p, _, m, g, E, b, y, O, A, v;
    let S = r.find((e) => "video" === e.type);
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
        null == S)
    )
        return n;
    let I = h(S) ? (null != (a = S.packetsSent) ? a : 0) : null != (s = S.packetsReceived) ? s : 0,
        T = h(S) ? (null != (o = S.packetsLost) ? o : 0) : null != (l = S.packetsLost) ? l : 0,
        C = h(S) ? (null != (c = S.frameRateEncode) ? c : 0) : null != (u = S.frameRateDecode) ? u : 0,
        N = null != (d = null == (p = S.resolution) ? void 0 : p.height) ? d : 0,
        R = h(S) && null != (f = S.videoEntropy) ? f : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += C), (n.resolutionAggregated += N), (n.entropyAggregated += R);
    let w = null == i ? void 0 : i.find((e) => "video" === e.type);
    if (null != w && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = h(w) ? (null != (_ = w.packetsSent) ? _ : 0) : null != (m = w.packetsReceived) ? m : 0,
            t = h(w) ? (null != (g = w.packetsLost) ? g : 0) : null != (E = w.packetsLost) ? E : 0,
            r = h(w) ? (null != (b = w.frameRateEncode) ? b : 0) : null != (y = w.frameRateDecode) ? y : 0,
            i = h(w) && null != (O = w.videoEntropy) ? O : 0,
            a = null != (A = null == (v = w.resolution) ? void 0 : v.height) ? A : 0;
        (n.frameRateAggregated -= r),
            (n.resolutionAggregated -= a),
            (n.entropyAggregated -= i),
            (n.packetsSentOrReceived = I - e),
            (n.packetsLost = T - t);
    } else (n.packetsSentOrReceived = I), (n.packetsLost = T);
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
    let s = o.default.getId();
    for (let o of ((e[t][s] = m(
        n.version,
        null != (i = null == r ? void 0 : r.version) ? i : 0,
        e[t][s],
        n.stats.rtp.outbound,
        null == r ? void 0 : r.stats.rtp.outbound,
    )),
    Object.keys(n.stats.rtp.inbound)))
        e[t][o] = m(
            n.version,
            null != (a = null == r ? void 0 : r.version) ? a : 0,
            e[t][o],
            n.stats.rtp.inbound[o],
            null == r ? void 0 : r.stats.rtp.inbound[o],
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
            g(_, i, e, null != (r = v(i, d)) ? r : void 0),
            g(p, i, e, t));
    }
}
function b(e, t) {
    var n, r;
    (null == (n = p[e]) ? void 0 : n[t]) != null && delete p[e][t],
        (null == (r = _[e]) ? void 0 : r[t]) != null && delete _[e][t];
}
function y(e) {
    let { mediaEngineConnectionId: t } = e;
    null != t && (delete f[t], delete p[t], delete _[t]);
}
function O(e) {
    let { userId: t, mediaEngineConnectionId: n } = e;
    if (null == n) return !1;
    b(n, t);
}
function A(e) {
    var t;
    let { streamKey: n, paused: r } = e;
    if (r) return !1;
    let i = null == (t = l.A.getRTCConnection(n)) ? void 0 : t.getMediaEngineConnectionId();
    if (null == i) return !1;
    b(i, (0, s.Iy)(n).ownerId);
}
function v(e, t) {
    if (null == e) return null;
    let n = f[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class S extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default, l.A);
    }
    getConnectionStats(e) {
        return v(e, 0);
    }
    getLastConnectionStats(e) {
        return v(e, 1);
    }
    getStatsHistory(e) {
        var t;
        return null == e ? [] : null != (t = f[e]) ? t : [];
    }
    getAccumulatedPerformanceStats(e, t, n) {
        var r, i;
        return null == e ? null : null != (r = null == (i = ("long" === n ? p : _)[e]) ? void 0 : i[t]) ? r : null;
    }
}
c(S, "displayName", "MediaEngineStatsStore");
let I = new S(a.h, {
    MEDIA_ENGINE_CONNECTION_STATS: E,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: y,
    STREAM_UPDATE: A,
    RTC_CONNECTION_VIDEO: O,
});
