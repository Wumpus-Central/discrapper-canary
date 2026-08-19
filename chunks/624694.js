"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(652896),
    s = n(280450),
    l = n(116956);
let o = {},
    d = {},
    c = {};
function u(e) {
    return "packetsSent" in e;
}
function _(e, t, n, i, r) {
    let a = i.find((e) => "video" === e.type);
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
    let s = u(a) ? (a.packetsSent ?? 0) : (a.packetsReceived ?? 0),
        l = (u(a), a.packetsLost ?? 0),
        o = u(a) ? (a.frameRateEncode ?? 0) : (a.frameRateDecode ?? 0),
        d = a.resolution?.height ?? 0,
        c = u(a) ? (a.videoEntropy ?? 0) : 0;
    (n.numDatapoints += 1), (n.frameRateAggregated += o), (n.resolutionAggregated += d), (n.entropyAggregated += c);
    let _ = r?.find((e) => "video" === e.type);
    if (null != _ && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = u(_) ? (_.packetsSent ?? 0) : (_.packetsReceived ?? 0),
            t = (u(_), _.packetsLost ?? 0),
            i = u(_) ? (_.frameRateEncode ?? 0) : (_.frameRateDecode ?? 0),
            r = u(_) ? (_.videoEntropy ?? 0) : 0,
            a = _.resolution?.height ?? 0;
        (n.frameRateAggregated -= i),
            (n.resolutionAggregated -= a),
            (n.entropyAggregated -= r),
            (n.packetsSentOrReceived = s - e),
            (n.packetsLost = l - t);
    } else (n.packetsSentOrReceived = s), (n.packetsLost = l);
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
    let r = s.default.getId();
    for (let a of ((e[t][r] = _(n.version, i?.version ?? 0, e[t][r], n.stats.rtp.outbound, i?.stats.rtp.outbound)),
    Object.keys(n.stats.rtp.inbound)))
        e[t][a] = _(n.version, i?.version ?? 0, e[t][a], n.stats.rtp.inbound[a], i?.stats.rtp.inbound[a]);
}
function A(e, t) {
    d[e]?.[t] != null && delete d[e][t], c[e]?.[t] != null && delete c[e][t];
}
function h(e, t) {
    if (null == e) return null;
    let n = o[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class I extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default, l.A);
    }
    static displayName = "MediaEngineStatsStore";
    getConnectionStats(e) {
        return h(e, 0);
    }
    getLastConnectionStats(e) {
        return h(e, 1);
    }
    getStatsHistory(e) {
        return null == e ? [] : (o[e] ?? []);
    }
    getAccumulatedPerformanceStats(e, t, n) {
        if (null == e) return null;
        let i = "long" === n ? d : c;
        return i[e]?.[t] ?? null;
    }
}
let f = new I(r.h, {
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e,
            n = {};
        for (let e of t) {
            let t,
                { mediaEngineConnectionId: i } = e;
            0 !== i.length &&
                ((n[i] = e),
                i in o || (o[i] = []),
                o[i].push(e),
                o[i].length > 30 && (t = o[i].shift()),
                E(c, i, e, h(i, 15) ?? void 0),
                E(d, i, e, t));
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function (e) {
        let { mediaEngineConnectionId: t } = e;
        null != t && (delete o[t], delete d[t], delete c[t]);
    },
    STREAM_UPDATE: function (e) {
        let { streamKey: t, paused: n } = e;
        if (n) return !1;
        let i = l.A.getRTCConnection(t)?.getMediaEngineConnectionId();
        if (null == i) return !1;
        A(i, (0, a.Iy)(t).ownerId);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, mediaEngineConnectionId: n } = e;
        if (null == n) return !1;
        A(n, t);
    },
});
