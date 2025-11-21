n.d(t, { Z: () => A }), n(388685);
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
    p = n(70956),
    h = n(580991),
    m = n(569545),
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
    I = new r.Yd("AutoQualityStreamingManager"),
    T = 0;
class S extends o.Z {
    handleStats() {
        var e, t, n, r;
        if ((T += 1) % v != 0) return;
        let o = c.Z.getCurrentUserActiveStream();
        if (null == o) return;
        let h = f.Z.getRTCConnection((0, m.V9)(o)),
            b = d.Z.getGoLiveSource();
        if (null == h || null == b || !h.hasActiveRemoteWants()) return;
        let S = l.Z.getState();
        if (S.preset !== E.ApplicationStreamPresets.PRESET_AUTO) return;
        if ((null == (e = c.Z.getStreamerActiveStreamMetadata()) ? void 0 : e.id) != null)
            return void I.info("Skipping auto quality checker for game stream.");
        let A = s.Z.getAccumulatedPerformanceStats(h.getMediaEngineConnectionId(), o.ownerId, "long"),
            C = (null != (t = h.analyticsContext.getDuration()) ? t : 30) >= 30 * p.Z.Millis.SECOND ? 30 : 15;
        if (null == A || A.numDatapoints < C) return;
        let N = _.default.getCurrentUser(),
            R = u.Z.getGuild(o.guildId),
            [P, D] =
                null !=
                (n = (0, g.Z)(E.ApplicationStreamPresets.PRESET_DOCUMENTS, N, null == R ? void 0 : R.premiumTier))
                    ? n
                    : [E.ApplicationStreamResolutions.RESOLUTION_SOURCE, E.ApplicationStreamFPS.FPS_5],
            [w, L] =
                null != (r = (0, g.Z)(E.ApplicationStreamPresets.PRESET_VIDEO, N, null == R ? void 0 : R.premiumTier))
                    ? r
                    : [E.ApplicationStreamResolutions.RESOLUTION_720, E.ApplicationStreamFPS.FPS_30],
            x = null;
        if (
            (A.entropy < y && (S.resolution !== P || S.fps !== D)
                ? (I.info("Low entropy average, switching to screenshare preset."),
                  (x = {
                      qualityOptions: {
                          preset: E.ApplicationStreamPresets.PRESET_AUTO,
                          resolution: P,
                          frameRate: D,
                      },
                      context: i.Yn.STREAM,
                  }))
                : A.entropy > O &&
                  (S.resolution !== w || S.fps !== L) &&
                  (I.info("High entropy average, switching to video preset."),
                  (x = {
                      qualityOptions: {
                          preset: E.ApplicationStreamPresets.PRESET_AUTO,
                          resolution: w,
                          frameRate: L,
                      },
                      context: i.Yn.STREAM,
                  })),
            null != x)
        ) {
            if (null != b.desktopSource)
                x.desktopSettings = {
                    sourceId: b.desktopSource.id,
                    sound: S.soundshareEnabled,
                };
            else {
                if (null == b.cameraSource) return;
                x.cameraSettings = {
                    videoDeviceGuid: b.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: b.cameraSource.audioDeviceGuid,
                };
            }
            h.autoQualityChange(), a.Z.setGoLiveSource(x);
        }
    }
    handlePostConnectionOpen() {
        (0, h.Ym)();
    }
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            });
    }
}
let A = new S();
