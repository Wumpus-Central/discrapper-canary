a.d(e, { Y: () => l });
var n = a(575593);
let l = (t) => {
    let { product: e, selectedVariantIndex: a } = t;
    return e.type === n.R.VARIANTS_GROUP && null != a ? (e.variants?.[a]?.skuId ?? e.skuId) : e.skuId;
};
