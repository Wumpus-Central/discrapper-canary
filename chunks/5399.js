l.d(a, { Ay: () => i, zu: () => s });
var n = l(582128),
    r = l(744700);
function s(e) {
    return null != ((0, r.h)(e.media?.cover) ? "cover" : (0, r.h)(e.media?.icon) ? "icon" : null);
}
function i(e, a) {
    let [l, r] = n.useState({}),
        s = [e, a].find((e) => null != e && "failed" !== l[e]) ?? null,
        i = n.useCallback((e, a) => {
            null != e && r((l) => (null != l[e] ? l : { ...l, [e]: a }));
        }, []),
        t = n.useCallback(() => {
            i(s, "loaded");
        }, [s, i]),
        c = n.useCallback(() => {
            i(s, "failed");
        }, [s, i]);
    return {
        imageUrl: s,
        isCover: null != s && s === e,
        isLoading: null != s && "loaded" !== l[s],
        handleLoad: t,
        handleError: c,
    };
}
