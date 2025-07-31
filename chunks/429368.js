(r.d(t, {
    $: () => c,
    o: () => s
}),
    r(388685));
var n = r(94171),
    l = r(362383),
    i = r(979554);
let a = (0, l.F)(() => ({ selectionStates: new Map() }), n.X),
    o = () => ({ selectedVariantIndex: 0 }),
    s = (e, t) => {
        var r, n, l, o;
        let s = a();
        return (null == e ? void 0 : e.type) !== i.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (o = null != (l = null == (r = s.selectionStates.get(e.storeListingId)) ? void 0 : r.selectedVariantIndex) ? l : null == (n = e.variants) ? void 0 : n.findIndex((e) => !t.has(e.skuId))) ? o : 0);
    },
    c = (e, t) => {
        a.setState((r) => {
            var n, l, i;
            let a = null != (n = r.selectionStates.get(e.storeListingId)) ? n : o();
            return {
                selectionStates: new Map(r.selectionStates).set(
                    e.storeListingId,
                    ((l = (function (e) {
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
                    })({}, a)),
                    (i = i = { selectedVariantIndex: t }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    l)
                )
            };
        });
    };
