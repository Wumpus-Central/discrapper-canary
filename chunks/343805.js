"use strict";
n.d(t, { S: () => c });
var r = n(652896),
    i = n(616356),
    a = n(162605),
    s = n(709710),
    o = n(601900),
    l = n(548370);
let u = 10,
    c = {
        getActiveErrors: () => {
            let e = i.A.getCurrentUserActiveStream();
            if (null == e || 0 === i.A.getViewerIds(e).length) return null;
            let t = a.A.getRTCConnection((0, r._z)(e))?.getMediaEngineConnectionId();
            if (null == t) return null;
            let n = (0, l.xA)(t, e.ownerId);
            return null == n
                ? null
                : 100 * n.short.packetLossRate > u || 100 * n.long.packetLossRate > u
                  ? [{ type: s.iy.STREAM_SEND_HIGH_PACKET_LOSS, ...(0, o.id)((0, r._z)(e)) }]
                  : void 0;
        },
        makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
    };
