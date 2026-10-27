i.d(l, { A: () => d });
var a = i(582128),
    s = i(17928),
    t = i(73825),
    n = i(97352),
    r = i(394300);
function d(e) {
    let l = a.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: i, isFetching: d } = (0, s.cf)([n.A], () => ({
            isLoaded: null == l || n.A.isLoadedForSKU(l),
            isFetching: null != l && n.A.isFetchingForSKU(l),
        })),
        u = a.useRef(!1);
    a.useEffect(() => {
        null == l || i || d || u.current || ((u.current = !0), (0, t.ur)(l).catch(() => {}));
    }, [l, i, d]);
}
