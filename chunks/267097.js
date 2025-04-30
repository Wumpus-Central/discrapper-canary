n.d(t, { Z: () => a });
var r = n(580747),
    i = n(479801);
function a(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        a = (0, r.Z)('shop_disable_cache'),
        o = (0, r.Z)('shop_include_unpublished');
    return (0, i.e)(
        {
            noCache: a,
            includeUnpublished: o,
            paymentGateway: n,
            includeBundles: !0,
            logPerf: null == e ? void 0 : e.logPerf
        },
        void 0,
        t
    );
}
