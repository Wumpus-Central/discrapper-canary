(n.d(t, { h: () => a }), n(388685));
var r = n(73800),
    l = n(180650),
    i = n(215023);
let a = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        [a, o] = r.useState(1),
        s = r.useCallback(
            (e) => {
                let t = n.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / i.kN) + 1;
            },
            [n]
        ),
        c = r.useCallback(
            (e) => {
                if (null != e && e !== l.T.ORB) {
                    let t = s(e);
                    t !== a && o(t);
                }
            },
            [s, a, o]
        );
    return {
        currentPage: a,
        handlePageChange: r.useCallback(
            (e) => {
                var n;
                (o(e), null == (n = t.current) || n.scrollTo({ to: 0 }));
            },
            [t, o]
        ),
        scrollToCategory: c
    };
};
