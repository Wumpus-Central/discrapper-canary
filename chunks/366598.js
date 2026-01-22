n.d(t, {
    A: () => T,
}),
    n(747238),
    n(896048);
var r = n(205693),
    i = n(73153),
    a = n(439372),
    s = n(77729),
    o = n(652896),
    l = n(670470),
    c = n(253932),
    u = n(961350),
    d = n(430452),
    f = n(383501),
    p = n(162605),
    _ = n(851581),
    h = n(954571),
    m = n(723702),
    g = n(734066),
    E = n(274372),
    b = n(372684),
    y = n(915618),
    O = n(572164),
    A = n(696016),
    v = n(652215),
    S = n(502075);

function I(e, t, n) {
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
class T extends a.A {
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, g.Pm)() || n !== v.S7L.RTC_CONNECTED) return;
        let a = u.default.getId();
        if (t === r.x.DEFAULT) {
            this.applyUserVoiceRecording(a), this.applyUserSoundboardRecording(a);
            return;
        }
        if (t === r.x.STREAM && null != i) {
            let { ownerId: e } = (0, o.Iy)(i);
            if (e !== a) return;
            let t = p.A.getRTCConnection(i);
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
        let i = p.A.getRTCConnection(
            o._z({
                streamType: null != r ? S.U4.GUILD : S.U4.CALL,
                ownerId: t,
                channelId: n,
                guildId: r,
            }),
        );
        null != i && this.applyStreamRecording(t, i);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        h.default.track(v.HAw.CLIPS_INIT_FAILURE, {
            application_name: t,
            error_message: n,
        });
    }
    maybeShowClipsWarning(e) {
        let t = f.A.getChannelId();
        null == t ||
            E.A.getClipsWarningShown(t) ||
            e === u.default.getId() ||
            !E.A.isClipsEnabledForUser(e) ||
            (c.Q$.getSetting() &&
                (i.h.dispatch({
                    type: "CLIPS_SHOW_CALL_WARNING",
                    channelId: t,
                }),
                this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        var e;
        null == (e = f.A.getUserIds()) || e.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, y.A)(d.A) ||
            (this.applyNativeClipsSettings(),
            (0, g.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == E.A.getHardwareClassification() ||
                    null == E.A.getHardwareClassificationForDecoupled() ||
                    E.A.getHardwareClassificationVersion() !== A.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        i.h.dispatch({
                            type: "CLIPS_CLASSIFY_HARDWARE",
                            classification: e,
                        });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: a } = e;
        if (n !== r.x.STREAM || !(0, y.A)(d.A)) return;
        let s = p.A.getRTCConnection(
            o._z({
                streamType: null != a ? S.U4.GUILD : S.U4.CALL,
                ownerId: t,
                channelId: i,
                guildId: a,
            }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, _.w)();
                if ((null == e ? void 0 : e.gpus) != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return {
                        gpuModels: t,
                        classification: n,
                    };
                }
                {
                    let e = (await s.A.processUtils.getSystemInfo()).gpus.map((e) => {
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
                h.default.track(v.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: A.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return b.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, m.isWindows)()) {
            let t = e.some((e) => A.sc.test(e)),
                n = e.some((e) => A.l_.test(e));
            return t ? b.k9.MEETS_AUTO_ENABLE : n ? b.k9.MEETS_MINIMUM : b.k9.BELOW_MINIMUM;
        }
        return (0, m.isMac)()
            ? "arm64" === s.A.remoteApp.getAppArch()
                ? b.k9.MEETS_AUTO_ENABLE
                : b.k9.MEETS_MINIMUM
            : b.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, y.A)(d.A)) return;
        let t = f.A.getRTCConnection();
        if (null == t) return;
        if (e === u.default.getId()) return void t.setClipRecordUser(e, "audio", (0, O.TD)());
        let n = E.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, y.A)(d.A)) return;
        let t = f.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, O.TD)());
    }
    applyStreamRecording(e, t) {
        if (!(0, y.A)(d.A)) return;
        if (u.default.getId() === e) {
            let n = (0, O.TD)();
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
    constructor(...e) {
        super(...e),
            I(this, "actions", {
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
