n.d(t, { Z: () => o });
var r = n(580747),
    i = n(479801);
function o(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        o = (0, r.Z)('shop_disable_cache'),
        a = (0, r.Z)('shop_include_unpublished');
    return (0, i.e)(
        {
            noCache: o,
            includeUnpublished: a,
            paymentGateway: n,
            includeBundles: !0,
            logPerf: null == e ? void 0 : e.logPerf
        },
        void 0,
        t
    );
}
