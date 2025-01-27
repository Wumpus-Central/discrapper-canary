n.d(t, {
    S: function () {
        return i;
    }
});
var r = n(979554);
let i = (e) => {
    var t, n, i;
    let { product: l, selectedVariantIndex: a } = e;
    return l.type === r.Z.VARIANTS_GROUP && null != a && null !== (i = null === (n = l.variants) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t.skuId) && void 0 !== i ? i : l.skuId;
};
