"use strict";
n.d(t, { A: () => E });
var r = n(73153),
    i = n(827343),
    s = n(401843),
    a = n(626584),
    o = n(590878),
    l = n(929921),
    u = n(616356),
    c = n(961350),
    d = n(652896),
    _ = n(338771),
    f = n(652215),
    p = n(731854);
class h {
    director;
    applications;
    streamKey;
    mode;
    constructor() {
        (this.mode = null),
            (this.applications = []),
            (this.director = new o.d((e) => this._onDirectorAction(e))),
            r.h.subscribe("STREAM_START", (e) => {
                let { streamType: t, guildId: n, channelId: r, pid: i, sourceId: s, audioSourceId: o, sound: l } = e,
                    u = c.default.getId(),
                    _ = (0, d._z)({ streamType: t, guildId: n, channelId: r, ownerId: u });
                (null == i) != (null == s)
                    ? (null != i && this._onStreamApplication(_, i, l ?? !0),
                      null != s && this._onStreamDirectSource(_, s, o, l))
                    : new a.A("ApplicationSwitchingManager").warn(
                          `invalid start_stream: both application + display modes were specified (pid: ${i}, source-id: ${s})`,
                      );
            }),
            r.h.subscribe("STREAM_DELETE", (e) => {
                let { streamKey: t } = e;
                this._onStreamKilled(t);
            }),
            r.h.subscribe("STREAM_STOP", (e) => {
                let { streamKey: t } = e;
                this._onStreamEnd(t);
            }),
            r.h.subscribe("RUNNING_GAMES_CHANGE", (e) => {
                let { games: t } = e;
                this._onGameDetectionUpdate(t);
            }),
            r.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t, context: n } = e;
                n === p.x.STREAM && this._onCapturePaused(t === f.uPF.PAUSED);
            }),
            r.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
                let { settings: t, errorCode: n } = e;
                t?.context === p.x.STREAM &&
                    t?.desktopSettings == null &&
                    t?.cameraSettings == null &&
                    this._onCaptureEnded(null == n),
                    t?.desktopSettings?.sound != null && (this.director.sound = t.desktopSettings.sound);
            });
    }
    _onGameDetectionUpdate(e) {
        (this.applications = e.map((e) => ({
            applicationId: e.id ?? null,
            processId: e.pid,
            processPath: e.pidPath,
            windowHandle: e.windowHandle ?? null,
            executableName: e.exeName,
        }))),
            "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, t, n) {
        (this.mode = "application"), (this.streamKey = e), this.director.onStreamBegin(this.applications, t, n);
    }
    _onStreamDirectSource(e, t, n, r) {
        (this.mode = "verbatim-source"),
            (this.streamKey = e),
            (this.director.sound = r ?? !0),
            (this.director.application = null),
            this._onDirectorAction({ type: o.p.STREAM, sourceId: t, audioSourceId: n, sound: r });
    }
    _onStreamEnd(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case "application":
                    this.director.onStreamEnd();
                    break;
                case "verbatim-source":
                    this._onDirectorAction({ type: o.p.STOP, alsoClose: t });
                    break;
                default:
                    throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
            }
    }
    _onStreamKilled(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case "application":
                    this.director.onStreamKilled();
                    break;
                case "verbatim-source":
                    break;
                default:
                    throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
            }
    }
    _onDirectorAction(e) {
        let t = u.A.getCurrentUserActiveStream(),
            n = l.A.getState();
        switch (e.type) {
            case o.p.STREAM:
                if ((null != t && (0, s.TZ)(t, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId)) {
                    let t = e.sourceId.split(":")[1];
                    i.A.setGoLiveSource({
                        cameraSettings: { videoDeviceGuid: t, audioDeviceGuid: e.audioSourceId },
                        qualityOptions: { preset: n.preset, resolution: n.resolution, frameRate: n.fps },
                        context: p.x.STREAM,
                    });
                } else
                    i.A.setGoLiveSource({
                        desktopSettings: { sourceId: e.sourceId, sound: e.sound ?? !0 },
                        qualityOptions: { preset: n.preset, resolution: n.resolution, frameRate: n.fps },
                        context: p.x.STREAM,
                    });
                break;
            case o.p.PAUSE:
                null != t && (0, s.TZ)(t, !0);
                break;
            case o.p.STOP:
                null != t && (0, _.A)(t, !0, e.alsoClose ?? !0);
                break;
            default:
                throw Error(`unhandled stream action: ${e.type}`);
        }
    }
    _onCapturePaused(e) {
        let t = u.A.getCurrentUserActiveStream();
        null != t && (0, s.TZ)(t, e);
    }
    _onCaptureEnded() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        switch (this.mode) {
            case "application":
                this._onCapturePaused(!0);
                break;
            case "verbatim-source":
                null != this.streamKey && this._onStreamEnd(this.streamKey, e);
                break;
            default:
                throw Error(`unknown streaming mode: ${this.mode ?? "(none)"}`);
        }
    }
}
let E = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new h());
    },
};
