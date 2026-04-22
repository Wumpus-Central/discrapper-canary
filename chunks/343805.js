"use strict";
n.d(t, { S: () => u });
var r = n(652896),
    i = n(616356),
    s = n(162605),
    a = n(487329),
    o = n(601900),
    l = n(548370);
let u = {
    getActiveErrors: () => {
        let e = i.A.getCurrentUserActiveStream();
        if (null == e || 0 === i.A.getViewerIds(e).length) return null;
        let t = s.A.getRTCConnection((0, r._z)(e))?.getMediaEngineConnectionId();
        if (null == t) return null;
        let n = (0, l.xA)(t, e.ownerId);
        return null == n
            ? null
            : 100 * n.short.packetLossRate > 10 || 100 * n.long.packetLossRate > 10
              ? [{ type: a.iy.STREAM_SEND_HIGH_PACKET_LOSS, ...(0, o.id)((0, r._z)(e)) }]
              : void 0;
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
