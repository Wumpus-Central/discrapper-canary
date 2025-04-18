n.d(t, { Z: () => a });
var r = n(580747),
    i = n(479801);
function a(e) {
    let t = null == e ? void 0 : e.paymentGateway,
        n = (0, r.Z)('shop_disable_cache'),
        a = (0, r.Z)('shop_include_unpublished');
    return (0, i.e)({
        noCache: n,
        includeUnpublished: a,
        paymentGateway: t,
        includeBundles: !0
    });
}
