n.d(t, { Z: () => c }), n(411104), n(47120);
var r = n(47770),
    i = n(46973),
    o = n(65154);
function a(e, t, n) {
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
function s(e) {
    return null;
}
function l(e) {
    return null;
}
class c extends r.Z {
    destroy() {
        this.emit(i.aB.Destroy), this.removeAllListeners();
    }
    interact() {}
    supported() {
        return __OVERLAY__;
    }
    supports(e) {
        return e === o.AN.AUTO_ENABLE && __OVERLAY__;
    }
    connect(e, t, n) {
        throw Error('NOT_IMPLEMENTED');
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
    getSupportedVideoCodecs(e) {
        e([]);
    }
    getCodecCapabilities(e) {
        e('');
    }
    getCodecSurvey() {
        return Promise.reject(Error('getCodecSurvey is not implemented for MediaEngineDummy'));
    }
    getAudioSubsystem() {
        return o.iA.STANDARD;
    }
    getAudioLayer() {
        return '';
    }
    setGoLiveSource(e, t) {}
    setClipsSource(e) {}
    setClipsQualitySettings(e, t, n) {
        return !1;
    }
    setDesktopSource(e) {
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT;
    }
    setSoundshareSource(e, t, n) {}
    getDesktopSource() {
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    getWindowPreviews(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setClipBufferLength(e) {}
    saveClip(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    saveClipForUser(e, t, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    exportClip(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    getDebugLogging() {
        return !1;
    }
    setDebugLogging(e) {}
    writeAudioDebugState() {
        return Promise.reject(Error('Audio debug state is not supported.'));
    }
    setExperimentalAdm(e) {}
    setLoopback(e, t) {}
    getLoopback() {
        return !1;
    }
    setH264Enabled(e) {}
    setAv1Enabled(e) {}
    setH265Enabled(e) {}
    setExperimentFlag(e, t) {}
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    createReplayConnection(e, t) {
        throw Error('Connection replay is not supported.');
    }
    setOnVideoContainerResized(e) {}
    setMaxSyncDelayOverride(e) {}
    rankRtcRegions(e) {
        return Promise.reject(Error('RTC region latency test is not supported.'));
    }
    applyMediaFilterSettings(e) {
        return Promise.resolve();
    }
    startLocalAudioRecording() {
        return Promise.reject(Error('startLocalAudioRecording is not supported.'));
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
        return Promise.reject(Error('NOT_IMPLEMENTED'));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    setMaybePreprocessMute(e) {}
    constructor(...e) {
        super(...e), a(this, 'Video', s), a(this, 'Camera', l);
    }
}
