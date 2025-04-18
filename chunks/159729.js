n.d(t, { y: () => l });
var r = n(314897),
    i = n(33039),
    a = n(458725);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
let l = {
    getActiveErrors: () =>
        Object.values(i.Z.getTimedoutVideos())
            .filter((e) => {
                let { userId: t, videoStreamId: n } = e;
                return r.default.getId() === t && null == n;
            })
            .map((e) => s({ type: a.u.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM }, e)),
    makeErrorContextKey: (e) => ''.concat(e.mediaContext, ':').concat(e.userId)
};
