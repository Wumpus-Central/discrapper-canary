n.d(t, { A: () => C });
var i,
    l = n(228366),
    a = n(827343),
    r = n(401843),
    s = n(626584),
    o = n(118356),
    d = n(403362);
let u = "1402418696126992445";
function c(e, t) {
    if (null == t) return null;
    if (t.applicationId === u) {
        let n, i, l;
        return (
            (n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0),
            void 0 !==
            (l = (i = e.filter((e) => e.applicationId === u && e.processPath.includes(n))).find(
                (e) => "league of legends.exe" === e.executableName,
            ))
                ? l
                : i.length > 0
                  ? i[0]
                  : null
        );
    }
    let n = new Map(e.map((e) => [e.processId, e])),
        i = t.processPath.map((e) => n.get(e)).find((e) => null != e);
    if (null == i) return null;
    let l = e
        .map((e) => {
            let t = e.processPath.findIndex((e) => n.has(e));
            return -1 === t ? null : { application: e, rootedPath: e.processPath.slice(t) };
        })
        .filter(d.Vq)
        .filter((e) => e.rootedPath[0] === i.processId);
    l.sort((e, t) => {
        let i = e.rootedPath.map((e) => n.get(e)).filter((e) => null != e && null != e.windowHandle),
            l = h(
                t.rootedPath.map((e) => n.get(e)).filter((e) => null != e && null != e.windowHandle),
                i,
            );
        return 0 !== l ? l : h(t.rootedPath, e.rootedPath);
    });
    let a = l.find((e) => null != e.application.windowHandle) ?? l[0];
    return null == a ? null : a.application;
}
function h(e, t) {
    return e.length - t.length;
}
var E = (((i = {}).STREAM = "stream"), (i.PAUSE = "pause"), (i.STOP = "stop"), i);
class A {
    callback;
    active;
    application;
    sound;
    logger;
    constructor(e) {
        (this.callback = e),
            (this.active = !1),
            (this.application = null),
            (this.sound = !0),
            (this.logger = new o.Vy("StreamDirector"));
    }
    onStreamBegin(e, t, n) {
        let i,
            l = null == (i = e.find((e) => e.processId === t)) ? null : c(e, i);
        (this.sound = n), null == l || null == l.windowHandle ? this.callback({ type: "stop" }) : this._stream(l);
    }
    onStreamKilled() {
        this._kill();
    }
    onStreamEnd() {
        this._stop();
    }
    onDetectionUpdate(e) {
        this._update(e);
    }
    onCaptureEnd(e, t) {
        this.application?.windowHandle === t && this._update(e);
    }
    onCaptureLegacyEnd(e) {
        return this.application?.windowHandle != null
            ? this.onCaptureEnd(e, this.application.windowHandle)
            : this._stop();
    }
    _update(e) {
        let t = c(e, this.application);
        if (null != t) return null == t.windowHandle ? this._pause() : this._stream(t);
        this._stop();
    }
    _stream(e) {
        let t = this.application?.windowHandle !== e.windowHandle;
        (this.active = !0),
            t &&
                this.logger.info(
                    `Stream window changed from ${this.application?.windowHandle} to ${e.windowHandle} for application ${e.applicationId}, executableName ${e.executableName}`,
                ),
            (this.application = Object.assign({}, e)),
            t &&
                this.callback({
                    type: "stream",
                    sourceId: `window:${this.application.windowHandle}`,
                    sound: this.sound,
                });
    }
    _kill() {
        (this.active = !1), (this.application = null);
    }
    _stop() {
        this.active && (this._kill(), this.callback({ type: "stop" }));
    }
    _pause() {
        this.active && ((this.application.windowHandle = null), this.callback({ type: "pause" }));
    }
}
var _ = n(929921),
    p = n(616356),
    g = n(495544),
    f = n(652896),
    I = n(338771),
    S = n(652215),
    T = n(731854);
class m {
    director;
    applications;
    streamKey;
    mode;
    constructor() {
        (this.mode = null),
            (this.applications = []),
            (this.director = new A((e) => this._onDirectorAction(e))),
            l.h.subscribe("STREAM_START", (e) => {
                let { streamType: t, guildId: n, channelId: i, pid: l, sourceId: a, audioSourceId: r, sound: o } = e,
                    d = g.default.getId(),
                    u = (0, f._z)({ streamType: t, guildId: n, channelId: i, ownerId: d });
                (null == l) != (null == a)
                    ? (null != l && this._onStreamApplication(u, l, o ?? !0),
                      null != a && this._onStreamDirectSource(u, a, r, o))
                    : new s.A("ApplicationSwitchingManager").warn(
                          `invalid start_stream: both application + display modes were specified (pid: ${l}, source-id: ${a})`,
                      );
            }),
            l.h.subscribe("STREAM_DELETE", (e) => {
                let { streamKey: t } = e;
                this._onStreamKilled(t);
            }),
            l.h.subscribe("STREAM_STOP", (e) => {
                let { streamKey: t } = e;
                this._onStreamEnd(t);
            }),
            l.h.subscribe("RUNNING_GAMES_CHANGE", (e) => {
                let { games: t } = e;
                this._onGameDetectionUpdate(t);
            }),
            l.h.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", (e) => {
                let { videoState: t, context: n } = e;
                n === T.x.STREAM && this._onCapturePaused(t === S.uPF.PAUSED);
            }),
            l.h.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", (e) => {
                let { settings: t, errorCode: n } = e;
                t?.context === T.x.STREAM &&
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
    _onStreamDirectSource(e, t, n, i) {
        (this.mode = "verbatim-source"),
            (this.streamKey = e),
            (this.director.sound = i ?? !0),
            (this.director.application = null),
            this._onDirectorAction({ type: E.STREAM, sourceId: t, audioSourceId: n, sound: i });
    }
    _onStreamEnd(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case "application":
                    this.director.onStreamEnd();
                    break;
                case "verbatim-source":
                    this._onDirectorAction({ type: E.STOP, alsoClose: t });
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
        let t = p.A.getCurrentUserActiveStream(),
            n = _.A.getState();
        switch (e.type) {
            case E.STREAM:
                if ((null != t && (0, r.TZ)(t, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId)) {
                    let t = e.sourceId.split(":")[1];
                    a.A.setGoLiveSource({
                        cameraSettings: { videoDeviceGuid: t, audioDeviceGuid: e.audioSourceId },
                        qualityOptions: { preset: n.preset, resolution: n.resolution, frameRate: n.fps },
                        context: T.x.STREAM,
                    });
                } else
                    a.A.setGoLiveSource({
                        desktopSettings: { sourceId: e.sourceId, sound: e.sound ?? !0 },
                        qualityOptions: { preset: n.preset, resolution: n.resolution, frameRate: n.fps },
                        context: T.x.STREAM,
                    });
                break;
            case E.PAUSE:
                null != t && (0, r.TZ)(t, !0);
                break;
            case E.STOP:
                null != t && (0, I.A)(t, !0, e.alsoClose ?? !0);
                break;
            default:
                throw Error(`unhandled stream action: ${e.type}`);
        }
    }
    _onCapturePaused(e) {
        let t = p.A.getCurrentUserActiveStream();
        null != t && (0, r.TZ)(t, e);
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
let C = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new m());
    },
};
