"use strict";
n.d(t, { Y: () => i });
var r = n(575593);
let i = (e) => {
    let { product: t, selectedVariantIndex: n } = e;
    return t.type === r.R.VARIANTS_GROUP && null != n ? (t.variants?.[n]?.skuId ?? t.skuId) : t.skuId;
};
