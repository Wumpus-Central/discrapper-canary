var l = n(582128),
    a = n(855986),
    s = n(350172),
    i = n(730202),
    r = n(634393),
    o = n(295586),
    c = n(510801),
    d = n(682301);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { includeUnpublished: t = !1, includePricing: n = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = e ?? "",
                m = (0, r.Nm)();
            l.useEffect(() => {
                "" !== u && o.p.requestCollections([u], { includeUnpublished: t, includePricing: n });
            }, [u, t, n, m]);
            let { collection: g, fetchState: E } = (0, a.cf)(
                    [i.A],
                    () => ({ collection: i.A.getCollection(u), fetchState: i.A.getFetchState(u) }),
                    [u],
                ),
                h = (0, d.Hd)(u, E),
                f = l.useMemo(() => (null != g ? c.A.fromStorefrontCollectionRecord(g) : null), [g]),
                x = l.useMemo(() => ("error" === E || h ? "error" : null != f ? "ready" : "loading"), [E, h, f]);
            return {
                category: f,
                state: x,
                retry: l.useCallback(() => {
                    "" !== u &&
                        (0, s._v)(
                            {
                                collectionIds: [u],
                                includeUnpublishedCollections: t,
                                includeUnpublishedProducts: t,
                                includePricing: n,
                                ignoreCache: !0,
                            },
                            { retryAfterError: !0 },
                        );
                }, [u, t, n]),
            };
        },
    },
);
