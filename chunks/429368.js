(r.d(t, {
    $: () => c,
    o: () => s
}),
    r(388685));
var n = r(94171),
    a = r(362383),
    l = r(979554);
let i = (0, a.F)(() => ({ selectionStates: new Map() }), n.X),
    o = () => ({ selectedVariantIndex: 0 }),
    s = (e, t) => {
        var r, n, a, o;
        let s = i();
        return (null == e ? void 0 : e.type) !== l.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (o = null != (a = null == (r = s.selectionStates.get(e.storeListingId)) ? void 0 : r.selectedVariantIndex) ? a : null == (n = e.variants) ? void 0 : n.findIndex((e) => !t.has(e.skuId))) ? o : 0);
    },
    c = (e, t) => {
        i.setState((r) => {
            var n, a, l;
            let i = null != (n = r.selectionStates.get(e.storeListingId)) ? n : o();
            return {
                selectionStates: new Map(r.selectionStates).set(
                    e.storeListingId,
                    ((a = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    ((n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n));
                                }));
                        }
                        return e;
                    })({}, i)),
                    (l = l = { selectedVariantIndex: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    a)
                )
            };
        });
    };
