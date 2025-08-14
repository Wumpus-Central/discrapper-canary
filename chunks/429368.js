r.d(t, {
    $: () => s,
    o: () => o,
}),
    r(388685);
var n = r(94171),
    l = r(362383),
    a = r(979554);
let i = (0, l.F)(() => ({ selectionStates: new Map() }), n.X),
    o = (e, t) => {
        var r, n, l, o;
        let s = i();
        return (null == e ? void 0 : e.type) !== a.Z.VARIANTS_GROUP
            ? 0
            : Math.max(
                  0,
                  null !=
                      (o =
                          null !=
                          (l = null == (r = s.selectionStates.get(e.storeListingId)) ? void 0 : r.selectedVariantIndex)
                              ? l
                              : null == (n = e.variants)
                                ? void 0
                                : n.findIndex((e) => !t.has(e.skuId)))
                      ? o
                      : 0,
              );
    },
    s = (e, t) => {
        i.setState((r) => {
            var n, l, a;
            let i = null != (n = r.selectionStates.get(e.storeListingId)) ? n : { selectedVariantIndex: 0 };
            return {
                selectionStates: new Map(r.selectionStates).set(
                    e.storeListingId,
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
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
                    (a = a = { selectedVariantIndex: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    l),
                ),
            };
        });
    };
