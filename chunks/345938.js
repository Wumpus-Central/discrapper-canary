n.d(t, {
    d: () => a,
});
var r = n(627968),
    i = n(397927),
    l = n(294454);
let a = (e) => {
    let { sku: t, guildId: a, source: s, analyticsLocations: o, analyticsContext: c } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("96758"), n.e("43622"), n.e("65787")]).then(n.bind(n, 763375));
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
                            sku: t,
                            guildId: a,
                            source: s,
                            analyticsLocations: o,
                            analyticsContext: c,
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
        {
            stackingBehavior: "stack",
            modalKey: l.aU,
        },
    );
};
