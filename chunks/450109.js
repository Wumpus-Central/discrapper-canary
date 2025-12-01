n.d(t, { Z: () => T }), n(388685), n(539854);
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
    p = {},
    _ = {};
function m(e) {
    return "packetsSent" in e;
}
function h(e, t, n, r, i) {
    var a, o, s, l, c, u, d, f, p, _, h, g, E, b, y, O, v, S;
    let I = r.find((e) => "video" === e.type);
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
        null == I)
    )
        return n;
    let T = m(I) ? (null != (o = I.packetsSent) ? o : 0) : null != (s = I.packetsReceived) ? s : 0,
        A = m(I) ? (null != (l = I.packetsLost) ? l : 0) : null != (c = I.packetsLost) ? c : 0,
        C = m(I) ? (null != (u = I.frameRateEncode) ? u : 0) : null != (d = I.frameRateDecode) ? d : 0,
        N = null != (f = null == (a = I.resolution) ? void 0 : a.height) ? f : 0,
        P = m(I) && null != (p = I.videoEntropy) ? p : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += C), (n.resolutionAggregated += N), (n.entropyAggregated += P);
    let R = null == i ? void 0 : i.find((e) => "video" === e.type);
    if (null != R && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = m(R) ? (null != (h = R.packetsSent) ? h : 0) : null != (g = R.packetsReceived) ? g : 0,
            t = m(R) ? (null != (E = R.packetsLost) ? E : 0) : null != (b = R.packetsLost) ? b : 0,
            r = m(R) ? (null != (y = R.frameRateEncode) ? y : 0) : null != (O = R.frameRateDecode) ? O : 0,
            i = m(R) && null != (v = R.videoEntropy) ? v : 0,
            a = null != (S = null == (_ = R.resolution) ? void 0 : _.height) ? S : 0;
        (n.frameRateAggregated -= r),
            (n.resolutionAggregated -= a),
            (n.entropyAggregated -= i),
            (n.packetsSentOrReceived = T - e),
            (n.packetsLost = A - t);
    } else (n.packetsSentOrReceived = T), (n.packetsLost = A);
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
    for (let s of ((e[t][o] = h(
        n.version,
        null != (i = null == r ? void 0 : r.version) ? i : 0,
        e[t][o],
        n.stats.rtp.outbound,
        null == r ? void 0 : r.stats.rtp.outbound,
    )),
    Object.keys(n.stats.rtp.inbound)))
        e[t][s] = h(
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
            g(_, i, e, null != (r = S(i, d)) ? r : void 0),
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
function v(e) {
    var t;
    let { streamKey: n, paused: r } = e;
    if (r) return !1;
    let i = null == (t = l.Z.getRTCConnection(n)) ? void 0 : t.getMediaEngineConnectionId();
    if (null == i) return !1;
    b(i, (0, o.my)(n).ownerId);
}
function S(e, t) {
    if (null == e) return null;
    let n = f[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class I extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default, l.Z);
    }
    getConnectionStats(e) {
        return S(e, 0);
    }
    getLastConnectionStats(e) {
        return S(e, 1);
    }
    getStatsHistory(e) {
        var t;
        return null == e ? [] : null != (t = f[e]) ? t : [];
    }
    getAccumulatedPerformanceStats(e, t, n) {
        var r, i;
        return null == e ? null : null != (i = null == (r = ("long" === n ? p : _)[e]) ? void 0 : r[t]) ? i : null;
    }
}
c(I, "displayName", "MediaEngineStatsStore");
let T = new I(a.Z, {
    MEDIA_ENGINE_CONNECTION_STATS: E,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: y,
    STREAM_UPDATE: v,
    RTC_CONNECTION_VIDEO: O,
});
