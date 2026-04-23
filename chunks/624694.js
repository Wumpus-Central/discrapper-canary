"use strict";
n.d(t, { A: () => m }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(652896),
    a = n(961350),
    o = n(162605);
let l = {},
    u = {},
    c = {};
function d(e) {
    return "packetsSent" in e;
}
function _(e, t, n, r, i) {
    let s = r.find((e) => "video" === e.type);
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
    let a = d(s) ? (s.packetsSent ?? 0) : (s.packetsReceived ?? 0),
        o = (d(s), s.packetsLost ?? 0),
        l = d(s) ? (s.frameRateEncode ?? 0) : (s.frameRateDecode ?? 0),
        u = s.resolution?.height ?? 0,
        c = d(s) ? (s.videoEntropy ?? 0) : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += l), (n.resolutionAggregated += u), (n.entropyAggregated += c);
    let _ = i?.find((e) => "video" === e.type);
    if (null != _ && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = d(_) ? (_.packetsSent ?? 0) : (_.packetsReceived ?? 0),
            t = (d(_), _.packetsLost ?? 0),
            r = d(_) ? (_.frameRateEncode ?? 0) : (_.frameRateDecode ?? 0),
            i = d(_) ? (_.videoEntropy ?? 0) : 0,
            s = _.resolution?.height ?? 0;
        (n.frameRateAggregated -= r),
            (n.resolutionAggregated -= s),
            (n.entropyAggregated -= i),
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
function f(e, t, n, r) {
    null == e[t] && (e[t] = {});
    let i = a.default.getId();
    for (let s of ((e[t][i] = _(n.version, r?.version ?? 0, e[t][i], n.stats.rtp.outbound, r?.stats.rtp.outbound)),
    Object.keys(n.stats.rtp.inbound)))
        e[t][s] = _(n.version, r?.version ?? 0, e[t][s], n.stats.rtp.inbound[s], r?.stats.rtp.inbound[s]);
}
function p(e, t) {
    u[e]?.[t] != null && delete u[e][t], c[e]?.[t] != null && delete c[e][t];
}
function h(e, t) {
    if (null == e) return null;
    let n = l[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class E extends r.Ay.Store {
    initialize() {
        this.waitFor(a.default, o.A);
    }
    static displayName = "MediaEngineStatsStore";
    getConnectionStats(e) {
        return h(e, 0);
    }
    getLastConnectionStats(e) {
        return h(e, 1);
    }
    getStatsHistory(e) {
        return null == e ? [] : (l[e] ?? []);
    }
    getAccumulatedPerformanceStats(e, t, n) {
        if (null == e) return null;
        let r = "long" === n ? u : c;
        return r[e]?.[t] ?? null;
    }
}
let m = new E(i.h, {
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e,
            n = {};
        for (let e of t) {
            let t,
                { mediaEngineConnectionId: r } = e;
            0 !== r.length &&
                ((n[r] = e),
                r in l || (l[r] = []),
                l[r].push(e),
                l[r].length > 30 && (t = l[r].shift()),
                f(c, r, e, h(r, 15) ?? void 0),
                f(u, r, e, t));
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function (e) {
        let { mediaEngineConnectionId: t } = e;
        null != t && (delete l[t], delete u[t], delete c[t]);
    },
    STREAM_UPDATE: function (e) {
        let { streamKey: t, paused: n } = e;
        if (n) return !1;
        let r = o.A.getRTCConnection(t)?.getMediaEngineConnectionId();
        if (null == r) return !1;
        p(r, (0, s.Iy)(t).ownerId);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, mediaEngineConnectionId: n } = e;
        if (null == n) return !1;
        p(n, t);
    },
});
