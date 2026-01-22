n.d(t, { y: () => l });
var r = n(652896),
    i = n(487329),
    a = n(601900);
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
    getActiveErrors: (e) => {
        let { activeStreams: t } = e;
        return t
            .filter((e) => null != e.errorCode)
            .map((e) =>
                o(
                    {
                        type: i.iy.SCREENSHARE_OS_ERROR,
                        errorMessage: e.errorCode.toString(),
                    },
                    (0, a.id)((0, r._z)(e)),
                ),
            );
    },
    makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
};
