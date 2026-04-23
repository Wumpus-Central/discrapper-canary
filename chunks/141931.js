n.d(t, { Fh: () => i, du: () => l, dv: () => d, fS: () => E, qQ: () => o });
class i extends Error {
    name = "SystemServiceNotAvailableError";
    constructor() {
        super("System service not available");
    }
}
var r,
    a,
    s,
    _,
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
    o =
        (((a = {})[(a.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
        (a[(a.RendererProcess = 1)] = "RendererProcess"),
        (a[(a.MainProcess = 2)] = "MainProcess"),
        a),
    E = (((s = {}).WINDOW = "window"), (s.SCREEN = "screen"), (s.CAMERA = "camera"), s),
    d = (((_ = {}).VIDEO = "VIDEO"), (_.MUTE = "MUTE"), (_.DEAFEN = "DEAFEN"), (_.DISCONNECT = "DISCONNECT"), _);
