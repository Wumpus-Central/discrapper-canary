e.d(a, { Y: () => r });
var n = e(575593);
let r = (t) => {
    let { product: a, selectedVariantIndex: e } = t;
    return a.type === n.R.VARIANTS_GROUP && null != e ? (a.variants?.[e]?.skuId ?? a.skuId) : a.skuId;
};
