n.d(t, {
    q: () => d,
    r: () => u
});
var r = n(200651),
    i = n(772848),
    l = n(481060),
    o = n(82856),
    s = n(396639),
    a = n(981631);
let c = 'orb-checkout-payment-modal-key',
    u = () => (0, l.VXO)(c),
    d = (e) => {
        var { skuId: t, analyticsLocations: u = [], analyticsSourceLocation: d, onCloseCallback: h, onCheckoutSuccess: p } = e,
            f = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['skuId', 'analyticsLocations', 'analyticsSourceLocation', 'onCloseCallback', 'onCheckoutSuccess']);
        let g = !1,
            m = (0, i.Z)();
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
                                    (g = !0), p(e);
                                }
                            },
                            f,
                            n
                        )),
                        (l = l = { loadId: m }),
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
                onCloseCallback: h,
                onCloseRequest() {
                    g ||
                        (0, s._Y)(a.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: m,
                            skuId: t,
                            analyticsLocations: u,
                            analyticsSourceLocation: d
                        }),
                        (0, o.vp)(),
                        (0, l.Mr3)(c);
                },
                modalKey: c
            }
        );
    };
