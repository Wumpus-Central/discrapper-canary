r.d(t, {
    T: () => l,
    v: () => a
});
var n = r(255367);
r(73800);
var i = r(481060);
let o = 'collectibles shop product details modal',
    l = (e) => {
        let { product: t, category: l, shouldCheckoutWithOrbs: a, analyticsSource: s, analyticsLocations: c, returnRef: u, tab: d } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await r.e('2026').then(r.bind(r, 702370));
                return (r) => {
                    var i, o;
                    return (0, n.jsx)(
                        e,
                        ((i = (function (e) {
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
                        })({}, r)),
                        (o = o =
                            {
                                product: t,
                                category: l,
                                shouldCheckoutWithOrbs: a,
                                analyticsSource: s,
                                analyticsLocations: c,
                                returnRef: u,
                                tab: d
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        i)
                    );
                };
            },
            { modalKey: o }
        );
    },
    a = () => {
        (0, i.Mr3)(o);
    };
