var l = n(582128),
    s = n(855986),
    a = n(350172),
    i = n(730202),
    r = n(634393),
    o = n(295586),
    c = n(510801),
    u = n(682301);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { includeUnpublished: t = !1, includePricing: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                d = e ?? "",
                m = (0, r.Nm)();
            l.useEffect(() => {
                "" !== d && o.p.requestCollections([d], { includeUnpublished: t, includePricing: n });
            }, [d, t, n, m]);
            let { collection: g, fetchState: E } = (0, s.cf)(
                    [i.A],
                    () => ({ collection: i.A.getCollection(d), fetchState: i.A.getFetchState(d) }),
                    [d],
                ),
                h = (0, u.Hd)(d, E),
                f = l.useMemo(() => (null != g ? c.A.fromStorefrontCollectionRecord(g) : null), [g]),
                x = l.useMemo(() => ("error" === E || h ? "error" : null != f ? "ready" : "loading"), [E, h, f]);
            return {
                category: f,
                state: x,
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
