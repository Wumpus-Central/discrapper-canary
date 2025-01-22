r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(411104);
var a = r(47120);
var o = r(47770),
    s = r(46973),
    l = r(65154);
function u(e, n, r) {
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
function c(e) {
    return null;
}
function d(e) {
    return null;
}
class f extends o.Z {
    destroy() {
        this.emit(s.aB.Destroy), this.removeAllListeners();
    }
    interact() {}
    supported() {
        return __OVERLAY__;
    }
    supports(e) {
        if (e === l.AN.AUTO_ENABLE) return __OVERLAY__;
        return !1;
    }
    connect(e, n, r) {
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
        return l.iA.STANDARD;
    }
    getAudioLayer() {
        return '';
    }
    setGoLiveSource(e, n) {}
    setClipsSource(e) {}
    setClipsQualitySettings(e, n, r) {
        return !1;
    }
    setDesktopSource(e) {
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT;
    }
    setSoundshareSource(e, n, r) {}
    getDesktopSource() {
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    getWindowPreviews(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setClipBufferLength(e) {}
    saveClip(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    saveClipForUser(e, n, r) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    updateClipMetadata(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    exportClip(e, n) {
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
    setLoopback(e, n) {}
    getLoopback() {
        return !1;
    }
    setH264Enabled(e) {}
    setAv1Enabled(e) {}
    setH265Enabled(e) {}
    setExperimentFlag(e, n) {}
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    createReplayConnection(e, n) {
        throw Error('Connection replay is not supported.');
    }
    setUseDirectVideo(e) {}
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
    getMLSSigningKey(e, n) {
        return Promise.reject(Error('NOT_IMPLEMENTED'));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    constructor(...e) {
        super(...e), u(this, 'Video', c), u(this, 'Camera', d);
    }
}
