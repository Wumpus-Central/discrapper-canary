r.d(t, {
    qA: () => u,
    r9: () => c,
});
var n = r(951288),
    l = r(772848);
r(952265);
var i = r(481060),
    a = r(922987),
    o = r(981631);
r(602091);
let s = "orb-checkout-payment-modal-key",
    c = () => (0, i.VXO)(s),
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
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(e, ["skuId", "analyticsLocations", "analyticsSourceLocation", "onCloseCallback", "onCheckoutSuccess"]);
        let b = !1,
            h = (0, l.Z)();
        return (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(r.bind(r, 922987));
                return (r) => {
                    var l, i;
                    return (0, n.jsx)(
                        e,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
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
                            r,
                        )),
                        (i = i = { loadId: h }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        l),
                    );
                };
            },
            {
                onCloseCallback: d,
                onCloseRequest() {
                    b ||
                        (0, a._Y)(o.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: h,
                            skuId: t,
                            analyticsLocations: c,
                            analyticsSourceLocation: u,
                        }),
                        (0, i.Mr3)(s);
                },
                modalKey: s,
            },
        );
    };
