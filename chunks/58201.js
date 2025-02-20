n.d(t, { W: () => o });
var r = n(979554),
    i = n(597688);
let o = (e, t) => {
    var n, o, a;
    return e.type === r.Z.VARIANTS_GROUP && null != t && null !== (a = i.Z.getProduct(null === (o = e.variants) || void 0 === o ? void 0 : null === (n = o[t]) || void 0 === n ? void 0 : n.skuId)) && void 0 !== a ? a : e;
};
