n.d(t, { h: () => i }), n(388685);
var r = n(73800),
    l = n(180650),
    a = n(426171),
    o = n(215023);
let i = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        { setCategoryRef: i, handleScrollToCategory: s } = (0, a.xV)(t.current),
        [c, u] = r.useState(1),
        d = r.useCallback(
            (e) => {
                let t = n.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / o.kN) + 1;
            },
            [n]
        ),
        p = r.useCallback(
            (e) => {
                if (null != e && e !== l.T.ORB) {
                    let t = d(e);
                    t !== c && u(t), s(e);
                }
            },
            [s, d, c, u]
        );
    return {
        currentPage: c,
        handlePageChange: r.useCallback(
            (e) => {
                var n;
                u(e), null == (n = t.current) || n.scrollTo({ to: 0 });
            },
            [t, u]
        ),
        setCategoryRef: i,
        scrollToCategory: p
    };
};
