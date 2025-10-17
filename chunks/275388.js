n.d(t, {
    qA: () => u,
    r9: () => c,
});
var r = n(951288),
    l = n(772848);
n(952265);
var a = n(481060),
    i = n(922987),
    o = n(981631);
n(602091);
let s = "orb-checkout-payment-modal-key",
    c = () => (0, a.VXO)(s),
    u = (e) => {
        var {
                skuId: t,
                analyticsLocations: c = [],
                analyticsSourceLocation: u,
                onCloseCallback: d,
                onCheckoutSuccess: p,
            } = e,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess"]);
        let b = !1,
            y = (0, l.Z)();
        return (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 922987));
                return (n) => {
                    var l, a;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                skuId: t,
                                analyticsLocations: c,
                                analyticsSourceLocation: u,
                                onCheckoutSuccess: (e) => {
                                    b || p(e), (b = !0);
                                },
                            },
                            f,
                            n,
                        )),
                        (a = a = { loadId: y }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        l),
                    );
                };
            },
            {
                onCloseCallback: d,
                onCloseRequest() {
                    b ||
                        (0, i._Y)(o.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: y,
                            skuId: t,
                            analyticsLocations: c,
                            analyticsSourceLocation: u,
                        }),
                        (0, a.Mr3)(s);
                },
                modalKey: s,
            },
        );
    };
