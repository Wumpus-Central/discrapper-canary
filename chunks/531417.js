"use strict";
n.d(t, { A: () => A });
var r = n(214958),
    i = n.n(r),
    s = n(972347),
    a = n(118356),
    o = n(205693),
    l = n(70909),
    u = n(646369),
    c = n(368344),
    d = n(823598),
    _ = n(321469),
    f = n(540239),
    h = n(731854),
    p = n(713754),
    m = n(264572).Buffer;
function E(e) {
    return (e ?? p.Hz) / p.Hz;
}
function g(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class A extends s.A {
    Video = f.A;
    Camera = _.A;
    audioInputDeviceId = p.qe;
    audioOutputDeviceId = p.qe;
    videoInputDeviceId = p.qe;
    connections = new Set();
    lastVoiceActivity = -1;
    audioSubsystem = "standard";
    audioLayer = "";
    deviceChangeGeneration = 0;
    consecutiveWatchdogFailures = 0;
    codecSurvey = null;
    logger = new a.Vy("MediaEngineNative");
    constructor() {
        super(), this.logger.enableNativeLogger(!0);
        const e = (0, d.lE)();
        e.setDeviceChangeCallback(this.handleDeviceChange),
            e.setVolumeChangeCallback(this.handleVolumeChange),
            e.setOnVoiceCallback(this.handleVoiceActivity),
            e.setVideoInputInitializationCallback?.(this.handleVideoInputInitialization),
            e.setAudioInputInitializationCallback?.(this.handleAudioInputInitialization),
            e.setAudioDeviceModuleErrorCallback?.(this.handleAudioDeviceModuleErrorCallback),
            e.setTransportOptions({ idleJitterBufferFlush: !0, ducking: !1 }),
            e.setNativeScreenSharePickerCallbacks?.(
                this.handleNativeScreenSharePickerUpdate,
                this.handleNativeScreenSharePickerCancel,
                this.handleNativeScreenSharePickerError,
            ),
            e.setVideoCodecErrorCallback?.(this.handleVideoCodecErrorCallback),
            e.setSystemMicrophoneModeChangeCallback?.(this.handleSystemMicrophoneModeChangeCallback),
            this.on("removeListener", this.handleRemoveListener),
            this.on("newListener", this.handleNewListener),
            null != (0, d.lE)().getAudioSubsystem
                ? (0, d.lE)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, d.lE)().getUseLegacyAudioDevice &&
                  (this.audioSubsystem = (0, d.lE)().getUseLegacyAudioDevice() ? p.rB.LEGACY : p.rB.STANDARD),
            null != e.pingVoiceThread && this.watchdogTick(),
            null != e.setActiveSinksChangeCallback && e.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            e.setOnClipsMlDetection?.((e) => {
                Array.isArray(e) && e.length > 0 && this.emit(o.bg.ClipsMlDetection, e);
            }),
            (0, l.A)(this),
            I(this);
    }
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(o.bg.Destroy), this.removeAllListeners();
    }
    interact() {}
    static supported() {
        return (0, d.$j)();
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case p.O5.LEGACY_AUDIO_SUBSYSTEM:
                return (0, d.$b)(p.BY.VOICE_LEGACY_SUBSYSTEM);
            case p.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, d.$b)(p.BY.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case p.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, d.$b)(p.BY.VOICE_AUTOMATIC_SUBSYSTEM);
            case p.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, d.$b)(p.BY.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            case p.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING:
                return (0, d.$b)(p.BY.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
            case p.O5.DEBUG_LOGGING:
                return (0, d.$b)(p.BY.DEBUG_LOGGING);
            case p.O5.SOUNDSHARE:
                return (0, d.$b)(p.BY.SOUNDSHARE);
            case p.O5.SCREEN_SOUNDSHARE:
                return (0, d.$b)(p.BY.SCREEN_SOUNDSHARE);
            case p.O5.ELEVATED_HOOK:
                return (0, d.$b)(p.BY.ELEVATED_HOOK);
            case p.O5.LOOPBACK:
                return (0, d.$b)(p.BY.LOOPBACK);
            case p.O5.WUMPUS_VIDEO:
                return (0, d.$b)(p.BY.WUMPUS_VIDEO);
            case p.O5.HYBRID_VIDEO:
                return (0, d.$b)(p.BY.HYBRID_VIDEO);
            case p.O5.ATTENUATION:
            case p.O5.VIDEO_HOOK:
                return i()?.os?.family != null && /^win/i.test(i().os.family);
            case p.O5.EXPERIMENTAL_SOUNDSHARE:
                return (0, d.$b)(p.BY.SOUNDSHARE_LOOPBACK);
            case p.O5.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, d.$b)(p.BY.REMOTE_LOCUS_NETWORK_CONTROL);
            case p.O5.SCREEN_PREVIEWS:
                return (0, d.$b)(p.BY.SCREEN_PREVIEWS);
            case p.O5.CLIPS:
                return (0, d.$b)(p.BY.CLIPS);
            case p.O5.CLIPS_V3:
                return (0, d.$b)(p.BY.CLIPS_V3);
            case p.O5.WINDOW_PREVIEWS:
                return (0, d.$b)(p.BY.WINDOW_PREVIEWS);
            case p.O5.AUDIO_DEBUG_STATE:
                return (0, d.$b)(p.BY.AUDIO_DEBUG_STATE);
            case p.O5.CONNECTION_REPLAY:
                return (0, d.$b)(p.BY.CONNECTION_REPLAY);
            case p.O5.SIMULCAST:
                return (0, d.$b)(p.BY.SIMULCAST) && (0, d.$b)(p.BY.SIMULCAST_BUGFIX);
            case p.O5.RTC_REGION_RANKING:
                return (0, d.$b)(p.BY.RTC_REGION_RANKING);
            case p.O5.ELECTRON_VIDEO:
                return (0, d.$b)(p.BY.ELECTRON_VIDEO);
            case p.O5.MEDIAPIPE:
                return (0, d.$b)(p.BY.MEDIAPIPE);
            case p.O5.FIXED_KEYFRAME_INTERVAL:
                return (0, d.$b)(p.BY.FIXED_KEYFRAME_INTERVAL);
            case p.O5.FIRST_FRAME_CALLBACK:
                return (0, d.$b)(p.BY.FIRST_FRAME_CALLBACK);
            case p.O5.REMOTE_USER_MULTI_STREAM:
                return (0, d.$b)(p.BY.REMOTE_USER_MULTI_STREAM);
            case p.O5.IMAGE_QUALITY_MEASUREMENT:
                return (0, d.$b)(p.BY.IMAGE_QUALITY_MEASUREMENT);
            case p.O5.GO_LIVE_HARDWARE:
                return (0, d.$b)(p.BY.GO_LIVE_HARDWARE);
            case p.O5.SCREEN_CAPTURE_KIT:
                return (0, d.$b)(p.BY.SCREEN_CAPTURE_KIT);
            case p.O5.NATIVE_SCREENSHARE_PICKER:
                return (0, d.$b)(p.BY.NATIVE_SCREENSHARE_PICKER);
            case p.O5.MLS_PAIRWISE_FINGERPRINTS:
                return (0, d.$b)(p.BY.MLS_PAIRWISE_FINGERPRINTS);
            case p.O5.OFFLOAD_ADM_CONTROLS:
                return (0, d.$b)(p.BY.OFFLOAD_ADM_CONTROLS);
            case p.O5.VAAPI:
                return (0, d.$b)(p.BY.VAAPI);
            case p.O5.GAMESCOPE_CAPTURE:
                return (0, d.$b)(p.BY.GAMESCOPE_CAPTURE);
            case p.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT:
                return (0, d.$b)(p.BY.ASYNC_VIDEO_INPUT_DEVICE_INIT);
            case p.O5.PORT_AWARE_LATENCY_TESTING:
                return (0, d.$b)(p.BY.PORT_AWARE_LATENCY_TESTING);
            case p.O5.DIAGNOSTICS:
            case p.O5.NATIVE_PING:
            case p.O5.AUTOMATIC_VAD:
            case p.O5.AUDIO_INPUT_DEVICE:
            case p.O5.AUDIO_OUTPUT_DEVICE:
            case p.O5.QOS:
            case p.O5.VOICE_PROCESSING:
            case p.O5.AUTO_ENABLE:
            case p.O5.VIDEO:
            case p.O5.DESKTOP_CAPTURE:
            case p.O5.DESKTOP_CAPTURE_FORMAT:
            case p.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case p.O5.VOICE_PANNING:
            case p.O5.AEC_DUMP:
            case p.O5.DISABLE_VIDEO:
            case p.O5.SAMPLE_PLAYBACK:
            case p.O5.NOISE_SUPPRESSION:
            case p.O5.AUTOMATIC_GAIN_CONTROL:
            case p.O5.SIDECHAIN_COMPRESSION:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        (0, d.$b)(p.BY.EXPERIMENT_CONFIG) || (n.experiments = void 0);
        let r = u.A.create(e, t, n);
        return (
            r.on(o.yq.Destroy, (e) => {
                this.connections.delete(e),
                    this.connectionsEmpty() && ((0, d.i0)(h.E6.NORMAL), (0, d.lE)().setNativeThreadsPriority?.(0));
            }),
            r.on(o.yq.Connected, () => {
                r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
            }),
            r.on(o.yq.Silence, (e) => {
                this.emit(o.bg.Silence, e);
            }),
            this.connections.add(r),
            (0, d.i0)(n.processPriority ?? h.E6.HIGH),
            null != n.threadPriorityConfiguration &&
                (0, d.lE)().setNativeThreadsPriority?.(n.threadPriorityConfiguration),
            this.emit(o.bg.Connection, r),
            r
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === p.x.DEFAULT && this.videoInputDeviceId !== p.qe) || e.hasDesktopSource();
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return Promise.resolve();
    }
    setAudioInputBypassSystemProcessing(e) {
        (0, d.lE)().setTransportOptions({ bypassSystemProcessing: e });
    }
    setInputVolume(e) {
        (0, d.lE)().setInputVolume(E(e));
    }
    setOutputVolume(e) {
        (0, d.lE)().setOutputVolume(E(e));
    }
    getAudioInputDevices() {
        return (0, c._e)();
    }
    getNoiseCancellationStats() {
        return new Promise((e) => {
            let t = (0, d.lE)();
            null == t.getNoiseCancellationStats ? e(null) : t.getNoiseCancellationStats((t) => e(JSON.parse(t)));
        });
    }
    setNoiseCancellationEnableStats(e) {
        (0, d.lE)().setNoiseCancellationEnableStats?.(e);
    }
    setAudioInputDevice(e) {
        let t = this.audioInputDeviceId;
        (this.audioInputDeviceId = e),
            (0, d.$b)(p.BY.SET_AUDIO_DEVICE_BY_ID)
                ? (0, d.lE)().setInputDevice(e)
                : (0, c._e)().then((t) => {
                      let n = t.find((t) => t.id === e) ?? t[0];
                      null != n && (0, d.lE)().setInputDevice(n.index);
                  }),
            this.emit(o.bg.SelectedDeviceChange, p.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return (0, c.tS)();
    }
    setAudioOutputDevice(e) {
        let t = this.audioOutputDeviceId;
        (this.audioOutputDeviceId = e),
            (0, d.$b)(p.BY.SET_AUDIO_DEVICE_BY_ID)
                ? (0, d.lE)().setOutputDevice(e)
                : (0, c.tS)().then((t) => {
                      let n = t.find((t) => t.id === e) ?? t[0];
                      null != n && (0, d.lE)().setOutputDevice(n.index);
                  }),
            this.emit(o.bg.SelectedDeviceChange, p.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return (0, c.DT)();
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : p.qe;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, d.$b)(p.BY.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && "" !== t.originalId ? t.originalId : t.id) : p.qe;
                (0, d.lE)().setVideoInputDevice(e);
            } else (0, d.lE)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {
        (0, d.lE)().setAsyncVideoInputDeviceInitSetting?.(e), (0, d.lE)().setAsyncVideoInputDeviceInit?.(e);
    }
    getCodecCapabilities(e) {
        (0, d.lE)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, t) {
        null == e
            ? this.eachConnection((e) => {
                  e.clearDesktopSource(),
                      e.clearGoLiveDevices(),
                      e.setSoundshareSource(0, !1),
                      e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
              }, t)
            : this.eachConnection((n) => {
                  (t !== p.x.STREAM || n.streamUserId === n.userId) &&
                      (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)));
              }, t);
    }
    setClipsSource(e) {
        let t = (0, d.lE)();
        if (null == t.setClipsSource || null == t.setOnClipsRecordingEvent || null == t.applyClipsSettings) return;
        if (null == e) return void t.setClipsSource({ id: "", soundshareId: 0 });
        let { frameRate: n, resolution: r } = e.quality,
            i = r <= 480 ? (r / 3) * 4 : (r / 9) * 16,
            s = r,
            {
                id: a,
                soundshareId: l,
                useLoopback: u,
                useVideoHook: c,
                useHookFramePacer: _,
                useGraphicsCapture: f,
                useQuartzCapturer: h,
                allowScreenCaptureKit: m,
                hdrCaptureMode: E,
            } = e.desktopDescription;
        t.setOnClipsRecordingEvent((t) => {
            this.logger.info(`Clips recording event: ${p.B8[t]} received for stream ${a} and sound ${l}.`),
                t === p.B8.GoLiveEnded
                    ? this.emit(o.bg.ClipsRecordingRestartNeeded)
                    : t === p.B8.Error
                      ? this.emit(
                            o.bg.ClipsInitFailure,
                            "Failed to set clips source in media engine",
                            e.applicationName,
                        )
                      : (t === p.B8.Ended || t === p.B8.StoppedByGoLive) && this.emit(o.bg.ClipsRecordingEnded, a, l);
        }),
            t.applyClipsSettings?.({
                useVideoHook: c,
                useHookFramePacer: _,
                useGraphicsCapture: f,
                useQuartzCapturer: h,
                allowScreenCaptureKit: m,
                hdrCaptureMode: E,
                soundshareLoopback: u,
                frameRate: n,
                width: i,
                height: s,
                videoEncoderExperiments: e.videoEncoderExperiments,
            });
        let [g, A] = null != a ? a.split(":") : ["", ""];
        t.setClipsSource({ id: A, soundshareId: null != l ? l : 0 });
    }
    setClipsQualitySettings(e, t, n) {
        let r = (0, d.lE)();
        return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((r) => {
            (n !== p.x.STREAM || r.streamUserId === r.userId) && r.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error("NO_STREAM"));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.lE)().getScreenPreviews
                ? (0, d.lE)().getScreenPreviews(e, t, (e) => {
                      n(e.map((e, t) => ({ ...e, name: "Screen " + (t + 1) })));
                  })
                : n([]);
        });
    }
    setClipsModulePath(e) {
        (0, d.lE)().setClipsModulePath?.(e);
    }
    setClipsDataPath(e) {
        (0, d.lE)().setClipsDataPath?.(e);
    }
    setClipBufferLength(e) {
        (0, d.lE)().setClipBufferLength?.(e);
    }
    setClipsMLPipelineEnabled(e) {
        (0, d.lE)().setClipsMLPipelineEnabled?.(e);
    }
    setClipsMLPipelineTypeEnabled(e, t) {
        (0, d.lE)().setClipsMLPipelineTypeEnabled?.(e, t);
    }
    saveClip(e, t) {
        let n = (0, d.lE)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) => {
                          let i;
                          try {
                              i = JSON.parse("" !== n ? n : "{}");
                          } catch {
                              i = {};
                          }
                          return r({ duration: e, clipStats: i });
                      },
                      (e) => {
                          try {
                              let t = JSON.parse("" !== e ? e : "{}");
                              return i(t);
                          } catch {
                              return i({ errorMessage: "clip save failed", errorAt: "unknown" });
                          }
                      },
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let r = (0, d.lE)();
        return null == r.saveClipForUser
            ? Promise.reject("unsupported")
            : new Promise((i, s) => {
                  r.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) => {
                          let r;
                          try {
                              r = JSON.parse("" !== n ? n : "{}");
                          } catch {
                              r = {};
                          }
                          return i({ duration: e, clipStats: r });
                      },
                      (e) => {
                          try {
                              let t = JSON.parse("" !== e ? e : "{}");
                              return s(t);
                          } catch {
                              return s({ errorMessage: "clip save failed", errorAt: "unknown" });
                          }
                      },
                  );
              });
    }
    updateClipMetadata(e, t) {
        let n = (0, d.lE)();
        return null == n.updateClipMetadata
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.updateClipMetadata(e, t, r, i);
              });
    }
    saveScreenshot(e, t, n, r, i) {
        let s = (0, d.lE)();
        return null == s.saveScreenshot
            ? Promise.reject("unsupported")
            : new Promise((a, o) => {
                  s.saveScreenshot(
                      e,
                      t,
                      r ?? "",
                      n,
                      i ?? 0,
                      (e) => {
                          a(m.from(e));
                      },
                      o,
                  );
              });
    }
    exportClip(e, t) {
        let n = (0, d.lE)();
        return null == n.exportClip
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.exportClip(e, t, (e) => r(new Blob([e])), i);
              });
    }
    getWindowPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.lE)().getWindowPreviews
                ? (0, d.lE)().getWindowPreviews(e, t, (e) => {
                      n(e);
                  })
                : n([]);
        });
    }
    async getSingleWindowPreview(e, t, n) {
        if (null != (0, d.lE)().getSingleWindowPreview) {
            let r = await (0, d.lE)().getSingleWindowPreview(e, t, n);
            return r.length > 0 ? r[0] : null;
        }
        return null;
    }
    setAudioSubsystem(e) {
        null != (0, d.lE)().setAudioSubsystem
            ? (0, d.lE)().setAudioSubsystem(e)
            : (0, d.lE)().setUseLegacyAudioDevice(e === p.rB.LEGACY);
    }
    setOffloadAdmControls(e) {
        let t = (0, d.lE)();
        null != t.setOffloadAdmControls && t.setOffloadAdmControls(e);
    }
    updateFieldTrial(e, t) {
        (0, d.lE)().updateFieldTrial?.(e, t);
    }
    queueAudioSubsystem(e) {
        let t = (0, d.lE)();
        null != t.queueAudioSubsystem ? t.queueAudioSubsystem(e) : this.setAudioSubsystem(e);
    }
    getAudioSubsystem() {
        return this.audioSubsystem;
    }
    getAudioLayer() {
        return this.audioLayer;
    }
    getDebugLogging() {
        return !!this.supports(p.O5.DEBUG_LOGGING) && (0, d.lE)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(p.O5.DEBUG_LOGGING) && (0, d.lE)().setDebugLogging(e);
    }
    setLoopback(e, t) {
        null != (0, d.lE)().setLoopback &&
            (0, d.lE)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControlConfig?.enabled,
                automaticGainControlConfig: t.automaticGainControlConfig,
                noiseCancellation: t.noiseCancellation,
                noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
            }),
            null != (0, d.lE)().setEmitVADLevel2
                ? (0, d.lE)().setEmitVADLevel2(e || this.listenerCount(o.bg.VoiceActivity) > 0)
                : (0, d.lE)().setEmitVADLevel(e || this.listenerCount(o.bg.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: t.automaticGainControlConfig?.enabled,
                      noiseCancellation: t.noiseCancellation,
                      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                  });
    }
    getLoopback() {
        return !1;
    }
    getCodecSurvey() {
        return null != this.codecSurvey
            ? Promise.resolve(this.codecSurvey)
            : new Promise((e, t) => {
                  let n = (0, d.lE)();
                  null != n.getCodecSurvey
                      ? n.getCodecSurvey((t) => {
                            (this.codecSurvey = t), e(t);
                        })
                      : t(Error("getCodecSurvey is not implemented."));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, t) => {
            let { writeAudioDebugState: n } = (0, d.lE)();
            null != n ? (n(), e()) : t(Error("Audio debug state is not supported."));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        (0, d.lE)().setAecDump?.(e);
    }
    startRecordingRawSamples(e) {
        (0, d.lE)().startRecordingRawSamples?.(e);
    }
    stopRecordingRawSamples() {
        (0, d.lE)().stopRecordingRawSamples?.();
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: r } = (0, d.lE)();
            null != r ? r(e, (e) => t(e)) : n(Error("RTC region latency test is not supported."));
        });
    }
    createReplayConnection(e, t) {
        let n = u.A.createReplay(e, t);
        return null == n
            ? null
            : (n.on(o.yq.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, d.i0)(h.E6.NORMAL);
              }),
              this.connections.add(n),
              (0, d.i0)(h.E6.HIGH),
              this.emit(o.bg.Connection, n),
              n);
    }
    setOnVideoContainerResized(e) {
        f.A.onContainerResized = e;
    }
    setMaxSyncDelayOverride(e) {
        let { setMaxSyncDelayOverride: t } = (0, d.lE)();
        null != t && t(e);
    }
    applyMediaFilterSettings(e) {
        let { applyMediaFilterSettings: t, applyMediaFilterSettingsWithCallback: n } = (0, d.lE)();
        return null != n
            ? new Promise((t, r) => {
                  n(e, t);
              })
            : (null != t && t(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((t, n) => {
            let { startLocalAudioRecording: r } = (0, d.lE)();
            null != r
                ? r(e, (e) => {
                      e ? t() : n(Error("Failed to start local audio recording."));
                  })
                : n(Error("startLocalAudioRecording is not supported."));
        });
    }
    stopLocalAudioRecording(e) {
        (0, d.lE)().stopLocalAudioRecording?.((t, n) => {
            e(t, n);
        }),
            this.listenerCount(o.bg.VoiceActivity) > 0 &&
                null != (0, d.lE)().setEmitVADLevel2 &&
                (0, d.lE)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        (0, d.lE)().setHasFullbandPerformance?.(e);
    }
    getSupportedSecureFramesProtocolVersion() {
        return (0, d.lE)().SupportedSecureFramesProtocolVersion ?? 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        (0, d.lE)().getSupportedBandwidthEstimationExperiments?.(e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, r) => {
            let i = (0, d.lE)();
            null != i.getMLSSigningKey
                ? i.getMLSSigningKey(e, t, (e, t) => n({ key: e, signature: t }))
                : r(Error("NOT_IMPLEMENTED"));
        });
    }
    setSidechainCompression(e) {
        (0, d.lE)().setSidechainCompression?.(e);
    }
    setSidechainCompressionStrength(e) {
        let t = 100 - e,
            n = g(t, h.Zi, h.Xg),
            r = g(t, h.d_, h.nO);
        (0, d.lE)().applySidechainCompressionSettings?.({ threshold: n, ratio: r });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        (0, d.lE)().setNativeDesktopVideoSourcePickerActive?.(e);
    }
    presentNativeScreenSharePicker(e) {
        (0, d.lE)().presentNativeScreenSharePicker?.(e ?? "");
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        (0, d.lE)().releaseNativeDesktopVideoSourcePickerStream?.();
    }
    async getSystemMicrophoneMode() {
        return (await (0, d.lE)().getSystemMicrophoneMode?.()) ?? "";
    }
    showSystemCaptureConfigurationUI(e) {
        (0, d.lE)().showSystemCaptureConfigurationUI?.(e);
    }
    fetchAsyncResources(e) {
        return Promise.resolve();
    }
    async getDeviceOSVolume(e) {
        return await (0, d.lE)().getDeviceOSVolume?.(e);
    }
    async getDeviceOSMuted(e) {
        return await (0, d.lE)().getDeviceOSMuted?.(e);
    }
    getDeviceAudioEffects(e) {
        let t = (0, d.lE)();
        return null != t.getDeviceAudioEffects
            ? t.getDeviceAudioEffects(e)
            : Promise.reject(Error("Device audio effect querying not supported"));
    }
    handleDeviceChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            e.deviceChangeGeneration++,
                e.emit(
                    o.bg.DeviceChange,
                    (0, c.P5)(p.oh.AUDIO_INPUT, t),
                    (0, c.P5)(p.oh.AUDIO_OUTPUT, n),
                    (0, c.P5)(p.oh.VIDEO_INPUT, r),
                );
        };
    })();
    handleVolumeChange = (e, t) => {
        this.emit(o.bg.VolumeChange, e * p.Hz, t * p.Hz);
    };
    handleVoiceActivity = (e, t) => {
        let n = Date.now();
        this.listenerCount(o.bg.VoiceActivity) > 0 &&
            (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) &&
            ((this.lastVoiceActivity = n), this.emit(o.bg.VoiceActivity, e, t));
    };
    handleActiveSinksChange = (e, t) => {
        this.connections.forEach((n) =>
            n.setHasActiveVideoOutputSink(e, t, "MediaEngineNative.handleActiveSinksChange"),
        );
    };
    handleNewListener = (e) => {
        switch (e) {
            case o.bg.VoiceActivity:
                null != (0, d.lE)().setEmitVADLevel2
                    ? (0, d.lE)().setEmitVADLevel2(!0)
                    : (0, d.lE)().setEmitVADLevel(!0, !1, {});
                break;
            case o.bg.DeviceChange:
                let t = this.deviceChangeGeneration;
                Promise.all([
                    this.getAudioInputDevices(),
                    this.getAudioOutputDevices(),
                    this.getVideoInputDevices(),
                ]).then((e) => {
                    let [n, r, i] = e;
                    t === this.deviceChangeGeneration && this.emit(o.bg.DeviceChange, n, r, i);
                });
        }
    };
    handleRemoveListener = (e) => {
        e === o.bg.VoiceActivity &&
            (null != (0, d.lE)().setEmitVADLevel2
                ? (0, d.lE)().setEmitVADLevel2(this.listenerCount(o.bg.VoiceActivity) > 0)
                : (0, d.lE)().setEmitVADLevel(this.listenerCount(o.bg.VoiceActivity) > 0, !1, {}));
    };
    handleVideoInputInitialization = (e) => {
        this.emit(o.bg.VideoInputInitialized, e);
    };
    handleAudioInputInitialization = (e) => {
        this.emit(o.bg.AudioInputInitialized, e);
    };
    handleNativeScreenSharePickerUpdate = (e, t) => {
        this.emit(o.bg.NativeScreenSharePickerUpdate, e, t);
    };
    handleNativeScreenSharePickerCancel = (e) => {
        this.emit(o.bg.NativeScreenSharePickerCancel, e);
    };
    handleNativeScreenSharePickerError = (e) => {
        this.emit(o.bg.NativeScreenSharePickerError, e);
    };
    handleAudioDeviceModuleErrorCallback = (e, t) => {
        -100 !== e && this.emit(o.bg.AudioDeviceModuleError, "RustAudioDeviceModule", e, t);
    };
    handleVideoCodecErrorCallback = (e) => {
        this.emit(o.bg.VideoCodecError, e);
    };
    handleSystemMicrophoneModeChangeCallback = (e) => {
        this.emit(o.bg.SystemMicrophoneModeChange, e);
    };
    watchdogTick() {
        let e = !1;
        (0, d.lE)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(o.bg.WatchdogTimeout) : this.watchdogTick();
            }, p.PE);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
}
function I(e) {
    let t = !1;
    e.on(o.bg.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let r = (0, d.lE)(),
            i = await new Promise((e) => {
                r.pollQueueMetrics?.((t) => {
                    e(t);
                });
            });
        (i.periodMs = h.tl), e.emit(o.bg.VoiceQueueMetrics, i), setTimeout(n, h.tl);
    };
    setTimeout(n, h.tl);
}
