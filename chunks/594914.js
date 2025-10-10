n.d(t, { P: () => l });
var a = n(951288),
    r = n(481060);
function l(e, t) {
    let { isGift: l } = t;
    (0, r.ZDy)(
        async () => {
            let { default: t } = await n.e("45227").then(n.bind(n, 556266));
            return (n) =>
                (0, a.jsx)(
                    t,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            skuId: e.id,
                            applicationId: e.applicationId,
                            analyticsLocations: [],
                            isGift: l,
                        },
                        n,
                    ),
                );
        },
        { modalKey: "slayers-payment-modal" },
    );
}
