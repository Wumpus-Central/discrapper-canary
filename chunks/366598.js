"use strict";
n.d(t, { A: () => v });
var r = n(205693),
    i = n(73153),
    s = n(439372),
    a = n(77729),
    o = n(652896),
    l = n(253932),
    u = n(961350),
    c = n(430452),
    d = n(383501),
    _ = n(162605),
    f = n(851581),
    p = n(954571),
    h = n(723702),
    m = n(734066),
    E = n(274372),
    g = n(372684),
    A = n(915618),
    I = n(572164),
    T = n(696016),
    S = n(652215),
    y = n(502075);
class v extends s.A {
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
        if (!(0, m.Pm)() || n !== S.S7L.RTC_CONNECTED) return;
        let s = u.default.getId();
        if (t === r.x.DEFAULT) {
            this.applyUserVoiceRecording(s), this.applyUserSoundboardRecording(s);
            return;
        }
        if (t === r.x.STREAM && null != i) {
            let { ownerId: e } = (0, o.Iy)(i);
            if (e !== s) return;
            let t = _.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(s, t);
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
        let i = _.A.getRTCConnection(
            o._z({ streamType: null != r ? y.U4.GUILD : y.U4.CALL, ownerId: t, channelId: n, guildId: r }),
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        p.default.track(S.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = d.A.getChannelId();
        null == t ||
            E.A.getClipsWarningShown(t) ||
            e === u.default.getId() ||
            !E.A.isClipsEnabledForUser(e) ||
            (l.Q$.getSetting() &&
                (i.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        d.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, A.A)(c.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, m.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == E.A.getHardwareClassification() ||
                    null == E.A.getHardwareClassificationForDecoupled() ||
                    E.A.getHardwareClassificationVersion() !== T.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        i.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: s } = e;
        if (n !== r.x.STREAM || !(0, A.A)(c.Ay)) return;
        let a = _.A.getRTCConnection(
            o._z({ streamType: null != s ? y.U4.GUILD : y.U4.CALL, ownerId: t, channelId: i, guildId: s }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, f.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await a.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                p.default.track(S.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: T.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return g.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, h.isWindows)()) {
            let t = e.some((e) => T.sc.test(e)),
                n = e.some((e) => T.l_.test(e));
            return t ? g.k9.MEETS_AUTO_ENABLE : n ? g.k9.MEETS_MINIMUM : g.k9.BELOW_MINIMUM;
        }
        return (0, h.isMac)()
            ? "arm64" === a.A.app.getAppArch()
                ? g.k9.MEETS_AUTO_ENABLE
                : g.k9.MEETS_MINIMUM
            : g.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, A.A)(c.Ay)) return;
        let t = d.A.getRTCConnection();
        if (null == t) return;
        if (e === u.default.getId()) return void t.setClipRecordUser(e, "audio", (0, I.TD)());
        let n = E.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, A.A)(c.Ay)) return;
        let t = d.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, I.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, A.A)(c.Ay) && u.default.getId() === e) {
            let n = (0, I.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
    handleMessageCreate(e) {}
    handleRemoteClipTrigger(e) {}
}
