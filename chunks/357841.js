n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060);
let s = {
    open: function (e, t) {
        (0, i.ZDy)(async () => {
            let { default: i } = await n.e('37880').then(n.bind(n, 897511));
            return (n) =>
                (0, r.jsx)(
                    i,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            payment: e,
                            paymentSource: t
                        },
                        n
                    )
                );
        });
    }
};
