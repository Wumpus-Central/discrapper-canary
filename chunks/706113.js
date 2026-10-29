l.d(t, { A: () => u });
var n = l(582128),
    i = l(17928),
    a = l(350172),
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
    let { collection: d, fetchState: E } = (0, i.cf)(
            [r.A],
            () => ({ collection: r.A.getCollection(u), fetchState: r.A.getFetchState(u) }),
            [u],
        ),
        A = (0, c.Hd)(u, E),
        p = n.useMemo(() => (null != d ? o.A.fromStorefrontCollectionRecord(d) : null), [d]),
        C = n.useMemo(() => ("error" === E || A ? "error" : null != p ? "ready" : "loading"), [E, A, p]);
    return {
        category: p,
        state: C,
        retry: n.useCallback(() => {
            "" !== u &&
                (0, a._v)({
                    collectionIds: [u],
                    includeUnpublishedCollections: t,
                    includeUnpublishedProducts: t,
                    includePricing: l,
                    ignoreCache: !0,
                });
        }, [u, t, l]),
    };
}
