i.d(s, { A: () => u });
var n = i(582128),
    a = i(17928),
    t = i(73825),
    l = i(97352),
    r = i(394300);
function u(e) {
    let s = n.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: i, isFetching: u } = (0, a.cf)([l.A], () => ({
            isLoaded: null == s || l.A.isLoadedForSKU(s),
            isFetching: null != s && l.A.isFetchingForSKU(s),
        })),
        o = n.useRef(!1);
    n.useEffect(() => {
        null == s || i || u || o.current || ((o.current = !0), (0, t.ur)(s).catch(() => {}));
    }, [s, i, u]);
}
