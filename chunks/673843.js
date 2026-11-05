var i = l(582128),
    a = l(855986),
    s = l(73825),
    n = l(97352),
    r = l(394300);
l.d(
    t,
    {},
    {
        A: function (e) {
            let t = i.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
                { isLoaded: l, isFetching: d } = (0, a.cf)([n.A], () => ({
                    isLoaded: null == t || n.A.isLoadedForSKU(t),
                    isFetching: null != t && n.A.isFetchingForSKU(t),
                })),
                u = i.useRef(!1);
            i.useEffect(() => {
                null == t || l || d || u.current || ((u.current = !0), (0, s.ur)(t).catch(() => {}));
            }, [t, l, d]);
        },
    },
);
