r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(264344),
    o = r.n(s),
    l = r(259443),
    u = r(47770),
    c = r(46973),
    d = r(734298),
    f = r(997545),
    _ = r(501950),
    h = r(992774),
    p = r(656795),
    m = r(650886),
    g = r(65154),
    E = r(149396);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function I(e) {
    return (null != e ? e : E.Qx) / E.Qx;
}
function T(e, n, r) {
    return n + ((r - n) * e) / 100;
}
class b extends u.Z {
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(c.aB.Destroy), this.removeAllListeners();
    }
    interact() {}
    static supported() {
        return (0, h.Zh)();
    }
    supported() {
        return !0;
    }
    supports(e) {
        var n, r;
        switch (e) {
            case E.AN.LEGACY_AUDIO_SUBSYSTEM:
                return (0, h.eJ)(E.eR.VOICE_LEGACY_SUBSYSTEM);
            case E.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, h.eJ)(E.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case E.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, h.eJ)(E.eR.VOICE_AUTOMATIC_SUBSYSTEM);
            case E.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
                return (0, h.eJ)(E.eR.VOICE_SUBSYSTEM_DEFERRED_SWITCH);
            case E.AN.DEBUG_LOGGING:
                return (0, h.eJ)(E.eR.DEBUG_LOGGING);
            case E.AN.SOUNDSHARE:
                return (0, h.eJ)(E.eR.SOUNDSHARE);
            case E.AN.SCREEN_SOUNDSHARE:
                return (0, h.eJ)(E.eR.SCREEN_SOUNDSHARE);
            case E.AN.ELEVATED_HOOK:
                return (0, h.eJ)(E.eR.ELEVATED_HOOK);
            case E.AN.LOOPBACK:
                return (0, h.eJ)(E.eR.LOOPBACK);
            case E.AN.WUMPUS_VIDEO:
                return (0, h.eJ)(E.eR.WUMPUS_VIDEO);
            case E.AN.HYBRID_VIDEO:
                return (0, h.eJ)(E.eR.HYBRID_VIDEO);
            case E.AN.ATTENUATION:
            case E.AN.VIDEO_HOOK:
                return (null === o() || void 0 === o() ? void 0 : null === (n = o().os) || void 0 === n ? void 0 : n.family) != null && /^win/i.test(o().os.family);
            case E.AN.EXPERIMENTAL_SOUNDSHARE:
                return (0, h.eJ)(E.eR.SOUNDSHARE_LOOPBACK);
            case E.AN.OPEN_H264:
                return (null === o() || void 0 === o() ? void 0 : null === (r = o().os) || void 0 === r ? void 0 : r.family) != null && /^win|linux|OS X/i.test(o().os.family);
            case E.AN.EXPERIMENTAL_ENCODERS:
                return (0, h.eJ)(E.eR.EXPERIMENTAL_ENCODERS);
            case E.AN.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, h.eJ)(E.eR.REMOTE_LOCUS_NETWORK_CONTROL);
            case E.AN.SCREEN_PREVIEWS:
                return (0, h.eJ)(E.eR.SCREEN_PREVIEWS);
            case E.AN.CLIPS:
                return (0, h.eJ)(E.eR.CLIPS);
            case E.AN.WINDOW_PREVIEWS:
                return (0, h.eJ)(E.eR.WINDOW_PREVIEWS);
            case E.AN.AUDIO_DEBUG_STATE:
                return (0, h.eJ)(E.eR.AUDIO_DEBUG_STATE);
            case E.AN.CONNECTION_REPLAY:
                return (0, h.eJ)(E.eR.CONNECTION_REPLAY);
            case E.AN.SIMULCAST:
                return (0, h.eJ)(E.eR.SIMULCAST) && (0, h.eJ)(E.eR.SIMULCAST_BUGFIX);
            case E.AN.RTC_REGION_RANKING:
                return (0, h.eJ)(E.eR.RTC_REGION_RANKING);
            case E.AN.DIRECT_VIDEO:
                return (0, h.eJ)(E.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
            case E.AN.ELECTRON_VIDEO:
                return (0, h.eJ)(E.eR.ELECTRON_VIDEO);
            case E.AN.MEDIAPIPE:
                return (0, h.eJ)(E.eR.MEDIAPIPE);
            case E.AN.FIXED_KEYFRAME_INTERVAL:
                return (0, h.eJ)(E.eR.FIXED_KEYFRAME_INTERVAL);
            case E.AN.FIRST_FRAME_CALLBACK:
                return (0, h.eJ)(E.eR.FIRST_FRAME_CALLBACK);
            case E.AN.REMOTE_USER_MULTI_STREAM:
                return (0, h.eJ)(E.eR.REMOTE_USER_MULTI_STREAM);
            case E.AN.IMAGE_QUALITY_MEASUREMENT:
                return (0, h.eJ)(E.eR.IMAGE_QUALITY_MEASUREMENT);
            case E.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
                return (0, h.eJ)(E.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
            case E.AN.GO_LIVE_HARDWARE:
                return (0, h.eJ)(E.eR.GO_LIVE_HARDWARE);
            case E.AN.SCREEN_CAPTURE_KIT:
                return (0, h.eJ)(E.eR.SCREEN_CAPTURE_KIT);
            case E.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
                return (0, h.eJ)(E.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
            case E.AN.NATIVE_SCREENSHARE_PICKER:
                return (0, h.eJ)(E.eR.NATIVE_SCREENSHARE_PICKER);
            case E.AN.MLS_PAIRWISE_FINGERPRINTS:
                return (0, h.eJ)(E.eR.MLS_PAIRWISE_FINGERPRINTS);
            case E.AN.DIAGNOSTICS:
            case E.AN.NATIVE_PING:
            case E.AN.AUTOMATIC_VAD:
            case E.AN.AUDIO_INPUT_DEVICE:
            case E.AN.AUDIO_OUTPUT_DEVICE:
            case E.AN.QOS:
            case E.AN.VOICE_PROCESSING:
            case E.AN.AUTO_ENABLE:
            case E.AN.VIDEO:
            case E.AN.DESKTOP_CAPTURE:
            case E.AN.DESKTOP_CAPTURE_FORMAT:
            case E.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case E.AN.VOICE_PANNING:
            case E.AN.AEC_DUMP:
            case E.AN.DISABLE_VIDEO:
            case E.AN.SAMPLE_PLAYBACK:
            case E.AN.NOISE_SUPPRESSION:
            case E.AN.AUTOMATIC_GAIN_CONTROL:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, n, r) {
        !(0, h.eJ)(E.eR.EXPERIMENT_CONFIG) && (r.experiments = void 0);
        let i = f.Z.create(e, n, r);
        return (
            i.on(c.Sh.Destroy, (e) => {
                this.connections.delete(e), this.connectionsEmpty() && (0, h.p8)(E.uJ.NORMAL);
            }),
            i.on(c.Sh.Connected, () => {
                i.setVideoBroadcast(this.shouldConnectionBroadcastVideo(i));
            }),
            i.on(c.Sh.Silence, (e) => {
                this.emit(c.aB.Silence, e);
            }),
            this.connections.add(i),
            (0, h.p8)(E.uJ.HIGH),
            this.emit(c.aB.Connection, i),
            i
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === E.Yn.DEFAULT && this.videoInputDeviceId !== E.Av) || e.hasDesktopSource();
    }
    eachConnection(e, n) {
        this.connections.forEach((r) => {
            (null == n || r.context === n) && e(r);
        });
    }
    enable() {
        return Promise.resolve();
    }
    setInputVolume(e) {
        (0, h.zS)().setInputVolume(I(e));
    }
    setOutputVolume(e) {
        (0, h.zS)().setOutputVolume(I(e));
    }
    getAudioInputDevices() {
        return (0, _.Hg)();
    }
    setAudioInputDevice(e) {
        (0, h.eJ)(E.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, h.zS)().setInputDevice(e)
            : (0, _.Hg)().then((n) => {
                  var r;
                  let i = null !== (r = n.find((n) => n.id === e)) && void 0 !== r ? r : n[0];
                  null != i && (0, h.zS)().setInputDevice(i.index);
              });
    }
    getAudioOutputDevices() {
        return (0, _.HS)();
    }
    setAudioOutputDevice(e) {
        (0, h.eJ)(E.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, h.zS)().setOutputDevice(e)
            : (0, _.HS)().then((n) => {
                  var r;
                  let i = null !== (r = n.find((n) => n.id === e)) && void 0 !== r ? r : n[0];
                  null != i && (0, h.zS)().setOutputDevice(i.index);
              });
    }
    getVideoInputDevices() {
        return (0, _.l0)();
    }
    async setVideoInputDevice(e) {
        let n = (await this.getVideoInputDevices()).find((n) => n.id === e),
            r = null != n ? n.id : E.Av;
        if (r !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = r), (0, h.eJ)(E.eR.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != n ? (null != n.originalId && '' !== n.originalId ? n.originalId : n.id) : E.Av;
                (0, h.zS)().setVideoInputDevice(e);
            } else (0, h.zS)().setVideoInputDevice(null != n ? n.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getSupportedVideoCodecs(e) {
        (0, h.zS)().getSupportedVideoCodecs(e);
    }
    getCodecCapabilities(e) {
        (0, h.zS)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, n) {
        if (null == e) {
            this.eachConnection((e) => {
                e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
            }, n);
            return;
        }
        this.eachConnection((r) => {
            if (n !== E.Yn.STREAM || r.streamUserId === r.userId) r.setGoLiveSource(e), r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
        }, n);
    }
    setClipsSource(e) {
        var n;
        let r = (0, h.zS)();
        if (null == r.setClipsSource || null == r.setOnClipsRecordingEvent || null == r.applyClipsSettings) return;
        if (null == e) {
            r.setClipsSource({
                id: '',
                soundshareId: 0
            });
            return;
        }
        let { frameRate: i, resolution: a } = e.quality,
            s = a <= 480 ? (a / 3) * 4 : (a / 9) * 16,
            o = a,
            { id: l, soundshareId: u, useLoopback: d, useVideoHook: f, useGraphicsCapture: _, useQuartzCapturer: p, allowScreenCaptureKit: m, hdrCaptureMode: g } = e.desktopDescription;
        r.setOnClipsRecordingEvent((n) => {
            this.logger.info('Clips recording event: '.concat(E.Pf[n], ' received for stream ').concat(l, ' and sound ').concat(u, '.')), n === E.Pf.GoLiveEnded ? this.emit(c.aB.ClipsRecordingRestartNeeded) : n === E.Pf.Error ? this.emit(c.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (n === E.Pf.Ended || n === E.Pf.StoppedByGoLive) && this.emit(c.aB.ClipsRecordingEnded, l, u);
        }),
            null === (n = r.applyClipsSettings) ||
                void 0 === n ||
                n.call(r, {
                    useVideoHook: f,
                    useGraphicsCapture: _,
                    useQuartzCapturer: p,
                    allowScreenCaptureKit: m,
                    hdrCaptureMode: g,
                    soundshareLoopback: d,
                    frameRate: i,
                    width: s,
                    height: o
                });
        let [v, I] = null != l ? l.split(':') : ['', ''];
        r.setClipsSource({
            id: I,
            soundshareId: null != u ? u : 0
        });
    }
    setClipsQualitySettings(e, n, r) {
        let i = (0, h.zS)();
        return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, n, r), !0);
    }
    setSoundshareSource(e, n, r) {
        this.eachConnection((i) => {
            if (r !== E.Yn.STREAM || i.streamUserId === i.userId) i.setSoundshareSource(e, n);
        }, r);
    }
    getDesktopSource() {
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, n) {
        return new Promise((r) => {
            null != (0, h.zS)().getScreenPreviews
                ? (0, h.zS)().getScreenPreviews(e, n, (e) => {
                      r(
                          e.map((e, n) => ({
                              ...e,
                              name: 'Screen ' + (n + 1)
                          }))
                      );
                  })
                : r([]);
        });
    }
    setClipBufferLength(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).setClipBufferLength) || void 0 === n || n.call(r, e);
    }
    saveClip(e, n) {
        let r = (0, h.zS)();
        return null == r.setClipBufferLength || null == r.saveClip
            ? Promise.reject('unsupported')
            : new Promise((i, a) => {
                  r.saveClip(
                      e,
                      n,
                      (e, n, r) =>
                          i({
                              duration: e,
                              clipStats: JSON.parse(r)
                          }),
                      (e) => a(JSON.parse(e))
                  );
              });
    }
    saveClipForUser(e, n, r) {
        let i = (0, h.zS)();
        return null == i.saveClipForUser
            ? Promise.reject('unsupported')
            : new Promise((a, s) => {
                  i.saveClipForUser(
                      e,
                      n,
                      r,
                      (e, n, r) =>
                          a({
                              duration: e,
                              clipStats: JSON.parse(r)
                          }),
                      (e) => s(JSON.parse(e))
                  );
              });
    }
    updateClipMetadata(e, n) {
        let r = (0, h.zS)();
        return null == r.updateClipMetadata
            ? Promise.reject('unsupported')
            : new Promise((i, a) => {
                  r.updateClipMetadata(e, n, i, a);
              });
    }
    exportClip(e, n) {
        let r = (0, h.zS)();
        return null == r.exportClip
            ? Promise.reject('unsupported')
            : new Promise((i, a) => {
                  r.exportClip(e, n, (e) => i(new Blob([e])), a);
              });
    }
    getWindowPreviews(e, n) {
        return new Promise((r) => {
            null != (0, h.zS)().getWindowPreviews
                ? (0, h.zS)().getWindowPreviews(e, n, (e) => {
                      r(e);
                  })
                : r([]);
        });
    }
    setAudioSubsystem(e) {
        null != (0, h.zS)().setAudioSubsystem ? (0, h.zS)().setAudioSubsystem(e) : (0, h.zS)().setUseLegacyAudioDevice(e === E.iA.LEGACY);
    }
    queueAudioSubsystem(e) {
        let n = (0, h.zS)();
        null != n.queueAudioSubsystem ? n.queueAudioSubsystem(e) : this.setAudioSubsystem(e);
    }
    getAudioSubsystem() {
        return this.audioSubsystem;
    }
    getAudioLayer() {
        return this.audioLayer;
    }
    getDebugLogging() {
        return !!this.supports(E.AN.DEBUG_LOGGING) && (0, h.zS)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(E.AN.DEBUG_LOGGING) && (0, h.zS)().setDebugLogging(e);
    }
    setExperimentalAdm(e) {
        let { setExperimentalAdm: n, getAudioSubsystem: r } = (0, h.zS)();
        null == n || n(e),
            null == r ||
                r((e) => {
                    this.audioSubsystem = e;
                });
    }
    setLoopback(e, n) {
        null != (0, h.zS)().setLoopback &&
            (0, h.zS)().setLoopback(e, {
                echoCancellation: n.echoCancellation,
                noiseSuppression: n.noiseSuppression,
                automaticGainControl: n.automaticGainControl,
                noiseCancellation: n.noiseCancellation
            }),
            null != (0, h.zS)().setEmitVADLevel2
                ? (0, h.zS)().setEmitVADLevel2(e || this.listenerCount(c.aB.VoiceActivity) > 0)
                : (0, h.zS)().setEmitVADLevel(e || this.listenerCount(c.aB.VoiceActivity) > 0, e, {
                      echoCancellation: n.echoCancellation,
                      noiseSuppression: n.noiseSuppression,
                      automaticGainControl: n.automaticGainControl,
                      noiseCancellation: n.noiseCancellation
                  });
    }
    getLoopback() {
        return !1;
    }
    setH264Enabled(e) {
        (0, h.zS)().setTransportOptions({ h264Enabled: e });
    }
    setAv1Enabled(e) {
        (0, h.zS)().setTransportOptions({ av1Enabled: e });
    }
    setH265Enabled(e) {
        (0, h.zS)().setTransportOptions({ h265Enabled: e });
    }
    getCodecSurvey() {
        return null != this.codecSurvey
            ? Promise.resolve(this.codecSurvey)
            : new Promise((e, n) => {
                  let r = (0, h.zS)();
                  null != r.getCodecSurvey
                      ? r.getCodecSurvey((n) => {
                            (this.codecSurvey = n), e(n);
                        })
                      : n(Error('getCodecSurvey is not implemented.'));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, n) => {
            let { writeAudioDebugState: r } = (0, h.zS)();
            null != r ? (r(), e()) : n(Error('Audio debug state is not supported.'));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).setAecDump) || void 0 === n || n.call(r, e);
    }
    rankRtcRegions(e) {
        return new Promise((n, r) => {
            let { rankRtcRegions: i } = (0, h.zS)();
            null != i ? i(e, (e) => n(e)) : r(Error('RTC region latency test is not supported.'));
        });
    }
    createReplayConnection(e, n) {
        let r = f.Z.createReplay(e, n);
        return null == r
            ? null
            : (r.on(c.Sh.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, h.p8)(E.uJ.NORMAL);
              }),
              this.connections.add(r),
              (0, h.p8)(E.uJ.HIGH),
              this.emit(c.aB.Connection, r),
              r);
    }
    setUseDirectVideo(e) {
        m.Z.useDirectVideo = e;
    }
    setOnVideoContainerResized(e) {
        m.Z.onContainerResized = e;
    }
    setMaxSyncDelayOverride(e) {
        let { setMaxSyncDelayOverride: n } = (0, h.zS)();
        null != n && n(e);
    }
    applyMediaFilterSettings(e) {
        let { applyMediaFilterSettings: n, applyMediaFilterSettingsWithCallback: r } = (0, h.zS)();
        return null != r
            ? new Promise((n, i) => {
                  r(e, n);
              })
            : (null != n && n(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((n, r) => {
            let { startLocalAudioRecording: i } = (0, h.zS)();
            null != i
                ? i(e, (e) => {
                      e ? n() : r(Error('Failed to start local audio recording.'));
                  })
                : r(Error('startLocalAudioRecording is not supported.'));
        });
    }
    stopLocalAudioRecording(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).stopLocalAudioRecording) ||
            void 0 === n ||
            n.call(r, (n, r) => {
                e(n, r);
            }),
            this.listenerCount(c.aB.VoiceActivity) > 0 && null != (0, h.zS)().setEmitVADLevel2 && (0, h.zS)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).setHasFullbandPerformance) || void 0 === n || n.call(r, e);
    }
    getSupportedSecureFramesProtocolVersion() {
        var e;
        return null !== (e = (0, h.zS)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).getSupportedBandwidthEstimationExperiments) || void 0 === n || n.call(r, e);
    }
    getMLSSigningKey(e, n) {
        return new Promise((r, i) => {
            let a = (0, h.zS)();
            null != a.getMLSSigningKey
                ? a.getMLSSigningKey(e, n, (e, n) =>
                      r({
                          key: e,
                          signature: n
                      })
                  )
                : i(Error('NOT_IMPLEMENTED'));
        });
    }
    setSidechainCompression(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).setSidechainCompression) || void 0 === n || n.call(r, e);
    }
    setSidechainCompressionStrength(e) {
        var n, r;
        let i = 100 - e,
            a = T(i, g.Zq, g.WA),
            s = T(i, g.QO, g.JA);
        null === (n = (r = (0, h.zS)()).applySidechainCompressionSettings) ||
            void 0 === n ||
            n.call(r, {
                threshold: a,
                ratio: s
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).setNativeDesktopVideoSourcePickerActive) || void 0 === n || n.call(r, e);
    }
    presentNativeScreenSharePicker(e) {
        var n, r;
        null === (n = (r = (0, h.zS)()).presentNativeScreenSharePicker) || void 0 === n || n.call(r, null != e ? e : '');
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, n;
        null === (e = (n = (0, h.zS)()).releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(n);
    }
    watchdogTick() {
        let e = !1;
        (0, h.zS)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(c.aB.WatchdogTimeout) : this.watchdogTick();
            }, E.H0);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
    constructor() {
        var e, n, r, i, a;
        super(),
            (e = this),
            v(this, 'Video', m.Z),
            v(this, 'Camera', p.Z),
            v(this, 'videoInputDeviceId', E.Av),
            v(this, 'connections', new Set()),
            v(this, 'lastVoiceActivity', -1),
            v(this, 'audioSubsystem', 'standard'),
            v(this, 'audioLayer', ''),
            v(this, 'deviceChangeGeneration', 0),
            v(this, 'consecutiveWatchdogFailures', 0),
            v(this, 'codecSurvey', null),
            v(this, 'logger', new l.Yd('MediaEngineNative')),
            v(this, 'handleDeviceChange', function () {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(c.aB.DeviceChange, (0, _.C1)(E.h7.AUDIO_INPUT, n), (0, _.C1)(E.h7.AUDIO_OUTPUT, r), (0, _.C1)(E.h7.VIDEO_INPUT, i));
            }),
            v(this, 'handleVolumeChange', (e, n) => {
                this.emit(c.aB.VolumeChange, e * E.Qx, n * E.Qx);
            }),
            v(this, 'handleVoiceActivity', (e, n) => {
                let r = Date.now();
                this.listenerCount(c.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && ((this.lastVoiceActivity = r), this.emit(c.aB.VoiceActivity, e, n));
            }),
            v(this, 'handleActiveSinksChange', (e, n) => {
                this.connections.forEach((r) => r.setHasActiveVideoOutputSink(e, n, 'MediaEngineNative.handleActiveSinksChange'));
            }),
            v(this, 'handleNewListener', (e) => {
                switch (e) {
                    case c.aB.VoiceActivity:
                        null != (0, h.zS)().setEmitVADLevel2 ? (0, h.zS)().setEmitVADLevel2(!0) : (0, h.zS)().setEmitVADLevel(!0, !1, {});
                        break;
                    case c.aB.DeviceChange:
                        let n = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then((e) => {
                            let [r, i, a] = e;
                            n === this.deviceChangeGeneration && this.emit(c.aB.DeviceChange, r, i, a);
                        });
                }
            }),
            v(this, 'handleRemoveListener', (e) => {
                e === c.aB.VoiceActivity && (null != (0, h.zS)().setEmitVADLevel2 ? (0, h.zS)().setEmitVADLevel2(this.listenerCount(c.aB.VoiceActivity) > 0) : (0, h.zS)().setEmitVADLevel(this.listenerCount(c.aB.VoiceActivity) > 0, !1, {}));
            }),
            v(this, 'handleVideoInputInitialization', (e) => {
                this.emit(c.aB.VideoInputInitialized, e);
            }),
            v(this, 'handleAudioInputInitialization', (e) => {
                this.emit(c.aB.AudioInputInitialized, e);
            }),
            v(this, 'handleNativeScreenSharePickerUpdate', (e) => {
                this.emit(c.aB.NativeScreenSharePickerUpdate, e);
            }),
            v(this, 'handleNativeScreenSharePickerCancel', (e) => {
                this.emit(c.aB.NativeScreenSharePickerCancel, e);
            }),
            v(this, 'handleNativeScreenSharePickerError', (e) => {
                this.emit(c.aB.NativeScreenSharePickerError, e);
            }),
            v(this, 'handleAudioDeviceModuleErrorCallback', (e, n) => {
                -100 !== e && this.emit(c.aB.AudioDeviceModuleError, 'RustAudioDeviceModule', e, n);
            });
        let s = (0, h.zS)();
        s.setDeviceChangeCallback(this.handleDeviceChange),
            s.setVolumeChangeCallback(this.handleVolumeChange),
            s.setOnVoiceCallback(this.handleVoiceActivity),
            null === (n = s.setVideoInputInitializationCallback) || void 0 === n || n.call(s, this.handleVideoInputInitialization),
            null === (r = s.setAudioInputInitializationCallback) || void 0 === r || r.call(s, this.handleAudioInputInitialization),
            s.setTransportOptions({
                idleJitterBufferFlush: !0,
                ducking: !1
            }),
            null === (i = s.setNativeScreenSharePickerCallbacks) || void 0 === i || i.call(s, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError),
            null === (a = s.setAudioDeviceModuleErrorCallback) || void 0 === a || a.call(s, this.handleAudioDeviceModuleErrorCallback),
            this.on('removeListener', this.handleRemoveListener),
            this.on('newListener', this.handleNewListener),
            null != (0, h.zS)().getAudioSubsystem
                ? (0, h.zS)().getAudioSubsystem((e, n) => {
                      (this.audioSubsystem = e), (this.audioLayer = n);
                  })
                : null != (0, h.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, h.zS)().getUseLegacyAudioDevice() ? E.iA.LEGACY : E.iA.STANDARD),
            null != s.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(),
            null != s.setActiveSinksChangeCallback && s.setActiveSinksChangeCallback(this.handleActiveSinksChange),
            (0, d.Z)(this);
    }
}
