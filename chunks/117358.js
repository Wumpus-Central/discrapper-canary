n.d(t, { Z: () => l });
var r = n(200651),
    i = n(481060),
    o = n(339340);
function a(e, t, n) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e) {
    let { channel: t, sourceAnalyticsLocations: a } = e;
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
            return (n) =>
                (0, r.jsx)(
                    e,
                    s(
                        {
                            channel: t,
                            sourceAnalyticsLocations: a
                        },
                        n
                    )
                );
        },
        { modalKey: o.a }
    );
}
