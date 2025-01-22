r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(580747),
    a = r(479801);
function o(e) {
    let n = null == e ? void 0 : e.paymentGateway,
        r = (0, i.Z)('shop_disable_cache'),
        o = (0, i.Z)('shop_include_unpublished');
    return (0, a.e)({
        noCache: r,
        includeUnpublished: o,
        paymentGateway: n,
        includeBundles: !0
    });
}
