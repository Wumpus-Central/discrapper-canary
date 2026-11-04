var i,
    r,
    a,
    s,
    l,
    o =
        (((i = {})[(i.HasRTCConnection = 0)] = "HasRTCConnection"),
        (i[(i.IsSendingVideo = 1)] = "IsSendingVideo"),
        (i[(i.IsSendingStream = 2)] = "IsSendingStream"),
        (i[(i.IsReceivingVideo = 3)] = "IsReceivingVideo"),
        (i[(i.IsReceivingStream = 4)] = "IsReceivingStream"),
        (i[(i.VideoMediaSessionId = 5)] = "VideoMediaSessionId"),
        (i[(i.StreamMediaSessionId = 6)] = "StreamMediaSessionId"),
        (i[(i.IntentionalCrashReason = 7)] = "IntentionalCrashReason"),
        (i[(i.BuildNumber = 8)] = "BuildNumber"),
        i),
    d =
        (((r = {})[(r.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
        (r[(r.RendererProcess = 1)] = "RendererProcess"),
        (r[(r.MainProcess = 2)] = "MainProcess"),
        r),
    c = (((a = {}).WINDOW = "window"), (a.SCREEN = "screen"), (a.CAMERA = "camera"), (a.ACTIVITY = "activity"), a),
    u = (((s = {}).VIDEO = "VIDEO"), (s.MUTE = "MUTE"), (s.DEAFEN = "DEAFEN"), (s.DISCONNECT = "DISCONNECT"), s),
    _ =
        (((l = {}).DEFAULT = "DEFAULT"),
        (l.UNREAD = "UNREAD"),
        (l.CONNECTED = "CONNECTED"),
        (l.SPEAKING = "SPEAKING"),
        (l.MUTED = "MUTED"),
        (l.DEAFENED = "DEAFENED"),
        l);
n.d(
    t,
    {},
    {
        Fh: class extends Error {
            name = "SystemServiceNotAvailableError";
            constructor() {
                super("System service not available");
            }
        },
        du: o,
        dv: u,
        fS: c,
        qQ: d,
        wB: _,
    },
);
