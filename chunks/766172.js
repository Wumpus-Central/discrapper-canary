var r = n(575593);
n.d(
    t,
    {},
    {
        Y: function (e) {
            let { product: t, selectedVariantIndex: n } = e;
            return t.type === r.R.VARIANTS_GROUP && null != n ? (t.variants?.[n]?.skuId ?? t.skuId) : t.skuId;
        },
    },
);
