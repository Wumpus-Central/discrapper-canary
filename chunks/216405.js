n.d(t, { Z: () => T }), n(388685);
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
    _ = n(594174),
    p = n(569545),
    h = n(537413),
    m = n(37113);
function g(e, t, n) {
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
let E = 10,
    b = 20,
    y = 10,
    O = new r.Yd("AutoQualityStreamingManager"),
    v = 0;
class I extends o.Z {
    handleStats() {
        var e, t, n;
        if ((v += 1) % y != 0) return;
        let r = c.Z.getCurrentUserActiveStream();
        if (null == r) return;
        let o = f.Z.getRTCConnection((0, p.V9)(r)),
            g = d.Z.getGoLiveSource();
        if (null == o || null == g) return;
        let I = l.Z.getState();
        if (I.preset !== m.tI.PRESET_AUTO) return;
        if ((null == (e = c.Z.getStreamerActiveStreamMetadata()) ? void 0 : e.id) != null)
            return void O.info("Skipping auto quality checker for game stream.");
        let T = s.Z.getAccumulatedPerformanceStats(o.getMediaEngineConnectionId(), r.ownerId, "long");
        if (null == T || T.numDatapoints < 30) return;
        let S = _.default.getCurrentUser(),
            A = u.Z.getGuild(r.guildId),
            [C, N] =
                null != (t = (0, h.Z)(m.tI.PRESET_DOCUMENTS, S, null == A ? void 0 : A.premiumTier))
                    ? t
                    : [m.LY.RESOLUTION_SOURCE, m.ws.FPS_5],
            [R, P] =
                null != (n = (0, h.Z)(m.tI.PRESET_VIDEO, S, null == A ? void 0 : A.premiumTier))
                    ? n
                    : [m.LY.RESOLUTION_720, m.ws.FPS_30],
            w = null;
        if (
            (T.entropy < E && (I.resolution !== C || I.fps !== N)
                ? (O.info("Low entropy average, switching to screenshare preset."),
                  (w = {
                      qualityOptions: {
                          preset: m.tI.PRESET_AUTO,
                          resolution: C,
                          frameRate: N,
                      },
                      context: i.Yn.STREAM,
                  }))
                : T.entropy > b &&
                  (I.resolution !== R || I.fps !== P) &&
                  (O.info("High entropy average, switching to video preset."),
                  (w = {
                      qualityOptions: {
                          preset: m.tI.PRESET_AUTO,
                          resolution: R,
                          frameRate: P,
                      },
                      context: i.Yn.STREAM,
                  })),
            null != w)
        ) {
            if (null != g.desktopSource)
                w.desktopSettings = {
                    sourceId: g.desktopSource.id,
                    sound: I.soundshareEnabled,
                };
            else {
                if (null == g.cameraSource) return;
                w.cameraSettings = {
                    videoDeviceGuid: g.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: g.cameraSource.audioDeviceGuid,
                };
            }
            a.Z.setGoLiveSource(w);
        }
    }
    constructor(...e) {
        super(...e), g(this, "actions", { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats });
    }
}
let T = new I();
