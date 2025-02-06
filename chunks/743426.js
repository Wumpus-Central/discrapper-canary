n.d(t, { Z: () => v }), n(47120), n(411104);
var i = n(264344),
    r = n.n(i),
    a = n(259443),
    s = n(47770),
    o = n(46973),
    l = n(734298),
    u = n(997545),
    c = n(501950),
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
    return (null != e ? e : h.Qx) / h.Qx;
}
function E(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class v extends s.Z {
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(o.aB.Destroy), this.removeAllListeners();
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
                return (null === r() || void 0 === r() ? void 0 : null === (t = r().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(r().os.family);
            case h.AN.EXPERIMENTAL_SOUNDSHARE:
                return (0, d.eJ)(h.eR.SOUNDSHARE_LOOPBACK);
            case h.AN.OPEN_H264:
                return (null === r() || void 0 === r() ? void 0 : null === (n = r().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(r().os.family);
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
            case h.AN.DIRECT_VIDEO:
                return (0, d.eJ)(h.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
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
            case h.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
                return (0, d.eJ)(h.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
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
        let i = u.Z.create(e, t, n);
        return (
            i.on(o.Sh.Destroy, (e) => {
                this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(h.uJ.NORMAL);
            }),
            i.on(o.Sh.Connected, () => {
                i.setVideoBroadcast(this.shouldConnectionBroadcastVideo(i));
            }),
            i.on(o.Sh.Silence, (e) => {
                this.emit(o.aB.Silence, e);
            }),
            this.connections.add(i),
            (0, d.p8)(h.uJ.HIGH),
            this.emit(o.aB.Connection, i),
            i
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
        (0, d.zS)().setInputVolume(g(e));
    }
    setOutputVolume(e) {
        (0, d.zS)().setOutputVolume(g(e));
    }
    getAudioInputDevices() {
        return (0, c.Hg)();
    }
    setAudioInputDevice(e) {
        (0, d.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, d.zS)().setInputDevice(e)
            : (0, c.Hg)().then((t) => {
                  var n;
                  let i = null !== (n = t.find((t) => t.id === e)) && void 0 !== n ? n : t[0];
                  null != i && (0, d.zS)().setInputDevice(i.index);
              });
    }
    getAudioOutputDevices() {
        return (0, c.HS)();
    }
    setAudioOutputDevice(e) {
        (0, d.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, d.zS)().setOutputDevice(e)
            : (0, c.HS)().then((t) => {
                  var n;
                  let i = null !== (n = t.find((t) => t.id === e)) && void 0 !== n ? n : t[0];
                  null != i && (0, d.zS)().setOutputDevice(i.index);
              });
    }
    getVideoInputDevices() {
        return (0, c.l0)();
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
        if (null == e) {
            this.eachConnection((e) => {
                e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
            }, t);
            return;
        }
        this.eachConnection((n) => {
            (t !== h.Yn.STREAM || n.streamUserId === n.userId) && (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)));
        }, t);
    }
    setClipsSource(e) {
        var t;
        let n = (0, d.zS)();
        if (null == n.setClipsSource || null == n.setOnClipsRecordingEvent || null == n.applyClipsSettings) return;
        if (null == e) {
            n.setClipsSource({
                id: '',
                soundshareId: 0
            });
            return;
        }
        let { frameRate: i, resolution: r } = e.quality,
            a = r <= 480 ? (r / 3) * 4 : (r / 9) * 16,
            s = r,
            { id: l, soundshareId: u, useLoopback: c, useVideoHook: f, useGraphicsCapture: _, useQuartzCapturer: p, allowScreenCaptureKit: m, hdrCaptureMode: g } = e.desktopDescription;
        n.setOnClipsRecordingEvent((t) => {
            this.logger.info('Clips recording event: '.concat(h.Pf[t], ' received for stream ').concat(l, ' and sound ').concat(u, '.')), t === h.Pf.GoLiveEnded ? this.emit(o.aB.ClipsRecordingRestartNeeded) : t === h.Pf.Error ? this.emit(o.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (t === h.Pf.Ended || t === h.Pf.StoppedByGoLive) && this.emit(o.aB.ClipsRecordingEnded, l, u);
        }),
            null === (t = n.applyClipsSettings) ||
                void 0 === t ||
                t.call(n, {
                    useVideoHook: f,
                    useGraphicsCapture: _,
                    useQuartzCapturer: p,
                    allowScreenCaptureKit: m,
                    hdrCaptureMode: g,
                    soundshareLoopback: c,
                    frameRate: i,
                    width: a,
                    height: s
                });
        let [E, v] = null != l ? l.split(':') : ['', ''];
        n.setClipsSource({
            id: v,
            soundshareId: null != u ? u : 0
        });
    }
    setClipsQualitySettings(e, t, n) {
        let i = (0, d.zS)();
        return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((i) => {
            (n !== h.Yn.STREAM || i.streamUserId === i.userId) && i.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.zS)().getScreenPreviews
                ? (0, d.zS)().getScreenPreviews(e, t, (e) => {
                      n(
                          e.map((e, t) => ({
                              ...e,
                              name: 'Screen ' + (t + 1)
                          }))
                      );
                  })
                : n([]);
        });
    }
    setClipBufferLength(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setClipBufferLength) || void 0 === t || t.call(n, e);
    }
    saveClip(e, t) {
        let n = (0, d.zS)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject('unsupported')
            : new Promise((i, r) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) =>
                          i({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => r(JSON.parse(e))
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let i = (0, d.zS)();
        return null == i.saveClipForUser
            ? Promise.reject('unsupported')
            : new Promise((r, a) => {
                  i.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) =>
                          r({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => a(JSON.parse(e))
                  );
              });
    }
    updateClipMetadata(e, t) {
        let n = (0, d.zS)();
        return null == n.updateClipMetadata
            ? Promise.reject('unsupported')
            : new Promise((i, r) => {
                  n.updateClipMetadata(e, t, i, r);
              });
    }
    exportClip(e, t) {
        let n = (0, d.zS)();
        return null == n.exportClip
            ? Promise.reject('unsupported')
            : new Promise((i, r) => {
                  n.exportClip(e, t, (e) => i(new Blob([e])), r);
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
                noiseCancellation: t.noiseCancellation
            }),
            null != (0, d.zS)().setEmitVADLevel2
                ? (0, d.zS)().setEmitVADLevel2(e || this.listenerCount(o.aB.VoiceActivity) > 0)
                : (0, d.zS)().setEmitVADLevel(e || this.listenerCount(o.aB.VoiceActivity) > 0, e, {
                      echoCancellation: t.echoCancellation,
                      noiseSuppression: t.noiseSuppression,
                      automaticGainControl: t.automaticGainControl,
                      noiseCancellation: t.noiseCancellation
                  });
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
        null === (t = (n = (0, d.zS)()).setAecDump) || void 0 === t || t.call(n, e);
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: i } = (0, d.zS)();
            null != i ? i(e, (e) => t(e)) : n(Error('RTC region latency test is not supported.'));
        });
    }
    createReplayConnection(e, t) {
        let n = u.Z.createReplay(e, t);
        return null == n
            ? null
            : (n.on(o.Sh.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(h.uJ.NORMAL);
              }),
              this.connections.add(n),
              (0, d.p8)(h.uJ.HIGH),
              this.emit(o.aB.Connection, n),
              n);
    }
    setUseDirectVideo(e) {
        _.Z.useDirectVideo = e;
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
            ? new Promise((t, i) => {
                  n(e, t);
              })
            : (null != t && t(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((t, n) => {
            let { startLocalAudioRecording: i } = (0, d.zS)();
            null != i
                ? i(e, (e) => {
                      e ? t() : n(Error('Failed to start local audio recording.'));
                  })
                : n(Error('startLocalAudioRecording is not supported.'));
        });
    }
    stopLocalAudioRecording(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).stopLocalAudioRecording) ||
            void 0 === t ||
            t.call(n, (t, n) => {
                e(t, n);
            }),
            this.listenerCount(o.aB.VoiceActivity) > 0 && null != (0, d.zS)().setEmitVADLevel2 && (0, d.zS)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setHasFullbandPerformance) || void 0 === t || t.call(n, e);
    }
    getSupportedSecureFramesProtocolVersion() {
        var e;
        return null !== (e = (0, d.zS)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).getSupportedBandwidthEstimationExperiments) || void 0 === t || t.call(n, e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, i) => {
            let r = (0, d.zS)();
            null != r.getMLSSigningKey
                ? r.getMLSSigningKey(e, t, (e, t) =>
                      n({
                          key: e,
                          signature: t
                      })
                  )
                : i(Error('NOT_IMPLEMENTED'));
        });
    }
    setSidechainCompression(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setSidechainCompression) || void 0 === t || t.call(n, e);
    }
    setSidechainCompressionStrength(e) {
        var t, n;
        let i = 100 - e,
            r = E(i, p.Zq, p.WA),
            a = E(i, p.QO, p.JA);
        null === (t = (n = (0, d.zS)()).applySidechainCompressionSettings) ||
            void 0 === t ||
            t.call(n, {
                threshold: r,
                ratio: a
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, e);
    }
    presentNativeScreenSharePicker(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).presentNativeScreenSharePicker) || void 0 === t || t.call(n, null != e ? e : '');
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, t;
        null === (e = (t = (0, d.zS)()).releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
    }
    watchdogTick() {
        let e = !1;
        (0, d.zS)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(o.aB.WatchdogTimeout) : this.watchdogTick();
            }, h.H0);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
    constructor() {
        var e, t, n, i, r, s;
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
            m(this, 'logger', new a.Yd('MediaEngineNative')),
            m(this, 'handleDeviceChange', function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(o.aB.DeviceChange, (0, c.C1)(h.h7.AUDIO_INPUT, t), (0, c.C1)(h.h7.AUDIO_OUTPUT, n), (0, c.C1)(h.h7.VIDEO_INPUT, i));
            }),
            m(this, 'handleVolumeChange', (e, t) => {
                this.emit(o.aB.VolumeChange, e * h.Qx, t * h.Qx);
            }),
            m(this, 'handleVoiceActivity', (e, t) => {
                let n = Date.now();
                this.listenerCount(o.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && ((this.lastVoiceActivity = n), this.emit(o.aB.VoiceActivity, e, t));
            }),
            m(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t, 'MediaEngineNative.handleActiveSinksChange'));
            }),
            m(this, 'handleNewListener', (e) => {
                switch (e) {
                    case o.aB.VoiceActivity:
                        null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(!0) : (0, d.zS)().setEmitVADLevel(!0, !1, {});
                        break;
                    case o.aB.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then((e) => {
                            let [n, i, r] = e;
                            t === this.deviceChangeGeneration && this.emit(o.aB.DeviceChange, n, i, r);
                        });
                }
            }),
            m(this, 'handleRemoveListener', (e) => {
                e === o.aB.VoiceActivity && (null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(this.listenerCount(o.aB.VoiceActivity) > 0) : (0, d.zS)().setEmitVADLevel(this.listenerCount(o.aB.VoiceActivity) > 0, !1, {}));
            }),
            m(this, 'handleVideoInputInitialization', (e) => {
                this.emit(o.aB.VideoInputInitialized, e);
            }),
            m(this, 'handleAudioInputInitialization', (e) => {
                this.emit(o.aB.AudioInputInitialized, e);
            }),
            m(this, 'handleNativeScreenSharePickerUpdate', (e) => {
                this.emit(o.aB.NativeScreenSharePickerUpdate, e);
            }),
            m(this, 'handleNativeScreenSharePickerCancel', (e) => {
                this.emit(o.aB.NativeScreenSharePickerCancel, e);
            }),
            m(this, 'handleNativeScreenSharePickerError', (e) => {
                this.emit(o.aB.NativeScreenSharePickerError, e);
            }),
            m(this, 'handleAudioDeviceModuleErrorCallback', (e, t) => {
                -100 !== e && this.emit(o.aB.AudioDeviceModuleError, 'RustAudioDeviceModule', e, t);
            });
        let u = (0, d.zS)();
        u.setDeviceChangeCallback(this.handleDeviceChange),
            u.setVolumeChangeCallback(this.handleVolumeChange),
            u.setOnVoiceCallback(this.handleVoiceActivity),
            null === (t = u.setVideoInputInitializationCallback) || void 0 === t || t.call(u, this.handleVideoInputInitialization),
            null === (n = u.setAudioInputInitializationCallback) || void 0 === n || n.call(u, this.handleAudioInputInitialization),
            u.setTransportOptions({
                idleJitterBufferFlush: !0,
                ducking: !1
            }),
            null === (i = u.setNativeScreenSharePickerCallbacks) || void 0 === i || i.call(u, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError),
            null === (r = u.setAudioDeviceModuleErrorCallback) || void 0 === r || r.call(u, this.handleAudioDeviceModuleErrorCallback),
            this.on('removeListener', this.handleRemoveListener),
            this.on('newListener', this.handleNewListener),
            null != (0, d.zS)().getAudioSubsystem
                ? (0, d.zS)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, d.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, d.zS)().getUseLegacyAudioDevice() ? h.iA.LEGACY : h.iA.STANDARD),
            null != u.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(),
            null != u.setActiveSinksChangeCallback && u.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            null === (s = u.setLoopbackPlaybackGainMultiplier) || void 0 === s || s.call(u, h.Jk),
            (0, l.Z)(this);
    }
}
