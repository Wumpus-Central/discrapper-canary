n.d(t, { l: () => f });
var r = n(314897),
    i = n(131951),
    a = n(19780),
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
            let t = null == (e = a.Z.getRTCConnection()) ? void 0 : e.getMediaEngineConnectionId();
            if (null == t || !i.Z.isVideoEnabled()) return null;
            let n = (0, l.hj)(t, r.default.getId());
            return null == n
                ? null
                : n.short.frameRate < d || n.long.frameRate < d
                  ? [
                        u(
                            {
                                type: o.u.CAMERA_SEND_LOW_FPS,
                                userId: r.default.getId()
                            },
                            (0, s.Y9)()
                        )
                    ]
                  : void 0;
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId)
    };
