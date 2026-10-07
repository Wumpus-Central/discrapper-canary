(n.d(t, { A: () => h }), n(321073));
var i = n(17928),
    r = n(73153),
    a = n(280450);
let s = {},
    l = {},
    o = {};
function d(e) {
    return "packetsSent" in e;
}
function c(e, t, n, i, r) {
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
    let s = d(a) ? (a.packetsSent ?? 0) : (a.packetsReceived ?? 0),
        l = (d(a), a.packetsLost ?? 0),
        o = d(a) ? (a.frameRateEncode ?? 0) : (a.frameRateDecode ?? 0),
        c = a.resolution?.height ?? 0,
        u = d(a) ? (a.videoEntropy ?? 0) : 0;
    ((n.numDatapoints += 1), (n.frameRateAggregated += o), (n.resolutionAggregated += c), (n.entropyAggregated += u));
    let _ = r?.find((e) => "video" === e.type);
    if (null != _ && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = d(_) ? (_.packetsSent ?? 0) : (_.packetsReceived ?? 0),
            t = (d(_), _.packetsLost ?? 0),
            i = d(_) ? (_.frameRateEncode ?? 0) : (_.frameRateDecode ?? 0),
            r = d(_) ? (_.videoEntropy ?? 0) : 0,
            a = _.resolution?.height ?? 0;
        ((n.frameRateAggregated -= i),
            (n.resolutionAggregated -= a),
            (n.entropyAggregated -= r),
            (n.packetsSentOrReceived = s - e),
            (n.packetsLost = l - t));
    } else ((n.packetsSentOrReceived = s), (n.packetsLost = l));
    return (
        (n.frameRate = n.frameRateAggregated / n.numDatapoints),
        (n.resolution = n.resolutionAggregated / n.numDatapoints),
        (n.entropy = n.entropyAggregated / n.numDatapoints),
        (n.packetLossRate = n.packetsLost / (n.packetsSentOrReceived + n.packetsLost)),
        n
    );
}
function u(e, t, n, i) {
    null == e[t] && (e[t] = {});
    let r = a.default.getId();
    for (let a of ((e[t][r] = c(n.version, i?.version ?? 0, e[t][r], n.stats.rtp.outbound, i?.stats.rtp.outbound)),
    Object.keys(n.stats.rtp.inbound)))
        e[t][a] = c(n.version, i?.version ?? 0, e[t][a], n.stats.rtp.inbound[a], i?.stats.rtp.inbound[a]);
}
function _(e, t) {
    (l[e]?.[t] != null && delete l[e][t], o[e]?.[t] != null && delete o[e][t]);
}
function E(e, t) {
    if (null == e) return null;
    let n = s[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1];
}
class A extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    static displayName = "MediaEngineStatsStore";
    getConnectionStats(e) {
        return E(e, 0);
    }
    getLastConnectionStats(e) {
        return E(e, 1);
    }
    getStatsHistory(e) {
        return null == e ? [] : (s[e] ?? []);
    }
    getAccumulatedPerformanceStats(e, t, n) {
        if (null == e) return null;
        let i = "long" === n ? l : o;
        return i[e]?.[t] ?? null;
    }
}
let h = new A(r.h, {
    MEDIA_ENGINE_CONNECTION_STATS: function (e) {
        let { connectionStats: t } = e,
            n = {};
        for (let e of t) {
            let t,
                { mediaEngineConnectionId: i } = e;
            0 !== i.length &&
                ((n[i] = e),
                i in s || (s[i] = []),
                s[i].push(e),
                s[i].length > 30 && (t = s[i].shift()),
                u(o, i, e, E(i, 15) ?? void 0),
                u(l, i, e, t));
        }
    },
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: function (e) {
        let { mediaEngineConnectionId: t } = e;
        null != t && (delete s[t], delete l[t], delete o[t]);
    },
    MEDIA_ENGINE_CONNECTION_USER_STATS_RESET: function (e) {
        let { mediaEngineConnectionId: t, userId: n } = e;
        _(t, n);
    },
    RTC_CONNECTION_VIDEO: function (e) {
        let { userId: t, mediaEngineConnectionId: n } = e;
        if (null == n) return !1;
        _(n, t);
    },
});
