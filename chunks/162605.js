"use strict";
let r;
n.d(t, { A: () => P });
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
    E = n(723702),
    m = n(961350),
    g = n(430452),
    A = n(290863),
    I = n(383501),
    T = n(652215),
    S = n(502075);
let y = {},
    N = {},
    v = {},
    C = {},
    O = {},
    R = {},
    b = T.SO9.THEATRE,
    D = {};
function L() {
    o().forEach(D, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete D[t], delete R[t];
    });
}
function w() {
    return !0;
}
class M extends l.Ay.Store {
    initialize() {
        this.waitFor(m.default, g.Ay, I.A, d.Ay);
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
let P = new M(
    c.h,
    !g.Ay.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: function (e) {
                  (r = e.sessionId), L();
              },
              CONNECTION_CLOSED: function () {
                  (r = null), L();
              },
              RTC_CONNECTION_STATE: w,
              RTC_CONNECTION_PING: w,
              RTC_CONNECTION_LOSS_RATE: w,
              RTC_CONNECTION_UPDATE_ID: function (e) {
                  return o().some(D, (t) => t === e.connection);
              },
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: w,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: function (e) {
                  let { context: t, wants: n, userId: r, guildId: i, channelId: s } = e,
                      a = (0, f._z)({
                          streamType: null == i ? S.U4.CALL : S.U4.GUILD,
                          guildId: i,
                          channelId: s,
                          ownerId: r,
                      });
                  if (
                      t !== u.x.STREAM ||
                      null == D[a] ||
                      !Object.entries(n).some((e) => {
                          let [t, n] = e;
                          return "any" !== t && 0 !== n;
                      })
                  )
                      return !1;
                  R[a] = performance.now();
              },
              STREAM_START: function (e) {
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
                      p = (0, f._z)({ streamType: t, guildId: n, channelId: r, ownerId: m.default.getId() });
                  if (
                      ((y[p] = { appContext: i, analyticsLocations: _ }),
                      o().forEach(D, (e) => {
                          let { analyticsContext: t, isOwner: n } = e;
                          t.setActionContext(i), t.setNativePickerStyleUsed(u), n && t.trackStart();
                      }),
                      null == s && (s = l),
                      (C[p] = a),
                      (v[p] = s),
                      null != s)
                  ) {
                      let e = d.Ay.getGameForPID(s);
                      null != e &&
                          (N[p] = {
                              name: e.name,
                              id: e.id,
                              exe: e.exeName,
                              distributor: e.distributor,
                              sku: e.sku,
                              gameMetadata: e.gameMetadata,
                          }),
                          D[p]?.analyticsContext.updateStreamApplication(N[p]);
                  } else D[p]?.analyticsContext.updateStreamApplication(null);
                  null != c ? (O[p] = c) : delete O[p];
              },
              STREAM_STOP: function (e) {
                  let { appContext: t, streamKey: n } = e;
                  (y[n] = { appContext: t, analyticsLocations: void 0 }),
                      o().forEach(D, (e) => {
                          let { analyticsContext: n, isOwner: r } = e;
                          n.setActionContext(t), r && n.trackEnd();
                      }),
                      (C[n] = null),
                      (v[n] = null),
                      delete O[n];
              },
              STREAM_CREATE: function (e) {
                  let { streamKey: t, rtcServerId: n, rtcChannelId: i, region: a, viewerIds: o } = e,
                      l = D[t],
                      u = (0, f.Iy)(t);
                  if (null == l && null != n) {
                      null == v[t] && (N[t] = null), null == N[t] && null == C[t] && (N[t] = (0, p.Ee)(u, A.A));
                      let e = new _.t({
                          streamRegion: a,
                          streamApplication: N[t],
                          streamSourceType: (function (e) {
                              if (null == e) return "unknown";
                              if (E.isPlatformEmbedded || platform?.name === "Chrome") {
                                  if (e.startsWith("web-contents-media-stream:")) return "tab";
                                  else if (e.startsWith("window:")) return "window";
                                  else if (e.startsWith("screen:")) return "screen";
                              } else if (platform?.name === "Firefox")
                                  if ("" !== e) return "window";
                                  else return "screen";
                              else if (platform?.name === "Safari") return "window";
                              return "unknown";
                          })(C[t]),
                          actionContext: y[t]?.appContext,
                          numViewers: null != o ? o.length : 0,
                          goLiveModalDurationMs: O[t],
                          analyticsLocations: y[t]?.analyticsLocations,
                      });
                      s()(null != r, "Creating RTCConnection without session."),
                          (l = new _.A({
                              sessionId: r,
                              streamKey: t,
                              serverId: n,
                              channelId: i,
                              initialLayout: b,
                              analyticsContext: e,
                              parentMediaSessionId: I.A.getMediaSessionId(),
                          })),
                          (D[t] = l);
                  }
                  delete R[t],
                      c.h.dispatch({
                          type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
                          mediaEngineConnectionId: l.getMediaEngineConnectionId(),
                      });
              },
              STREAM_SERVER_UPDATE: function (e) {
                  let t = D[e.streamKey];
                  if (null == t) return !1;
                  t.connect(e.endpoint, e.token);
              },
              STREAM_UPDATE: function (e) {
                  let { streamKey: t, viewerIds: n, paused: r } = e,
                      i = D[t];
                  if (null == i) return !1;
                  null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
              },
              STREAM_DELETE: function (e) {
                  let { streamKey: t } = e,
                      n = D[t];
                  if (null == n) return !1;
                  c.h.dispatch({
                      type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
                      mediaEngineConnectionId: n.getMediaEngineConnectionId(),
                  }),
                      n.destroy("stream-end"),
                      delete D[t];
              },
              STREAM_LAYOUT_UPDATE: function (e) {
                  let { layout: t } = e;
                  (b = t), Object.values(D).forEach((e) => e.layoutChange(t));
              },
              VIDEO_SIZE_UPDATE: function (e) {
                  let { streamId: t, dimensions: n, zoom: r } = e;
                  o().forEach(D, (e) => {
                      e?.setVideoSize(t, n, r);
                  });
              },
          },
);
