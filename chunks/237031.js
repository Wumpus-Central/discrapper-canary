i.d(t, {
    T: () => n,
    v: () => o
});
var s = i(255367);
i(73800);
var l = i(481060);
let r = 'collectibles shop product details modal',
    n = (e) => {
        let { product: t, category: n, shouldCheckoutWithOrbs: o, analyticsSource: a, analyticsLocations: d, returnRef: C, tab: c } = e;
        (0, l.ZDy)(
            async () => {
                let { default: e } = await i.e('2026').then(i.bind(i, 702370));
                return (i) => {
                    var l, r;
                    return (0, s.jsx)(
                        e,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    s = Object.keys(i);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (s = s.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        })
                                    )),
                                    s.forEach(function (t) {
                                        var s;
                                        (s = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: s,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = s);
                                    });
                            }
                            return e;
                        })({}, i)),
                        (r = r =
                            {
                                product: t,
                                category: n,
                                shouldCheckoutWithOrbs: o,
                                analyticsSource: a,
                                analyticsLocations: d,
                                returnRef: C,
                                tab: c
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, s);
                                  }
                                  return i;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        l)
                    );
                };
            },
            { modalKey: r }
        );
    },
    o = () => {
        (0, l.Mr3)(r);
    };
