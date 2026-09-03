n.d(s, { A: () => u });
var l = n(582128),
    t = n(17928),
    i = n(73825),
    a = n(97352),
    r = n(394300);
function u(e) {
    let s = l.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: n, isFetching: u } = (0, t.cf)([a.A], () => ({
            isLoaded: null == s || a.A.isLoadedForSKU(s),
            isFetching: null != s && a.A.isFetchingForSKU(s),
        })),
        o = l.useRef(!1);
    l.useEffect(() => {
        null == s || n || u || o.current || ((o.current = !0), (0, i.ur)(s).catch(() => {}));
    }, [s, n, u]);
}
