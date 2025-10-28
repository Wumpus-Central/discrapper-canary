n.d(t, { h: () => o }), n(388685);
var r = n(647438),
    l = n(884697),
    i = n(215023);
let o = (e) => {
    let { scrollerRef: t, sortedCategories: n } = e,
        [o, s] = r.useState(1),
        a = r.useCallback(
            (e) => {
                let t = n.findIndex((t) => t.skuId === e);
                return -1 === t ? 1 : Math.floor(t / i.kN) + 1;
            },
            [n],
        ),
        c = r.useCallback(
            (e) => {
                if (null != e && !(0, l.$2)(e)) {
                    let t = a(e);
                    t !== o && s(t);
                }
            },
            [a, o, s],
        );
    return {
        currentPage: o,
        handlePageChange: r.useCallback(
            (e) => {
                var n;
                s(e), null == (n = t.current) || n.scrollTo({ to: 0 });
            },
            [t, s],
        ),
        scrollToCategory: c,
    };
};
