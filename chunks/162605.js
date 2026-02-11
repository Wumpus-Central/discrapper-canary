"use strict";
let r;
n.d(t, { A: () => Z });
var i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(311907),
    u = n(205693),
    c = n(73153),
    d = n(15285),
    _ = n(13433),
    f = n(652896),
    h = n(834757),
    p = n(254057),
    g = n(723702),
    E = n(961350),
    A = n(430452),
    I = n(290863),
    T = n(383501),
    y = n(652215),
    S = n(502075);
let v = {},
    C = {},
    b = {},
    N = {},
    R = {},
    O = {},
    D = y.SO9.THEATRE,
    L = {};
function w(e, t, n, i) {
    return (
        a()(null != r, "Creating RTCConnection without session."),
        new _.A({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: D,
            analyticsContext: i,
            parentMediaSessionId: T.A.getMediaSessionId(),
        })
    );
}
function x() {
    o().forEach(L, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete L[t], delete O[t];
    });
}
function P(e) {
    (r = e.sessionId), x();
}
function M() {
    (r = null), x();
}
function k(e) {
    let {
            streamType: t,
            guildId: n,
            channelId: r,
            appContext: i,
            pid: a,
            sourceId: s,
            sourcePid: l,
            nativePickerStyleUsed: u,
            goLiveModalDurationMs: c,
            analyticsLocations: _,
        } = e,
        h = (0, f._z)({ streamType: t, guildId: n, channelId: r, ownerId: E.default.getId() });
    if (
        ((v[h] = { appContext: i, analyticsLocations: _ }),
        o().forEach(L, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(u), n && t.trackStart();
        }),
        null == a && (a = l),
        (N[h] = s),
        (b[h] = a),
        null != a)
    ) {
        let e = d.Ay.getGameForPID(a);
        null != e &&
            (C[h] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor,
                sku: e.sku,
                gameMetadata: e.gameMetadata,
            }),
            L[h]?.analyticsContext.updateStreamApplication(C[h]);
    } else L[h]?.analyticsContext.updateStreamApplication(null);
    null != c ? (R[h] = c) : delete R[h];
}
function U(e) {
    let { appContext: t, streamKey: n } = e;
    (v[n] = { appContext: t, analyticsLocations: void 0 }),
        o().forEach(L, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (N[n] = null),
        (b[n] = null),
        delete R[n];
}
function G(e) {
    let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: i, viewerIds: a } = e,
        s = L[t],
        o = (0, f.Iy)(t);
    if (null == s && null != n) {
        null == b[t] && (C[t] = null), null == C[t] && null == N[t] && (C[t] = (0, h.Ee)(o, I.A));
        let e = new _.t({
            streamRegion: i,
            streamApplication: C[t],
            streamSourceType: q(N[t]),
            actionContext: v[t]?.appContext,
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: R[t],
            analyticsLocations: v[t]?.analyticsLocations,
        });
        (s = w(t, n, r, e)), (L[t] = s);
    }
    delete O[t],
        c.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: s.getMediaEngineConnectionId(),
        });
}
function F(e) {
    let t = L[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function V(e) {
    let { connectionStats: t } = e;
    o().forEach(L, (e, n) => {
        e.updateStats(t);
    });
}
function B(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = L[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function j(e) {
    let { streamKey: t } = e,
        n = L[t];
    if (null == n) return !1;
    c.h.dispatch({
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: n.getMediaEngineConnectionId(),
    }),
        n.destroy("stream-end"),
        delete L[t];
}
function H(e) {
    let { layout: t } = e;
    (D = t), Object.values(L).forEach((e) => e.layoutChange(t));
}
function Y() {
    return !0;
}
function W(e) {
    let { context: t, wants: n, userId: r, guildId: i, channelId: a } = e,
        s = (0, f._z)({ streamType: null == i ? S.U4.CALL : S.U4.GUILD, guildId: i, channelId: a, ownerId: r });
    if (
        t !== u.x.STREAM ||
        null == L[s] ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    O[s] = performance.now();
}
function K(e) {
    return o().some(L, (t) => t === e.connection);
}
function $(e) {
    let { userId: t, context: n, quality: r } = e;
    o().forEach(L, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function z(e) {
    let { streamId: t, dimensions: n, zoom: r } = e;
    o().forEach(L, (e) => {
        e?.setVideoSize(t, n, r);
    });
}
function q(e) {
    if (null == e) return "unknown";
    if (g.isPlatformEmbedded || platform?.name === "Chrome") {
        if (e.startsWith("web-contents-media-stream:")) return "tab";
        else if (e.startsWith("window:")) return "window";
        else if (e.startsWith("screen:")) return "screen";
    } else if (platform?.name === "Firefox")
        if ("" !== e) return "window";
        else return "screen";
    else if (platform?.name === "Safari") return "window";
    return "unknown";
}
class X extends l.Ay.Store {
    initialize() {
        this.waitFor(E.default, A.Ay, T.A, d.Ay);
    }
    static displayName = "StreamRTCConnectionStore";
    getRTCConnections() {
        return L;
    }
    getAllActiveStreamKeys() {
        return Object.keys(L);
    }
    getRTCConnection(e) {
        return L[e];
    }
    getQuality(e) {
        return (0, p.A)(A.Ay) && null != e ? (L[e]?.quality ?? y.bFR.UNKNOWN) : y.bFR.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = L[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = L[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = L[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return "";
        let t = L[e];
        return null != t && null != t.hostname ? t.hostname : "";
    }
    getRegion(e) {
        if (null == e) return null;
        let t = L[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = L[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return N[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return O[e];
    }
    getUserIds(e) {
        let t = L[e];
        return t?.getUserIds();
    }
    isUserConnected(e, t) {
        let n = L[e];
        return n?.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = L[e];
        return t?.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = L[e],
            r = n?.getSecureFramesRosterMap();
        return r?.get(t);
    }
}
let Z = new X(
    c.h,
    !A.Ay.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: P,
              CONNECTION_CLOSED: M,
              RTC_CONNECTION_STATE: Y,
              RTC_CONNECTION_PING: Y,
              RTC_CONNECTION_LOSS_RATE: Y,
              RTC_CONNECTION_UPDATE_ID: K,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Y,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: W,
              STREAM_START: k,
              STREAM_STOP: U,
              STREAM_CREATE: G,
              STREAM_SERVER_UPDATE: F,
              STREAM_UPDATE: B,
              STREAM_DELETE: j,
              MEDIA_ENGINE_CONNECTION_STATS: V,
              STREAM_LAYOUT_UPDATE: H,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: $,
              VIDEO_SIZE_UPDATE: z,
          },
);
