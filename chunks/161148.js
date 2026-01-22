n.d(t, {
    H: () => l,
});
var r = n(961350),
    i = n(803301),
    a = n(487329);

function s(e, t, n) {
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

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = {
    getActiveErrors: () =>
        Object.values(i.A.getTimedoutVideos())
            .filter((e) => {
                let { userId: t, videoStreamId: n } = e;
                return r.default.getId() === t && null != n;
            })
            .map((e) =>
                o(
                    {
                        type: a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT,
                    },
                    e,
                ),
            ),
    makeErrorContextKey: (e) => "".concat(e.mediaContext, ":").concat(e.userId),
};
