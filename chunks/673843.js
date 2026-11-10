var n = l(582128),
    i = l(855986),
    a = l(73825),
    r = l(97352),
    s = l(394300);
l.d(
    t,
    {},
    {
        A: function (e) {
            let t = n.useMemo(() => e?.items.find((e) => (0, s.P)(e))?.skuId ?? null, [e]),
                { isLoaded: l, isFetching: u } = (0, i.cf)([r.A], () => ({
                    isLoaded: null == t || r.A.isLoadedForSKU(t),
                    isFetching: null != t && r.A.isFetchingForSKU(t),
                })),
                o = n.useRef(!1);
            n.useEffect(() => {
                null == t || l || u || o.current || ((o.current = !0), (0, a.ur)(t).catch(() => {}));
            }, [t, l, u]);
        },
    },
);
