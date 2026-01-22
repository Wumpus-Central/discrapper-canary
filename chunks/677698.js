n.d(t, { z: () => _ });
var r = n(961350),
    i = n(430452),
    a = n(383501),
    s = n(927813),
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
    p = 20 * s.A.Millis.SECOND,
    _ = {
        getActiveErrors: () => {
            let e = a.A.getRTCConnection();
            if (null == e) return null;
            let t = e.getMediaEngineConnectionId();
            if (null == t || !i.A.isVideoEnabled()) return null;
            let n = a.A.getLastNonZeroRemoteVideoSinkWantsTime();
            if ((null != n && performance.now() - n < p) || !e.hasActiveRemoteWants()) return null;
            let s = (0, c.xA)(t, r.default.getId());
            return null == s
                ? null
                : s.short.frameRate < f || s.long.frameRate < f
                  ? [
                        d(
                            {
                                type: o.iy.CAMERA_SEND_LOW_FPS,
                                userId: r.default.getId(),
                            },
                            (0, l.jY)(),
                        ),
                    ]
                  : void 0;
        },
        makeErrorContextKey: (e) => "".concat(e.mediaSessionId),
    };
