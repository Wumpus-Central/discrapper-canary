n.d(t, { A: () => s });
var i = n(354328),
    l = n(747198);
function s(e, t) {
    let n = e?.paymentGateway,
        s = (0, i.A)("shop_disable_cache"),
        r = (0, i.A)("shop_include_unpublished");
    return (0, l.i)({ noCache: s, includeUnpublished: r, paymentGateway: n, logPerf: e?.logPerf }, void 0, t);
}
