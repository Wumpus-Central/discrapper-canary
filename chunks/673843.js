"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    s = n(311907),
    a = n(73825),
    l = n(97352),
    r = n(394300);
function o(e) {
    let t = i.useMemo(() => e?.items.find((e) => (0, r.P)(e))?.skuId ?? null, [e]),
        { isLoaded: n, isFetching: o } = (0, s.cf)([l.A], () => ({
            isLoaded: null == t || l.A.isLoadedForSKU(t),
            isFetching: null != t && l.A.isFetchingForSKU(t),
        })),
        d = i.useRef(!1);
    i.useEffect(() => {
        null == t || n || o || d.current || ((d.current = !0), (0, a.ur)(t).catch(() => {}));
    }, [t, n, o]);
}
