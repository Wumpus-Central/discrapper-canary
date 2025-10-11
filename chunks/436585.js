n.d(t, {
    U: () => o,
    g: () => i,
});
var a = n(951288),
    l = n(481060);
let r = "social-layer-storefront-product-details-modal",
    i = (e) => {
        let { skuId: t, applicationId: i, onClose: o } = e;
        (0, l.ZDy)(
            async () => {
                let { default: e } = await n.e("84802").then(n.bind(n, 250317));
                return (n) => {
                    var l, r;
                    return (0, a.jsx)(
                        e,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (r = r =
                            {
                                skuId: t,
                                applicationId: i,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        l),
                    );
                };
            },
            {
                modalKey: r,
                onCloseCallback: () => {
                    null == o || o();
                },
            },
        );
    };
function o() {
    (0, l.nfh)(r) && (0, l.Mr3)(r);
}
