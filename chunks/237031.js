n.d(t, {
    T: () => i,
    v: () => a
});
var r = n(255367);
n(73800);
var l = n(481060);
let o = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, shouldCheckoutWithOrbs: a, analyticsSource: s, analyticsLocations: c, returnRef: u, tab: d } = e;
        (0, l.ZDy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) => {
                    var l, o;
                    return (0, r.jsx)(
                        e,
                        ((l = (function (e) {
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
                        })({}, n)),
                        (o = o =
                            {
                                product: t,
                                category: i,
                                shouldCheckoutWithOrbs: a,
                                analyticsSource: s,
                                analyticsLocations: c,
                                returnRef: u,
                                tab: d
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l)
                    );
                };
            },
            { modalKey: o }
        );
    },
    a = () => {
        (0, l.Mr3)(o);
    };
