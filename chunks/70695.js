"use strict";
n.d(t, { U: () => p });
var r = n(313961),
    i = n(652896),
    s = n(616356),
    a = n(162605),
    o = n(927813),
    l = n(650338),
    u = n(487329),
    c = n(601900),
    d = n(548370),
    _ = n(652215);
let f = 20 * o.A.Millis.SECOND,
    p = {
        getActiveErrors: () => {
            let e = s.A.getCurrentUserActiveStream();
            if (null == e || e.state === _.XYD.PAUSED || 0 === s.A.getViewerIds(e).length) return null;
            let t = (0, i._z)(e),
                n = a.A.getRTCConnection(t);
            if (null == n) return null;
            let o = n.getMediaEngineConnectionId();
            if (null == o) return null;
            let p = a.A.getLastNonZeroRemoteVideoSinkWantsTime(t);
            if ((null != p && performance.now() - p < f) || !n.hasActiveRemoteWants()) return null;
            let h = r.A.getParticipant(e.channelId, (0, i._z)(e));
            if (null == h) return null;
            let E = (0, d.xA)(o, e.ownerId);
            if (null == E) return null;
            let m = (0, l.wz)(h);
            return null == m
                ? null
                : E.short.frameRate < (0, d.s1)(m.maxFrameRate) || E.long.frameRate < (0, d.s1)(m.maxFrameRate)
                  ? [{ type: u.iy.STREAM_SEND_LOW_FPS, ...(0, c.id)((0, i._z)(e)) }]
                  : null;
        },
        makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
    };
