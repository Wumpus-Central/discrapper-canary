n.d(t, {
    Q: () => u,
    n: () => d,
}),
    n(896048);
var r = n(942381),
    i = n(265690),
    l = n(575593),
    a = n(311907),
    s = n(4227),
    o = n(841702);
let c = (0, i.h)(() => ({ selectionStates: new Map() }), r.x),
    u = (e) => {
        var t, n;
        (0, o.b5)();
        let r = (0, a.bG)([s.A], () => s.A.purchases),
            i = c((t) => {
                var n;
                return (null == e ? void 0 : e.type) !== l.R.VARIANTS_GROUP
                    ? 0
                    : null == (n = t.selectionStates.get(e.storeListingId))
                      ? void 0
                      : n.selectedVariantIndex;
            });
        return null != i
            ? Math.max(0, i)
            : Math.max(
                  0,
                  null != (t = null == e || null == (n = e.variants) ? void 0 : n.findIndex((e) => !r.has(e.skuId)))
                      ? t
                      : 0,
              );
    },
    d = (e, t) => {
        c.setState((n) => {
            var r, i, l;
            let a = null != (r = n.selectionStates.get(e.storeListingId)) ? r : { selectedVariantIndex: 0 };
            return {
                selectionStates: new Map(n.selectionStates).set(
                    e.storeListingId,
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
                    })({}, a)),
                    (l = l = { selectedVariantIndex: t }),
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
                ),
            };
        });
    };
