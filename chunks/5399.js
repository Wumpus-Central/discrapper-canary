n.d(e, { Ay: () => s, zu: () => u });
var a = n(582128),
    i = n(744700);
function u(l) {
    return null != ((0, i.h)(l.media?.cover) ? "cover" : (0, i.h)(l.media?.icon) ? "icon" : null);
}
function s(l, e) {
    let [n, i] = a.useState({}),
        u = [l, e].find((l) => null != l && "failed" !== n[l]) ?? null,
        s = a.useCallback((l, e) => {
            null != l && i((n) => (null != n[l] ? n : { ...n, [l]: e }));
        }, []),
        d = a.useCallback(() => {
            s(u, "loaded");
        }, [u, s]),
        t = a.useCallback(() => {
            s(u, "failed");
        }, [u, s]);
    return {
        imageUrl: u,
        isCover: null != u && u === l,
        isLoading: null != u && "loaded" !== n[u],
        handleLoad: d,
        handleError: t,
    };
}
