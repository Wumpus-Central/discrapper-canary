n.d(t, { A: () => i });
var r = n(354328),
    l = n(747198);
function i(e, t) {
    let n = e?.paymentGateway,
        i = (0, r.A)("shop_disable_cache"),
        a = (0, r.A)("shop_include_unpublished");
    return (0, l.i)({ noCache: i, includeUnpublished: a, paymentGateway: n, logPerf: e?.logPerf }, void 0, t);
}
