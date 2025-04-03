n.d(e, { Z: () => i });
var r = n(200651);
n(192379);
var s = n(481060);
function i(t) {
    (0, s.ZDy)(
        async () => {
            let { default: t } = await n.e('76815').then(n.bind(n, 336977));
            return (e) =>
                (0, r.jsx)(
                    t,
                    (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    })
                                )),
                                r.forEach(function (e) {
                                    var r;
                                    (r = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (t[e] = r);
                                });
                        }
                        return t;
                    })({}, e)
                );
        },
        {
            onCloseCallback: t,
            backdropStyle: s.fCB.BLUR
        }
    );
}
