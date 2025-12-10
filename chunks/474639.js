n.d(t, { Z: () => C }), n(35282), n(388685);
var r = n(46973),
    i = n(570140),
    a = n(147913),
    o = n(579806),
    s = n(569545),
    l = n(441167),
    c = n(695346),
    u = n(314897),
    d = n(131951),
    f = n(19780),
    p = n(959457),
    _ = n(704806),
    m = n(626135),
    h = n(358085),
    g = n(924557),
    E = n(435064),
    b = n(894694),
    y = n(779618),
    O = n(341569),
    v = n(356659),
    S = n(981631),
    I = n(70722);
function T(e, t, n) {
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
class C extends a.Z {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, g.w2)() || n !== S.hes.RTC_CONNECTED) return;
        let a = u.default.getId();
        if (t === r.Yn.DEFAULT) {
            this.applyUserVoiceRecording(a), this.applyUserSoundboardRecording(a);
            return;
        }
        if (t === r.Yn.STREAM && null != i) {
            let { ownerId: e } = (0, s.my)(i);
            if (e !== a) return;
            let t = p.Z.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(a, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === r.Yn.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: r } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let i = p.Z.getRTCConnection(
            s.V9({
                streamType: null != r ? I.lo.GUILD : I.lo.CALL,
                ownerId: t,
                channelId: n,
                guildId: r,
            }),
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        m.default.track(S.rMx.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n,
        });
    }
    maybeShowClipsWarning(e) {
        let t = f.Z.getChannelId();
        !(null == t || E.Z.getClipsWarningShown(t)) &&
            e !== u.default.getId() &&
            E.Z.isClipsEnabledForUser(e) &&
            c.tU.getSetting() &&
            (i.Z.dispatch({
                type: "CLIPS_SHOW_CALL_WARNING",
                channelId: t,
            }),
            this.showClipsToast());
    }
    handleClipsAllowVoiceRecordingUpdate() {
        var e;
        null == (e = f.Z.getUserIds()) || e.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        if ((0, y.Z)(d.Z))
            this.applyNativeClipsSettings(),
                (0, g.w2)() &&
                    (this.loadClipsFromStorage(),
                    (null == E.Z.getHardwareClassification() ||
                        null == E.Z.getHardwareClassificationForDecoupled() ||
                        E.Z.getHardwareClassificationVersion() !== v.WM) &&
                        this.classifyHardwareAndTrack().then((e) => {
                            i.Z.dispatch({
                                type: "CLIPS_CLASSIFY_HARDWARE",
                                classification: e,
                            });
                        }));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: a } = e;
        if (n !== r.Yn.STREAM || !(0, y.Z)(d.Z)) return;
        let o = p.Z.getRTCConnection(
            s.V9({
                streamType: null != a ? I.lo.GUILD : I.lo.CALL,
                ownerId: t,
                channelId: i,
                guildId: a,
            }),
        );
        null != o && this.applyStreamRecording(t, o);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, _.q)();
                if ((null == e ? void 0 : e.gpus) != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return {
                        gpuModels: t,
                        classification: n,
                    };
                }
                {
                    let e = (await o.Z.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return {
                        gpuModels: e,
                        classification: t,
                    };
                }
            })();
            return (
                m.default.track(S.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: v.WM,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return b.xH.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, h.isWindows)()) {
            let t = e.some((e) => v.rI.test(e)),
                n = e.some((e) => v.nU.test(e));
            return t ? b.xH.MEETS_AUTO_ENABLE : n ? b.xH.MEETS_MINIMUM : b.xH.BELOW_MINIMUM;
        }
        return (0, h.isMac)()
            ? "arm64" === o.Z.remoteApp.getAppArch()
                ? b.xH.MEETS_AUTO_ENABLE
                : b.xH.MEETS_MINIMUM
            : b.xH.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, y.Z)(d.Z)) return;
        let t = f.Z.getRTCConnection();
        if (null == t) return;
        if (e === u.default.getId()) return void t.setClipRecordUser(e, "audio", (0, O.LI)());
        let n = E.Z.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, y.Z)(d.Z)) return;
        let t = f.Z.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, O.LI)());
    }
    applyStreamRecording(e, t) {
        if (!(0, y.Z)(d.Z)) return;
        if (u.default.getId() === e) {
            let n = (0, O.LI)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.Z.getCurrentConfig({
            location: "ClipsManager:applyStreamRecording",
        });
        if (!n) return;
        let i = r || E.Z.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", i), t.setClipRecordUser(e, "video", i);
    }
    handleMessageCreate(e) {}
    handleRemoteClipTrigger(e) {}
    constructor(...e) {
        super(...e),
            T(this, "actions", {
                POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
                RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
                RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
                CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
                CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
                CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
                STREAM_START: () => this.applyNativeClipsSettings(),
                RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
                RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
                CLIPS_RESTART: () => this.fireClipsInitEvent(),
                RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
                RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
            });
    }
}
