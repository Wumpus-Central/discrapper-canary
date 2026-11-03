l.d(t, { A: () => u });
var n = l(582128),
    a = l(17928),
    i = l(350172),
    s = l(730202),
    o = l(295586),
    r = l(510801),
    c = l(682301);
function u(e) {
    let { includeUnpublished: t = !1, includePricing: l = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = e ?? "";
    n.useEffect(() => {
        "" !== u && o.p.requestCollections([u], { includeUnpublished: t, includePricing: l });
    }, [u, t, l]);
    let { collection: d, fetchState: E } = (0, a.cf)(
            [s.A],
            () => ({ collection: s.A.getCollection(u), fetchState: s.A.getFetchState(u) }),
            [u],
        ),
        A = (0, c.Hd)(u, E),
        p = n.useMemo(() => (null != d ? r.A.fromStorefrontCollectionRecord(d) : null), [d]),
        C = n.useMemo(() => ("error" === E || A ? "error" : null != p ? "ready" : "loading"), [E, A, p]);
    return {
        category: p,
        state: C,
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
