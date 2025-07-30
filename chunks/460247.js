n.d(t, { N: () => l });
var r = n(569545),
    i = n(458725),
    a = n(442741);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            }));
    }
    return e;
}
let l = {
    getActiveErrors: (e) => {
        let { activeStreams: t } = e;
        return t
            .filter((e) => null != e.errorCode)
            .map((e) =>
                s(
                    {
                        type: i.u.SCREENSHARE_OS_ERROR,
                        errorMessage: e.errorCode.toString()
                    },
                    (0, a.rT)((0, r.V9)(e))
                )
            );
    },
    makeErrorContextKey: (e) => ''.concat(e.streamKey, ':').concat(e.mediaSessionId)
};
