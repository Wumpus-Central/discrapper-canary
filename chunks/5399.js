a.d(e, { Ay: () => s, My: () => r, zu: () => i });
var n = a(582128),
    t = a(744700);
function r(l) {
    return (0, t.h)(l.media?.cover) ? "cover" : (0, t.h)(l.media?.icon) ? "icon" : null;
}
function i(l) {
    return null != r(l);
}
function s(l, e) {
    let [a, t] = n.useState({}),
        r = [l, e].find((l) => null != l && "failed" !== a[l]) ?? null,
        i = n.useCallback((l, e) => {
            null != l && t((a) => (null != a[l] ? a : { ...a, [l]: e }));
        }, []),
        s = n.useCallback(() => {
            i(r, "loaded");
        }, [r, i]),
        u = n.useCallback(() => {
            i(r, "failed");
        }, [r, i]);
    return {
        imageUrl: r,
        isCover: null != r && r === l,
        isLoading: null != r && "loaded" !== a[r],
        handleLoad: s,
        handleError: u,
    };
}
