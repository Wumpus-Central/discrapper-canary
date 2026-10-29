e.d(u, { Ay: () => d, zu: () => i });
var n = e(582128),
    a = e(744700);
function i(l) {
    return null != ((0, a.h)(l.media?.cover) ? "cover" : (0, a.h)(l.media?.icon) ? "icon" : null);
}
function d(l, u) {
    let [e, a] = n.useState({}),
        i = [l, u].find((l) => null != l && "failed" !== e[l]) ?? null,
        d = n.useCallback((l, u) => {
            null != l && a((e) => (null != e[l] ? e : { ...e, [l]: u }));
        }, []),
        c = n.useCallback(() => {
            d(i, "loaded");
        }, [i, d]),
        s = n.useCallback(() => {
            d(i, "failed");
        }, [i, d]);
    return {
        imageUrl: i,
        isCover: null != i && i === l,
        isLoading: null != i && "loaded" !== e[i],
        handleLoad: c,
        handleError: s,
    };
}
