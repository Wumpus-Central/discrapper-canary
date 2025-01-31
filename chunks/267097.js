n.d(t, { Z: () => a });
var i = n(580747),
    r = n(479801);
function a(e) {
    let t = null == e ? void 0 : e.paymentGateway,
        n = (0, i.Z)('shop_disable_cache'),
        a = (0, i.Z)('shop_include_unpublished');
    return (0, r.e)({
        noCache: n,
        includeUnpublished: a,
        paymentGateway: t,
        includeBundles: !0
    });
}
