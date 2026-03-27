"use strict";
r.d(t, { Y: () => i });
var n = r(575593);
let i = (e) => {
    let { product: t, selectedVariantIndex: r } = e;
    return t.type === n.R.VARIANTS_GROUP && null != r ? (t.variants?.[r]?.skuId ?? t.skuId) : t.skuId;
};
