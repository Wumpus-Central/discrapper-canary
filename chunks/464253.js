var i = r(411104);
var a = r(570140),
    o = r(846027),
    s = r(872810),
    l = r(710845),
    u = r(77014),
    c = r(361291),
    d = r(199902),
    f = r(314897),
    p = r(569545),
    h = r(803647),
    _ = r(981631),
    m = r(65154);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class E {
    _onGameDetectionUpdate(e) {
        if (
            ((this.applications = e.map((e) => {
                var n, r;
                return {
                    applicationId: null !== (n = e.id) && void 0 !== n ? n : null,
                    processId: e.pid,
                    processPath: e.pidPath,
                    windowHandle: null !== (r = e.windowHandle) && void 0 !== r ? r : null,
                    executableName: e.exeName
                };
            })),
            'verbatim-source' !== this.mode)
        )
            this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, n) {
        (this.mode = 'application'), (this.streamKey = e), this.director.onStreamBegin(this.applications, n);
    }
    _onStreamDirectSource(e, n, r, i) {
        (this.mode = 'verbatim-source'),
            (this.streamKey = e),
            this._onDirectorAction({
                type: u.A.STREAM,
                sourceId: n,
                audioSourceId: r,
                sound: i
            });
    }
    _onStreamEnd(e) {
        if (this.streamKey === e)
            switch (((this.streamKey = null), this.mode)) {
                case 'application':
                    this.director.onStreamEnd();
                    break;
                case 'verbatim-source':
                    this._onDirectorAction({ type: u.A.STOP });
                    break;
                default:
                    var n;
                    throw Error('unknown streaming mode: '.concat(null !== (n = this.mode) && void 0 !== n ? n : '(none)'));
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
                    var n;
                    throw Error('unknown streaming mode: '.concat(null !== (n = this.mode) && void 0 !== n ? n : '(none)'));
            }
    }
    _onDirectorAction(e) {
        let n = d.Z.getCurrentUserActiveStream(),
            r = c.Z.getState();
        switch (e.type) {
            case u.A.STREAM:
                if ((null != n && (0, s.tK)(n, !1), e.sourceId.startsWith('camera') && null != e.audioSourceId)) {
                    let n = e.sourceId.split(':')[1];
                    o.Z.setGoLiveSource({
                        cameraSettings: {
                            videoDeviceGuid: n,
                            audioDeviceGuid: e.audioSourceId
                        },
                        qualityOptions: {
                            preset: r.preset,
                            resolution: r.resolution,
                            frameRate: r.fps
                        },
                        context: m.Yn.STREAM
                    });
                } else {
                    var i;
                    o.Z.setGoLiveSource({
                        desktopSettings: {
                            sourceId: e.sourceId,
                            sound: null === (i = e.sound) || void 0 === i || i
                        },
                        qualityOptions: {
                            preset: r.preset,
                            resolution: r.resolution,
                            frameRate: r.fps
                        },
                        context: m.Yn.STREAM
                    });
                }
                break;
            case u.A.PAUSE:
                null != n && (0, s.tK)(n, !0);
                break;
            case u.A.STOP:
                null != n && (0, h.Z)(n);
                break;
            default:
                throw Error('unhandled stream action: '.concat(e.type));
        }
    }
    _onCapturePaused(e) {
        let n = d.Z.getCurrentUserActiveStream();
        null != n && (0, s.tK)(n, e);
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
                throw Error('unknown streaming mode: '.concat(null !== (e = this.mode) && void 0 !== e ? e : '(none)'));
        }
    }
    constructor() {
        g(this, 'director', void 0),
            g(this, 'applications', void 0),
            g(this, 'streamKey', void 0),
            g(this, 'mode', void 0),
            (this.mode = null),
            (this.applications = []),
            (this.director = new u.a((e) => this._onDirectorAction(e))),
            a.Z.subscribe('STREAM_START', (e) => {
                let { streamType: n, guildId: r, channelId: i, pid: a, sourceId: o, audioSourceId: s, sound: u } = e,
                    c = f.default.getId(),
                    d = (0, p.V9)({
                        streamType: n,
                        guildId: r,
                        channelId: i,
                        ownerId: c
                    });
                (null == a) != (null == o) ? (null != a && this._onStreamApplication(d, a), null != o && this._onStreamDirectSource(d, o, s, u)) : new l.Z('ApplicationSwitchingManager').warn('invalid start_stream: both application + display modes were specified (pid: '.concat(a, ', source-id: ').concat(o, ')'));
            }),
            a.Z.subscribe('STREAM_DELETE', (e) => {
                let { streamKey: n } = e;
                this._onStreamKilled(n);
            }),
            a.Z.subscribe('STREAM_STOP', (e) => {
                let { streamKey: n } = e;
                this._onStreamEnd(n);
            }),
            a.Z.subscribe('RUNNING_GAMES_CHANGE', (e) => {
                let { games: n } = e;
                this._onGameDetectionUpdate(n);
            }),
            a.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: n, context: r } = e;
                r === m.Yn.STREAM && this._onCapturePaused(n === _.FQ1.PAUSED);
            }),
            a.Z.subscribe('MEDIA_ENGINE_SET_GO_LIVE_SOURCE', (e) => {
                let { settings: n } = e;
                (null == n ? void 0 : n.context) === m.Yn.STREAM && (null == n ? void 0 : n.desktopSettings) == null && (null == n ? void 0 : n.cameraSettings) == null && this._onCaptureEnded();
            });
    }
}
n.Z = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new E());
    }
};
