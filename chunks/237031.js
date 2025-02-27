r.d(t, {
    T: () => s,
    v: () => c
});
var n = r(200651);
r(192379);
var l = r(481060),
    i = r(82856);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let o = 'collectibles shop product details modal',
    s = (e) => {
        let { product: t, category: s, shouldCheckoutWithOrbs: d, analyticsSource: u, analyticsLocations: p, returnRef: f, tab: h } = e;
        d && (0, i.S6)(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await r.e('2026').then(r.bind(r, 702370));
                    return (r) => {
                        var l, i;
                        return (0, n.jsx)(
                            e,
                            ((l = a({}, r)),
                            (i = i =
                                {
                                    product: t,
                                    category: s,
                                    shouldCheckoutWithOrbs: d,
                                    analyticsSource: u,
                                    analyticsLocations: p,
                                    returnRef: f,
                                    tab: h
                                }),
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
                            l)
                        );
                    };
                },
                a(
                    { modalKey: o },
                    d
                        ? {
                              onCloseRequest() {
                                  c(), (0, i.vp)();
                              }
                          }
                        : {}
                )
            );
    },
    c = () => {
        (0, l.Mr3)(o);
    };
