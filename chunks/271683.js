n.d(t, { A: () => l });
var r = n(627968),
    i = n(397927),
    a = n(136523);
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
function l(e) {
    let { channel: t, sourceAnalyticsLocations: s } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
            return (n) =>
                (0, r.jsx)(
                    e,
                    o(
                        {
                            channel: t,
                            sourceAnalyticsLocations: s,
                        },
                        n,
                    ),
                );
        },
        { modalKey: a.m },
    );
}
