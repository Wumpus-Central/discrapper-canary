"use strict";
n.d(t, { z: () => _ });
var r = n(961350),
    i = n(430452),
    a = n(383501),
    s = n(927813),
    o = n(709710),
    l = n(601900),
    u = n(548370);
let c = 10,
    d = 20 * s.A.Millis.SECOND,
    _ = {
        getActiveErrors: () => {
            let e = a.A.getRTCConnection();
            if (null == e) return null;
            let t = e.getMediaEngineConnectionId();
            if (null == t || !i.A.isVideoEnabled()) return null;
            let n = a.A.getLastNonZeroRemoteVideoSinkWantsTime();
            if ((null != n && performance.now() - n < d) || !e.hasActiveRemoteWants()) return null;
            let s = (0, u.xA)(t, r.default.getId());
            return null == s
                ? null
                : s.short.frameRate < c || s.long.frameRate < c
                  ? [{ type: o.iy.CAMERA_SEND_LOW_FPS, userId: r.default.getId(), ...(0, l.jY)() }]
                  : void 0;
        },
        makeErrorContextKey: (e) => `${e.mediaSessionId}`,
    };
