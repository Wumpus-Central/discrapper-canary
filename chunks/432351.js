"use strict";
n.d(t, { A: () => l });
var i = n(972347),
    r = n(459838),
    s = n(731854);
function a(e) {
    return null;
}
function o(e) {
    return null;
}
class l extends i.A {
    Video = a;
    Camera = o;
    destroy() {
        this.emit(r.bg.Destroy), this.removeAllListeners();
    }
    interact() {}
    supported() {
        return __OVERLAY__;
    }
    supports(e) {
        return e === s.O5.AUTO_ENABLE && __OVERLAY__;
    }
    connect(e, t, n) {
        throw Error("NOT_IMPLEMENTED");
    }
    eachConnection() {}
    enable() {
        return Promise.resolve();
    }
    setAudioMixerOptions(e) {}
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
        return s.qe;
    }
    setAsyncVideoInputDeviceInit(e) {}
    getCodecCapabilities(e) {
        e("");
    }
    getCodecSurvey() {
        return Promise.reject(Error("getCodecSurvey is not implemented for MediaEngineDummy"));
    }
    getAudioSubsystem() {
        return s.rB.STANDARD;
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
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x.DEFAULT;
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
    setClipsModulePath(e) {}
    setClipsDataPath(e) {}
    setClipsV3Enabled(e) {}
    setClipsV3MLEnabled(e) {}
    setClipsUIActive(e) {}
    setClipBufferLength(e) {}
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
    saveScreenshot(e, t, n, i, r) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    setOffloadAdmControls(e) {}
    updateFieldTrial(e, t) {}
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
    processBatchAudioFiles(e, t, n, i) {}
    cancelBatchAudioProcessing() {}
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
    getDeviceAudioEffects(e) {
        return Promise.reject(Error("Device audio effect querying not supported"));
    }
    getNoiseCancellationStats() {
        return Promise.reject(Error("Dummy noise cancellation stats not supported"));
    }
    setNoiseCancellationEnableStats(e) {}
}
