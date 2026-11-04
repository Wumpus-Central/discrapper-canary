var a = i(582128),
    s = i(855986),
    n = i(73825),
    t = i(97352),
    r = i(394300);
i.d(
    l,
    {},
    {
        A: function (e) {
            let l = a.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
                { isLoaded: i, isFetching: d } = (0, s.cf)([t.A], () => ({
                    isLoaded: null == l || t.A.isLoadedForSKU(l),
                    isFetching: null != l && t.A.isFetchingForSKU(l),
                })),
                u = a.useRef(!1);
            a.useEffect(() => {
                null == l || i || d || u.current || ((u.current = !0), (0, n.ur)(l).catch(() => {}));
            }, [l, i, d]);
        },
    },
);
