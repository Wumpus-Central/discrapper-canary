"use strict";
n.d(t, { A: () => s });
var i = n(354328),
    r = n(747198);
function s(e, t) {
    let n = e?.paymentGateway,
        s = (0, i.A)("shop_disable_cache"),
        a = (0, i.A)("shop_include_unpublished");
    return (0, r.i)({ noCache: s, includeUnpublished: a, paymentGateway: n, logPerf: e?.logPerf }, void 0, t);
}
