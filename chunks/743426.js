n.d(t, { Z: () => O }), n(301563), n(47120), n(411104);
var r = n(264344),
    i = n.n(r),
    o = n(259443),
    a = n(47770),
    s = n(46973),
    l = n(734298),
    c = n(997545),
    u = n(501950),
    d = n(992774),
    f = n(656795),
    _ = n(650886),
    p = n(65154),
    h = n(149396);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    return (null != e ? e : h.Qx) / h.Qx;
}
function v(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class O extends a.Z {
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
        var t, n;
        switch (e) {
            case h.AN.LEGACY_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(h.eR.VOICE_LEGACY_SUBSYSTEM);
            case h.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(h.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case h.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(h.eR.VOICE_AUTOMATIC_SUBSYSTEM);
            case h.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, d.eJ)(h.eR.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
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
                return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) != null && /^win/i.test(i().os.family);
            case h.AN.EXPERIMENTAL_SOUNDSHARE:
                return (0, d.eJ)(h.eR.SOUNDSHARE_LOOPBACK);
            case h.AN.OPEN_H264:
                return (null === i() || void 0 === i() || null == (n = i().os) ? void 0 : n.family) != null && /^win|linux|OS X/i.test(i().os.family);
            case h.AN.EXPERIMENTAL_ENCODERS:
                return (0, d.eJ)(h.eR.EXPERIMENTAL_ENCODERS);
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
            case h.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
                return (0, d.eJ)(h.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
            case h.AN.NATIVE_SCREENSHARE_PICKER:
                return (0, d.eJ)(h.eR.NATIVE_SCREENSHARE_PICKER);
            case h.AN.MLS_PAIRWISE_FINGERPRINTS:
                return (0, d.eJ)(h.eR.MLS_PAIRWISE_FINGERPRINTS);
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
    setInputVolume(e) {
        (0, d.zS)().setInputVolume(y(e));
    }
    setOutputVolume(e) {
        (0, d.zS)().setOutputVolume(y(e));
    }
    getAudioInputDevices() {
        return (0, u.Hg)();
    }
    setAudioInputDevice(e) {
        (0, d.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, d.zS)().setInputDevice(e)
            : (0, u.Hg)().then((t) => {
                  var n;
                  let r = null != (n = t.find((t) => t.id === e)) ? n : t[0];
                  null != r && (0, d.zS)().setInputDevice(r.index);
              });
    }
    getAudioOutputDevices() {
        return (0, u.HS)();
    }
    setAudioOutputDevice(e) {
        (0, d.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, d.zS)().setOutputDevice(e)
            : (0, u.HS)().then((t) => {
                  var n;
                  let r = null != (n = t.find((t) => t.id === e)) ? n : t[0];
                  null != r && (0, d.zS)().setOutputDevice(r.index);
              });
    }
    getVideoInputDevices() {
        return (0, u.l0)();
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : h.Av;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, d.eJ)(h.eR.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && '' !== t.originalId ? t.originalId : t.id) : h.Av;
                (0, d.zS)().setVideoInputDevice(e);
            } else (0, d.zS)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
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
                e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
            }, t);
        this.eachConnection((n) => {
            (t !== h.Yn.STREAM || n.streamUserId === n.userId) && (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)));
        }, t);
    }
    setClipsSource(e) {
        var t;
        let n = (0, d.zS)();
        if (null == n.setClipsSource || null == n.setOnClipsRecordingEvent || null == n.applyClipsSettings) return;
        if (null == e)
            return void n.setClipsSource({
                id: '',
                soundshareId: 0
            });
        let { frameRate: r, resolution: i } = e.quality,
            o = i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
            a = i,
            { id: l, soundshareId: c, useLoopback: u, useVideoHook: f, useGraphicsCapture: _, useQuartzCapturer: p, allowScreenCaptureKit: m, hdrCaptureMode: g } = e.desktopDescription;
        n.setOnClipsRecordingEvent((t) => {
            this.logger.info('Clips recording event: '.concat(h.Pf[t], ' received for stream ').concat(l, ' and sound ').concat(c, '.')), t === h.Pf.GoLiveEnded ? this.emit(s.aB.ClipsRecordingRestartNeeded) : t === h.Pf.Error ? this.emit(s.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (t === h.Pf.Ended || t === h.Pf.StoppedByGoLive) && this.emit(s.aB.ClipsRecordingEnded, l, c);
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
                    width: o,
                    height: a
                });
        let [E, b] = null != l ? l.split(':') : ['', ''];
        n.setClipsSource({
            id: b,
            soundshareId: null != c ? c : 0
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
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.zS)().getScreenPreviews
                ? (0, d.zS)().getScreenPreviews(e, t, (e) => {
                      n(e.map((e, t) => b(g({}, e), { name: 'Screen ' + (t + 1) })));
                  })
                : n([]);
        });
    }
    setClipBufferLength(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setClipBufferLength) || t.call(n, e);
    }
    saveClip(e, t) {
        let n = (0, d.zS)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) =>
                          r({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => i(JSON.parse(e))
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let r = (0, d.zS)();
        return null == r.saveClipForUser
            ? Promise.reject('unsupported')
            : new Promise((i, o) => {
                  r.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) =>
                          i({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => o(JSON.parse(e))
                  );
              });
    }
    updateClipMetadata(e, t) {
        let n = (0, d.zS)();
        return null == n.updateClipMetadata
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.updateClipMetadata(e, t, r, i);
              });
    }
    exportClip(e, t) {
        let n = (0, d.zS)();
        return null == n.exportClip
            ? Promise.reject('unsupported')
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
        null != (0, d.zS)().setAudioSubsystem ? (0, d.zS)().setAudioSubsystem(e) : (0, d.zS)().setUseLegacyAudioDevice(e === h.iA.LEGACY);
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
    setExperimentalAdm(e) {
        let { setExperimentalAdm: t, getAudioSubsystem: n } = (0, d.zS)();
        null == t || t(e),
            null == n ||
                n((e) => {
                    this.audioSubsystem = e;
                });
    }
    setLoopback(e, t) {
        null != (0, d.zS)().setLoopback &&
            (0, d.zS)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControl,
                noiseCancellation: t.noiseCancellation,
                voiceFilters: t.voiceFilters
            }),
            null != (0, d.zS)().setEmitVADLevel2
                ? (0, d.zS)().setEmitVADLevel2(e || this.listenerCount(s.aB.VoiceActivity) > 0)
                : (0, d.zS)().setEmitVADLevel(e || this.listenerCount(s.aB.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: t.automaticGainControl,
                      noiseCancellation: t.noiseCancellation
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
                      : t(Error('getCodecSurvey is not implemented.'));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, t) => {
            let { writeAudioDebugState: n } = (0, d.zS)();
            null != n ? (n(), e()) : t(Error('Audio debug state is not supported.'));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setAecDump) || t.call(n, e);
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: r } = (0, d.zS)();
            null != r ? r(e, (e) => t(e)) : n(Error('RTC region latency test is not supported.'));
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
                      e ? t() : n(Error('Failed to start local audio recording.'));
                  })
                : n(Error('startLocalAudioRecording is not supported.'));
        });
    }
    stopLocalAudioRecording(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).stopLocalAudioRecording) ||
            t.call(n, (t, n) => {
                e(t, n);
            }),
            this.listenerCount(s.aB.VoiceActivity) > 0 && null != (0, d.zS)().setEmitVADLevel2 && (0, d.zS)().setEmitVADLevel2(!0);
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
                          signature: t
                      })
                  )
                : r(Error('NOT_IMPLEMENTED'));
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
            o = v(r, p.QO, p.JA);
        null == (t = (n = (0, d.zS)()).applySidechainCompressionSettings) ||
            t.call(n, {
                threshold: i,
                ratio: o
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).setNativeDesktopVideoSourcePickerActive) || t.call(n, e);
    }
    presentNativeScreenSharePicker(e) {
        var t, n;
        null == (t = (n = (0, d.zS)()).presentNativeScreenSharePicker) || t.call(n, null != e ? e : '');
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, t;
        null == (e = (t = (0, d.zS)()).releaseNativeDesktopVideoSourcePickerStream) || e.call(t);
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
        var e, t, n, r, i, a, c, p;
        super(),
            (e = this),
            m(this, 'Video', _.Z),
            m(this, 'Camera', f.Z),
            m(this, 'videoInputDeviceId', h.Av),
            m(this, 'connections', new Set()),
            m(this, 'lastVoiceActivity', -1),
            m(this, 'audioSubsystem', 'standard'),
            m(this, 'audioLayer', ''),
            m(this, 'deviceChangeGeneration', 0),
            m(this, 'consecutiveWatchdogFailures', 0),
            m(this, 'codecSurvey', null),
            m(this, 'logger', new o.Yd('MediaEngineNative')),
            m(this, 'handleDeviceChange', function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(s.aB.DeviceChange, (0, u.C1)(h.h7.AUDIO_INPUT, t), (0, u.C1)(h.h7.AUDIO_OUTPUT, n), (0, u.C1)(h.h7.VIDEO_INPUT, r));
            }),
            m(this, 'handleVolumeChange', (e, t) => {
                this.emit(s.aB.VolumeChange, e * h.Qx, t * h.Qx);
            }),
            m(this, 'handleVoiceActivity', (e, t) => {
                let n = Date.now();
                this.listenerCount(s.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && ((this.lastVoiceActivity = n), this.emit(s.aB.VoiceActivity, e, t));
            }),
            m(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t, 'MediaEngineNative.handleActiveSinksChange'));
            }),
            m(this, 'handleNewListener', (e) => {
                switch (e) {
                    case s.aB.VoiceActivity:
                        null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(!0) : (0, d.zS)().setEmitVADLevel(!0, !1, {});
                        break;
                    case s.aB.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then((e) => {
                            let [n, r, i] = e;
                            t === this.deviceChangeGeneration && this.emit(s.aB.DeviceChange, n, r, i);
                        });
                }
            }),
            m(this, 'handleRemoveListener', (e) => {
                e === s.aB.VoiceActivity && (null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(this.listenerCount(s.aB.VoiceActivity) > 0) : (0, d.zS)().setEmitVADLevel(this.listenerCount(s.aB.VoiceActivity) > 0, !1, {}));
            }),
            m(this, 'handleVideoInputInitialization', (e) => {
                this.emit(s.aB.VideoInputInitialized, e);
            }),
            m(this, 'handleAudioInputInitialization', (e) => {
                this.emit(s.aB.AudioInputInitialized, e);
            }),
            m(this, 'handleNativeScreenSharePickerUpdate', (e, t) => {
                this.emit(s.aB.NativeScreenSharePickerUpdate, e, t);
            }),
            m(this, 'handleNativeScreenSharePickerCancel', (e) => {
                this.emit(s.aB.NativeScreenSharePickerCancel, e);
            }),
            m(this, 'handleNativeScreenSharePickerError', (e) => {
                this.emit(s.aB.NativeScreenSharePickerError, e);
            }),
            m(this, 'handleAudioDeviceModuleErrorCallback', (e, t) => {
                -100 !== e && this.emit(s.aB.AudioDeviceModuleError, 'RustAudioDeviceModule', e, t);
            }),
            m(this, 'handleVideoCodecErrorCallback', (e) => {
                this.emit(s.aB.VideoCodecError, e);
            });
        let g = (0, d.zS)();
        g.setDeviceChangeCallback(this.handleDeviceChange),
            g.setVolumeChangeCallback(this.handleVolumeChange),
            g.setOnVoiceCallback(this.handleVoiceActivity),
            null == (t = g.setVideoInputInitializationCallback) || t.call(g, this.handleVideoInputInitialization),
            null == (n = g.setAudioInputInitializationCallback) || n.call(g, this.handleAudioInputInitialization),
            g.setTransportOptions({
                idleJitterBufferFlush: !0,
                ducking: !1
            }),
            null == (r = g.setNativeScreenSharePickerCallbacks) || r.call(g, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError),
            null == (i = g.setAudioDeviceModuleErrorCallback) || i.call(g, this.handleAudioDeviceModuleErrorCallback),
            null == (a = g.setVideoCodecErrorCallback) || a.call(g, this.handleVideoCodecErrorCallback),
            this.on('removeListener', this.handleRemoveListener),
            this.on('newListener', this.handleNewListener),
            null != (0, d.zS)().getAudioSubsystem
                ? (0, d.zS)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, d.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, d.zS)().getUseLegacyAudioDevice() ? h.iA.LEGACY : h.iA.STANDARD),
            null != g.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(),
            null != g.setActiveSinksChangeCallback && g.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            null == (c = g.setLoopbackPlaybackGainMultiplier) || c.call(g, h.Jk),
            null == (p = g.setVoiceFiltersFailedCallback) || p.call(g, (e) => this.emit(s.aB.VoiceFiltersFailed, e)),
            (0, l.Z)(this);
    }
}
