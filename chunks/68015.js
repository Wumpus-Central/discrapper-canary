t.d(n, { x: () => i });
var l = t(951288),
    a = t(481060);
function i(e, n) {
    (0, a.ZDy)(async () => {
        let { default: a } = await t.e("22661").then(t.bind(t, 296289));
        return (t) =>
            (0, l.jsx)(
                a,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            l = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            l.forEach(function (n) {
                                var l;
                                (l = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = l);
                            });
                    }
                    return e;
                })(
                    {
                        guildId: e,
                        gameInstance: n,
                    },
                    t,
                ),
            );
    });
}
