n.d(t, { Z: () => I }), n(35282), n(388685), n(415506);
var r = n(264344),
    i = n.n(r),
    a = n(47770),
    o = n(579092),
    s = n(46973),
    l = n(734298),
    c = n(997545),
    u = n(501950),
    d = n(992774),
    f = n(656795),
    _ = n(650886),
    p = n(65154),
    h = n(149396),
    m = n(413135).Buffer;
function g(e, t, n) {
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    return (null != e ? e : h.Qx) / h.Qx;
}
function v(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class I extends a.Z {
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(s.aB.Destroy), this.removeAllListeners();
    }
    interact() {}
    static supported() {
        return (0, d.Zh)();
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case h.AN.LEGACY_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(h.eR.VOICE_LEGACY_SUBSYSTEM);
            case h.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(h.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case h.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(h.eR.VOICE_AUTOMATIC_SUBSYSTEM);
            case h.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, d.eJ)(h.eR.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            case h.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING:
                return (0, d.eJ)(h.eR.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
            case h.AN.DEBUG_LOGGING:
                return (0, d.eJ)(h.eR.DEBUG_LOGGING);
            case h.AN.SOUNDSHARE:
                return (0, d.eJ)(h.eR.SOUNDSHARE);
            case h.AN.SCREEN_SOUNDSHARE:
                return (0, d.eJ)(h.eR.SCREEN_SOUNDSHARE);
            case h.AN.ELEVATED_HOOK:
                return (0, d.eJ)(h.eR.ELEVATED_HOOK);
            case h.AN.LOOPBACK:
                return (0, d.eJ)(h.eR.LOOPBACK);
            case h.AN.WUMPUS_VIDEO:
                return (0, d.eJ)(h.eR.WUMPUS_VIDEO);
            case h.AN.HYBRID_VIDEO:
                return (0, d.eJ)(h.eR.HYBRID_VIDEO);
            case h.AN.ATTENUATION:
            case h.AN.VIDEO_HOOK:
                var t;
                return (
                    (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) != null &&
                    /^win/i.test(i().os.family)
                );
            case h.AN.EXPERIMENTAL_SOUNDSHARE:
                return (0, d.eJ)(h.eR.SOUNDSHARE_LOOPBACK);
            case h.AN.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, d.eJ)(h.eR.REMOTE_LOCUS_NETWORK_CONTROL);
            case h.AN.SCREEN_PREVIEWS:
                return (0, d.eJ)(h.eR.SCREEN_PREVIEWS);
            case h.AN.CLIPS:
                return (0, d.eJ)(h.eR.CLIPS);
            case h.AN.WINDOW_PREVIEWS:
                return (0, d.eJ)(h.eR.WINDOW_PREVIEWS);
            case h.AN.AUDIO_DEBUG_STATE:
                return (0, d.eJ)(h.eR.AUDIO_DEBUG_STATE);
            case h.AN.CONNECTION_REPLAY:
                return (0, d.eJ)(h.eR.CONNECTION_REPLAY);
            case h.AN.SIMULCAST:
                return (0, d.eJ)(h.eR.SIMULCAST) && (0, d.eJ)(h.eR.SIMULCAST_BUGFIX);
            case h.AN.RTC_REGION_RANKING:
                return (0, d.eJ)(h.eR.RTC_REGION_RANKING);
            case h.AN.ELECTRON_VIDEO:
                return (0, d.eJ)(h.eR.ELECTRON_VIDEO);
            case h.AN.MEDIAPIPE:
                return (0, d.eJ)(h.eR.MEDIAPIPE);
            case h.AN.FIXED_KEYFRAME_INTERVAL:
                return (0, d.eJ)(h.eR.FIXED_KEYFRAME_INTERVAL);
            case h.AN.FIRST_FRAME_CALLBACK:
                return (0, d.eJ)(h.eR.FIRST_FRAME_CALLBACK);
            case h.AN.REMOTE_USER_MULTI_STREAM:
                return (0, d.eJ)(h.eR.REMOTE_USER_MULTI_STREAM);
            case h.AN.IMAGE_QUALITY_MEASUREMENT:
                return (0, d.eJ)(h.eR.IMAGE_QUALITY_MEASUREMENT);
            case h.AN.GO_LIVE_HARDWARE:
                return (0, d.eJ)(h.eR.GO_LIVE_HARDWARE);
            case h.AN.SCREEN_CAPTURE_KIT:
                return (0, d.eJ)(h.eR.SCREEN_CAPTURE_KIT);
            case h.AN.NATIVE_SCREENSHARE_PICKER:
                return (0, d.eJ)(h.eR.NATIVE_SCREENSHARE_PICKER);
            case h.AN.MLS_PAIRWISE_FINGERPRINTS:
                return (0, d.eJ)(h.eR.MLS_PAIRWISE_FINGERPRINTS);
            case h.AN.OFFLOAD_ADM_CONTROLS:
                return (0, d.eJ)(h.eR.OFFLOAD_ADM_CONTROLS);
            case h.AN.VAAPI:
                return (0, d.eJ)(h.eR.VAAPI);
            case h.AN.GAMESCOPE_CAPTURE:
                return (0, d.eJ)(h.eR.GAMESCOPE_CAPTURE);
            case h.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT:
                return (0, d.eJ)(h.eR.ASYNC_VIDEO_INPUT_DEVICE_INIT);
            case h.AN.ASYNC_CLIPS_SOURCE_DEINIT:
                return (0, d.eJ)(h.eR.ASYNC_CLIPS_SOURCE_DEINIT);
            case h.AN.DIAGNOSTICS:
            case h.AN.NATIVE_PING:
            case h.AN.AUTOMATIC_VAD:
            case h.AN.AUDIO_INPUT_DEVICE:
            case h.AN.AUDIO_OUTPUT_DEVICE:
            case h.AN.QOS:
            case h.AN.VOICE_PROCESSING:
            case h.AN.AUTO_ENABLE:
            case h.AN.VIDEO:
            case h.AN.DESKTOP_CAPTURE:
            case h.AN.DESKTOP_CAPTURE_FORMAT:
            case h.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case h.AN.VOICE_PANNING:
            case h.AN.AEC_DUMP:
            case h.AN.DISABLE_VIDEO:
            case h.AN.SAMPLE_PLAYBACK:
            case h.AN.NOISE_SUPPRESSION:
            case h.AN.AUTOMATIC_GAIN_CONTROL:
            case h.AN.SIDECHAIN_COMPRESSION:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        (0, d.eJ)(h.eR.EXPERIMENT_CONFIG) || (n.experiments = void 0);
        let r = c.Z.create(e, t, n);
        return (
            r.on(s.Sh.Destroy, (e) => {
                this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(h.uJ.NORMAL);
            }),
            r.on(s.Sh.Connected, () => {
                r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
            }),
            r.on(s.Sh.Silence, (e) => {
                this.emit(s.aB.Silence, e);
            }),
            this.connections.add(r),
            (0, d.p8)(h.uJ.HIGH),
            this.emit(s.aB.Connection, r),
            r
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === h.Yn.DEFAULT && this.videoInputDeviceId !== h.Av) || e.hasDesktopSource();
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
        (0, d.zS)().setTransportOptions({ bypassSystemProcessing: e });
    }
    setInputVolume(e) {
        (0, d.zS)().setInputVolume(O(e));
    }
    setOutputVolume(e) {
        (0, d.zS)().setOutputVolume(O(e));
    }
    getAudioInputDevices() {
        return (0, u.Hg)();
    }
    getNoiseCancellationStats() {
        return new Promise((e) => {
            let t = (0, d.zS)();
            if (null == t.getNoiseCancellationStats) return void e(null);
            t.getNoiseCancellationStats((t) => e(JSON.parse(t)));
        });
    }
    setNoiseCancellationEnableStats(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setNoiseCancellationEnableStats) || t.call(n, e);
    }
    setAudioInputDevice(e) {
        let t = this.audioInputDeviceId;
        (this.audioInputDeviceId = e),
            (0, d.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID)
                ? (0, d.zS)().setInputDevice(e)
                : (0, u.Hg)().then((t) => {
                      var n;
                      let r = null != (n = t.find((t) => t.id === e)) ? n : t[0];
                      null != r && (0, d.zS)().setInputDevice(r.index);
                  }),
            this.emit(s.aB.SelectedDeviceChange, h.h7.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return (0, u.HS)();
    }
    setAudioOutputDevice(e) {
        let t = this.audioOutputDeviceId;
        (this.audioOutputDeviceId = e),
            (0, d.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID)
                ? (0, d.zS)().setOutputDevice(e)
                : (0, u.HS)().then((t) => {
                      var n;
                      let r = null != (n = t.find((t) => t.id === e)) ? n : t[0];
                      null != r && (0, d.zS)().setOutputDevice(r.index);
                  }),
            this.emit(s.aB.SelectedDeviceChange, h.h7.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return (0, u.l0)();
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : h.Av;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, d.eJ)(h.eR.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && "" !== t.originalId ? t.originalId : t.id) : h.Av;
                (0, d.zS)().setVideoInputDevice(e);
            } else (0, d.zS)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {
        var t, n, r, i;
        null == (t = (n = (0, d.zS)()).setAsyncVideoInputDeviceInitSetting) || t.call(n, e),
            null == (r = (i = (0, d.zS)()).setAsyncVideoInputDeviceInit) || r.call(i, e);
    }
    setAsyncClipsSourceDeinit(e) {
        var t, n, r, i;
        null == (t = (n = (0, d.zS)()).setAsyncClipsSourceDeinitSetting) || t.call(n, e),
            null == (r = (i = (0, d.zS)()).setAsyncClipsSourceDeinit) || r.call(i, e);
    }
    getSupportedVideoCodecs(e) {
        (0, d.zS)().getSupportedVideoCodecs(e);
    }
    getCodecCapabilities(e) {
        (0, d.zS)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, t) {
        if (null == e)
            return void this.eachConnection((e) => {
                e.clearDesktopSource(),
                    e.clearGoLiveDevices(),
                    e.setSoundshareSource(0, !1),
                    e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
            }, t);
        this.eachConnection((n) => {
            (t !== h.Yn.STREAM || n.streamUserId === n.userId) &&
                (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)));
        }, t);
    }
    setClipsSource(e) {
        var t;
        let n = (0, d.zS)();
        if (null == n.setClipsSource || null == n.setOnClipsRecordingEvent || null == n.applyClipsSettings) return;
        if (null == e)
            return void n.setClipsSource({
                id: "",
                soundshareId: 0,
            });
        let { frameRate: r, resolution: i } = e.quality,
            a = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
            o = i,
            {
                id: l,
                soundshareId: c,
                useLoopback: u,
                useVideoHook: f,
                useGraphicsCapture: _,
                useQuartzCapturer: p,
                allowScreenCaptureKit: m,
                hdrCaptureMode: g,
            } = e.desktopDescription;
        n.setOnClipsRecordingEvent((t) => {
            this.logger.info(
                "Clips recording event: "
                    .concat(h.Pf[t], " received for stream ")
                    .concat(l, " and sound ")
                    .concat(c, "."),
            ),
                t === h.Pf.GoLiveEnded
                    ? this.emit(s.aB.ClipsRecordingRestartNeeded)
                    : t === h.Pf.Error
                      ? this.emit(
                            s.aB.ClipsInitFailure,
                            "Failed to set clips source in media engine",
                            e.applicationName,
                        )
                      : (t === h.Pf.Ended || t === h.Pf.StoppedByGoLive) && this.emit(s.aB.ClipsRecordingEnded, l, c);
        }),
            null == (t = n.applyClipsSettings) ||
                t.call(n, {
                    useVideoHook: f,
                    useGraphicsCapture: _,
                    useQuartzCapturer: p,
                    allowScreenCaptureKit: m,
                    hdrCaptureMode: g,
                    soundshareLoopback: u,
                    frameRate: r,
                    width: a,
                    height: o,
                });
        let [E, b] = null != l ? l.split(":") : ["", ""];
        n.setClipsSource({
            id: b,
            soundshareId: null != c ? c : 0,
        });
    }
    setClipsQualitySettings(e, t, n) {
        let r = (0, d.zS)();
        return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((r) => {
            (n !== h.Yn.STREAM || r.streamUserId === r.userId) && r.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error("NO_STREAM"));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.zS)().getScreenPreviews
                ? (0, d.zS)().getScreenPreviews(e, t, (e) => {
                      n(e.map((e, t) => y(E({}, e), { name: "Screen " + (t + 1) })));
                  })
                : n([]);
        });
    }
    setClipBufferLength(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setClipBufferLength) || t.call(n, e);
    }
    setClipsMLPipelineEnabled(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setClipsMLPipelineEnabled) || t.call(n, e);
    }
    setClipsMLPipelineTypeEnabled(e, t) {
        var n, r;
        null == (n = (r = (0, d.zS)()).setClipsMLPipelineTypeEnabled) || n.call(r, e, t);
    }
    saveClip(e, t) {
        let n = (0, d.zS)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) =>
                          r({
                              duration: e,
                              clipStats: JSON.parse(n),
                          }),
                      (e) => i(JSON.parse(e)),
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let r = (0, d.zS)();
        return null == r.saveClipForUser
            ? Promise.reject("unsupported")
            : new Promise((i, a) => {
                  r.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) =>
                          i({
                              duration: e,
                              clipStats: JSON.parse(n),
                          }),
                      (e) => a(JSON.parse(e)),
                  );
              });
    }
    updateClipMetadata(e, t) {
        let n = (0, d.zS)();
        return null == n.updateClipMetadata
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.updateClipMetadata(e, t, r, i);
              });
    }
    saveScreenshot(e, t, n, r, i) {
        let a = (0, d.zS)();
        return null == a.saveScreenshot
            ? Promise.reject("unsupported")
            : new Promise((o, s) => {
                  a.saveScreenshot(
                      e,
                      t,
                      null != r ? r : "",
                      n,
                      null != i ? i : 0,
                      (e) => {
                          o(m.from(e));
                      },
                      s,
                  );
              });
    }
    exportClip(e, t) {
        let n = (0, d.zS)();
        return null == n.exportClip
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.exportClip(e, t, (e) => r(new Blob([e])), i);
              });
    }
    getWindowPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.zS)().getWindowPreviews
                ? (0, d.zS)().getWindowPreviews(e, t, (e) => {
                      n(e);
                  })
                : n([]);
        });
    }
    setAudioSubsystem(e) {
        null != (0, d.zS)().setAudioSubsystem
            ? (0, d.zS)().setAudioSubsystem(e)
            : (0, d.zS)().setUseLegacyAudioDevice(e === h.iA.LEGACY);
    }
    setOffloadAdmControls(e) {
        let t = (0, d.zS)();
        null != t.setOffloadAdmControls && t.setOffloadAdmControls(e);
    }
    queueAudioSubsystem(e) {
        let t = (0, d.zS)();
        null != t.queueAudioSubsystem ? t.queueAudioSubsystem(e) : this.setAudioSubsystem(e);
    }
    getAudioSubsystem() {
        return this.audioSubsystem;
    }
    getAudioLayer() {
        return this.audioLayer;
    }
    getDebugLogging() {
        return !!this.supports(h.AN.DEBUG_LOGGING) && (0, d.zS)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(h.AN.DEBUG_LOGGING) && (0, d.zS)().setDebugLogging(e);
    }
    setLoopback(e, t) {
        var n, r;
        null != (0, d.zS)().setLoopback &&
            (0, d.zS)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: null == (n = t.automaticGainControlConfig) ? void 0 : n.enabled,
                automaticGainControlConfig: t.automaticGainControlConfig,
                noiseCancellation: t.noiseCancellation,
                noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                voiceFilters: t.voiceFilters,
                loopbackUseAudioMode: t.loopbackUseAudioMode,
            }),
            null != (0, d.zS)().setEmitVADLevel2
                ? (0, d.zS)().setEmitVADLevel2(e || this.listenerCount(s.aB.VoiceActivity) > 0)
                : (0, d.zS)().setEmitVADLevel(e || this.listenerCount(s.aB.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: null == (r = t.automaticGainControlConfig) ? void 0 : r.enabled,
                      noiseCancellation: t.noiseCancellation,
                      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                  });
    }
    setMaybePreprocessMute(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setMaybePreprocessMute) || t.call(n, e);
    }
    getLoopback() {
        return !1;
    }
    setH264Enabled(e) {
        (0, d.zS)().setTransportOptions({ h264Enabled: e });
    }
    setAv1Enabled(e) {
        (0, d.zS)().setTransportOptions({ av1Enabled: e });
    }
    setH265Enabled(e) {
        (0, d.zS)().setTransportOptions({ h265Enabled: e });
    }
    getCodecSurvey() {
        return null != this.codecSurvey
            ? Promise.resolve(this.codecSurvey)
            : new Promise((e, t) => {
                  let n = (0, d.zS)();
                  null != n.getCodecSurvey
                      ? n.getCodecSurvey((t) => {
                            (this.codecSurvey = t), e(t);
                        })
                      : t(Error("getCodecSurvey is not implemented."));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, t) => {
            let { writeAudioDebugState: n } = (0, d.zS)();
            null != n ? (n(), e()) : t(Error("Audio debug state is not supported."));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setAecDump) || t.call(n, e);
    }
    startRecordingRawSamples(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).startRecordingRawSamples) || t.call(n, e);
    }
    stopRecordingRawSamples() {
        var e, t;
        null == (e = (t = (0, d.zS)()).stopRecordingRawSamples) || e.call(t);
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: r } = (0, d.zS)();
            null != r ? r(e, (e) => t(e)) : n(Error("RTC region latency test is not supported."));
        });
    }
    createReplayConnection(e, t) {
        let n = c.Z.createReplay(e, t);
        return null == n
            ? null
            : (n.on(s.Sh.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(h.uJ.NORMAL);
              }),
              this.connections.add(n),
              (0, d.p8)(h.uJ.HIGH),
              this.emit(s.aB.Connection, n),
              n);
    }
    setOnVideoContainerResized(e) {
        _.Z.onContainerResized = e;
    }
    setMaxSyncDelayOverride(e) {
        let { setMaxSyncDelayOverride: t } = (0, d.zS)();
        null != t && t(e);
    }
    applyMediaFilterSettings(e) {
        let { applyMediaFilterSettings: t, applyMediaFilterSettingsWithCallback: n } = (0, d.zS)();
        return null != n
            ? new Promise((t, r) => {
                  n(e, t);
              })
            : (null != t && t(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((t, n) => {
            let { startLocalAudioRecording: r } = (0, d.zS)();
            null != r
                ? r(e, (e) => {
                      e ? t() : n(Error("Failed to start local audio recording."));
                  })
                : n(Error("startLocalAudioRecording is not supported."));
        });
    }
    stopLocalAudioRecording(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).stopLocalAudioRecording) ||
            t.call(n, (t, n) => {
                e(t, n);
            }),
            this.listenerCount(s.aB.VoiceActivity) > 0 &&
                null != (0, d.zS)().setEmitVADLevel2 &&
                (0, d.zS)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setHasFullbandPerformance) || t.call(n, e);
    }
    getSupportedSecureFramesProtocolVersion() {
        var e;
        return null != (e = (0, d.zS)().SupportedSecureFramesProtocolVersion) ? e : 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).getSupportedBandwidthEstimationExperiments) || t.call(n, e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, r) => {
            let i = (0, d.zS)();
            null != i.getMLSSigningKey
                ? i.getMLSSigningKey(e, t, (e, t) =>
                      n({
                          key: e,
                          signature: t,
                      }),
                  )
                : r(Error("NOT_IMPLEMENTED"));
        });
    }
    setSidechainCompression(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setSidechainCompression) || t.call(n, e);
    }
    setSidechainCompressionStrength(e) {
        var t, n;
        let r = 100 - e,
            i = v(r, p.Zq, p.WA),
            a = v(r, p.QO, p.JA);
        null == (t = (n = (0, d.zS)()).applySidechainCompressionSettings) ||
            t.call(n, {
                threshold: i,
                ratio: a,
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setNativeDesktopVideoSourcePickerActive) || t.call(n, e);
    }
    presentNativeScreenSharePicker(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).presentNativeScreenSharePicker) || t.call(n, null != e ? e : "");
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, t;
        null == (e = (t = (0, d.zS)()).releaseNativeDesktopVideoSourcePickerStream) || e.call(t);
    }
    async getSystemMicrophoneMode() {
        var e, t, n;
        return null != (n = await (null == (e = (t = (0, d.zS)()).getSystemMicrophoneMode) ? void 0 : e.call(t)))
            ? n
            : "";
    }
    showSystemCaptureConfigurationUI(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).showSystemCaptureConfigurationUI) || t.call(n, e);
    }
    fetchAsyncResources(e) {
        return Promise.resolve();
    }
    watchdogTick() {
        let e = !1;
        (0, d.zS)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(s.aB.WatchdogTimeout) : this.watchdogTick();
            }, h.H0);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
    constructor() {
        var e, t, n, r, i, a, c, p, m;
        super(),
            (e = this),
            g(this, "Video", _.Z),
            g(this, "Camera", f.Z),
            g(this, "audioInputDeviceId", h.Av),
            g(this, "audioOutputDeviceId", h.Av),
            g(this, "videoInputDeviceId", h.Av),
            g(this, "connections", new Set()),
            g(this, "lastVoiceActivity", -1),
            g(this, "audioSubsystem", "standard"),
            g(this, "audioLayer", ""),
            g(this, "deviceChangeGeneration", 0),
            g(this, "consecutiveWatchdogFailures", 0),
            g(this, "codecSurvey", null),
            g(this, "logger", new o.Yd("MediaEngineNative")),
            g(this, "handleDeviceChange", function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++,
                    e.emit(
                        s.aB.DeviceChange,
                        (0, u.C1)(h.h7.AUDIO_INPUT, t),
                        (0, u.C1)(h.h7.AUDIO_OUTPUT, n),
                        (0, u.C1)(h.h7.VIDEO_INPUT, r),
                    );
            }),
            g(this, "handleVolumeChange", (e, t) => {
                this.emit(s.aB.VolumeChange, e * h.Qx, t * h.Qx);
            }),
            g(this, "handleVoiceActivity", (e, t) => {
                let n = Date.now();
                this.listenerCount(s.aB.VoiceActivity) > 0 &&
                    (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) &&
                    ((this.lastVoiceActivity = n), this.emit(s.aB.VoiceActivity, e, t));
            }),
            g(this, "handleActiveSinksChange", (e, t) => {
                this.connections.forEach((n) =>
                    n.setHasActiveVideoOutputSink(e, t, "MediaEngineNative.handleActiveSinksChange"),
                );
            }),
            g(this, "handleNewListener", (e) => {
                switch (e) {
                    case s.aB.VoiceActivity:
                        null != (0, d.zS)().setEmitVADLevel2
                            ? (0, d.zS)().setEmitVADLevel2(!0)
                            : (0, d.zS)().setEmitVADLevel(!0, !1, {});
                        break;
                    case s.aB.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([
                            this.getAudioInputDevices(),
                            this.getAudioOutputDevices(),
                            this.getVideoInputDevices(),
                        ]).then((e) => {
                            let [n, r, i] = e;
                            t === this.deviceChangeGeneration && this.emit(s.aB.DeviceChange, n, r, i);
                        });
                }
            }),
            g(this, "handleRemoveListener", (e) => {
                e === s.aB.VoiceActivity &&
                    (null != (0, d.zS)().setEmitVADLevel2
                        ? (0, d.zS)().setEmitVADLevel2(this.listenerCount(s.aB.VoiceActivity) > 0)
                        : (0, d.zS)().setEmitVADLevel(this.listenerCount(s.aB.VoiceActivity) > 0, !1, {}));
            }),
            g(this, "handleVideoInputInitialization", (e) => {
                this.emit(s.aB.VideoInputInitialized, e);
            }),
            g(this, "handleAudioInputInitialization", (e) => {
                this.emit(s.aB.AudioInputInitialized, e);
            }),
            g(this, "handleNativeScreenSharePickerUpdate", (e, t) => {
                this.emit(s.aB.NativeScreenSharePickerUpdate, e, t);
            }),
            g(this, "handleNativeScreenSharePickerCancel", (e) => {
                this.emit(s.aB.NativeScreenSharePickerCancel, e);
            }),
            g(this, "handleNativeScreenSharePickerError", (e) => {
                this.emit(s.aB.NativeScreenSharePickerError, e);
            }),
            g(this, "handleAudioDeviceModuleErrorCallback", (e, t) => {
                -100 !== e && this.emit(s.aB.AudioDeviceModuleError, "RustAudioDeviceModule", e, t);
            }),
            g(this, "handleVideoCodecErrorCallback", (e) => {
                this.emit(s.aB.VideoCodecError, e);
            }),
            g(this, "handleSystemMicrophoneModeChangeCallback", (e) => {
                this.emit(s.aB.SystemMicrophoneModeChange, e);
            });
        let E = (0, d.zS)();
        E.setDeviceChangeCallback(this.handleDeviceChange),
            E.setVolumeChangeCallback(this.handleVolumeChange),
            E.setOnVoiceCallback(this.handleVoiceActivity),
            null == (t = E.setVideoInputInitializationCallback) || t.call(E, this.handleVideoInputInitialization),
            null == (n = E.setAudioInputInitializationCallback) || n.call(E, this.handleAudioInputInitialization),
            null == (r = E.setAudioDeviceModuleErrorCallback) || r.call(E, this.handleAudioDeviceModuleErrorCallback),
            E.setTransportOptions({
                idleJitterBufferFlush: !0,
                ducking: !1,
            }),
            null == (i = E.setNativeScreenSharePickerCallbacks) ||
                i.call(
                    E,
                    this.handleNativeScreenSharePickerUpdate,
                    this.handleNativeScreenSharePickerCancel,
                    this.handleNativeScreenSharePickerError,
                ),
            null == (a = E.setVideoCodecErrorCallback) || a.call(E, this.handleVideoCodecErrorCallback),
            null == (c = E.setSystemMicrophoneModeChangeCallback) ||
                c.call(E, this.handleSystemMicrophoneModeChangeCallback),
            this.on("removeListener", this.handleRemoveListener),
            this.on("newListener", this.handleNewListener),
            null != (0, d.zS)().getAudioSubsystem
                ? (0, d.zS)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, d.zS)().getUseLegacyAudioDevice &&
                  (this.audioSubsystem = (0, d.zS)().getUseLegacyAudioDevice() ? h.iA.LEGACY : h.iA.STANDARD),
            null != E.pingVoiceThread &&
                "undefined" != typeof window &&
                "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL &&
                this.watchdogTick(),
            null != E.setActiveSinksChangeCallback && E.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            null == (p = E.setLoopbackPlaybackGainMultiplier) || p.call(E, h.Jk),
            null == (m = E.setVoiceFiltersFailedCallback) || m.call(E, (e) => this.emit(s.aB.VoiceFiltersFailed, e)),
            (0, l.Z)(this),
            T(this);
    }
}
function T(e) {
    let t = 900000,
        n = !1;
    e.on(s.aB.Destroy, () => (n = !0));
    let r = async () => {
        if (n) return;
        let i = (0, d.zS)(),
            a = await new Promise((e) => {
                var t;
                null == (t = i.pollQueueMetrics) ||
                    t.call(i, (t) => {
                        e(t);
                    });
            });
        (a.periodMs = t), e.emit(s.aB.VoiceQueueMetrics, a), setTimeout(r, t);
    };
    setTimeout(r, t);
}
