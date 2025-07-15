(r.d(t, { h: () => i }), r(388685));
var n = r(73800),
    l = r(180650),
    o = r(215023);
let i = (e) => {
    let { scrollerRef: t, sortedCategories: r } = e,
        [i, a] = n.useState(1),
        s = n.useCallback(
            (e) => {
                let t = r.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / o.kN) + 1;
            },
            [r]
        ),
        c = n.useCallback(
            (e) => {
                if (null != e && e !== l.T.ORB) {
                    let t = s(e);
                    t !== i && a(t);
                }
            },
            [s, i, a]
        );
    return {
        currentPage: i,
        handlePageChange: n.useCallback(
            (e) => {
                var r;
                (a(e), null == (r = t.current) || r.scrollTo({ to: 0 }));
            },
            [t, a]
        ),
        scrollToCategory: c
    };
};
