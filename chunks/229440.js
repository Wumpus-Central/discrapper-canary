n.d(t, {
    T: () => p,
}),
    n(321073);
var r = n(652896),
    i = n(616356),
    a = n(961350),
    s = n(162605),
    o = n(487329),
    l = n(601900),
    c = n(548370);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = 10,
    p = {
        getActiveErrors: () =>
            (0, c.D$)()
                ? i.A.getAllActiveStreams().reduce((e, t) => {
                      var n;
                      let i =
                          null == (n = s.A.getRTCConnection((0, r._z)(t))) ? void 0 : n.getMediaEngineConnectionId();
                      if (null == i || t.ownerId === a.default.getId()) return e;
                      let u = (0, c.xA)(i, t.ownerId);
                      return (
                          null == u ||
                              ((100 * u.short.packetLossRate > f || 100 * u.long.packetLossRate > f) &&
                                  e.push(
                                      d(
                                          {
                                              type: o.iy.STREAM_VIEW_HIGH_PACKET_LOSS,
                                          },
                                          (0, l.id)((0, r._z)(t)),
                                      ),
                                  )),
                          e
                      );
                  }, [])
                : null,
        makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
    };
