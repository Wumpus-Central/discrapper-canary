n.d(t, {
    i: () => u,
});
var r = n(734057),
    i = n(430452),
    a = n(383501),
    s = n(487329),
    o = n(601900);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
    getActiveErrors: (e) => {
        let { voiceChannelId: t, voiceState: n } = e,
            l = r.A.getChannel(t),
            u = (null == l ? void 0 : l.isGuildStageVoice()) && (null == n ? void 0 : n.suppress),
            d = a.A.getMediaSessionId();
        if (null != l && null != d && !1 === i.A.getInputDetected() && !u && !i.A.isSelfMute())
            return [
                c(
                    {
                        type: s.iy.NO_AUDIO_INPUT_DETECTED,
                    },
                    (0, o.jY)(),
                ),
            ];
    },
    makeErrorContextKey: (e) => "".concat(e.mediaSessionId, ":").concat(e.audioInputDeviceName),
};
