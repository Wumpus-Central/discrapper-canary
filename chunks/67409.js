r.d(t, { S: () => l });
var n = r(979554);
let l = (e) => {
    var t, r, l;
    let { product: i, selectedVariantIndex: a } = e;
    return i.type === n.Z.VARIANTS_GROUP && null != a && null !== (l = null === (r = i.variants) || void 0 === r ? void 0 : null === (t = r[a]) || void 0 === t ? void 0 : t.skuId) && void 0 !== l ? l : i.skuId;
};
