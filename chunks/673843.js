n.d(t, { A: () => o });
var i = n(64700),
    l = n(311907),
    a = n(73825),
    s = n(97352),
    r = n(394300);
function o(e) {
    let t = i.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: n, isFetching: o } = (0, l.cf)([s.A], () => ({
            isLoaded: null == t || s.A.isLoadedForSKU(t),
            isFetching: null != t && s.A.isFetchingForSKU(t),
        })),
        c = i.useRef(!1);
    i.useEffect(() => {
        null == t || n || o || c.current || ((c.current = !0), (0, a.ur)(t).catch(() => {}));
    }, [t, n, o]);
}
