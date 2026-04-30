n.d(t, { Fh: () => i, du: () => o, dv: () => _, fS: () => c, qQ: () => d });
class i extends Error {
    name = "SystemServiceNotAvailableError";
    constructor() {
        super("System service not available");
    }
}
var a,
    r,
    s,
    l,
    o =
        (((a = {})[(a.HasRTCConnection = 0)] = "HasRTCConnection"),
        (a[(a.IsSendingVideo = 1)] = "IsSendingVideo"),
        (a[(a.IsSendingStream = 2)] = "IsSendingStream"),
        (a[(a.IsReceivingVideo = 3)] = "IsReceivingVideo"),
        (a[(a.IsReceivingStream = 4)] = "IsReceivingStream"),
        (a[(a.VideoMediaSessionId = 5)] = "VideoMediaSessionId"),
        (a[(a.StreamMediaSessionId = 6)] = "StreamMediaSessionId"),
        (a[(a.IntentionalCrashReason = 7)] = "IntentionalCrashReason"),
        a),
    d =
        (((r = {})[(r.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
        (r[(r.RendererProcess = 1)] = "RendererProcess"),
        (r[(r.MainProcess = 2)] = "MainProcess"),
        r),
    c = (((s = {}).WINDOW = "window"), (s.SCREEN = "screen"), (s.CAMERA = "camera"), s),
    _ = (((l = {}).VIDEO = "VIDEO"), (l.MUTE = "MUTE"), (l.DEAFEN = "DEAFEN"), (l.DISCONNECT = "DISCONNECT"), l);
