"use strict";
n.d(t, { Fh: () => i, du: () => l, dv: () => d, fS: () => c, qQ: () => u });
class i extends Error {
    name = "SystemServiceNotAvailableError";
    constructor() {
        super("System service not available");
    }
}
var r,
    s,
    a,
    o,
    l =
        (((r = {})[(r.HasRTCConnection = 0)] = "HasRTCConnection"),
        (r[(r.IsSendingVideo = 1)] = "IsSendingVideo"),
        (r[(r.IsSendingStream = 2)] = "IsSendingStream"),
        (r[(r.IsReceivingVideo = 3)] = "IsReceivingVideo"),
        (r[(r.IsReceivingStream = 4)] = "IsReceivingStream"),
        (r[(r.VideoMediaSessionId = 5)] = "VideoMediaSessionId"),
        (r[(r.StreamMediaSessionId = 6)] = "StreamMediaSessionId"),
        (r[(r.IntentionalCrashReason = 7)] = "IntentionalCrashReason"),
        r),
    u =
        (((s = {})[(s.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
        (s[(s.RendererProcess = 1)] = "RendererProcess"),
        (s[(s.MainProcess = 2)] = "MainProcess"),
        s),
    c = (((a = {}).WINDOW = "window"), (a.SCREEN = "screen"), (a.CAMERA = "camera"), a),
    d = (((o = {}).VIDEO = "VIDEO"), (o.MUTE = "MUTE"), (o.DEAFEN = "DEAFEN"), (o.DISCONNECT = "DISCONNECT"), o);
