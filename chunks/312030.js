(n.d(t, { h: () => a }), n(388685));
var r = n(73800),
    l = n(180650),
    o = n(215023);
let a = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        [a, i] = r.useState(1),
        s = r.useCallback(
            (e) => {
                let t = n.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / o.kN) + 1;
            },
            [n]
        ),
        c = r.useCallback(
            (e) => {
                if (null != e && e !== l.T.ORB) {
                    let t = s(e);
                    t !== a && i(t);
                }
            },
            [s, a, i]
        );
    return {
        currentPage: a,
        handlePageChange: r.useCallback(
            (e) => {
                var n;
                (i(e), null == (n = t.current) || n.scrollTo({ to: 0 }));
            },
            [t, i]
        ),
        scrollToCategory: c
    };
};
