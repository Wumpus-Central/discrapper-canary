n.d(t, {
    A: () => a,
});
var r = n(354328),
    i = n(747198);

function a(e, t) {
    let n = null == e ? void 0 : e.paymentGateway,
        a = (0, r.A)("shop_disable_cache"),
        s = (0, r.A)("shop_include_unpublished");
    return (0, i.i)(
        {
            noCache: a,
            includeUnpublished: s,
            paymentGateway: n,
            includeBundles: !0,
            logPerf: null == e ? void 0 : e.logPerf,
        },
        void 0,
        t,
    );
}
