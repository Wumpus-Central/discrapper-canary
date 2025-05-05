n.d(t, {
    T: () => s,
    v: () => c
});
var r = n(255367);
n(73800);
var l = n(481060),
    a = n(82856);
function i(e) {
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
}
let o = 'collectibles shop product details modal',
    s = (e) => {
        let { product: t, category: s, shouldCheckoutWithOrbs: u, analyticsSource: d, analyticsLocations: b, returnRef: p, tab: f } = e;
        u && (0, a.S6)(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                    return (n) => {
                        var l, a;
                        return (0, r.jsx)(
                            e,
                            ((l = i({}, n)),
                            (a = a =
                                {
                                    product: t,
                                    category: s,
                                    shouldCheckoutWithOrbs: u,
                                    analyticsSource: d,
                                    analyticsLocations: b,
                                    returnRef: p,
                                    tab: f
                                }),
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
                            l)
                        );
                    };
                },
                i(
                    { modalKey: o },
                    u
                        ? {
                              onCloseRequest() {
                                  c(), (0, a.vp)();
                              }
                          }
                        : {}
                )
            );
    },
    c = () => {
        (0, l.Mr3)(o);
    };
