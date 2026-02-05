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
    p = n(834757),
    h = n(254057),
    m = n(723702),
    g = n(961350),
    E = n(430452),
    A = n(290863),
    I = n(383501),
    T = n(652215),
    y = n(502075);
let S = {},
    v = {},
    C = {},
    b = {},
    N = {},
    R = {},
    O = T.SO9.THEATRE,
    D = {};
function L(e, t, n, i) {
    return (
        a()(null != r, "Creating RTCConnection without session."),
        new _.A({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: O,
            analyticsContext: i,
            parentMediaSessionId: I.A.getMediaSessionId(),
        })
    );
}
function w() {
    o().forEach(D, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete D[t], delete R[t];
    });
}
function x(e) {
    (r = e.sessionId), w();
}
function P() {
    (r = null), w();
}
function M(e) {
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
        p = (0, f._z)({ streamType: t, guildId: n, channelId: r, ownerId: g.default.getId() });
    if (
        ((S[p] = { appContext: i, analyticsLocations: _ }),
        o().forEach(D, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(u), n && t.trackStart();
        }),
        null == a && (a = l),
        (b[p] = s),
        (C[p] = a),
        null != a)
    ) {
        let e = d.Ay.getGameForPID(a);
        null != e &&
            (v[p] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor,
                sku: e.sku,
                gameMetadata: e.gameMetadata,
            }),
            D[p]?.analyticsContext.updateStreamApplication(v[p]);
    } else D[p]?.analyticsContext.updateStreamApplication(null);
    null != c ? (N[p] = c) : delete N[p];
}
function k(e) {
    let { appContext: t, streamKey: n } = e;
    (S[n] = { appContext: t, analyticsLocations: void 0 }),
        o().forEach(D, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (b[n] = null),
        (C[n] = null),
        delete N[n];
}
function U(e) {
    let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: i, viewerIds: a } = e,
        s = D[t],
        o = (0, f.Iy)(t);
    if (null == s && null != n) {
        null == C[t] && (v[t] = null), null == v[t] && null == b[t] && (v[t] = (0, p.Ee)(o, A.A));
        let e = new _.t({
            streamRegion: i,
            streamApplication: v[t],
            streamSourceType: $(b[t]),
            actionContext: S[t]?.appContext,
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: N[t],
            analyticsLocations: S[t]?.analyticsLocations,
        });
        (s = L(t, n, r, e)), (D[t] = s);
    }
    delete R[t],
        c.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: s.getMediaEngineConnectionId(),
        });
}
function G(e) {
    let t = D[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function V(e) {
    let { connectionStats: t } = e;
    o().forEach(D, (e, n) => {
        e.updateStats(t);
    });
}
function F(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = D[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function B(e) {
    let { streamKey: t } = e,
        n = D[t];
    if (null == n) return !1;
    c.h.dispatch({
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: n.getMediaEngineConnectionId(),
    }),
        n.destroy("stream-end"),
        delete D[t];
}
function j(e) {
    let { layout: t } = e;
    (O = t), Object.values(D).forEach((e) => e.layoutChange(t));
}
function H() {
    return !0;
}
function Y(e) {
    let { context: t, wants: n, userId: r, guildId: i, channelId: a } = e,
        s = (0, f._z)({ streamType: null == i ? y.U4.CALL : y.U4.GUILD, guildId: i, channelId: a, ownerId: r });
    if (
        t !== u.x.STREAM ||
        null == D[s] ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    R[s] = performance.now();
}
function W(e) {
    return o().some(D, (t) => t === e.connection);
}
function K(e) {
    let { userId: t, context: n, quality: r } = e;
    o().forEach(D, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function z(e) {
    let { streamId: t, dimensions: n, zoom: r } = e;
    o().forEach(D, (e) => {
        e?.setVideoSize(t, n, r);
    });
}
function $(e) {
    if (null == e) return "unknown";
    if (m.isPlatformEmbedded || platform?.name === "Chrome") {
        if (e.startsWith("web-contents-media-stream:")) return "tab";
        else if (e.startsWith("window:")) return "window";
        else if (e.startsWith("screen:")) return "screen";
    } else if (platform?.name === "Firefox")
        if ("" !== e) return "window";
        else return "screen";
    else if (platform?.name === "Safari") return "window";
    return "unknown";
}
class q extends l.Ay.Store {
    initialize() {
        this.waitFor(g.default, E.A, I.A, d.Ay);
    }
    static displayName = "StreamRTCConnectionStore";
    getRTCConnections() {
        return D;
    }
    getAllActiveStreamKeys() {
        return Object.keys(D);
    }
    getRTCConnection(e) {
        return D[e];
    }
    getQuality(e) {
        return (0, h.A)(E.A) && null != e ? (D[e]?.quality ?? T.bFR.UNKNOWN) : T.bFR.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = D[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = D[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return "";
        let t = D[e];
        return null != t && null != t.hostname ? t.hostname : "";
    }
    getRegion(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return b[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return R[e];
    }
    getUserIds(e) {
        let t = D[e];
        return t?.getUserIds();
    }
    isUserConnected(e, t) {
        let n = D[e];
        return n?.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = D[e];
        return t?.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = D[e],
            r = n?.getSecureFramesRosterMap();
        return r?.get(t);
    }
}
let Z = new q(
    c.h,
    !E.A.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: x,
              CONNECTION_CLOSED: P,
              RTC_CONNECTION_STATE: H,
              RTC_CONNECTION_PING: H,
              RTC_CONNECTION_LOSS_RATE: H,
              RTC_CONNECTION_UPDATE_ID: W,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: H,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: Y,
              STREAM_START: M,
              STREAM_STOP: k,
              STREAM_CREATE: U,
              STREAM_SERVER_UPDATE: G,
              STREAM_UPDATE: F,
              STREAM_DELETE: B,
              MEDIA_ENGINE_CONNECTION_STATS: V,
              STREAM_LAYOUT_UPDATE: j,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: K,
              VIDEO_SIZE_UPDATE: z,
          },
);
