n.d(t, { E: () => p });
var r = n(450109),
    i = n(131951),
    a = n(19780),
    o = n(70956),
    s = n(458725),
    l = n(442741);
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
let d = 30,
    f = 10 * o.Z.Millis.SECOND,
    _ = 30,
    p = {
        getActiveErrors: () => {
            var e, t, n, o, c, p;
            if ((null != (c = null == (e = a.Z.getRTCConnection()) ? void 0 : e.getDurationSeconds()) ? c : 0) < d || performance.now() - i.Z.getLastAudioInputDeviceChangeTimestamp() < f) return;
            let h = null != (p = null == (n = r.Z.getConnectionStats(null == (o = a.Z.getRTCConnection()) ? void 0 : o.getMediaEngineConnectionId())) || null == (t = n.stats.rtp.outbound.find((e) => 'audio' === e.type)) ? void 0 : t.sampleRateMismatchPercent) ? p : 0;
            if (Math.abs(h) > _)
                return [
                    u(
                        {
                            type: s.u.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                            audioCaptureSampleRateMismatchPercent: h
                        },
                        (0, l.Y9)()
                    )
                ];
        },
        makeErrorContextKey: (e) => ''.concat(e.mediaSessionId, ':').concat(e.audioInputDeviceName)
    };
