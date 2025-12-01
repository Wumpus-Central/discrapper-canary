n.d(t, { l: () => _ });
var r = n(314897),
    i = n(131951),
    a = n(19780),
    o = n(70956),
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
    p = 20 * o.Z.Millis.SECOND,
    _ = {
        getActiveErrors: () => {
            let e = a.Z.getRTCConnection();
            if (null == e) return null;
            let t = e.getMediaEngineConnectionId();
            if (null == t || !i.Z.isVideoEnabled()) return null;
            let n = a.Z.getLastNonZeroRemoteVideoSinkWantsTime();
            if ((null != n && performance.now() - n < p) || !e.hasActiveRemoteWants()) return null;
            let o = (0, c.hj)(t, r.default.getId());
            return null == o
                ? null
                : o.short.frameRate < f || o.long.frameRate < f
                  ? [
                        d(
                            {
                                type: s.u.CAMERA_SEND_LOW_FPS,
                                userId: r.default.getId(),
                            },
                            (0, l.Y9)(),
                        ),
                    ]
                  : void 0;
        },
        makeErrorContextKey: (e) => "".concat(e.mediaSessionId),
    };
