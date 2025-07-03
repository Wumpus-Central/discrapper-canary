n.d(t, {
    q: () => u,
    r: () => c
});
var r = n(255367),
    i = n(772848),
    l = n(481060),
    o = n(396639),
    s = n(981631);
let a = 'orb-checkout-payment-modal-key',
    c = () => (0, l.VXO)(a),
    u = (e) => {
        var { skuId: t, analyticsLocations: c = [], analyticsSourceLocation: u, onCloseCallback: d, onCheckoutSuccess: h } = e,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(e, ['skuId', 'analyticsLocations', 'analyticsSourceLocation', 'onCloseCallback', 'onCheckoutSuccess']);
        let f = !1,
            g = (0, i.Z)();
        return (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 396639));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })(
                            {
                                skuId: t,
                                analyticsLocations: c,
                                analyticsSourceLocation: u,
                                onCheckoutSuccess: (e) => {
                                    ((f = !0), h(e));
                                }
                            },
                            p,
                            n
                        )),
                        (l = l = { loadId: g }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i)
                    );
                };
            },
            {
                onCloseCallback: d,
                onCloseRequest() {
                    (f ||
                        (0, o._Y)(s.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: g,
                            skuId: t,
                            analyticsLocations: c,
                            analyticsSourceLocation: u
                        }),
                        (0, l.Mr3)(a));
                },
                modalKey: a
            }
        );
    };
