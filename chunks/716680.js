n.d(t, {
    A: () => g,
}),
    n(65821),
    n(747238);
var r = n(73153),
    i = n(827343),
    a = n(401843),
    s = n(626584),
    o = n(590878),
    l = n(929921),
    c = n(616356),
    u = n(961350),
    d = n(652896),
    f = n(338771),
    p = n(652215),
    _ = n(731854);

function h(e, t, n) {
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
class m {
    _onGameDetectionUpdate(e) {
        (this.applications = e.map((e) => {
            var t, n;
            return {
                applicationId: null != (t = e.id) ? t : null,
                processId: e.pid,
                processPath: e.pidPath,
                windowHandle: null != (n = e.windowHandle) ? n : null,
                executableName: e.exeName,
            };
        })),
            "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, t, n) {
        (this.mode = "application"), (this.streamKey = e), this.director.onStreamBegin(this.applications, t, n);
    }
    _onStreamDirectSource(e, t, n, r) {
        (this.mode = "verbatim-source"),
            (this.streamKey = e),
            (this.director.sound = null == r || r),
            (this.director.application = null),
            this._onDirectorAction({
                type: o.p.STREAM,
                sourceId: t,
                audioSourceId: n,
                sound: r,
            });
    }
    _onStreamEnd(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case "application":
                    this.director.onStreamEnd();
                    break;
                case "verbatim-source":
                    this._onDirectorAction({
                        type: o.p.STOP,
                        alsoClose: t,
                    });
                    break;
                default:
                    var n;
                    throw Error("unknown streaming mode: ".concat(null != (n = this.mode) ? n : "(none)"));
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
                    var t;
                    throw Error("unknown streaming mode: ".concat(null != (t = this.mode) ? t : "(none)"));
            }
    }
    _onDirectorAction(e) {
        var t, n;
        let r = c.A.getCurrentUserActiveStream(),
            s = l.A.getState();
        switch (e.type) {
            case o.p.STREAM:
                if ((null != r && (0, a.TZ)(r, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId)) {
                    let t = e.sourceId.split(":")[1];
                    i.A.setGoLiveSource({
                        cameraSettings: {
                            videoDeviceGuid: t,
                            audioDeviceGuid: e.audioSourceId,
                        },
                        qualityOptions: {
                            preset: s.preset,
                            resolution: s.resolution,
                            frameRate: s.fps,
                        },
                        context: _.x.STREAM,
                    });
                } else
                    i.A.setGoLiveSource({
                        desktopSettings: {
                            sourceId: e.sourceId,
                            sound: null == (t = e.sound) || t,
                        },
                        qualityOptions: {
                            preset: s.preset,
                            resolution: s.resolution,
                            frameRate: s.fps,
                        },
                        context: _.x.STREAM,
                    });
                break;
            case o.p.PAUSE:
                null != r && (0, a.TZ)(r, !0);
                break;
            case o.p.STOP:
                null != r && (0, f.A)(r, !0, null == (n = e.alsoClose) || n);
                break;
            default:
                throw Error("unhandled stream action: ".concat(e.type));
        }
    }
    _onCapturePaused(e) {
        let t = c.A.getCurrentUserActiveStream();
        null != t && (0, a.TZ)(t, e);
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
                var t;
                throw Error("unknown streaming mode: ".concat(null != (t = this.mode) ? t : "(none)"));
        }
    }
    constructor() {
        h(this, "director", void 0),
            h(this, "applications", void 0),
            h(this, "streamKey", void 0),
            h(this, "mode", void 0),
            (this.mode = null),
            (this.applications = []),
            (this.director = new o.d((e) => this._onDirectorAction(e))),
            r.h.subscribe("STREAM_START", (e) => {
                let { streamType: t, guildId: n, channelId: r, pid: i, sourceId: a, audioSourceId: o, sound: l } = e,
                    c = u.default.getId(),
                    f = (0, d._z)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: c,
                    });
                (null == i) != (null == a)
                    ? (null != i && this._onStreamApplication(f, i, null == l || l),
                      null != a && this._onStreamDirectSource(f, a, o, l))
                    : new s.A("ApplicationSwitchingManager").warn(
                          "invalid start_stream: both application + display modes were specified (pid: "
                              .concat(i, ", source-id: ")
                              .concat(a, ")"),
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
                n === _.x.STREAM && this._onCapturePaused(t === p.uPF.PAUSED);
            }),
            r.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
                var t;
                let { settings: n, errorCode: r } = e;
                (null == n ? void 0 : n.context) === _.x.STREAM &&
                    (null == n ? void 0 : n.desktopSettings) == null &&
                    (null == n ? void 0 : n.cameraSettings) == null &&
                    this._onCaptureEnded(null == r),
                    (null == n || null == (t = n.desktopSettings) ? void 0 : t.sound) != null &&
                        (this.director.sound = n.desktopSettings.sound);
            });
    }
}
let g = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new m());
    },
};
