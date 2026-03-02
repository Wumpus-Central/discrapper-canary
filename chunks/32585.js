"use strict";
a.d(t, { A: () => o });
var l = a(64700),
    r = a(311907),
    n = a(475743),
    s = a(828596),
    i = a(124338);
function o(e) {
    let {
            collectionId: t,
            includeUnpublishedProducts: a = !1,
            includeUnpublishedCollection: o = !1,
            includePricing: d = !1,
            ignoreCache: c = !1,
        } = e,
        [u, x, h] = (0, r.yK)([i.A], () => [i.A.getCollection(t), i.A.isFetching(t), i.A.getApiError(t)]),
        m = (0, n.A)(a),
        b = (0, n.A)(o),
        p = (0, n.A)(d),
        g = (0, n.A)(c),
        f = !!t && !x && h?.status !== 404 && h?.status !== 429,
        j = null == u || a !== m || o !== b || d !== p || c !== g;
    return (
        (0, l.useEffect)(() => {
            f &&
                j &&
                (0, s.vZ)({
                    collectionId: t,
                    includeUnpublishedProducts: a,
                    includeUnpublishedCollection: o,
                    includePricing: d,
                    ignoreCache: c,
                });
        }, [f, j, t, a, o, d, c]),
        { collection: u, isFetching: x, apiError: h }
    );
}
