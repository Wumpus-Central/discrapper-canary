n.d(t, { Z: () => A }), n(47120);
var i = n(46973),
    r = n(570140),
    a = n(147913),
    s = n(579806),
    o = n(569545),
    l = n(441167),
    u = n(695346),
    c = n(314897),
    d = n(131951),
    f = n(19780),
    _ = n(959457),
    p = n(704806),
    h = n(626135),
    m = n(358085),
    g = n(924557),
    E = n(435064),
    v = n(894694),
    y = n(779618),
    I = n(356659),
    b = n(981631),
    T = n(70722);
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
class A extends a.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: r } = e;
        if (!(0, g.ln)() || n !== b.hes.RTC_CONNECTED) return;
        let a = c.default.getId();
        if (t === i.Yn.DEFAULT) return this.applyUserVoiceRecording(a);
        if (t === i.Yn.STREAM && null != r) {
            let { ownerId: e } = (0, o.my)(r);
            if (e !== a) return;
            let t = _.Z.getRTCConnection(r);
            if (null == t) return;
            this.applyStreamRecording(a, t);
        }
    }
    handleRTCUserCreate(e) {
        let { userId: t, context: n } = e;
        n === i.Yn.DEFAULT && this.applyUserVoiceRecording(t);
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
        let r = _.Z.getRTCConnection(
            o.V9({
                streamType: null != i ? T.lo.GUILD : T.lo.CALL,
                ownerId: t,
                channelId: n,
                guildId: i
            })
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        h.default.track(b.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n
        });
    }
    maybeShowClipsWarning(e) {
        let t = f.Z.getChannelId();
        !(null == t || E.Z.getClipsWarningShown(t)) &&
            e !== c.default.getId() &&
            E.Z.isClipsEnabledForUser(e) &&
            u.tU.getSetting() &&
            (r.Z.dispatch({
                type: 'CLIPS_SHOW_CALL_WARNING',
                channelId: t
            }),
            this.showClipsToast());
    }
    handleClipsAllowVoiceRecordingUpdate() {
        var e;
        null === (e = f.Z.getUserIds()) || void 0 === e || e.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        if ((0, y.Z)(d.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, g.ln)())) {
                E.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == E.Z.getHardwareClassification() || null == E.Z.getHardwareClassificationForDecoupled() || E.Z.getHardwareClassificationVersion() !== I.WM) &&
                this.classifyHardwareAndTrack().then((e) => {
                    r.Z.dispatch({
                        type: 'CLIPS_CLASSIFY_HARDWARE',
                        classification: e
                    });
                });
        }
    }
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: r, guildId: a } = e;
        if (n !== i.Yn.STREAM || !(0, y.Z)(d.Z)) return;
        let s = _.Z.getRTCConnection(
            o.V9({
                streamType: null != a ? T.lo.GUILD : T.lo.CALL,
                ownerId: t,
                channelId: r,
                guildId: a
            })
        );
        null != s && this.applyStreamRecording(t, s);
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
                    let e = (await s.Z.processUtils.getSystemInfo()).gpus.map((e) => {
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
                h.default.track(b.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: I.WM,
                    gpu_models: e
                }),
                t
            );
        } catch (e) {
            return v.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, m.isWindows)()) {
            let t = e.some((e) => I.mg.test(e)),
                n = e.some((e) => I.nU.test(e));
            return t ? v.x.MEETS_AUTO_ENABLE : n ? v.x.MEETS_MINIMUM : v.x.BELOW_MINIMUM;
        }
        return (0, m.isMac)() ? ('arm64' === s.Z.remoteApp.getAppArch() ? v.x.MEETS_AUTO_ENABLE : v.x.MEETS_MINIMUM) : v.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, y.Z)(d.Z)) return;
        let t = f.Z.getRTCConnection();
        if (null == t) return;
        if (e === c.default.getId()) {
            t.setClipRecordUser(e, 'audio', E.Z.getSettings().clipsEnabled);
            return;
        }
        let n = E.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, 'audio', n);
    }
    applyStreamRecording(e, t) {
        if (!(0, y.Z)(d.Z)) return;
        if (c.default.getId() === e) {
            let { clipsEnabled: n } = E.Z.getSettings(),
                i = (0, g.ln)();
            t.setClipRecordUser(e, 'audio', i && n), t.setClipRecordUser(e, 'video', i && n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: i } = l.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!n) return;
        let r = i || E.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, 'audio', r), t.setClipRecordUser(e, 'video', r);
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
