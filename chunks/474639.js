n.d(t, { Z: () => T }), n(301563), n(47120);
var r = n(46973),
    i = n(570140),
    o = n(147913),
    a = n(579806),
    s = n(569545),
    l = n(441167),
    c = n(695346),
    u = n(314897),
    d = n(131951),
    f = n(19780),
    _ = n(959457),
    p = n(704806),
    h = n(626135),
    m = n(358085),
    g = n(924557),
    E = n(435064),
    b = n(894694),
    y = n(779618),
    v = n(356659),
    O = n(981631),
    I = n(70722);
function S(e, t, n) {
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
class T extends o.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, g.ln)() || n !== O.hes.RTC_CONNECTED) return;
        let o = u.default.getId();
        if (t === r.Yn.DEFAULT) return this.applyUserVoiceRecording(o);
        if (t === r.Yn.STREAM && null != i) {
            let { ownerId: e } = (0, s.my)(i);
            if (e !== o) return;
            let t = _.Z.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(o, t);
        }
    }
    handleRTCUserCreate(e) {
        let { userId: t, context: n } = e;
        n === r.Yn.DEFAULT && this.applyUserVoiceRecording(t);
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: r } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
        let i = _.Z.getRTCConnection(
            s.V9({
                streamType: null != r ? I.lo.GUILD : I.lo.CALL,
                ownerId: t,
                channelId: n,
                guildId: r
            })
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        h.default.track(O.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n
        });
    }
    maybeShowClipsWarning(e) {
        let t = f.Z.getChannelId();
        !(null == t || E.Z.getClipsWarningShown(t)) &&
            e !== u.default.getId() &&
            E.Z.isClipsEnabledForUser(e) &&
            c.tU.getSetting() &&
            (i.Z.dispatch({
                type: 'CLIPS_SHOW_CALL_WARNING',
                channelId: t
            }),
            this.showClipsToast());
    }
    handleClipsAllowVoiceRecordingUpdate() {
        var e;
        null == (e = f.Z.getUserIds()) || e.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        if ((0, y.Z)(d.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, g.ln)())) {
                E.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == E.Z.getHardwareClassification() || null == E.Z.getHardwareClassificationForDecoupled() || E.Z.getHardwareClassificationVersion() !== v.WM) &&
                this.classifyHardwareAndTrack().then((e) => {
                    i.Z.dispatch({
                        type: 'CLIPS_CLASSIFY_HARDWARE',
                        classification: e
                    });
                });
        }
    }
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: o } = e;
        if (n !== r.Yn.STREAM || !(0, y.Z)(d.Z)) return;
        let a = _.Z.getRTCConnection(
            s.V9({
                streamType: null != o ? I.lo.GUILD : I.lo.CALL,
                ownerId: t,
                channelId: i,
                guildId: o
            })
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, p.q)();
                if ((null == e ? void 0 : e.gpus) != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return {
                        gpuModels: t,
                        classification: n
                    };
                }
                {
                    let e = (await a.Z.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return {
                        gpuModels: e,
                        classification: t
                    };
                }
            })();
            return (
                h.default.track(O.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: v.WM,
                    gpu_models: e
                }),
                t
            );
        } catch (e) {
            return b.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, m.isWindows)()) {
            let t = e.some((e) => v.mg.test(e)),
                n = e.some((e) => v.nU.test(e));
            return t ? b.x.MEETS_AUTO_ENABLE : n ? b.x.MEETS_MINIMUM : b.x.BELOW_MINIMUM;
        }
        return (0, m.isMac)() ? ('arm64' === a.Z.remoteApp.getAppArch() ? b.x.MEETS_AUTO_ENABLE : b.x.MEETS_MINIMUM) : b.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, y.Z)(d.Z)) return;
        let t = f.Z.getRTCConnection();
        if (null == t) return;
        if (e === u.default.getId()) return void t.setClipRecordUser(e, 'audio', E.Z.getSettings().clipsEnabled);
        let n = E.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, 'audio', n);
    }
    applyStreamRecording(e, t) {
        if (!(0, y.Z)(d.Z)) return;
        if (u.default.getId() === e) {
            let { clipsEnabled: n } = E.Z.getSettings(),
                r = (0, g.ln)();
            t.setClipRecordUser(e, 'audio', r && n), t.setClipRecordUser(e, 'video', r && n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!n) return;
        let i = r || E.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, 'audio', i), t.setClipRecordUser(e, 'video', i);
    }
    disableClips() {}
    constructor(...e) {
        super(...e),
            S(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
                RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
                RTC_CONNECTION_USER_CREATE: (e) => this.handleRTCUserCreate(e),
                CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
                CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
                CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
                STREAM_START: () => this.applyNativeClipsSettings(),
                RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
                RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
                CLIPS_RESTART: () => this.fireClipsInitEvent(),
                RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
                RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
                MEDIA_ENGINE_SET_HARDWARE_ENCODING: (e) => this.handleMediaEngineSetHardwareEncoding(e)
            });
    }
}
