n.d(t, { A: () => r });
var i = n(64700),
    s = n(17928),
    l = n(73825),
    a = n(97352),
    o = n(394300);
function r(e) {
    let t = i.useMemo(() => e?.items.find((e) => (0, o.P)(e))?.skuId ?? null, [e]),
        { isLoaded: n, isFetching: r } = (0, s.cf)([a.A], () => ({
            isLoaded: null == t || a.A.isLoadedForSKU(t),
            isFetching: null != t && a.A.isFetchingForSKU(t),
        })),
        d = i.useRef(!1);
    i.useEffect(() => {
        null == t || n || r || d.current || ((d.current = !0), (0, l.ur)(t).catch(() => {}));
    }, [t, n, r]);
}
