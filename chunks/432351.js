n.d(t, {
    A: () => c,
}),
    n(65821),
    n(896048);
var r = n(972347),
    i = n(205693),
    a = n(731854);

function o(e, t, n) {
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

function s(e) {
    return null;
}

function l(e) {
    return null;
}
class c extends r.A {
    destroy() {
        this.emit(i.bg.Destroy), this.removeAllListeners();
    }
    interact() {}
    supported() {
        return __OVERLAY__;
    }
    supports(e) {
        return e === a.O5.AUTO_ENABLE && __OVERLAY__;
    }
    connect(e, t, n) {
        throw Error("NOT_IMPLEMENTED");
    }
    eachConnection() {}
    enable() {
        return Promise.resolve();
    }
    setInputVolume(e) {}
    setOutputVolume(e) {}
    getAudioInputDevices() {
        return Promise.resolve([]);
    }
    setAudioInputDevice(e) {}
    getAudioOutputDevices() {
        return Promise.resolve([]);
    }
    setAudioOutputDevice(e) {}
    getVideoInputDevices() {
        return Promise.resolve([]);
    }
    setVideoInputDevice(e) {}
    getVideoInputDeviceId() {
        return a.qe;
    }
    setAsyncVideoInputDeviceInit(e) {}
    setAsyncClipsSourceDeinit(e) {}
    getCodecCapabilities(e) {
        e("");
    }
    getCodecSurvey() {
        return Promise.reject(Error("getCodecSurvey is not implemented for MediaEngineDummy"));
    }
    getAudioSubsystem() {
        return a.rB.STANDARD;
    }
    getAudioLayer() {
        return "";
    }
    setGoLiveSource(e, t) {}
    setClipsSource(e) {}
    setClipsQualitySettings(e, t, n) {
        return !1;
    }
    setDesktopSource(e) {
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.x.DEFAULT;
    }
    setSoundshareSource(e, t, n) {}
    getDesktopSource() {
        return Promise.reject(Error("NO_STREAM"));
    }
    getScreenPreviews(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getWindowPreviews(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getSingleWindowPreview(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setClipBufferLength(e) {}
    setClipsMaxPendingTasks(e) {}
    setClipsBufferSize(e) {}
    setClipsMLPipelineEnabled(e) {}
    setClipsMLPipelineTypeEnabled(e, t) {}
    saveClip(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveClipForUser(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    exportClip(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveScreenshot(e, t, n, r, i) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    setOffloadAdmControls(e) {}
    getDebugLogging() {
        return !1;
    }
    setDebugLogging(e) {}
    writeAudioDebugState() {
        return Promise.reject(Error("Audio debug state is not supported."));
    }
    setLoopback(e, t) {}
    getLoopback() {
        return !1;
    }
    setExperimentFlag(e, t) {}
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    startRecordingRawSamples(e) {}
    stopRecordingRawSamples() {}
    createReplayConnection(e, t) {
        throw Error("Connection replay is not supported.");
    }
    setOnVideoContainerResized(e) {}
    setMaxSyncDelayOverride(e) {}
    rankRtcRegions(e) {
        return Promise.reject(Error("RTC region latency test is not supported."));
    }
    applyMediaFilterSettings(e) {
        return Promise.resolve();
    }
    startLocalAudioRecording() {
        return Promise.reject(Error("startLocalAudioRecording is not supported."));
    }
    stopLocalAudioRecording(e) {}
    setHasFullbandPerformance(e) {}
    getSupportedSecureFramesProtocolVersion() {
        return 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        e([]);
    }
    getMLSSigningKey(e, t) {
        return Promise.reject(Error("NOT_IMPLEMENTED"));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    getSystemMicrophoneMode() {
        return Promise.resolve("");
    }
    showSystemCaptureConfigurationUI(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    setMaybePreprocessMute(e) {}
    setAudioInputBypassSystemProcessing(e) {}
    fetchAsyncResources(e) {
        return Promise.resolve();
    }
    getDeviceOSVolume(e) {
        return Promise.resolve(void 0);
    }
    getDeviceOSMuted(e) {
        return Promise.resolve(void 0);
    }
    getNoiseCancellationStats() {
        return Promise.reject(Error("Dummy noise cancellation stats not supported"));
    }
    setNoiseCancellationEnableStats(e) {}
    constructor(...e) {
        super(...e), o(this, "Video", s), o(this, "Camera", l);
    }
}
