"use strict";
n.d(t, { B1: () => d, B6: () => u, QW: () => c, iy: () => o });
var r,
    i,
    s = n(73153);
let a = new (n(626584).A)("AVError");
var o =
    (((r = {}).STREAM_FAILED_TO_START = "stream-failed-to-start"),
    (r.NO_INPUT_DEVICES = "no-input-devices"),
    (r.NO_AUDIO_INPUT_DETECTED = "no-audio-input-detected"),
    (r.DEBUG_LOG_UPLOAD_FAILED = "debug-log-upload-failed"),
    (r.STREAM_VIEW_LOW_FPS = "stream-view-low-fps"),
    (r.STREAM_VIEW_HIGH_PACKET_LOSS = "stream-view-high-packet-loss"),
    (r.STREAM_SEND_LOW_FPS = "stream-send-low-encode-fps"),
    (r.STREAM_SEND_HIGH_PACKET_LOSS = "stream-send-high-packet-loss"),
    (r.STREAM_BAD_NETWORK_QUALITY = "stream-send-network-quality"),
    (r.STREAM_SOUNDSHARE_FAILED = "stream-soundshare-failed"),
    (r.NOISE_CANCELLER_ERROR = "noise-canceller-error"),
    (r.SCREENSHARE_OS_NOT_SUPPORTED = "screenshare-min-os-requirement"),
    (r.STREAM_RECONNECTING = "stream-reconnecting"),
    (r.VIDEO_DECODE_ERROR = "video-decode-error"),
    (r.VIDEO_ENCODE_ERROR = "video-encode-error"),
    (r.STREAM_FULL = "stream-full"),
    (r.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH = "audio-capture-sample-rate-mismatch"),
    (r.VIDEO_STREAM_SENDER_READY_TIMEOUT = "video-stream-sender-ready-timeout"),
    (r.VIDEO_STREAM_RECEIVER_READY_TIMEOUT = "video-stream-receiver-ready-timeout"),
    (r.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM = "video-stream-sender-ready-timeout-no-stream"),
    (r.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM = "video-stream-receiver-ready-timeout-no-stream"),
    (r.CAMERA_SEND_LOW_FPS = "camera-send-low-encode-fps"),
    (r.SCREENSHARE_OS_ERROR = "screenshare-os-error"),
    r);
let l = {
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
var u =
    (((i = {}).Unknown = "Unknown"),
    (i.UploadErrorGeneral = "UploadErrorCodes.GENERAL"),
    (i.UploadErrorNoFile = "UploadErrorCodes.NO_FILE"),
    (i.UploadErrorProgress = "UploadErrorCodes.PROGRESS"),
    (i.UploadErrorUpload = "UploadErrorCodes.UPLOAD"),
    (i.UploadErrorRead = "UploadErrorCodes.READ"),
    (i.NoiseCancellerCpuOveruse = "NoiseCancellerError.CPU_OVERUSE"),
    (i.NoiseCancellerFailed = "NoiseCancellerError.FAILED"),
    (i.NoiseCancellerVadCpuOveruse = "NoiseCancellerError.VAD_CPU_OVERUSE"),
    i);
function c(e) {
    let { type: t, ...n } = e;
    a.error(`AV error reported: ${t} ${JSON.stringify(n)}`);
    let r = l[t];
    s.h.dispatch({
        type: "REPORT_AV_ERROR",
        error: t,
        errorCode: r.errorCode,
        severity: r.severity,
        category: r.category,
        context: e,
    });
}
function d(e) {
    return l[e];
}
let _ = Object.values(l).map((e) => e.errorCode),
    f = new Set(_);
if (_.length !== f.size) {
    let e = _.filter((e, t) => _.indexOf(e) !== t),
        t = Object.entries(l)
            .filter((t) => {
                let [n, r] = t;
                return e.includes(r.errorCode);
            })
            .map((e) => {
                let [t, n] = e;
                return `${t}: ${n.errorCode}`;
            });
    throw Error(`Duplicate AV error codes found:
${t.join("\n")}`);
}
