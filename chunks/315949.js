"use strict";
n.d(t, { A: () => s });
var r = n(354328),
    i = n(747198);
function s(e, t) {
    let n = e?.paymentGateway,
        s = (0, r.A)("shop_disable_cache"),
        a = (0, r.A)("shop_include_unpublished");
    return (0, i.i)({ noCache: s, includeUnpublished: a, paymentGateway: n, logPerf: e?.logPerf }, void 0, t);
}
