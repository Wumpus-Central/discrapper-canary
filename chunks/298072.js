n.d(t, {
    Q: () => o,
    n: () => c,
}),
    n(896048);
var r = n(942381),
    i = n(265690),
    l = n(312852),
    a = n(623373);
let s = (0, i.h)(
        () => ({
            selectionStates: new Map(),
        }),
        r.x,
    ),
    o = (e) => {
        let t = (0, l.K)(e),
            n = s((t) => {
                var n;
                return null != e && (0, a.B1)(e)
                    ? null == (n = t.selectionStates.get(e.storeListingId))
                        ? void 0
                        : n.selectedVariantIndex
                    : null;
            });
        return null != n ? Math.max(0, n) : t;
    },
    c = (e, t) => {
        s.setState((n) => {
            var r, i, l;
            let a =
                null != (r = n.selectionStates.get(e.storeListingId))
                    ? r
                    : {
                          selectedVariantIndex: 0,
                      };
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
                    (l = l =
                        {
                            selectedVariantIndex: t,
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
                ),
            };
        });
    };
