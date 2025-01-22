r.d(n, {
    W: function () {
        return o;
    }
});
var i = r(979554),
    a = r(597688);
let o = (e, n) => {
    var r, o, s;
    return e.type === i.Z.VARIANTS_GROUP && null != n && null !== (s = a.Z.getProduct(null === (o = e.variants) || void 0 === o ? void 0 : null === (r = o[n]) || void 0 === r ? void 0 : r.skuId)) && void 0 !== s ? s : e;
};
