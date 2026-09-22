n.d(s, { A: () => u });
var t = n(582128),
    i = n(17928),
    l = n(73825),
    a = n(97352),
    r = n(394300);
function u(e) {
    let s = t.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: n, isFetching: u } = (0, i.cf)([a.A], () => ({
            isLoaded: null == s || a.A.isLoadedForSKU(s),
            isFetching: null != s && a.A.isFetchingForSKU(s),
        })),
        d = t.useRef(!1);
    t.useEffect(() => {
        null == s || n || u || d.current || ((d.current = !0), (0, l.ur)(s).catch(() => {}));
    }, [s, n, u]);
}
