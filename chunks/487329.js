"use strict";
n.d(t, { B1: () => d, B6: () => u, QW: () => c, iy: () => o });
var i,
    r,
    s = n(228366);
let a = new (n(626584).A)("AVError");
var o =
    (((i = {}).STREAM_FAILED_TO_START = "stream-failed-to-start"),
    (i.NO_INPUT_DEVICES = "no-input-devices"),
    (i.NO_AUDIO_INPUT_DETECTED = "no-audio-input-detected"),
    (i.DEBUG_LOG_UPLOAD_FAILED = "debug-log-upload-failed"),
    (i.STREAM_VIEW_LOW_FPS = "stream-view-low-fps"),
    (i.STREAM_VIEW_HIGH_PACKET_LOSS = "stream-view-high-packet-loss"),
    (i.STREAM_SEND_LOW_FPS = "stream-send-low-encode-fps"),
    (i.STREAM_SEND_HIGH_PACKET_LOSS = "stream-send-high-packet-loss"),
    (i.STREAM_BAD_NETWORK_QUALITY = "stream-send-network-quality"),
    (i.STREAM_SOUNDSHARE_FAILED = "stream-soundshare-failed"),
    (i.NOISE_CANCELLER_ERROR = "noise-canceller-error"),
    (i.SCREENSHARE_OS_NOT_SUPPORTED = "screenshare-min-os-requirement"),
    (i.STREAM_RECONNECTING = "stream-reconnecting"),
    (i.VIDEO_DECODE_ERROR = "video-decode-error"),
    (i.VIDEO_ENCODE_ERROR = "video-encode-error"),
    (i.STREAM_FULL = "stream-full"),
    (i.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH = "audio-capture-sample-rate-mismatch"),
    (i.VIDEO_STREAM_SENDER_READY_TIMEOUT = "video-stream-sender-ready-timeout"),
    (i.VIDEO_STREAM_RECEIVER_READY_TIMEOUT = "video-stream-receiver-ready-timeout"),
    (i.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM = "video-stream-sender-ready-timeout-no-stream"),
    (i.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM = "video-stream-receiver-ready-timeout-no-stream"),
    (i.CAMERA_SEND_LOW_FPS = "camera-send-low-encode-fps"),
    (i.SCREENSHARE_OS_ERROR = "screenshare-os-error"),
    i);
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
    (((r = {}).Unknown = "Unknown"),
    (r.UploadErrorGeneral = "UploadErrorCodes.GENERAL"),
    (r.UploadErrorNoFile = "UploadErrorCodes.NO_FILE"),
    (r.UploadErrorProgress = "UploadErrorCodes.PROGRESS"),
    (r.UploadErrorUpload = "UploadErrorCodes.UPLOAD"),
    (r.UploadErrorRead = "UploadErrorCodes.READ"),
    (r.KrispCpuOveruse = "NoiseCancellerError.CPU_OVERUSE"),
    (r.KrispFailed = "NoiseCancellerError.FAILED"),
    (r.KrispVadCpuOveruse = "NoiseCancellerError.VAD_CPU_OVERUSE"),
    (r.KrispInitError = "NoiseCancellerError.INIT_ERROR"),
    (r.KrispInitErrorNative = "NoiseCancellerError.INIT_ERROR_NATIVE"),
    (r.KrispInitErrorSse4NotSupported = "NoiseCancellerError.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED"),
    (r.KrispInitErrorAvx2NotSupported = "NoiseCancellerError.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED"),
    (r.KrispInitErrorUnsigned = "NoiseCancellerError.KRISP_INIT_ERROR_UNSIGNED"),
    (r.KrispInitErrorGlobalInit = "NoiseCancellerError.KRISP_INIT_ERROR_GLOBAL_INIT"),
    (r.KrispInitErrorWeight8k = "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_8K"),
    (r.KrispInitErrorWeight16k = "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_16K"),
    (r.KrispInitErrorWeight32k = "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_32K"),
    (r.KrispInitErrorWeightVad = "NoiseCancellerError.KRISP_INIT_ERROR_WEIGHT_VAD"),
    r);
function c(e) {
    let { type: t, ...n } = e;
    a.error(`AV error reported: ${t} ${JSON.stringify(n)}`);
    let i = l[t];
    s.h.dispatch({
        type: "REPORT_AV_ERROR",
        error: t,
        errorCode: i.errorCode,
        severity: i.severity,
        category: i.category,
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
                let [n, i] = t;
                return e.includes(i.errorCode);
            })
            .map((e) => {
                let [t, n] = e;
                return `${t}: ${n.errorCode}`;
            });
    throw Error(`Duplicate AV error codes found:
${t.join("\n")}`);
}
