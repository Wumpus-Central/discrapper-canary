n.d(t, { O: () => f });
var r = n(569545),
    i = n(199902),
    a = n(959457),
    o = n(458725),
    s = n(442741),
    l = n(150457);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = 10,
    f = {
        getActiveErrors: () => {
            var e;
            let t = i.Z.getCurrentUserActiveStream();
            if (null == t || 0 === i.Z.getViewerIds(t).length) return null;
            let n = null == (e = a.Z.getRTCConnection((0, r.V9)(t))) ? void 0 : e.getMediaEngineConnectionId();
            if (null == n) return null;
            let c = (0, l.hj)(n, t.ownerId);
            return null == c ? null : 100 * c.short.packetLossRate > d || 100 * c.long.packetLossRate > d ? [u({ type: o.u.STREAM_SEND_HIGH_PACKET_LOSS }, (0, s.rT)((0, r.V9)(t)))] : void 0;
        },
        makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
    };
