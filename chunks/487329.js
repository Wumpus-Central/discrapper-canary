"use strict";
n.d(t, { B1: () => u, B6: () => o, QW: () => l, iy: () => a });
var r = n(73153);
let i = new (n(626584).A)("AVError");
var a = (function (e) {
    return (
        (e.STREAM_FAILED_TO_START = "stream-failed-to-start"),
        (e.NO_INPUT_DEVICES = "no-input-devices"),
        (e.NO_AUDIO_INPUT_DETECTED = "no-audio-input-detected"),
        (e.DEBUG_LOG_UPLOAD_FAILED = "debug-log-upload-failed"),
        (e.STREAM_VIEW_LOW_FPS = "stream-view-low-fps"),
        (e.STREAM_VIEW_HIGH_PACKET_LOSS = "stream-view-high-packet-loss"),
        (e.STREAM_SEND_LOW_FPS = "stream-send-low-encode-fps"),
        (e.STREAM_SEND_HIGH_PACKET_LOSS = "stream-send-high-packet-loss"),
        (e.STREAM_BAD_NETWORK_QUALITY = "stream-send-network-quality"),
        (e.STREAM_SOUNDSHARE_FAILED = "stream-soundshare-failed"),
        (e.NOISE_CANCELLER_ERROR = "noise-canceller-error"),
        (e.SCREENSHARE_OS_NOT_SUPPORTED = "screenshare-min-os-requirement"),
        (e.STREAM_RECONNECTING = "stream-reconnecting"),
        (e.VIDEO_DECODE_ERROR = "video-decode-error"),
        (e.VIDEO_ENCODE_ERROR = "video-encode-error"),
        (e.STREAM_FULL = "stream-full"),
        (e.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH = "audio-capture-sample-rate-mismatch"),
        (e.VIDEO_STREAM_SENDER_READY_TIMEOUT = "video-stream-sender-ready-timeout"),
        (e.VIDEO_STREAM_RECEIVER_READY_TIMEOUT = "video-stream-receiver-ready-timeout"),
        (e.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM = "video-stream-sender-ready-timeout-no-stream"),
        (e.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM = "video-stream-receiver-ready-timeout-no-stream"),
        (e.CAMERA_SEND_LOW_FPS = "camera-send-low-encode-fps"),
        (e.SCREENSHARE_OS_ERROR = "screenshare-os-error"),
        e
    );
})({});
let s = {
    "stream-soundshare-failed": { errorCode: 1001, severity: "warning", category: "audio", isErrorOutbound: !0 },
    "noise-canceller-error": { errorCode: 1002, severity: "warning", category: "audio", isErrorOutbound: !0 },
    "audio-capture-sample-rate-mismatch": {
        errorCode: 1003,
        severity: "warning",
        category: "audio",
        isErrorOutbound: !0,
    },
    "stream-failed-to-start": { errorCode: 2001, severity: "critical", category: "video", isErrorOutbound: !0 },
    "stream-view-low-fps": { errorCode: 2002, severity: "warning", category: "video", isErrorOutbound: !1 },
    "stream-view-high-packet-loss": { errorCode: 2003, severity: "warning", category: "video", isErrorOutbound: !1 },
    "stream-send-high-packet-loss": { errorCode: 2004, severity: "warning", category: "video", isErrorOutbound: !0 },
    "stream-send-low-encode-fps": { errorCode: 2005, severity: "warning", category: "video", isErrorOutbound: !0 },
    "stream-send-network-quality": { errorCode: 2006, severity: "warning", category: "video", isErrorOutbound: !0 },
    "stream-reconnecting": { errorCode: 2007, severity: "warning", category: "video", isErrorOutbound: !1 },
    "video-decode-error": { errorCode: 2008, severity: "warning", category: "video", isErrorOutbound: !1 },
    "video-encode-error": { errorCode: 2009, severity: "warning", category: "video", isErrorOutbound: !0 },
    "stream-full": { errorCode: 2010, severity: "critical", category: "video", isErrorOutbound: !1 },
    "video-stream-sender-ready-timeout": {
        errorCode: 2011,
        severity: "critical",
        category: "video",
        isErrorOutbound: !0,
    },
    "video-stream-receiver-ready-timeout": {
        errorCode: 2012,
        severity: "critical",
        category: "video",
        isErrorOutbound: !1,
    },
    "camera-send-low-encode-fps": { errorCode: 2013, severity: "warning", category: "video", isErrorOutbound: !0 },
    "video-stream-sender-ready-timeout-no-stream": {
        errorCode: 2014,
        severity: "critical",
        category: "video",
        isErrorOutbound: !0,
    },
    "video-stream-receiver-ready-timeout-no-stream": {
        errorCode: 2015,
        severity: "critical",
        category: "video",
        isErrorOutbound: !1,
    },
    "no-input-devices": { errorCode: 3001, severity: "critical", category: "devices", isErrorOutbound: !0 },
    "no-audio-input-detected": { errorCode: 3002, severity: "critical", category: "devices", isErrorOutbound: !0 },
    "screenshare-min-os-requirement": {
        errorCode: 3003,
        severity: "critical",
        category: "devices",
        isErrorOutbound: !0,
    },
    "screenshare-os-error": { errorCode: 3004, severity: "critical", category: "devices", isErrorOutbound: !0 },
    "debug-log-upload-failed": { errorCode: 4001, severity: "info", category: "debug", isErrorOutbound: !0 },
};
var o = (function (e) {
    return (
        (e.Unknown = "Unknown"),
        (e.UploadErrorGeneral = "UploadErrorCodes.GENERAL"),
        (e.UploadErrorNoFile = "UploadErrorCodes.NO_FILE"),
        (e.UploadErrorProgress = "UploadErrorCodes.PROGRESS"),
        (e.UploadErrorUpload = "UploadErrorCodes.UPLOAD"),
        (e.UploadErrorRead = "UploadErrorCodes.READ"),
        (e.NoiseCancellerCpuOveruse = "NoiseCancellerError.CPU_OVERUSE"),
        (e.NoiseCancellerFailed = "NoiseCancellerError.FAILED"),
        (e.NoiseCancellerVadCpuOveruse = "NoiseCancellerError.VAD_CPU_OVERUSE"),
        e
    );
})({});
function l(e) {
    let { type: t, ...n } = e;
    i.error(`AV error reported: ${t} ${JSON.stringify(n)}`);
    let a = s[t];
    r.h.dispatch({
        type: "REPORT_AV_ERROR",
        error: t,
        errorCode: a.errorCode,
        severity: a.severity,
        category: a.category,
        context: e,
    });
}
function u(e) {
    return s[e];
}
!(function () {
    let e = Object.values(s).map((e) => e.errorCode),
        t = new Set(e);
    if (e.length !== t.size) {
        let t = e.filter((t, n) => e.indexOf(t) !== n),
            n = Object.entries(s)
                .filter((e) => {
                    let [n, r] = e;
                    return t.includes(r.errorCode);
                })
                .map((e) => {
                    let [t, n] = e;
                    return `${t}: ${n.errorCode}`;
                });
        throw Error(`Duplicate AV error codes found:
${n.join("\n")}`);
    }
})();
