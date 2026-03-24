"use strict";
let r;
n.d(t, { A: () => z });
var i = n(284009),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(311907),
    u = n(205693),
    c = n(73153),
    d = n(15285),
    _ = n(13433),
    f = n(652896),
    p = n(834757),
    h = n(254057),
    m = n(723702),
    E = n(961350),
    g = n(430452),
    A = n(290863),
    I = n(383501),
    T = n(652215),
    S = n(502075);
let y = {},
    v = {},
    N = {},
    C = {},
    R = {},
    O = {},
    b = T.SO9.THEATRE,
    D = {};
function L(e, t, n, i) {
    return (
        s()(null != r, "Creating RTCConnection without session."),
        new _.A({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: b,
            analyticsContext: i,
            parentMediaSessionId: I.A.getMediaSessionId(),
        })
    );
}
function w() {
    o().forEach(D, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete D[t], delete O[t];
    });
}
function M(e) {
    (r = e.sessionId), w();
}
function x() {
    (r = null), w();
}
function P(e) {
    let {
            streamType: t,
            guildId: n,
            channelId: r,
            appContext: i,
            pid: s,
            sourceId: a,
            sourcePid: l,
            nativePickerStyleUsed: u,
            goLiveModalDurationMs: c,
            analyticsLocations: _,
        } = e,
        p = (0, f._z)({ streamType: t, guildId: n, channelId: r, ownerId: E.default.getId() });
    if (
        ((y[p] = { appContext: i, analyticsLocations: _ }),
        o().forEach(D, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(u), n && t.trackStart();
        }),
        null == s && (s = l),
        (C[p] = a),
        (N[p] = s),
        null != s)
    ) {
        let e = d.Ay.getGameForPID(s);
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
    null != c ? (R[p] = c) : delete R[p];
}
function k(e) {
    let { appContext: t, streamKey: n } = e;
    (y[n] = { appContext: t, analyticsLocations: void 0 }),
        o().forEach(D, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (C[n] = null),
        (N[n] = null),
        delete R[n];
}
function U(e) {
    let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: i, viewerIds: s } = e,
        a = D[t],
        o = (0, f.Iy)(t);
    if (null == a && null != n) {
        null == N[t] && (v[t] = null), null == v[t] && null == C[t] && (v[t] = (0, p.Ee)(o, A.A));
        let e = new _.t({
            streamRegion: i,
            streamApplication: v[t],
            streamSourceType: K(C[t]),
            actionContext: y[t]?.appContext,
            numViewers: null != s ? s.length : 0,
            goLiveModalDurationMs: R[t],
            analyticsLocations: y[t]?.analyticsLocations,
        });
        (a = L(t, n, r, e)), (D[t] = a);
    }
    delete O[t],
        c.h.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: a.getMediaEngineConnectionId(),
        });
}
function G(e) {
    let t = D[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function F(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = D[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function V(e) {
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
function B(e) {
    let { layout: t } = e;
    (b = t), Object.values(D).forEach((e) => e.layoutChange(t));
}
function H() {
    return !0;
}
function j(e) {
    let { context: t, wants: n, userId: r, guildId: i, channelId: s } = e,
        a = (0, f._z)({ streamType: null == i ? S.U4.CALL : S.U4.GUILD, guildId: i, channelId: s, ownerId: r });
    if (
        t !== u.x.STREAM ||
        null == D[a] ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    O[a] = performance.now();
}
function Y(e) {
    return o().some(D, (t) => t === e.connection);
}
function W(e) {
    let { streamId: t, dimensions: n, zoom: r } = e;
    o().forEach(D, (e) => {
        e?.setVideoSize(t, n, r);
    });
}
function K(e) {
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
class $ extends l.Ay.Store {
    initialize() {
        this.waitFor(E.default, g.Ay, I.A, d.Ay);
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
        return (0, h.A)(g.Ay) && null != e ? (D[e]?.quality ?? T.bFR.UNKNOWN) : T.bFR.UNKNOWN;
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
        return C[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return O[e];
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
let z = new $(
    c.h,
    !g.Ay.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: M,
              CONNECTION_CLOSED: x,
              RTC_CONNECTION_STATE: H,
              RTC_CONNECTION_PING: H,
              RTC_CONNECTION_LOSS_RATE: H,
              RTC_CONNECTION_UPDATE_ID: Y,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: H,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: j,
              STREAM_START: P,
              STREAM_STOP: k,
              STREAM_CREATE: U,
              STREAM_SERVER_UPDATE: G,
              STREAM_UPDATE: F,
              STREAM_DELETE: V,
              STREAM_LAYOUT_UPDATE: B,
              VIDEO_SIZE_UPDATE: W,
          },
);
