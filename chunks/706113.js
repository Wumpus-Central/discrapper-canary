var l = n(582128),
    s = n(855986),
    a = n(350172),
    i = n(730202),
    r = n(295586),
    c = n(510801),
    o = n(682301);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { includeUnpublished: t = !1, includePricing: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                d = e ?? "";
            l.useEffect(() => {
                "" !== d && r.p.requestCollections([d], { includeUnpublished: t, includePricing: n });
            }, [d, t, n]);
            let { collection: u, fetchState: m } = (0, s.cf)(
                    [i.A],
                    () => ({ collection: i.A.getCollection(d), fetchState: i.A.getFetchState(d) }),
                    [d],
                ),
                g = (0, o.Hd)(d, m),
                E = l.useMemo(() => (null != u ? c.A.fromStorefrontCollectionRecord(u) : null), [u]),
                h = l.useMemo(() => ("error" === m || g ? "error" : null != E ? "ready" : "loading"), [m, g, E]);
            return {
                category: E,
                state: h,
                retry: l.useCallback(() => {
                    "" !== d &&
                        (0, a._v)(
                            {
                                collectionIds: [d],
                                includeUnpublishedCollections: t,
                                includeUnpublishedProducts: t,
                                includePricing: n,
                                ignoreCache: !0,
                            },
                            { retryAfterError: !0 },
                        );
                }, [d, t, n]),
            };
        },
    },
);
