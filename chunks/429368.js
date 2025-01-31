n.d(t, {
    $: () => u,
    o: () => l
}),
    n(47120);
var i = n(232713),
    r = n(65400),
    a = n(979554);
let s = (0, r.F)(() => ({ selectionStates: new Map() }), i.X),
    o = () => ({ selectedVariantIndex: 0 }),
    l = (e, t) => {
        var n, i, r, o;
        let l = s();
        return (null == e ? void 0 : e.type) !== a.Z.VARIANTS_GROUP ? 0 : Math.max(0, null !== (o = null !== (r = null === (n = l.selectionStates.get(e.storeListingId)) || void 0 === n ? void 0 : n.selectedVariantIndex) && void 0 !== r ? r : null === (i = e.variants) || void 0 === i ? void 0 : i.findIndex((e) => !t.has(e.skuId))) && void 0 !== o ? o : 0);
    },
    u = (e, t) => {
        s.setState((n) => {
            var i;
            let r = null !== (i = n.selectionStates.get(e.storeListingId)) && void 0 !== i ? i : o();
            return {
                selectionStates: new Map(n.selectionStates).set(e.storeListingId, {
                    ...r,
                    selectedVariantIndex: t
                })
            };
        });
    };
