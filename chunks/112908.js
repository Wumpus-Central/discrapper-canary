n.d(t, { R: () => u });
var r = n(162605),
    i = n(403362),
    a = n(487329),
    s = n(601900),
    o = n(652215);
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
    getActiveErrors: () =>
        r.A.getAllActiveStreamKeys()
            .map((e) =>
                r.A.getQuality(e) === o.bFR.BAD ? c({ type: a.iy.STREAM_BAD_NETWORK_QUALITY }, (0, s.id)(e)) : null,
            )
            .filter(i.Vq),
    makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
};
