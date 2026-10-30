l.d(t, { A: () => u });
var n = l(582128),
    a = l(17928),
    i = l(350172),
    r = l(730202),
    s = l(295586),
    o = l(510801),
    c = l(682301);
function u(e) {
    let { includeUnpublished: t = !1, includePricing: l = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = e ?? "";
    n.useEffect(() => {
        "" !== u && s.p.requestCollections([u], { includeUnpublished: t, includePricing: l });
    }, [u, t, l]);
    let { collection: d, fetchState: E } = (0, a.cf)(
            [r.A],
            () => ({ collection: r.A.getCollection(u), fetchState: r.A.getFetchState(u) }),
            [u],
        ),
        p = (0, c.Hd)(u, E),
        A = n.useMemo(() => (null != d ? o.A.fromStorefrontCollectionRecord(d) : null), [d]),
        f = n.useMemo(() => ("error" === E || p ? "error" : null != A ? "ready" : "loading"), [E, p, A]);
    return {
        category: A,
        state: f,
        retry: n.useCallback(() => {
            "" !== u &&
                (0, i._v)({
                    collectionIds: [u],
                    includeUnpublishedCollections: t,
                    includeUnpublishedProducts: t,
                    includePricing: l,
                    ignoreCache: !0,
                });
        }, [u, t, l]),
    };
}
