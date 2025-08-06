r.d(t, { h: () => i }), r(388685);
var n = r(73800),
    l = r(180650),
    a = r(215023);
let i = (e) => {
    let { scrollerRef: t, sortedCategories: r } = e,
        [i, o] = n.useState(1),
        s = n.useCallback(
            (e) => {
                let t = r.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / a.kN) + 1;
            },
            [r],
        ),
        c = n.useCallback(
            (e) => {
                if (null != e && e !== l.T.ORB) {
                    let t = s(e);
                    t !== i && o(t);
                }
            },
            [s, i, o],
        );
    return {
        currentPage: i,
        handlePageChange: n.useCallback(
            (e) => {
                var r;
                o(e), null == (r = t.current) || r.scrollTo({ to: 0 });
            },
            [t, o],
        ),
        scrollToCategory: c,
    };
};
