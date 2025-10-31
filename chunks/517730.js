n.d(t, { I: () => a });
var i = n(951288),
    r = n(481060);
let a = (e) => {
    let { sku: t, application: a } = e;
    (0, r.ZDy)(
        async () => {
            let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await n.e("21021").then(n.bind(n, 519193));
            return (n) => {
                var r, l;
                return (0, i.jsx)(
                    e,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, n)),
                    (l = l =
                        {
                            sku: t,
                            application: a,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    r),
                );
            };
        },
        { modalKey: "social-layer-storefront-item-claimed-successfully-modal" },
    );
};
