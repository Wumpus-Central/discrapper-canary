"use strict";
n.d(t, { WI: () => A, hB: () => h, gO: () => u, Qo: () => c, yq: () => l.y, x: () => d.x, bg: () => o, Tr: () => _ });
var i,
    r,
    a,
    s,
    l = n(904986),
    o =
        (((i = {}).Destroy = "destroy"),
        (i.Silence = "silence"),
        (i.Connection = "connection"),
        (i.DeviceChange = "devicechange"),
        (i.VolumeChange = "volumechange"),
        (i.VoiceActivity = "voiceactivity"),
        (i.WatchdogTimeout = "watchdogtimeout"),
        (i.AudioPermission = "audio-permission"),
        (i.VideoPermission = "video-permission"),
        (i.DesktopSourceEnd = "desktopsourceend"),
        (i.ConnectionStats = "connection-stats"),
        (i.VideoInputInitialized = "video-input-initialized"),
        (i.AudioInputInitialized = "audio-input-initialized"),
        (i.ClipsRecordingRestartNeeded = "clips-recording-restart-needed"),
        (i.ClipsInitFailure = "clips-init-failure"),
        (i.ClipsRecordingEnded = "clips-recording-ended"),
        (i.ClipsBridgeIdleShutdown = "clips-bridge-idle-shutdown"),
        (i.ClipsRecordingHealthy = "clips-recording-healthy"),
        (i.ClipsRecordingReadyChanged = "clips-recording-ready-changed"),
        (i.ClipsMlDetection = "clips-ml-detection"),
        (i.NativeScreenSharePickerUpdate = "native-screenshare-picker-updated"),
        (i.NativeScreenSharePickerCancel = "native-screenshare-picker-cancelled"),
        (i.NativeScreenSharePickerError = "native-screenshare-picker-error"),
        (i.AudioDeviceModuleError = "audio-device-module-error"),
        (i.VideoCodecError = "video-codec-error"),
        (i.VoiceProcessingError = "voice-processing-error"),
        (i.VideoFilterError = "video-filter-error"),
        (i.VoiceQueueMetrics = "voice-queue-metrics"),
        (i.SystemMicrophoneModeChange = "system-microphone-mode-change"),
        (i.SelectedDeviceChange = "selected-device-change"),
        i),
    d = n(731854),
    c = (((r = {}).INPUT_DEVICE = "input_device"), (r.STREAM = "stream"), r),
    u =
        (((a = {}).NONE = ""),
        (a.BACKGROUND_BLUR = "background_blur"),
        (a.BACKGROUND_REPLACEMENT = "background_replacement"),
        a),
    _ =
        (((s = {}).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview"),
        (s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"),
        s);
function E(e) {
    switch (e) {
        case d.Ku.NATIVE:
            return n(206959).A;
        case d.Ku.WEBRTC:
            return n(113634).A;
        case d.Ku.DUMMY:
        default:
            return n(432351).A;
    }
}
function A() {
    return [d.Ku.NATIVE, d.Ku.WEBRTC].find((e) => E(e).supported()) ?? d.Ku.DUMMY;
}
function h(e) {
    return new (E(e))();
}
