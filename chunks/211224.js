n.d(t, { d: () => d });
var r = n(569545),
    i = n(199902),
    a = n(959457),
    o = n(458725),
    s = n(442741),
    l = n(981631);
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
let d = {
    getActiveErrors: () => (a.Z.getQuality() === l.IE4.BAD ? i.Z.getAllActiveStreams().map((e) => u({ type: o.u.STREAM_BAD_NETWORK_QUALITY }, (0, s.rT)((0, r.V9)(e)))) : null),
    makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
};
