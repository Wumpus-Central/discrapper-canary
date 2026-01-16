n.d(t, {
    $: () => d,
    o: () => u,
}),
    n(388685);
var r = n(782425),
    i = n(524550),
    l = n(979554),
    a = n(442837),
    o = n(1870),
    s = n(223143);
let c = (0, i.F)(() => ({ selectionStates: new Map() }), r.X),
    u = (e) => {
        var t, n;
        (0, s.QN)();
        let r = (0, a.e7)([o.Z], () => o.Z.purchases),
            i = c((t) => {
                var n;
                return (null == e ? void 0 : e.type) !== l.Z.VARIANTS_GROUP
                    ? 0
                    : null == (n = t.selectionStates.get(e.storeListingId))
                      ? void 0
                      : n.selectedVariantIndex;
            });
        return null != i
            ? Math.max(0, i)
            : Math.max(
                  0,
                  null != (n = null == e || null == (t = e.variants) ? void 0 : t.findIndex((e) => !r.has(e.skuId)))
                      ? n
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
