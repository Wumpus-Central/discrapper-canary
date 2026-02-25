"use strict";
l.d(t, { A: () => o });
var r = l(64700),
    a = l(311907),
    n = l(475743),
    s = l(602823),
    i = l(16667);
let o = (e) => {
    let {
            collectionId: t,
            includeUnpublishedProducts: l = !1,
            includeUnpublishedCollection: o = !1,
            includePricing: d = !1,
            ignoreCache: c = !1,
        } = e,
        [u, h, m] = (0, a.yK)([i.A], () => [i.A.getCollection(t), i.A.isFetching(t), i.A.getApiError(t)]),
        x = (0, n.A)(l),
        b = (0, n.A)(o),
        p = (0, n.A)(d),
        g = (0, n.A)(c),
        f = !!t && !h && m?.status !== 404 && m?.status !== 429,
        j = null == u || l !== x || o !== b || d !== p || c !== g;
    return (
        (0, r.useEffect)(() => {
            f &&
                j &&
                (0, s.y)({
                    collectionId: t,
                    includeUnpublishedProducts: l,
                    includeUnpublishedCollection: o,
                    includePricing: d,
                    ignoreCache: c,
                });
        }, [f, j, t, l, o, d, c]),
        { collection: u, isFetching: h, apiError: m }
    );
};
