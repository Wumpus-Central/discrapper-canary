a.d(t, { A: () => d });
var l = a(64700),
    r = a(311907),
    n = a(475743),
    o = a(828596),
    s = a(124338);
function d(e) {
    let {
            collectionId: t,
            includeUnpublishedProducts: a = !1,
            includeUnpublishedCollection: d = !1,
            includePricing: i = !1,
            ignoreCache: c = !1,
        } = e,
        [x, u, h] = (0, r.yK)([s.A], () => [s.A.getCollection(t), s.A.isFetching(t), s.A.getApiError(t)]),
        m = (0, n.A)(a),
        b = (0, n.A)(d),
        p = (0, n.A)(i),
        g = (0, n.A)(c),
        f = !!t && !u && h?.status !== 404 && h?.status !== 429,
        j = null == x || a !== m || d !== b || i !== p || c !== g;
    return (
        (0, l.useEffect)(() => {
            f &&
                j &&
                (0, o.vZ)({
                    collectionId: t,
                    includeUnpublishedProducts: a,
                    includeUnpublishedCollection: d,
                    includePricing: i,
                    ignoreCache: c,
                });
        }, [f, j, t, a, d, i, c]),
        { collection: x, isFetching: u, apiError: h }
    );
}
