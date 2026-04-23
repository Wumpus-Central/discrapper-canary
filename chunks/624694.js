"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(652896),
    a = n(495544),
    o = n(116956);
let l = {},
    d = {},
    _ = {};
function u(e) {
    return "packetsSent" in e;
}
function c(e, t, n, i, r) {
    let s = i.find((e) => "video" === e.type);
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
        null == s)
    )
        return n;
    let a = u(s) ? (s.packetsSent ?? 0) : (s.packetsReceived ?? 0),
        o = (u(s), s.packetsLost ?? 0),
        l = u(s) ? (s.frameRateEncode ?? 0) : (s.frameRateDecode ?? 0),
        d = s.resolution?.height ?? 0,
        _ = u(s) ? (s.videoEntropy ?? 0) : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += l), (n.resolutionAggregated += d), (n.entropyAggregated += _);
    let c = r?.find((e) => "video" === e.type);
    if (null != c && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = u(c) ? (c.packetsSent ?? 0) : (c.packetsReceived ?? 0),
            t = (u(c), c.packetsLost ?? 0),
            i = u(c) ? (c.frameRateEncode ?? 0) : (c.frameRateDecode ?? 0),
            r = u(c) ? (c.videoEntropy ?? 0) : 0,
            s = c.resolution?.height ?? 0;
        (n.frameRateAggregated -= i),
            (n.resolutionAggregated -= s),
            (n.entropyAggregated -= r),
            (n.packetsSentOrReceived = a - e),
            (n.packetsLost = o - t);
    } else (n.packetsSentOrReceived = a), (n.packetsLost = o);
    return (
        (n.frameRate = n.frameRateAggregated / n.numDatapoints),
        (n.resolution = n.resolutionAggregated / n.numDatapoints),
        (n.entropy = n.entropyAggregated / n.numDatapoints),
        (n.packetLossRate = n.packetsLost / (n.packetsSentOrReceived + n.packetsLost)),
        n
    );
}
function E(e, t, n, i) {
    null == e[t] && (e[t] = {});
    let r = a.default.getId();
    for (let s of ((e[t][r] = c(n.version, i?.version ?? 0, e[t][r], n.stats.rtp.outbound, i?.stats.rtp.outbound)),
    Object.keys(n.stats.rtp.inbound)))
        e[t][s] = c(n.version, i?.version ?? 0, e[t][s], n.stats.rtp.inbound[s], i?.stats.rtp.inbound[s]);
}
function h(e, t) {
    d[e]?.[t] != null && delete d[e][t], _[e]?.[t] != null && delete _[e][t];
}
function m(e, t) {
    if (null == e) return null;
    let n = l[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default, o.A);
    }
    static displayName = "MediaEngineStatsStore";
    getConnectionStats(e) {
        return m(e, 0);
    }
    getLastConnectionStats(e) {
        return m(e, 1);
    }
    getStatsHistory(e) {
        return null == e ? [] : (l[e] ?? []);
    }
    getAccumulatedPerformanceStats(e, t, n) {
        if (null == e) return null;
        let i = "long" === n ? d : _;
        return i[e]?.[t] ?? null;
    }
}
let g = new f(r.h, {
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e,
            n = {};
        for (let e of t) {
            let t,
                { mediaEngineConnectionId: i } = e;
            0 !== i.length &&
                ((n[i] = e),
                i in l || (l[i] = []),
                l[i].push(e),
                l[i].length > 30 && (t = l[i].shift()),
                E(_, i, e, m(i, 15) ?? void 0),
                E(d, i, e, t));
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function (e) {
        let { mediaEngineConnectionId: t } = e;
        null != t && (delete l[t], delete d[t], delete _[t]);
    },
    STREAM_UPDATE: function (e) {
        let { streamKey: t, paused: n } = e;
        if (n) return !1;
        let i = o.A.getRTCConnection(t)?.getMediaEngineConnectionId();
        if (null == i) return !1;
        h(i, (0, s.Iy)(t).ownerId);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, mediaEngineConnectionId: n } = e;
        if (null == n) return !1;
        h(n, t);
    },
});
