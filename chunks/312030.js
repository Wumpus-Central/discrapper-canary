n.d(t, { h: () => a }), n(388685);
var r = n(647438),
    l = n(884697),
    s = n(215023);
let a = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        [a, i] = r.useState(1),
        o = r.useCallback(
            (e) => {
                let t = n.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / s.kN) + 1;
            },
            [n],
        ),
        c = r.useCallback(
            (e) => {
                if (null != e && !(0, l.$2)(e)) {
                    let t = o(e);
                    t !== a && i(t);
                }
            },
            [o, a, i],
        );
    return {
        currentPage: a,
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
