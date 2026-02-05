"use strict";
n.d(t, { A: () => C });
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
    p = n(851581),
    h = n(954571),
    m = n(723702),
    g = n(734066),
    E = n(274372),
    A = n(372684),
    I = n(915618),
    T = n(572164),
    y = n(696016),
    S = n(652215),
    v = n(502075);
class C extends a.A {
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
        if (!(0, g.Pm)() || n !== S.S7L.RTC_CONNECTED) return;
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
            o._z({ streamType: null != r ? v.U4.GUILD : v.U4.CALL, ownerId: t, channelId: n, guildId: r }),
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        h.default.track(S.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = _.A.getChannelId();
        null == t ||
            E.A.getClipsWarningShown(t) ||
            e === c.default.getId() ||
            !E.A.isClipsEnabledForUser(e) ||
            (u.Q$.getSetting() &&
                (i.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        _.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, I.A)(d.A) ||
            (this.applyNativeClipsSettings(),
            (0, g.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == E.A.getHardwareClassification() ||
                    null == E.A.getHardwareClassificationForDecoupled() ||
                    E.A.getHardwareClassificationVersion() !== y.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        i.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: a } = e;
        if (n !== r.x.STREAM || !(0, I.A)(d.A)) return;
        let s = f.A.getRTCConnection(
            o._z({ streamType: null != a ? v.U4.GUILD : v.U4.CALL, ownerId: t, channelId: i, guildId: a }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, p.w)();
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
                h.default.track(S.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: y.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return A.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, m.isWindows)()) {
            let t = e.some((e) => y.sc.test(e)),
                n = e.some((e) => y.l_.test(e));
            return t ? A.k9.MEETS_AUTO_ENABLE : n ? A.k9.MEETS_MINIMUM : A.k9.BELOW_MINIMUM;
        }
        return (0, m.isMac)()
            ? "arm64" === s.A.remoteApp.getAppArch()
                ? A.k9.MEETS_AUTO_ENABLE
                : A.k9.MEETS_MINIMUM
            : A.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, I.A)(d.A)) return;
        let t = _.A.getRTCConnection();
        if (null == t) return;
        if (e === c.default.getId()) return void t.setClipRecordUser(e, "audio", (0, T.TD)());
        let n = E.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, I.A)(d.A)) return;
        let t = _.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, T.TD)());
    }
    applyStreamRecording(e, t) {
        if (!(0, I.A)(d.A)) return;
        if (c.default.getId() === e) {
            let n = (0, T.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
        let { enableViewerClipping: n, ignoreSenderPreference: r } = l.A.getCurrentConfig({
            location: "ClipsManager:applyStreamRecording",
        });
        if (!n) return;
        let i = r || E.A.isViewerClippingAllowedForUser(e);
        this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", i), t.setClipRecordUser(e, "video", i);
    }
    handleMessageCreate(e) {}
    handleRemoteClipTrigger(e) {}
}
