n.d(t, { S: () => r });
var l = n(979554);
let r = (e) => {
    var t, n, r;
    let { product: i, selectedVariantIndex: s } = e;
    return i.type === l.Z.VARIANTS_GROUP && null != s && null !== (r = null === (n = i.variants) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t.skuId) && void 0 !== r ? r : i.skuId;
};
