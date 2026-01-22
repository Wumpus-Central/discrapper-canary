n.d(t, { h: () => u });
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
            d = 0 === Object.keys(i.A.getInputDevices()).length,
            f = a.A.getMediaSessionId();
        if (d && null != l && null != f && !u) return [c({ type: s.iy.NO_INPUT_DEVICES }, (0, o.jY)())];
    },
    makeErrorContextKey: (e) => "".concat(e.mediaSessionId),
};
