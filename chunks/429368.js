r.d(n, {
    $: function () {
        return d;
    },
    o: function () {
        return c;
    }
});
var i = r(47120);
var a = r(232713),
    o = r(65400),
    s = r(979554);
let l = (0, o.F)(() => ({ selectionStates: new Map() }), a.X),
    u = () => ({ selectedVariantIndex: 0 }),
    c = (e, n) => {
        var r, i, a, o;
        let u = l();
        return (null == e ? void 0 : e.type) !== s.Z.VARIANTS_GROUP ? 0 : Math.max(0, null !== (o = null !== (a = null === (r = u.selectionStates.get(e.storeListingId)) || void 0 === r ? void 0 : r.selectedVariantIndex) && void 0 !== a ? a : null === (i = e.variants) || void 0 === i ? void 0 : i.findIndex((e) => !n.has(e.skuId))) && void 0 !== o ? o : 0);
    },
    d = (e, n) => {
        l.setState((r) => {
            var i;
            let a = null !== (i = r.selectionStates.get(e.storeListingId)) && void 0 !== i ? i : u();
            return {
                selectionStates: new Map(r.selectionStates).set(e.storeListingId, {
                    ...a,
                    selectedVariantIndex: n
                })
            };
        });
    };
