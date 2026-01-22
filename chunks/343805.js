n.d(t, {
    S: () => f,
});
var r = n(652896),
    i = n(616356),
    a = n(162605),
    s = n(487329),
    o = n(601900),
    l = n(548370);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = 10,
    f = {
        getActiveErrors: () => {
            var e;
            let t = i.A.getCurrentUserActiveStream();
            if (null == t || 0 === i.A.getViewerIds(t).length) return null;
            let n = null == (e = a.A.getRTCConnection((0, r._z)(t))) ? void 0 : e.getMediaEngineConnectionId();
            if (null == n) return null;
            let c = (0, l.xA)(n, t.ownerId);
            return null == c
                ? null
                : 100 * c.short.packetLossRate > d || 100 * c.long.packetLossRate > d
                  ? [
                        u(
                            {
                                type: s.iy.STREAM_SEND_HIGH_PACKET_LOSS,
                            },
                            (0, o.id)((0, r._z)(t)),
                        ),
                    ]
                  : void 0;
        },
        makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
    };
