"use strict";
n.d(t, { Fh: () => r, du: () => i, dv: () => o, fS: () => a, qQ: () => s });
class r extends Error {
    name = "SystemServiceNotAvailableError";
    constructor() {
        super("System service not available");
    }
}
var i = (function (e) {
        return (
            (e[(e.HasRTCConnection = 0)] = "HasRTCConnection"),
            (e[(e.IsSendingVideo = 1)] = "IsSendingVideo"),
            (e[(e.IsSendingStream = 2)] = "IsSendingStream"),
            (e[(e.IsReceivingVideo = 3)] = "IsReceivingVideo"),
            (e[(e.IsReceivingStream = 4)] = "IsReceivingStream"),
            (e[(e.VideoMediaSessionId = 5)] = "VideoMediaSessionId"),
            (e[(e.StreamMediaSessionId = 6)] = "StreamMediaSessionId"),
            (e[(e.IntentionalCrashReason = 7)] = "IntentionalCrashReason"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e[(e.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
            (e[(e.RendererProcess = 1)] = "RendererProcess"),
            (e[(e.MainProcess = 2)] = "MainProcess"),
            e
        );
    })({}),
    a = (function (e) {
        return (e.WINDOW = "window"), (e.SCREEN = "screen"), (e.CAMERA = "camera"), e;
    })({}),
    o = (function (e) {
        return (e.VIDEO = "VIDEO"), (e.MUTE = "MUTE"), (e.DEAFEN = "DEAFEN"), (e.DISCONNECT = "DISCONNECT"), e;
    })({});
