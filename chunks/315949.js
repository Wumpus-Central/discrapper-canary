n.d(t, { A: () => a });
var i = n(354328),
    l = n(747198);
function a(e, t) {
    let n = e?.paymentGateway,
        a = (0, i.A)("shop_disable_cache"),
        r = (0, i.A)("shop_include_unpublished");
    return (0, l.i)({ noCache: a, includeUnpublished: r, paymentGateway: n, logPerf: e?.logPerf }, void 0, t);
}
