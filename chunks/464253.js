n.d(t, { Z: () => g }), n(411104), n(301563);
var r = n(570140),
    i = n(846027),
    o = n(872810),
    a = n(710845),
    s = n(77014),
    l = n(361291),
    c = n(199902),
    u = n(314897),
    d = n(569545),
    f = n(803647),
    _ = n(981631),
    p = n(65154);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
                executableName: e.exeName
            };
        })),
            'verbatim-source' !== this.mode && this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, t, n) {
        (this.mode = 'application'), (this.streamKey = e), this.director.onStreamBegin(this.applications, t, n);
    }
    _onStreamDirectSource(e, t, n, r) {
        (this.mode = 'verbatim-source'),
            (this.streamKey = e),
            (this.director.sound = null == r || r),
            this._onDirectorAction({
                type: s.A.STREAM,
                sourceId: t,
                audioSourceId: n,
                sound: r
            });
    }
    _onStreamEnd(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamEnd();
                    break;
                case 'verbatim-source':
                    this._onDirectorAction({ type: s.A.STOP });
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null != (t = this.mode) ? t : '(none)'));
            }
    }
    _onStreamKilled(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamKilled();
                    break;
                case 'verbatim-source':
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null != (t = this.mode) ? t : '(none)'));
            }
    }
    _onDirectorAction(e) {
        let t = c.Z.getCurrentUserActiveStream(),
            n = l.Z.getState();
        switch (e.type) {
            case s.A.STREAM:
                if ((null != t && (0, o.tK)(t, !1), e.sourceId.startsWith('camera') && null != e.audioSourceId)) {
                    let t = e.sourceId.split(':')[1];
                    i.Z.setGoLiveSource({
                        cameraSettings: {
                            videoDeviceGuid: t,
                            audioDeviceGuid: e.audioSourceId
                        },
                        qualityOptions: {
                            preset: n.preset,
                            resolution: n.resolution,
                            frameRate: n.fps
                        },
                        context: p.Yn.STREAM
                    });
                } else {
                    var r;
                    i.Z.setGoLiveSource({
                        desktopSettings: {
                            sourceId: e.sourceId,
                            sound: null == (r = e.sound) || r
                        },
                        qualityOptions: {
                            preset: n.preset,
                            resolution: n.resolution,
                            frameRate: n.fps
                        },
                        context: p.Yn.STREAM
                    });
                }
                break;
            case s.A.PAUSE:
                null != t && (0, o.tK)(t, !0);
                break;
            case s.A.STOP:
                null != t && (0, f.Z)(t);
                break;
            default:
                throw Error('unhandled stream action: '.concat(e.type));
        }
    }
    _onCapturePaused(e) {
        let t = c.Z.getCurrentUserActiveStream();
        null != t && (0, o.tK)(t, e);
    }
    _onCaptureEnded() {
        switch (this.mode) {
            case 'application':
                this._onCapturePaused(!0);
                break;
            case 'verbatim-source':
                null != this.streamKey && this._onStreamEnd(this.streamKey);
                break;
            default:
                var e;
                throw Error('unknown streaming mode: '.concat(null != (e = this.mode) ? e : '(none)'));
        }
    }
    constructor() {
        h(this, 'director', void 0),
            h(this, 'applications', void 0),
            h(this, 'streamKey', void 0),
            h(this, 'mode', void 0),
            (this.mode = null),
            (this.applications = []),
            (this.director = new s.a((e) => this._onDirectorAction(e))),
            r.Z.subscribe('STREAM_START', (e) => {
                let { streamType: t, guildId: n, channelId: r, pid: i, sourceId: o, audioSourceId: s, sound: l } = e,
                    c = u.default.getId(),
                    f = (0, d.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: c
                    });
                (null == i) != (null == o) ? (null != i && this._onStreamApplication(f, i, null == l || l), null != o && this._onStreamDirectSource(f, o, s, l)) : new a.Z('ApplicationSwitchingManager').warn('invalid start_stream: both application + display modes were specified (pid: '.concat(i, ', source-id: ').concat(o, ')'));
            }),
            r.Z.subscribe('STREAM_DELETE', (e) => {
                let { streamKey: t } = e;
                this._onStreamKilled(t);
            }),
            r.Z.subscribe('STREAM_STOP', (e) => {
                let { streamKey: t } = e;
                this._onStreamEnd(t);
            }),
            r.Z.subscribe('RUNNING_GAMES_CHANGE', (e) => {
                let { games: t } = e;
                this._onGameDetectionUpdate(t);
            }),
            r.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t, context: n } = e;
                n === p.Yn.STREAM && this._onCapturePaused(t === _.FQ1.PAUSED);
            }),
            r.Z.subscribe('MEDIA_ENGINE_SET_GO_LIVE_SOURCE', (e) => {
                var t;
                let { settings: n } = e;
                (null == n ? void 0 : n.context) === p.Yn.STREAM && (null == n ? void 0 : n.desktopSettings) == null && (null == n ? void 0 : n.cameraSettings) == null && this._onCaptureEnded(), (null == n || null == (t = n.desktopSettings) ? void 0 : t.sound) != null && (this.director.sound = n.desktopSettings.sound);
            });
    }
}
let g = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new m());
    }
};
