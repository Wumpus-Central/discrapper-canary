"use strict";
n.d(t, { z: () => d });
var r = n(961350),
    i = n(430452),
    s = n(383501),
    a = n(927813),
    o = n(487329),
    l = n(601900),
    u = n(548370);
let c = 20 * a.A.Millis.SECOND,
    d = {
        getActiveErrors: () => {
            let e = s.A.getRTCConnection();
            if (null == e) return null;
            let t = e.getMediaEngineConnectionId();
            if (null == t || !i.Ay.isVideoEnabled()) return null;
            let n = s.A.getLastNonZeroRemoteVideoSinkWantsTime();
            if ((null != n && performance.now() - n < c) || !e.hasActiveRemoteWants()) return null;
            let a = (0, u.xA)(t, r.default.getId());
            return null == a
                ? null
                : a.short.frameRate < 10 || a.long.frameRate < 10
                  ? [{ type: o.iy.CAMERA_SEND_LOW_FPS, userId: r.default.getId(), ...(0, l.jY)() }]
                  : void 0;
        },
        makeErrorContextKey: (e) => `${e.mediaSessionId}`,
    };
