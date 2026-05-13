"use strict";
n.d(t, { WI: () => h, hB: () => p, gO: () => d, Qo: () => c, yq: () => o.y, x: () => u.x, bg: () => l, Tr: () => _ });
var i,
    r,
    s,
    a,
    o = n(904986),
    l =
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
        (i.ClipsMlDetection = "clips-ml-detection"),
        (i.NativeScreenSharePickerUpdate = "native-screenshare-picker-updated"),
        (i.NativeScreenSharePickerCancel = "native-screenshare-picker-cancelled"),
        (i.NativeScreenSharePickerError = "native-screenshare-picker-error"),
        (i.AudioDeviceModuleError = "audio-device-module-error"),
        (i.VideoCodecError = "video-codec-error"),
        (i.VoiceProcessingError = "voice-processing-error"),
        (i.VoiceQueueMetrics = "voice-queue-metrics"),
        (i.SystemMicrophoneModeChange = "system-microphone-mode-change"),
        (i.SelectedDeviceChange = "selected-device-change"),
        i),
    u = n(731854),
    c = (((r = {}).INPUT_DEVICE = "input_device"), (r.STREAM = "stream"), r),
    d =
        (((s = {}).NONE = ""),
        (s.BACKGROUND_BLUR = "background_blur"),
        (s.BACKGROUND_REPLACEMENT = "background_replacement"),
        s),
    _ =
        (((a = {}).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview"),
        (a.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"),
        a);
function f(e) {
    switch (e) {
        case u.Ku.NATIVE:
            return n(206959).A;
        case u.Ku.WEBRTC:
            return n(615061).A;
        case u.Ku.DUMMY:
        default:
            return n(432351).A;
    }
}
function h() {
    return [u.Ku.NATIVE, u.Ku.WEBRTC].find((e) => f(e).supported()) ?? u.Ku.DUMMY;
}
function p(e) {
    return new (f(e))();
}
