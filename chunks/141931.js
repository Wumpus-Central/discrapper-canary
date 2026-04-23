"use strict";
n.d(t, { Fh: () => r, du: () => l, dv: () => d, fS: () => c, qQ: () => u });
class r extends Error {
    name = "SystemServiceNotAvailableError";
    constructor() {
        super("System service not available");
    }
}
var i,
    s,
    a,
    o,
    l =
        (((i = {})[(i.HasRTCConnection = 0)] = "HasRTCConnection"),
        (i[(i.IsSendingVideo = 1)] = "IsSendingVideo"),
        (i[(i.IsSendingStream = 2)] = "IsSendingStream"),
        (i[(i.IsReceivingVideo = 3)] = "IsReceivingVideo"),
        (i[(i.IsReceivingStream = 4)] = "IsReceivingStream"),
        (i[(i.VideoMediaSessionId = 5)] = "VideoMediaSessionId"),
        (i[(i.StreamMediaSessionId = 6)] = "StreamMediaSessionId"),
        (i[(i.IntentionalCrashReason = 7)] = "IntentionalCrashReason"),
        i),
    u =
        (((s = {})[(s.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
        (s[(s.RendererProcess = 1)] = "RendererProcess"),
        (s[(s.MainProcess = 2)] = "MainProcess"),
        s),
    c = (((a = {}).WINDOW = "window"), (a.SCREEN = "screen"), (a.CAMERA = "camera"), a),
    d = (((o = {}).VIDEO = "VIDEO"), (o.MUTE = "MUTE"), (o.DEAFEN = "DEAFEN"), (o.DISCONNECT = "DISCONNECT"), o);
