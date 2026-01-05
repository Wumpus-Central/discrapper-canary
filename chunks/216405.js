n.d(t, { Z: () => C }), n(388685);
var r = n(579092),
    i = n(46973),
    a = n(846027),
    o = n(147913),
    s = n(450109),
    l = n(361291),
    c = n(199902),
    u = n(430824),
    d = n(131951),
    f = n(959457),
    p = n(594174),
    _ = n(70956),
    m = n(580991),
    h = n(569545),
    g = n(537413),
    E = n(37113);
function b(e, t, n) {
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
let y = 10,
    O = 20,
    v = 10,
    S = new r.Yd("AutoQualityStreamingManager"),
    I = 0;
class T extends o.Z {
    handleStats() {
        var e, t, n, r;
        if ((I += 1) % v != 0) return;
        let o = c.Z.getCurrentUserActiveStream();
        if (null == o) return;
        let m = f.Z.getRTCConnection((0, h.V9)(o)),
            b = d.Z.getGoLiveSource();
        if (null == m || null == b || !m.hasActiveRemoteWants()) return;
        let T = l.Z.getState();
        if (T.preset !== E.tI.PRESET_AUTO) return;
        if ((null == (e = c.Z.getStreamerActiveStreamMetadata()) ? void 0 : e.id) != null)
            return void S.info("Skipping auto quality checker for game stream.");
        let C = s.Z.getAccumulatedPerformanceStats(m.getMediaEngineConnectionId(), o.ownerId, "long"),
            A = (null != (t = m.analyticsContext.getDuration()) ? t : 30) >= 30 * _.Z.Millis.SECOND ? 30 : 15;
        if (null == C || C.numDatapoints < A) return;
        let N = p.default.getCurrentUser(),
            P = u.Z.getGuild(o.guildId),
            [R, w] =
                null != (n = (0, g.Z)(E.tI.PRESET_DOCUMENTS, N, null == P ? void 0 : P.premiumTier))
                    ? n
                    : [E.LY.RESOLUTION_SOURCE, E.ws.FPS_5],
            [D, x] =
                null != (r = (0, g.Z)(E.tI.PRESET_VIDEO, N, null == P ? void 0 : P.premiumTier))
                    ? r
                    : [E.LY.RESOLUTION_720, E.ws.FPS_30],
            L = null;
        if (
            (C.entropy < y && (T.resolution !== R || T.fps !== w)
                ? (S.info("Low entropy average, switching to screenshare preset."),
                  (L = {
                      qualityOptions: {
                          preset: E.tI.PRESET_AUTO,
                          resolution: R,
                          frameRate: w,
                      },
                      context: i.Yn.STREAM,
                  }))
                : C.entropy > O &&
                  (T.resolution !== D || T.fps !== x) &&
                  (S.info("High entropy average, switching to video preset."),
                  (L = {
                      qualityOptions: {
                          preset: E.tI.PRESET_AUTO,
                          resolution: D,
                          frameRate: x,
                      },
                      context: i.Yn.STREAM,
                  })),
            null != L)
        ) {
            if (null != b.desktopSource)
                L.desktopSettings = {
                    sourceId: b.desktopSource.id,
                    sound: T.soundshareEnabled,
                };
            else {
                if (null == b.cameraSource) return;
                L.cameraSettings = {
                    videoDeviceGuid: b.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: b.cameraSource.audioDeviceGuid,
                };
            }
            m.autoQualityChange(), a.Z.setGoLiveSource(L);
        }
    }
    handlePostConnectionOpen() {
        (0, m.Ym)();
    }
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            });
    }
}
let C = new T();
