i.d(t, {
    M: () => c,
    t: () => a,
});
var n = i(627968);
i(64700);
var r = i(397927),
    l = i(4227),
    s = i(466459);
let o = "collectibles shop product details modal",
    a = (e) => {
        let {
            product: t,
            category: a,
            shouldCheckoutWithOrbs: c,
            analyticsSource: u,
            analyticsLocations: d,
            returnRef: p,
            tab: m,
            rentalDuration: g,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(l.A, t);
            if (!e) return;
        }
        (0, r.mMO)(
            async () => {
                let { default: e } = await Promise.all([i.e("21724"), i.e("1784")]).then(i.bind(i, 929400));
                return (i) => {
                    var r, l;
                    return (0, n.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(i);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(i).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = i[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, i)),
                        (l = l =
                            {
                                product: t,
                                category: a,
                                shouldCheckoutWithOrbs: c,
                                analyticsSource: u,
                                analyticsLocations: d,
                                returnRef: p,
                                tab: m,
                                rentalDuration: g,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var i = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      i.push.apply(i, n);
                                  }
                                  return i;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r),
                    );
                };
            },
            {
                modalKey: o,
            },
        );
    },
    c = () => {
        (0, r.OoC)(o);
    };
