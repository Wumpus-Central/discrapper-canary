var n = l(582128),
    s = l(744700);
l.d(
    a,
    {},
    {
        Ay: function (e, a) {
            let [l, s] = n.useState({}),
                r = [e, a].find((e) => null != e && "failed" !== l[e]) ?? null,
                i = n.useCallback((e, a) => {
                    null != e && s((l) => (null != l[e] ? l : { ...l, [e]: a }));
                }, []),
                t = n.useCallback(() => {
                    i(r, "loaded");
                }, [r, i]),
                d = n.useCallback(() => {
                    i(r, "failed");
                }, [r, i]);
            return {
                imageUrl: r,
                isCover: null != r && r === e,
                isLoading: null != r && "loaded" !== l[r],
                handleLoad: t,
                handleError: d,
            };
        },
        zu: function (e) {
            return null != ((0, s.h)(e.media?.cover) ? "cover" : (0, s.h)(e.media?.icon) ? "icon" : null);
        },
    },
);
