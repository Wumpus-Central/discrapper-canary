n.d(t, { S: () => l });
var r = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: a, selectedVariantIndex: i } = e;
    return a.type === r.Z.VARIANTS_GROUP && null != i && null !== (l = null === (n = a.variants) || void 0 === n ? void 0 : null === (t = n[i]) || void 0 === t ? void 0 : t.skuId) && void 0 !== l ? l : a.skuId;
};
