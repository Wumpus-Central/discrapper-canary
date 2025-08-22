n.d(t, { h: () => s }), n(388685);
var r = n(647438),
    l = n(180650),
    a = n(215023);
let s = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        [s, i] = r.useState(1),
        o = r.useCallback(
            (e) => {
                let t = n.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / a.kN) + 1;
            },
            [n],
        ),
        c = r.useCallback(
            (e) => {
                if (null != e && e !== l.T.ORB) {
                    let t = o(e);
                    t !== s && i(t);
                }
            },
            [o, s, i],
        );
    return {
        currentPage: s,
        handlePageChange: r.useCallback(
            (e) => {
                var n;
                i(e), null == (n = t.current) || n.scrollTo({ to: 0 });
            },
            [t, i],
        ),
        scrollToCategory: c,
    };
};
