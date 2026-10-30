l.d(t, { A: () => c });
var n = l(582128),
    a = l(17928),
    i = l(350172),
    r = l(730202),
    s = l(295586),
    o = l(510801),
    u = l(682301);
function c(e) {
    let { includeUnpublished: t = !1, includePricing: l = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = e ?? "";
    n.useEffect(() => {
        "" !== c && s.p.requestCollections([c], { includeUnpublished: t, includePricing: l });
    }, [c, t, l]);
    let { collection: d, fetchState: E } = (0, a.cf)(
            [r.A],
            () => ({ collection: r.A.getCollection(c), fetchState: r.A.getFetchState(c) }),
            [c],
        ),
        p = (0, u.Hd)(c, E),
        A = n.useMemo(() => (null != d ? o.A.fromStorefrontCollectionRecord(d) : null), [d]),
        f = n.useMemo(() => ("error" === E || p ? "error" : null != A ? "ready" : "loading"), [E, p, A]);
    return {
        category: A,
        state: f,
        retry: n.useCallback(() => {
            "" !== c &&
                (0, i._v)({
                    collectionIds: [c],
                    includeUnpublishedCollections: t,
                    includeUnpublishedProducts: t,
                    includePricing: l,
                    ignoreCache: !0,
                });
        }, [c, t, l]),
    };
}
