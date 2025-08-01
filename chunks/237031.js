r.d(t, {
    T: () => i,
    v: () => o
});
var n = r(255367);
r(73800);
var a = r(481060);
let l = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, shouldCheckoutWithOrbs: o, analyticsSource: s, analyticsLocations: c, returnRef: u, tab: d } = e;
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.all([r.e('25292'), r.e('31978'), r.e('40694'), r.e('78223'), r.e('60432')]).then(r.bind(r, 702370));
                return (r) => {
                    var a, l;
                    return (0, n.jsx)(
                        e,
                        ((a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
                            }
                            return e;
                        })({}, r)),
                        (l = l =
                            {
                                product: t,
                                category: i,
                                shouldCheckoutWithOrbs: o,
                                analyticsSource: s,
                                analyticsLocations: c,
                                returnRef: u,
                                tab: d
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        a)
                    );
                };
            },
            { modalKey: l }
        );
    },
    o = () => {
        (0, a.Mr3)(l);
    };
