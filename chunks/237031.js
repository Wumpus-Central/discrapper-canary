i.d(t, {
    T: () => s,
    v: () => a
});
var r = i(255367);
i(73800);
var l = i(481060);
let n = 'collectibles shop product details modal',
    s = (e) => {
        let { product: t, category: s, shouldCheckoutWithOrbs: a, analyticsSource: o, analyticsLocations: c, returnRef: d, tab: u } = e;
        (0, l.ZDy)(
            async () => {
                let { default: e } = await i.e('2026').then(i.bind(i, 702370));
                return (i) => {
                    var l, n;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(i);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = i[t]),
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
                        })({}, i)),
                        (n = n =
                            {
                                product: t,
                                category: s,
                                shouldCheckoutWithOrbs: a,
                                analyticsSource: o,
                                analyticsLocations: c,
                                returnRef: d,
                                tab: u
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, r);
                                  }
                                  return i;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        l)
                    );
                };
            },
            { modalKey: n }
        );
    },
    a = () => {
        (0, l.Mr3)(n);
    };
