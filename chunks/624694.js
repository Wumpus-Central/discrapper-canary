"use strict";
n.d(t, { A: () => S }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(652896),
    s = n(961350),
    o = n(162605);
let l = 30,
    u = 15,
    c = {},
    d = {},
    _ = {};
function f(e) {
    return "packetsSent" in e;
}
function p(e, t, n, r, i) {
    let a = r.find((e) => "video" === e.type);
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
        null == a)
    )
        return n;
    let s = f(a) ? (a.packetsSent ?? 0) : (a.packetsReceived ?? 0),
        o = (f(a), a.packetsLost ?? 0),
        l = f(a) ? (a.frameRateEncode ?? 0) : (a.frameRateDecode ?? 0),
        u = a.resolution?.height ?? 0,
        c = f(a) ? (a.videoEntropy ?? 0) : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += l), (n.resolutionAggregated += u), (n.entropyAggregated += c);
    let d = i?.find((e) => "video" === e.type);
    if (null != d && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = f(d) ? (d.packetsSent ?? 0) : (d.packetsReceived ?? 0),
            t = (f(d), d.packetsLost ?? 0),
            r = f(d) ? (d.frameRateEncode ?? 0) : (d.frameRateDecode ?? 0),
            i = f(d) ? (d.videoEntropy ?? 0) : 0,
            a = d.resolution?.height ?? 0;
        (n.frameRateAggregated -= r),
            (n.resolutionAggregated -= a),
            (n.entropyAggregated -= i),
            (n.packetsSentOrReceived = s - e),
            (n.packetsLost = o - t);
    } else (n.packetsSentOrReceived = s), (n.packetsLost = o);
    return (
        (n.frameRate = n.frameRateAggregated / n.numDatapoints),
        (n.resolution = n.resolutionAggregated / n.numDatapoints),
        (n.entropy = n.entropyAggregated / n.numDatapoints),
        (n.packetLossRate = n.packetsLost / (n.packetsSentOrReceived + n.packetsLost)),
        n
    );
}
function h(e, t, n, r) {
    null == e[t] && (e[t] = {});
    let i = s.default.getId();
    for (let a of ((e[t][i] = p(n.version, r?.version ?? 0, e[t][i], n.stats.rtp.outbound, r?.stats.rtp.outbound)),
    Object.keys(n.stats.rtp.inbound)))
        e[t][a] = p(n.version, r?.version ?? 0, e[t][a], n.stats.rtp.inbound[a], r?.stats.rtp.inbound[a]);
}
function m(e) {
    let { connectionStats: t } = e,
        n = {};
    for (let e of t) {
        let t,
            { mediaEngineConnectionId: r } = e;
        0 !== r.length &&
            ((n[r] = e),
            r in c || (c[r] = []),
            c[r].push(e),
            c[r].length > l && (t = c[r].shift()),
            h(_, r, e, T(r, u) ?? void 0),
            h(d, r, e, t));
    }
}
function g(e, t) {
    d[e]?.[t] != null && delete d[e][t], _[e]?.[t] != null && delete _[e][t];
}
function E(e) {
    let { mediaEngineConnectionId: t } = e;
    null != t && (delete c[t], delete d[t], delete _[t]);
}
function A(e) {
    let { userId: t, mediaEngineConnectionId: n } = e;
    if (null == n) return !1;
    g(n, t);
}
function I(e) {
    let { streamKey: t, paused: n } = e;
    if (n) return !1;
    let r = o.A.getRTCConnection(t)?.getMediaEngineConnectionId();
    if (null == r) return !1;
    g(r, (0, a.Iy)(t).ownerId);
}
function T(e, t) {
    if (null == e) return null;
    let n = c[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class y extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default, o.A);
    }
    static displayName = "MediaEngineStatsStore";
    getConnectionStats(e) {
        return T(e, 0);
    }
    getLastConnectionStats(e) {
        return T(e, 1);
    }
    getStatsHistory(e) {
        return null == e ? [] : (c[e] ?? []);
    }
    getAccumulatedPerformanceStats(e, t, n) {
        if (null == e) return null;
        let r = "long" === n ? d : _;
        return r[e]?.[t] ?? null;
    }
}
let S = new y(i.h, {
    MEDIA_ENGINE_CONNECTION_STATS: m,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: E,
    STREAM_UPDATE: I,
    RTC_CONNECTION_VIDEO: A,
});
