var l = n(582128),
    i = n(855986),
    r = n(73825),
    u = n(97352),
    a = n(394300);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = l.useMemo(() => e?.items.find((e) => (0, a.P)(e))?.skuId ?? null, [e]),
                { isLoaded: n, isFetching: s } = (0, i.cf)([u.A], () => ({
                    isLoaded: null == t || u.A.isLoadedForSKU(t),
                    isFetching: null != t && u.A.isFetchingForSKU(t),
                })),
                o = l.useRef(!1);
            l.useEffect(() => {
                null == t || n || s || o.current || ((o.current = !0), (0, r.ur)(t).catch(() => {}));
            }, [t, n, s]);
        },
    },
);
