"use strict";
n.d(t, { T: () => d }), n(321073);
var r = n(652896),
    i = n(616356),
    s = n(961350),
    a = n(162605),
    o = n(487329),
    l = n(601900),
    u = n(548370);
let d = {
    getActiveErrors: () =>
        (0, u.D$)()
            ? i.A.getAllActiveStreams().reduce((e, t) => {
                  let n = a.A.getRTCConnection((0, r._z)(t))?.getMediaEngineConnectionId();
                  if (null == n || t.ownerId === s.default.getId()) return e;
                  let i = (0, u.xA)(n, t.ownerId);
                  return (
                      null == i ||
                          ((100 * i.short.packetLossRate > 10 || 100 * i.long.packetLossRate > 10) &&
                              e.push({ type: o.iy.STREAM_VIEW_HIGH_PACKET_LOSS, ...(0, l.id)((0, r._z)(t)) })),
                      e
                  );
              }, [])
            : null,
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
