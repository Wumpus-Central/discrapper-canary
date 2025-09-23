n.d(t, {
    T: () => a,
    v: () => o,
});
var r = n(951288);
n(647438);
var i = n(481060);
let l = "collectibles shop product details modal",
    a = (e) => {
        let {
            product: t,
            category: a,
            shouldCheckoutWithOrbs: o,
            analyticsSource: s,
            analyticsLocations: c,
            returnRef: u,
            tab: d,
            variantType: p,
        } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e("2026").then(n.bind(n, 702370));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l =
                            {
                                product: t,
                                category: a,
                                shouldCheckoutWithOrbs: o,
                                analyticsSource: s,
                                analyticsLocations: c,
                                returnRef: u,
                                tab: d,
                                variantType: p,
                            }),
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
                        i),
                    );
                };
            },
            { modalKey: l },
        );
    },
    o = () => {
        (0, i.Mr3)(l);
    };
