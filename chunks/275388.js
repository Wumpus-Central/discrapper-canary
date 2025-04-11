n.d(t, {
    q: () => d,
    r: () => u
});
var r = n(200651),
    i = n(772848),
    o = n(481060),
    l = n(82856),
    s = n(396639),
    a = n(981631);
let c = 'orb-checkout-payment-modal-key',
    u = () => (0, o.VXO)(c),
    d = (e) => {
        var { skuId: t, analyticsLocations: u = [], analyticsSourceLocation: d, onCloseCallback: p, onCheckoutSuccess: h } = e,
            _ = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['skuId', 'analyticsLocations', 'analyticsSourceLocation', 'onCloseCallback', 'onCheckoutSuccess']);
        let f = !1,
            m = (0, i.Z)();
        return (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 396639));
                return (n) => {
                    var i, o;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                                skuId: t,
                                analyticsLocations: u,
                                analyticsSourceLocation: d,
                                onCheckoutSuccess: (e) => {
                                    (f = !0), h(e);
                                }
                            },
                            _,
                            n
                        )),
                        (o = o = { loadId: m }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        i)
                    );
                };
            },
            {
                onCloseCallback: p,
                onCloseRequest() {
                    f ||
                        (0, s._Y)(a.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: m,
                            skuId: t,
                            analyticsLocations: u,
                            analyticsSourceLocation: d
                        }),
                        (0, l.vp)(),
                        (0, o.Mr3)(c);
                },
                modalKey: c
            }
        );
    };
