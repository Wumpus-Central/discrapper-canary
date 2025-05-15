n.d(t, { B: () => _ }), n(539854);
var r = n(569545),
    i = n(199902),
    a = n(314897),
    o = n(959457),
    s = n(458725),
    l = n(442741),
    c = n(150457);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = 10,
    _ = {
        getActiveErrors: () =>
            (0, c.LN)()
                ? i.Z.getAllActiveStreams().reduce((e, t) => {
                      var n;
                      let i = null == (n = o.Z.getRTCConnection((0, r.V9)(t))) ? void 0 : n.getMediaEngineConnectionId();
                      if (null == i || t.ownerId === a.default.getId()) return e;
                      let u = (0, c.hj)(i, t.ownerId);
                      return null == u || ((100 * u.short.packetLossRate > f || 100 * u.long.packetLossRate > f) && e.push(d({ type: s.u.STREAM_VIEW_HIGH_PACKET_LOSS }, (0, l.rT)((0, r.V9)(t))))), e;
                  }, [])
                : null,
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    };
