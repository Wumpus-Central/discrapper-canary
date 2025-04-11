n.d(t, { Z: () => d });
var r = n(200651),
    i = n(512722),
    o = n.n(i),
    a = n(481060);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {
    openGameProfileModal: function (e) {
        let { applicationId: t, gameProfileModalChecks: i, source: s, sourceUserId: c, appContext: d } = e;
        o()(i.shouldOpenGameProfile, 'Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?'),
            o()(i.applicationId === t, 'Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?'),
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await n.e('89311').then(n.bind(n, 644941));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            u(
                                l(
                                    {
                                        applicationId: t,
                                        source: s,
                                        sourceUserId: c
                                    },
                                    n
                                ),
                                { appContext: d }
                            )
                        );
                },
                { contextKey: null != d ? (0, a.VnL)(d) : void 0 }
            );
    }
};
