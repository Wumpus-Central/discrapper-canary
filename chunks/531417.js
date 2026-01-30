n.d(t, {
    A: () => A,
}),
    n(747238),
    n(896048),
    n(65821);
var r = n(214958),
    i = n.n(r),
    a = n(972347),
    o = n(118356),
    s = n(205693),
    l = n(70909),
    c = n(646369),
    u = n(368344),
    d = n(823598),
    f = n(321469),
    p = n(540239),
    _ = n(731854),
    h = n(713754),
    m = n(264572).Buffer;

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

function y(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function O(e) {
    return (null != e ? e : h.Hz) / h.Hz;
}

function v(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class A extends a.A {
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(s.bg.Destroy), this.removeAllListeners();
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
            case h.O5.LEGACY_AUDIO_SUBSYSTEM:
                return (0, d.$b)(h.BY.VOICE_LEGACY_SUBSYSTEM);
            case h.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, d.$b)(h.BY.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case h.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, d.$b)(h.BY.VOICE_AUTOMATIC_SUBSYSTEM);
            case h.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, d.$b)(h.BY.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            case h.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING:
                return (0, d.$b)(h.BY.VOICE_BYPASS_SYSTEM_AUDIO_INPUT_PROCESSING);
            case h.O5.DEBUG_LOGGING:
                return (0, d.$b)(h.BY.DEBUG_LOGGING);
            case h.O5.SOUNDSHARE:
                return (0, d.$b)(h.BY.SOUNDSHARE);
            case h.O5.SCREEN_SOUNDSHARE:
                return (0, d.$b)(h.BY.SCREEN_SOUNDSHARE);
            case h.O5.ELEVATED_HOOK:
                return (0, d.$b)(h.BY.ELEVATED_HOOK);
            case h.O5.LOOPBACK:
                return (0, d.$b)(h.BY.LOOPBACK);
            case h.O5.WUMPUS_VIDEO:
                return (0, d.$b)(h.BY.WUMPUS_VIDEO);
            case h.O5.HYBRID_VIDEO:
                return (0, d.$b)(h.BY.HYBRID_VIDEO);
            case h.O5.ATTENUATION:
            case h.O5.VIDEO_HOOK:
                var t;
                return (
                    (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) != null &&
                    /^win/i.test(i().os.family)
                );
            case h.O5.EXPERIMENTAL_SOUNDSHARE:
                return (0, d.$b)(h.BY.SOUNDSHARE_LOOPBACK);
            case h.O5.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, d.$b)(h.BY.REMOTE_LOCUS_NETWORK_CONTROL);
            case h.O5.SCREEN_PREVIEWS:
                return (0, d.$b)(h.BY.SCREEN_PREVIEWS);
            case h.O5.CLIPS:
                return (0, d.$b)(h.BY.CLIPS);
            case h.O5.WINDOW_PREVIEWS:
                return (0, d.$b)(h.BY.WINDOW_PREVIEWS);
            case h.O5.AUDIO_DEBUG_STATE:
                return (0, d.$b)(h.BY.AUDIO_DEBUG_STATE);
            case h.O5.CONNECTION_REPLAY:
                return (0, d.$b)(h.BY.CONNECTION_REPLAY);
            case h.O5.SIMULCAST:
                return (0, d.$b)(h.BY.SIMULCAST) && (0, d.$b)(h.BY.SIMULCAST_BUGFIX);
            case h.O5.RTC_REGION_RANKING:
                return (0, d.$b)(h.BY.RTC_REGION_RANKING);
            case h.O5.ELECTRON_VIDEO:
                return (0, d.$b)(h.BY.ELECTRON_VIDEO);
            case h.O5.MEDIAPIPE:
                return (0, d.$b)(h.BY.MEDIAPIPE);
            case h.O5.FIXED_KEYFRAME_INTERVAL:
                return (0, d.$b)(h.BY.FIXED_KEYFRAME_INTERVAL);
            case h.O5.FIRST_FRAME_CALLBACK:
                return (0, d.$b)(h.BY.FIRST_FRAME_CALLBACK);
            case h.O5.REMOTE_USER_MULTI_STREAM:
                return (0, d.$b)(h.BY.REMOTE_USER_MULTI_STREAM);
            case h.O5.IMAGE_QUALITY_MEASUREMENT:
                return (0, d.$b)(h.BY.IMAGE_QUALITY_MEASUREMENT);
            case h.O5.GO_LIVE_HARDWARE:
                return (0, d.$b)(h.BY.GO_LIVE_HARDWARE);
            case h.O5.SCREEN_CAPTURE_KIT:
                return (0, d.$b)(h.BY.SCREEN_CAPTURE_KIT);
            case h.O5.NATIVE_SCREENSHARE_PICKER:
                return (0, d.$b)(h.BY.NATIVE_SCREENSHARE_PICKER);
            case h.O5.MLS_PAIRWISE_FINGERPRINTS:
                return (0, d.$b)(h.BY.MLS_PAIRWISE_FINGERPRINTS);
            case h.O5.OFFLOAD_ADM_CONTROLS:
                return (0, d.$b)(h.BY.OFFLOAD_ADM_CONTROLS);
            case h.O5.VAAPI:
                return (0, d.$b)(h.BY.VAAPI);
            case h.O5.GAMESCOPE_CAPTURE:
                return (0, d.$b)(h.BY.GAMESCOPE_CAPTURE);
            case h.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT:
                return (0, d.$b)(h.BY.ASYNC_VIDEO_INPUT_DEVICE_INIT);
            case h.O5.ASYNC_CLIPS_SOURCE_DEINIT:
                return (0, d.$b)(h.BY.ASYNC_CLIPS_SOURCE_DEINIT);
            case h.O5.PORT_AWARE_LATENCY_TESTING:
                return (0, d.$b)(h.BY.PORT_AWARE_LATENCY_TESTING);
            case h.O5.DIAGNOSTICS:
            case h.O5.NATIVE_PING:
            case h.O5.AUTOMATIC_VAD:
            case h.O5.AUDIO_INPUT_DEVICE:
            case h.O5.AUDIO_OUTPUT_DEVICE:
            case h.O5.QOS:
            case h.O5.VOICE_PROCESSING:
            case h.O5.AUTO_ENABLE:
            case h.O5.VIDEO:
            case h.O5.DESKTOP_CAPTURE:
            case h.O5.DESKTOP_CAPTURE_FORMAT:
            case h.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case h.O5.VOICE_PANNING:
            case h.O5.AEC_DUMP:
            case h.O5.DISABLE_VIDEO:
            case h.O5.SAMPLE_PLAYBACK:
            case h.O5.NOISE_SUPPRESSION:
            case h.O5.AUTOMATIC_GAIN_CONTROL:
            case h.O5.SIDECHAIN_COMPRESSION:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        (0, d.$b)(h.BY.EXPERIMENT_CONFIG) || (n.experiments = void 0);
        let r = c.A.create(e, t, n);
        return (
            r.on(s.yq.Destroy, (e) => {
                this.connections.delete(e), this.connectionsEmpty() && (0, d.i0)(h.E6.NORMAL);
            }),
            r.on(s.yq.Connected, () => {
                r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
            }),
            r.on(s.yq.Silence, (e) => {
                this.emit(s.bg.Silence, e);
            }),
            this.connections.add(r),
            (0, d.i0)(h.E6.HIGH),
            this.emit(s.bg.Connection, r),
            r
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === h.x.DEFAULT && this.videoInputDeviceId !== h.qe) || e.hasDesktopSource();
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
        (0, d.lE)().setTransportOptions({
            bypassSystemProcessing: e,
        });
    }
    setInputVolume(e) {
        (0, d.lE)().setInputVolume(O(e));
    }
    setOutputVolume(e) {
        (0, d.lE)().setOutputVolume(O(e));
    }
    getAudioInputDevices() {
        return (0, u._e)();
    }
    getNoiseCancellationStats() {
        return new Promise((e) => {
            let t = (0, d.lE)();
            null == t.getNoiseCancellationStats ? e(null) : t.getNoiseCancellationStats((t) => e(JSON.parse(t)));
        });
    }
    setNoiseCancellationEnableStats(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setNoiseCancellationEnableStats) || t.call(n, e);
    }
    setAudioInputDevice(e) {
        let t = this.audioInputDeviceId;
        (this.audioInputDeviceId = e),
            (0, d.$b)(h.BY.SET_AUDIO_DEVICE_BY_ID)
                ? (0, d.lE)().setInputDevice(e)
                : (0, u._e)().then((t) => {
                      var n;
                      let r = null != (n = t.find((t) => t.id === e)) ? n : t[0];
                      null != r && (0, d.lE)().setInputDevice(r.index);
                  }),
            this.emit(s.bg.SelectedDeviceChange, h.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return (0, u.tS)();
    }
    setAudioOutputDevice(e) {
        let t = this.audioOutputDeviceId;
        (this.audioOutputDeviceId = e),
            (0, d.$b)(h.BY.SET_AUDIO_DEVICE_BY_ID)
                ? (0, d.lE)().setOutputDevice(e)
                : (0, u.tS)().then((t) => {
                      var n;
                      let r = null != (n = t.find((t) => t.id === e)) ? n : t[0];
                      null != r && (0, d.lE)().setOutputDevice(r.index);
                  }),
            this.emit(s.bg.SelectedDeviceChange, h.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return (0, u.DT)();
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : h.qe;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, d.$b)(h.BY.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && "" !== t.originalId ? t.originalId : t.id) : h.qe;
                (0, d.lE)().setVideoInputDevice(e);
            } else (0, d.lE)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {
        var t, n, r, i;
        null == (t = (n = (0, d.lE)()).setAsyncVideoInputDeviceInitSetting) || t.call(n, e),
            null == (r = (i = (0, d.lE)()).setAsyncVideoInputDeviceInit) || r.call(i, e);
    }
    setAsyncClipsSourceDeinit(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setAsyncClipsSourceDeinit) || t.call(n, e);
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
                  (t !== h.x.STREAM || n.streamUserId === n.userId) &&
                      (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)));
              }, t);
    }
    setClipsSource(e) {
        var t;
        let n = (0, d.lE)();
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
                useGraphicsCapture: p,
                useQuartzCapturer: _,
                allowScreenCaptureKit: m,
                hdrCaptureMode: g,
            } = e.desktopDescription;
        n.setOnClipsRecordingEvent((t) => {
            this.logger.info(
                "Clips recording event: "
                    .concat(h.B8[t], " received for stream ")
                    .concat(l, " and sound ")
                    .concat(c, "."),
            ),
                t === h.B8.GoLiveEnded
                    ? this.emit(s.bg.ClipsRecordingRestartNeeded)
                    : t === h.B8.Error
                      ? this.emit(
                            s.bg.ClipsInitFailure,
                            "Failed to set clips source in media engine",
                            e.applicationName,
                        )
                      : (t === h.B8.Ended || t === h.B8.StoppedByGoLive) && this.emit(s.bg.ClipsRecordingEnded, l, c);
        }),
            null == (t = n.applyClipsSettings) ||
                t.call(n, {
                    useVideoHook: f,
                    useGraphicsCapture: p,
                    useQuartzCapturer: _,
                    allowScreenCaptureKit: m,
                    hdrCaptureMode: g,
                    soundshareLoopback: u,
                    frameRate: r,
                    width: a,
                    height: o,
                });
        let [E, y] = null != l ? l.split(":") : ["", ""];
        n.setClipsSource({
            id: y,
            soundshareId: null != c ? c : 0,
        });
    }
    setClipsQualitySettings(e, t, n) {
        let r = (0, d.lE)();
        return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((r) => {
            (n !== h.x.STREAM || r.streamUserId === r.userId) && r.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error("NO_STREAM"));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.lE)().getScreenPreviews
                ? (0, d.lE)().getScreenPreviews(e, t, (e) => {
                      n(
                          e.map((e, t) =>
                              b(E({}, e), {
                                  name: "Screen " + (t + 1),
                              }),
                          ),
                      );
                  })
                : n([]);
        });
    }
    setClipBufferLength(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setClipBufferLength) || t.call(n, e);
    }
    setClipsBufferSize(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setClipsBufferSize) || t.call(n, e);
    }
    setClipsMLPipelineEnabled(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setClipsMLPipelineEnabled) || t.call(n, e);
    }
    setClipsMLPipelineTypeEnabled(e, t) {
        var n, r;
        null == (n = (r = (0, d.lE)()).setClipsMLPipelineTypeEnabled) || n.call(r, e, t);
    }
    setClipsMaxPendingTasks(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setClipsMaxPendingTasks) || t.call(n, e);
    }
    saveClip(e, t) {
        let n = (0, d.lE)();
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
        let r = (0, d.lE)();
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
        let n = (0, d.lE)();
        return null == n.updateClipMetadata
            ? Promise.reject("unsupported")
            : new Promise((r, i) => {
                  n.updateClipMetadata(e, t, r, i);
              });
    }
    saveScreenshot(e, t, n, r, i) {
        let a = (0, d.lE)();
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
            : (0, d.lE)().setUseLegacyAudioDevice(e === h.rB.LEGACY);
    }
    setOffloadAdmControls(e) {
        let t = (0, d.lE)();
        null != t.setOffloadAdmControls && t.setOffloadAdmControls(e);
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
        return !!this.supports(h.O5.DEBUG_LOGGING) && (0, d.lE)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(h.O5.DEBUG_LOGGING) && (0, d.lE)().setDebugLogging(e);
    }
    setLoopback(e, t) {
        var n, r;
        null != (0, d.lE)().setLoopback &&
            (0, d.lE)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: null == (n = t.automaticGainControlConfig) ? void 0 : n.enabled,
                automaticGainControlConfig: t.automaticGainControlConfig,
                noiseCancellation: t.noiseCancellation,
                noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                voiceFilters: t.voiceFilters,
                loopbackUseAudioMode: t.loopbackUseAudioMode,
            }),
            null != (0, d.lE)().setEmitVADLevel2
                ? (0, d.lE)().setEmitVADLevel2(e || this.listenerCount(s.bg.VoiceActivity) > 0)
                : (0, d.lE)().setEmitVADLevel(e || this.listenerCount(s.bg.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: null == (r = t.automaticGainControlConfig) ? void 0 : r.enabled,
                      noiseCancellation: t.noiseCancellation,
                      noiseCancellationDuringProcessing: t.noiseCancellationDuringProcessing,
                  });
    }
    setMaybePreprocessMute(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setMaybePreprocessMute) || t.call(n, e);
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
        var t, n;
        null == (t = (n = (0, d.lE)()).setAecDump) || t.call(n, e);
    }
    startRecordingRawSamples(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).startRecordingRawSamples) || t.call(n, e);
    }
    stopRecordingRawSamples() {
        var e, t;
        null == (e = (t = (0, d.lE)()).stopRecordingRawSamples) || e.call(t);
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: r } = (0, d.lE)();
            null != r ? r(e, (e) => t(e)) : n(Error("RTC region latency test is not supported."));
        });
    }
    createReplayConnection(e, t) {
        let n = c.A.createReplay(e, t);
        return null == n
            ? null
            : (n.on(s.yq.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, d.i0)(h.E6.NORMAL);
              }),
              this.connections.add(n),
              (0, d.i0)(h.E6.HIGH),
              this.emit(s.bg.Connection, n),
              n);
    }
    setOnVideoContainerResized(e) {
        p.A.onContainerResized = e;
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
        var t, n;
        null == (t = (n = (0, d.lE)()).stopLocalAudioRecording) ||
            t.call(n, (t, n) => {
                e(t, n);
            }),
            this.listenerCount(s.bg.VoiceActivity) > 0 &&
                null != (0, d.lE)().setEmitVADLevel2 &&
                (0, d.lE)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setHasFullbandPerformance) || t.call(n, e);
    }
    getSupportedSecureFramesProtocolVersion() {
        var e;
        return null != (e = (0, d.lE)().SupportedSecureFramesProtocolVersion) ? e : 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).getSupportedBandwidthEstimationExperiments) || t.call(n, e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, r) => {
            let i = (0, d.lE)();
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
        null == (t = (n = (0, d.lE)()).setSidechainCompression) || t.call(n, e);
    }
    setSidechainCompressionStrength(e) {
        var t, n;
        let r = 100 - e,
            i = v(r, _.Zi, _.Xg),
            a = v(r, _.d_, _.nO);
        null == (t = (n = (0, d.lE)()).applySidechainCompressionSettings) ||
            t.call(n, {
                threshold: i,
                ratio: a,
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).setNativeDesktopVideoSourcePickerActive) || t.call(n, e);
    }
    presentNativeScreenSharePicker(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).presentNativeScreenSharePicker) || t.call(n, null != e ? e : "");
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, t;
        null == (e = (t = (0, d.lE)()).releaseNativeDesktopVideoSourcePickerStream) || e.call(t);
    }
    async getSystemMicrophoneMode() {
        var e, t, n;
        return null != (e = await (null == (t = (n = (0, d.lE)()).getSystemMicrophoneMode) ? void 0 : t.call(n)))
            ? e
            : "";
    }
    showSystemCaptureConfigurationUI(e) {
        var t, n;
        null == (t = (n = (0, d.lE)()).showSystemCaptureConfigurationUI) || t.call(n, e);
    }
    fetchAsyncResources(e) {
        return Promise.resolve();
    }
    async getDeviceOSVolume(e) {
        var t, n;
        return await (null == (t = (n = (0, d.lE)()).getDeviceOSVolume) ? void 0 : t.call(n, e));
    }
    async getDeviceOSMuted(e) {
        var t, n;
        return await (null == (t = (n = (0, d.lE)()).getDeviceOSMuted) ? void 0 : t.call(n, e));
    }
    watchdogTick() {
        let e = !1;
        (0, d.lE)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(s.bg.WatchdogTimeout) : this.watchdogTick();
            }, h.PE);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
    constructor() {
        var e, t, n, r, i, a, c, _, m;
        super(),
            (e = this),
            g(this, "Video", p.A),
            g(this, "Camera", f.A),
            g(this, "audioInputDeviceId", h.qe),
            g(this, "audioOutputDeviceId", h.qe),
            g(this, "videoInputDeviceId", h.qe),
            g(this, "connections", new Set()),
            g(this, "lastVoiceActivity", -1),
            g(this, "audioSubsystem", "standard"),
            g(this, "audioLayer", ""),
            g(this, "deviceChangeGeneration", 0),
            g(this, "consecutiveWatchdogFailures", 0),
            g(this, "codecSurvey", null),
            g(this, "logger", new o.Vy("MediaEngineNative")),
            g(this, "handleDeviceChange", function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++,
                    e.emit(
                        s.bg.DeviceChange,
                        (0, u.P5)(h.oh.AUDIO_INPUT, t),
                        (0, u.P5)(h.oh.AUDIO_OUTPUT, n),
                        (0, u.P5)(h.oh.VIDEO_INPUT, r),
                    );
            }),
            g(this, "handleVolumeChange", (e, t) => {
                this.emit(s.bg.VolumeChange, e * h.Hz, t * h.Hz);
            }),
            g(this, "handleVoiceActivity", (e, t) => {
                let n = Date.now();
                this.listenerCount(s.bg.VoiceActivity) > 0 &&
                    (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) &&
                    ((this.lastVoiceActivity = n), this.emit(s.bg.VoiceActivity, e, t));
            }),
            g(this, "handleActiveSinksChange", (e, t) => {
                this.connections.forEach((n) =>
                    n.setHasActiveVideoOutputSink(e, t, "MediaEngineNative.handleActiveSinksChange"),
                );
            }),
            g(this, "handleNewListener", (e) => {
                switch (e) {
                    case s.bg.VoiceActivity:
                        null != (0, d.lE)().setEmitVADLevel2
                            ? (0, d.lE)().setEmitVADLevel2(!0)
                            : (0, d.lE)().setEmitVADLevel(!0, !1, {});
                        break;
                    case s.bg.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([
                            this.getAudioInputDevices(),
                            this.getAudioOutputDevices(),
                            this.getVideoInputDevices(),
                        ]).then((e) => {
                            let [n, r, i] = e;
                            t === this.deviceChangeGeneration && this.emit(s.bg.DeviceChange, n, r, i);
                        });
                }
            }),
            g(this, "handleRemoveListener", (e) => {
                e === s.bg.VoiceActivity &&
                    (null != (0, d.lE)().setEmitVADLevel2
                        ? (0, d.lE)().setEmitVADLevel2(this.listenerCount(s.bg.VoiceActivity) > 0)
                        : (0, d.lE)().setEmitVADLevel(this.listenerCount(s.bg.VoiceActivity) > 0, !1, {}));
            }),
            g(this, "handleVideoInputInitialization", (e) => {
                this.emit(s.bg.VideoInputInitialized, e);
            }),
            g(this, "handleAudioInputInitialization", (e) => {
                this.emit(s.bg.AudioInputInitialized, e);
            }),
            g(this, "handleNativeScreenSharePickerUpdate", (e, t) => {
                this.emit(s.bg.NativeScreenSharePickerUpdate, e, t);
            }),
            g(this, "handleNativeScreenSharePickerCancel", (e) => {
                this.emit(s.bg.NativeScreenSharePickerCancel, e);
            }),
            g(this, "handleNativeScreenSharePickerError", (e) => {
                this.emit(s.bg.NativeScreenSharePickerError, e);
            }),
            g(this, "handleAudioDeviceModuleErrorCallback", (e, t) => {
                -100 !== e && this.emit(s.bg.AudioDeviceModuleError, "RustAudioDeviceModule", e, t);
            }),
            g(this, "handleVideoCodecErrorCallback", (e) => {
                this.emit(s.bg.VideoCodecError, e);
            }),
            g(this, "handleSystemMicrophoneModeChangeCallback", (e) => {
                this.emit(s.bg.SystemMicrophoneModeChange, e);
            });
        const E = (0, d.lE)();
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
            null != (0, d.lE)().getAudioSubsystem
                ? (0, d.lE)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, d.lE)().getUseLegacyAudioDevice &&
                  (this.audioSubsystem = (0, d.lE)().getUseLegacyAudioDevice() ? h.rB.LEGACY : h.rB.STANDARD),
            null != E.pingVoiceThread &&
                "u" > typeof window &&
                "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL &&
                this.watchdogTick(),
            null != E.setActiveSinksChangeCallback && E.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            null == (_ = E.setLoopbackPlaybackGainMultiplier) || _.call(E, h.QP),
            null == (m = E.setVoiceFiltersFailedCallback) || m.call(E, (e) => this.emit(s.bg.VoiceFiltersFailed, e)),
            (0, l.A)(this),
            I(this);
    }
}

function I(e) {
    let t = !1;
    e.on(s.bg.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let r = (0, d.lE)(),
            i = await new Promise((e) => {
                var t;
                null == (t = r.pollQueueMetrics) ||
                    t.call(r, (t) => {
                        e(t);
                    });
            });
        (i.periodMs = _.tl), e.emit(s.bg.VoiceQueueMetrics, i), setTimeout(n, _.tl);
    };
    setTimeout(n, _.tl);
}
