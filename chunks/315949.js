n.d(t, { A: () => l });
var i = n(354328),
    r = n(747198);
function l(e, t) {
    let n = e?.paymentGateway,
        l = (0, i.A)("shop_disable_cache"),
        a = (0, i.A)("shop_include_unpublished");
    return (0, r.i)({ noCache: l, includeUnpublished: a, paymentGateway: n, logPerf: e?.logPerf }, void 0, t);
}
