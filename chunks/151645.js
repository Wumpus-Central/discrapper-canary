"use strict";
l.d(t, { A: () => s });
var r = l(64700),
    a = l(311907),
    n = l(602823),
    i = l(16667);
let s = (e) => {
    let [t, l, s] = (0, a.yK)([i.A], () => [i.A.getProductForSku(e), i.A.isFetching(e), i.A.getApiError(e)]),
        o = null == t && !l && null == s;
    return (
        (0, r.useEffect)(() => {
            o && (0, n.x)(e);
        }, [o, e]),
        { product: t, isFetching: l, apiError: s }
    );
};
