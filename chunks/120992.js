"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(635358),
    s = n(830382),
    a = n(354328),
    o = n(67480);
function l(e) {
    let { applicationId: t, skuIDs: n } = e,
        l = (0, a.A)("shop_include_unpublished");
    i.useEffect(() => {
        for (let e of n) o.A.isFetching(e) || null != o.A.get(e) || (0, s.EX)(t, e, r.g.VARIANTS_GROUP, l);
    }, [t, n, l]);
}
