(r.d(t, { h: () => a }), r(388685));
var n = r(73800),
    l = r(180650),
    i = r(215023);
let a = (e) => {
    let { scrollerRef: t, sortedCategories: r } = e,
        [a, o] = n.useState(1),
        s = n.useCallback(
            (e) => {
                let t = r.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / i.kN) + 1;
            },
            [r]
        ),
        c = n.useCallback(
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
        handlePageChange: n.useCallback(
            (e) => {
                var r;
                (o(e), null == (r = t.current) || r.scrollTo({ to: 0 }));
            },
            [t, o]
        ),
        scrollToCategory: c
    };
};
