n.d(t, {
    $: () => _,
    o: () => f
}),
    n(47120);
var r = n(788347),
    i = n(372793),
    o = n(979554);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = (0, i.F)(() => ({ selectionStates: new Map() }), r.X),
    d = () => ({ selectedVariantIndex: 0 }),
    f = (e, t) => {
        var n, r, i, a;
        let s = u();
        return (null == e ? void 0 : e.type) !== o.Z.VARIANTS_GROUP ? 0 : Math.max(0, null != (a = null != (i = null == (n = s.selectionStates.get(e.storeListingId)) ? void 0 : n.selectedVariantIndex) ? i : null == (r = e.variants) ? void 0 : r.findIndex((e) => !t.has(e.skuId))) ? a : 0);
    },
    _ = (e, t) => {
        u.setState((n) => {
            var r;
            let i = null != (r = n.selectionStates.get(e.storeListingId)) ? r : d();
            return { selectionStates: new Map(n.selectionStates).set(e.storeListingId, c(s({}, i), { selectedVariantIndex: t })) };
        });
    };
