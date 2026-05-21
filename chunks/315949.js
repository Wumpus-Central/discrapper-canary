r.d(t, { A: () => n });
var s = r(354328),
    c = r(747198);
function n(e, t) {
    let r = e?.paymentGateway,
        n = (0, s.A)("shop_disable_cache"),
        u = (0, s.A)("shop_include_unpublished");
    return (0, c.i)({ noCache: n, includeUnpublished: u, paymentGateway: r, logPerf: e?.logPerf }, void 0, t);
}
