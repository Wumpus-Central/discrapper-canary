n.d(t, { S: () => l });
var r = n(979554);
let l = (e) => {
    var t, n, l;
    let { product: i, selectedVariantIndex: s } = e;
    return i.type === r.Z.VARIANTS_GROUP && null != s && null !== (l = null === (n = i.variants) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t.skuId) && void 0 !== l ? l : i.skuId;
};
