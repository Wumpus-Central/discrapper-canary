n.d(t, { Z: () => g }), n(411104);
var i = n(570140),
    r = n(846027),
    a = n(872810),
    s = n(710845),
    o = n(77014),
    l = n(361291),
    u = n(199902),
    c = n(314897),
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
                applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                processId: e.pid,
                processPath: e.pidPath,
                windowHandle: null !== (n = e.windowHandle) && void 0 !== n ? n : null,
                executableName: e.exeName
            };
        })),
            'verbatim-source' !== this.mode && this.director.onDetectionUpdate(this.applications);
    }
    _onStreamApplication(e, t) {
        (this.mode = 'application'), (this.streamKey = e), this.director.onStreamBegin(this.applications, t);
    }
    _onStreamDirectSource(e, t, n, i) {
        (this.mode = 'verbatim-source'),
            (this.streamKey = e),
            this._onDirectorAction({
                type: o.A.STREAM,
                sourceId: t,
                audioSourceId: n,
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
                    this._onDirectorAction({ type: o.A.STOP });
                    break;
                default:
                    var t;
                    throw Error('unknown streaming mode: '.concat(null !== (t = this.mode) && void 0 !== t ? t : '(none)'));
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
                    throw Error('unknown streaming mode: '.concat(null !== (t = this.mode) && void 0 !== t ? t : '(none)'));
            }
    }
    _onDirectorAction(e) {
        let t = u.Z.getCurrentUserActiveStream(),
            n = l.Z.getState();
        switch (e.type) {
            case o.A.STREAM:
                if ((null != t && (0, a.tK)(t, !1), e.sourceId.startsWith('camera') && null != e.audioSourceId)) {
                    let t = e.sourceId.split(':')[1];
                    r.Z.setGoLiveSource({
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
                    var i;
                    r.Z.setGoLiveSource({
                        desktopSettings: {
                            sourceId: e.sourceId,
                            sound: null === (i = e.sound) || void 0 === i || i
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
            case o.A.PAUSE:
                null != t && (0, a.tK)(t, !0);
                break;
            case o.A.STOP:
                null != t && (0, f.Z)(t);
                break;
            default:
                throw Error('unhandled stream action: '.concat(e.type));
        }
    }
    _onCapturePaused(e) {
        let t = u.Z.getCurrentUserActiveStream();
        null != t && (0, a.tK)(t, e);
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
        h(this, 'director', void 0),
            h(this, 'applications', void 0),
            h(this, 'streamKey', void 0),
            h(this, 'mode', void 0),
            (this.mode = null),
            (this.applications = []),
            (this.director = new o.a((e) => this._onDirectorAction(e))),
            i.Z.subscribe('STREAM_START', (e) => {
                let { streamType: t, guildId: n, channelId: i, pid: r, sourceId: a, audioSourceId: o, sound: l } = e,
                    u = c.default.getId(),
                    f = (0, d.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: i,
                        ownerId: u
                    });
                (null == r) != (null == a) ? (null != r && this._onStreamApplication(f, r), null != a && this._onStreamDirectSource(f, a, o, l)) : new s.Z('ApplicationSwitchingManager').warn('invalid start_stream: both application + display modes were specified (pid: '.concat(r, ', source-id: ').concat(a, ')'));
            }),
            i.Z.subscribe('STREAM_DELETE', (e) => {
                let { streamKey: t } = e;
                this._onStreamKilled(t);
            }),
            i.Z.subscribe('STREAM_STOP', (e) => {
                let { streamKey: t } = e;
                this._onStreamEnd(t);
            }),
            i.Z.subscribe('RUNNING_GAMES_CHANGE', (e) => {
                let { games: t } = e;
                this._onGameDetectionUpdate(t);
            }),
            i.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: t, context: n } = e;
                n === p.Yn.STREAM && this._onCapturePaused(t === _.FQ1.PAUSED);
            }),
            i.Z.subscribe('MEDIA_ENGINE_SET_GO_LIVE_SOURCE', (e) => {
                let { settings: t } = e;
                (null == t ? void 0 : t.context) === p.Yn.STREAM && (null == t ? void 0 : t.desktopSettings) == null && (null == t ? void 0 : t.cameraSettings) == null && this._onCaptureEnded();
            });
    }
}
let g = {
    instance: null,
    init() {
        null == this.instance && (this.instance = new m());
    }
};
