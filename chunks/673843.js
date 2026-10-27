i.d(l, { A: () => d });
var t = i(582128),
    n = i(17928),
    a = i(73825),
    s = i(97352),
    r = i(394300);
function d(e) {
    let l = t.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: i, isFetching: d } = (0, n.cf)([s.A], () => ({
            isLoaded: null == l || s.A.isLoadedForSKU(l),
            isFetching: null != l && s.A.isFetchingForSKU(l),
        })),
        u = t.useRef(!1);
    t.useEffect(() => {
        null == l || i || d || u.current || ((u.current = !0), (0, a.ur)(l).catch(() => {}));
    }, [l, i, d]);
}
