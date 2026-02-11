"use strict";
n.d(t, { A: () => b });
var r = n(205693),
    i = n(73153),
    a = n(439372),
    s = n(77729),
    o = n(652896),
    l = n(670470),
    u = n(253932),
    c = n(961350),
    d = n(430452),
    _ = n(383501),
    f = n(162605),
    h = n(851581),
    p = n(954571),
    g = n(723702),
    E = n(734066),
    A = n(274372),
    I = n(372684),
    T = n(915618),
    y = n(572164),
    S = n(696016),
    v = n(652215),
    C = n(502075);
class b extends a.A {
    actions = {
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
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, E.Pm)() || n !== v.S7L.RTC_CONNECTED) return;
        let a = c.default.getId();
        if (t === r.x.DEFAULT) {
            this.applyUserVoiceRecording(a), this.applyUserSoundboardRecording(a);
            return;
        }
        if (t === r.x.STREAM && null != i) {
            let { ownerId: e } = (0, o.Iy)(i);
            if (e !== a) return;
            let t = f.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(a, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === r.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: r } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let i = f.A.getRTCConnection(
            o._z({ streamType: null != r ? C.U4.GUILD : C.U4.CALL, ownerId: t, channelId: n, guildId: r }),
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        p.default.track(v.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = _.A.getChannelId();
        null == t ||
            A.A.getClipsWarningShown(t) ||
            e === c.default.getId() ||
            !A.A.isClipsEnabledForUser(e) ||
            (u.Q$.getSetting() &&
                (i.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        _.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, T.A)(d.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, E.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == A.A.getHardwareClassification() ||
                    null == A.A.getHardwareClassificationForDecoupled() ||
                    A.A.getHardwareClassificationVersion() !== S.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        i.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: a } = e;
        if (n !== r.x.STREAM || !(0, T.A)(d.Ay)) return;
        let s = f.A.getRTCConnection(
            o._z({ streamType: null != a ? C.U4.GUILD : C.U4.CALL, ownerId: t, channelId: i, guildId: a }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, h.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await s.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                p.default.track(v.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: S.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return I.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, g.isWindows)()) {
            let t = e.some((e) => S.sc.test(e)),
                n = e.some((e) => S.l_.test(e));
            return t ? I.k9.MEETS_AUTO_ENABLE : n ? I.k9.MEETS_MINIMUM : I.k9.BELOW_MINIMUM;
        }
        return (0, g.isMac)()
            ? "arm64" === s.A.remoteApp.getAppArch()
                ? I.k9.MEETS_AUTO_ENABLE
                : I.k9.MEETS_MINIMUM
            : I.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, T.A)(d.Ay)) return;
        let t = _.A.getRTCConnection();
        if (null == t) return;
        if (e === c.default.getId()) return void t.setClipRecordUser(e, "audio", (0, y.TD)());
        let n = A.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, T.A)(d.Ay)) return;
        let t = _.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, y.TD)());
    }
    applyStreamRecording(e, t) {
        if (!(0, T.A)(d.Ay)) return;
        if (c.default.getId() === e) {
            let n = (0, y.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.A.getCurrentConfig({
            location: "ClipsManager:applyStreamRecording",
        });
        if (!n) return;
        let i = r || A.A.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", i), t.setClipRecordUser(e, "video", i);
    }
    handleMessageCreate(e) {}
    handleRemoteClipTrigger(e) {}
}
