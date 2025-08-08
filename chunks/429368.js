n.d(t, {
    $: () => c,
    o: () => s,
}),
    n(388685);
var r = n(94171),
    l = n(362383),
    a = n(979554);
let i = (0, l.F)(() => ({ selectionStates: new Map() }), r.X),
    o = () => ({ selectedVariantIndex: 0 }),
    s = (e, t) => {
        var n, r, l, o;
        let s = i();
        return (null == e ? void 0 : e.type) !== a.Z.VARIANTS_GROUP
            ? 0
            : Math.max(
                  0,
                  null !=
                      (o =
                          null !=
                          (l = null == (n = s.selectionStates.get(e.storeListingId)) ? void 0 : n.selectedVariantIndex)
                              ? l
                              : null == (r = e.variants)
                                ? void 0
                                : r.findIndex((e) => !t.has(e.skuId)))
                      ? o
                      : 0,
              );
    },
    c = (e, t) => {
        i.setState((n) => {
            var r, l, a;
            let i = null != (r = n.selectionStates.get(e.storeListingId)) ? r : o();
            return {
                selectionStates: new Map(n.selectionStates).set(
                    e.storeListingId,
                    ((l = (function (e) {
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
                    })({}, i)),
                    (a = a = { selectedVariantIndex: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    l),
                ),
            };
        });
    };
