n.d(t, { x: () => a });
var l = n(54381),
    i = n(481060);
function a(e, t) {
    (0, i.ZDy)(async () => {
        let { default: i } = await n.e("22661").then(n.bind(n, 296289));
        return (n) =>
            (0, l.jsx)(
                i,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })(
                    {
                        guildId: e,
                        gameInstance: t,
                    },
                    n,
                ),
            );
    });
}
