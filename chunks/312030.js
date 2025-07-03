(n.d(t, { h: () => o }), n(388685));
var r = n(73800),
    l = n(180650),
    i = n(215023);
let o = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        [o, a] = r.useState(1),
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
                    t !== o && a(t);
                }
            },
            [s, o, a]
        );
    return {
        currentPage: o,
        handlePageChange: r.useCallback(
            (e) => {
                var n;
                (a(e), null == (n = t.current) || n.scrollTo({ to: 0 }));
            },
            [t, a]
        ),
        scrollToCategory: c
    };
};
