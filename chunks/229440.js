"use strict";
n.d(t, { T: () => d }), n(321073);
var r = n(652896),
    i = n(616356),
    a = n(961350),
    s = n(162605),
    o = n(709710),
    l = n(601900),
    u = n(548370);
let c = 10,
    d = {
        getActiveErrors: () =>
            (0, u.D$)()
                ? i.A.getAllActiveStreams().reduce((e, t) => {
                      let n = s.A.getRTCConnection((0, r._z)(t))?.getMediaEngineConnectionId();
                      if (null == n || t.ownerId === a.default.getId()) return e;
                      let i = (0, u.xA)(n, t.ownerId);
                      return (
                          null == i ||
                              ((100 * i.short.packetLossRate > c || 100 * i.long.packetLossRate > c) &&
                                  e.push({ type: o.iy.STREAM_VIEW_HIGH_PACKET_LOSS, ...(0, l.id)((0, r._z)(t)) })),
                          e
                      );
                  }, [])
                : null,
        makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
    };
