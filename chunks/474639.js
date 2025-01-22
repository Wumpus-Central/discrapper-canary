r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(46973),
    o = r(570140),
    s = r(147913),
    l = r(579806),
    u = r(569545),
    c = r(441167),
    d = r(695346),
    f = r(314897),
    p = r(131951),
    h = r(19780),
    _ = r(959457),
    m = r(704806),
    g = r(626135),
    E = r(358085),
    v = r(924557),
    y = r(435064),
    b = r(894694),
    I = r(779618),
    T = r(356659),
    S = r(981631),
    A = r(70722);
function C(e, n, r) {
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
class N extends s.Z {
    handleRTCConnectionState(e) {
        let { context: n, state: r, streamKey: i } = e;
        if (!(0, v.ln)() || r !== S.hes.RTC_CONNECTED) return;
        let o = f.default.getId();
        if (n === a.Yn.DEFAULT) return this.applyUserVoiceRecording(o);
        if (n === a.Yn.STREAM && null != i) {
            let { ownerId: e } = (0, u.my)(i);
            if (e !== o) return;
            let n = _.Z.getRTCConnection(i);
            if (null == n) return;
            this.applyStreamRecording(o, n);
        }
    }
    handleRTCUserCreate(e) {
        let { userId: n, context: r } = e;
        r === a.Yn.DEFAULT && this.applyUserVoiceRecording(n);
    }
    handleRTCConnectionFlags(e) {
        let { userId: n, channelId: r, guildId: i } = e;
        this.maybeShowClipsWarning(n), this.applyUserVoiceRecording(n);
        let a = _.Z.getRTCConnection(
            u.V9({
                streamType: null != i ? A.lo.GUILD : A.lo.CALL,
                ownerId: n,
                channelId: r,
                guildId: i
            })
        );
        null != a && this.applyStreamRecording(n, a);
    }
    handleClipsInitFailure(e) {
        let { applicationName: n, errMsg: r } = e;
        g.default.track(S.rMx.CLIPS_INIT_FAILURE, {
            application_name: n,
            error_message: r
        });
    }
    maybeShowClipsWarning(e) {
        let n = h.Z.getChannelId();
        if (!(null == n || y.Z.getClipsWarningShown(n)) && e !== f.default.getId() && !!y.Z.isClipsEnabledForUser(e))
            d.tU.getSetting() &&
                (o.Z.dispatch({
                    type: 'CLIPS_SHOW_CALL_WARNING',
                    channelId: n
                }),
                this.showClipsToast());
    }
    handleClipsAllowVoiceRecordingUpdate() {
        var e;
        null === (e = h.Z.getUserIds()) || void 0 === e || e.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        if (!!(0, I.Z)(p.Z)) {
            if ((this.applyNativeClipsSettings(), !(0, v.ln)())) {
                y.Z.getSettings().clipsEnabled && this.disableClips();
                return;
            }
            (null == y.Z.getHardwareClassification() || null == y.Z.getHardwareClassificationForDecoupled() || y.Z.getHardwareClassificationVersion() !== T.WM) &&
                this.classifyHardwareAndTrack().then((e) => {
                    o.Z.dispatch({
                        type: 'CLIPS_CLASSIFY_HARDWARE',
                        classification: e
                    });
                });
        }
    }
    handleRTCConnectionVideo(e) {
        let { userId: n, context: r, channelId: i, guildId: o } = e;
        if (r !== a.Yn.STREAM || !(0, I.Z)(p.Z)) return;
        let s = _.Z.getRTCConnection(
            u.V9({
                streamType: null != o ? A.lo.GUILD : A.lo.CALL,
                ownerId: n,
                channelId: i,
                guildId: o
            })
        );
        null != s && this.applyStreamRecording(n, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: n } = await (async () => {
                let e = await (0, m.q)();
                if ((null == e ? void 0 : e.gpus) != null) {
                    let n = e.gpus.map((e) => e.brand),
                        r = this.classifyHardware(n);
                    return {
                        gpuModels: n,
                        classification: r
                    };
                }
                {
                    let e = (await l.Z.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: n } = e;
                            return n;
                        }),
                        n = this.classifyHardware(e);
                    return {
                        gpuModels: e,
                        classification: n
                    };
                }
            })();
            return (
                g.default.track(S.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: n,
                    version: T.WM,
                    gpu_models: e
                }),
                n
            );
        } catch (e) {
            return b.x.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, E.isWindows)()) {
            let n = e.some((e) => T.mg.test(e)),
                r = e.some((e) => T.nU.test(e));
            return n ? b.x.MEETS_AUTO_ENABLE : r ? b.x.MEETS_MINIMUM : b.x.BELOW_MINIMUM;
        }
        if ((0, E.isMac)()) return 'arm64' === l.Z.remoteApp.getAppArch() ? b.x.MEETS_AUTO_ENABLE : b.x.MEETS_MINIMUM;
        return b.x.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, I.Z)(p.Z)) return;
        let n = h.Z.getRTCConnection();
        if (null == n) return;
        if (e === f.default.getId()) {
            n.setClipRecordUser(e, 'audio', y.Z.getSettings().clipsEnabled);
            return;
        }
        let r = y.Z.isVoiceRecordingAllowedForUser(e);
        n.setClipRecordUser(e, 'audio', r);
    }
    applyStreamRecording(e, n) {
        if (!(0, I.Z)(p.Z)) return;
        if (f.default.getId() === e) {
            let { clipsEnabled: r } = y.Z.getSettings(),
                i = (0, v.ln)();
            n.setClipRecordUser(e, 'audio', i && r), n.setClipRecordUser(e, 'video', i && r);
            return;
        }
        let { enableViewerClipping: r, ignoreSenderPreference: i } = c.Z.getCurrentConfig({ location: 'ClipsManager:applyStreamRecording' });
        if (!r) return;
        let a = i || y.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), n.setClipRecordUser(e, 'audio', a), n.setClipRecordUser(e, 'video', a);
    }
    disableClips() {}
    constructor(...e) {
        super(...e),
            C(this, 'actions', {
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
