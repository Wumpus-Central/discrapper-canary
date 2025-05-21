n.d(t, { d: () => u });
var r = n(959457),
    i = n(823379),
    o = n(458725),
    a = n(442741),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {
    getActiveErrors: () =>
        r.Z.getAllActiveStreamKeys()
            .map((e) => (r.Z.getQuality(e) === s.IE4.BAD ? c({ type: o.u.STREAM_BAD_NETWORK_QUALITY }, (0, a.rT)(e)) : null))
            .filter(i.lm),
    makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
};
