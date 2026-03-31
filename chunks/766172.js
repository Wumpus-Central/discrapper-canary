n.d(t, { Y: () => a });
var r = n(575593);
let a = (e) => {
    let { product: t, selectedVariantIndex: n } = e;
    return t.type === r.R.VARIANTS_GROUP && null != n ? (t.variants?.[n]?.skuId ?? t.skuId) : t.skuId;
};
