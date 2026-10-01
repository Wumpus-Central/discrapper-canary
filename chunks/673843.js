t.d(l, { A: () => u });
var s = t(582128),
    n = t(17928),
    i = t(73825),
    a = t(97352),
    r = t(394300);
function u(e) {
    let l = s.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: t, isFetching: u } = (0, n.cf)([a.A], () => ({
            isLoaded: null == l || a.A.isLoadedForSKU(l),
            isFetching: null != l && a.A.isFetchingForSKU(l),
        })),
        d = s.useRef(!1);
    s.useEffect(() => {
        null == l || t || u || d.current || ((d.current = !0), (0, i.ur)(l).catch(() => {}));
    }, [l, t, u]);
}
