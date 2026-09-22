t.d(s, { A: () => u });
var n = t(582128),
    i = t(17928),
    l = t(73825),
    a = t(97352),
    r = t(394300);
function u(e) {
    let s = n.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: t, isFetching: u } = (0, i.cf)([a.A], () => ({
            isLoaded: null == s || a.A.isLoadedForSKU(s),
            isFetching: null != s && a.A.isFetchingForSKU(s),
        })),
        d = n.useRef(!1);
    n.useEffect(() => {
        null == s || t || u || d.current || ((d.current = !0), (0, l.ur)(s).catch(() => {}));
    }, [s, t, u]);
}
