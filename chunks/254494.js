var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(218867),
    u = r(28546),
    c = r(981631),
    d = r(670638);
let f = (e) => {
        let { activeIndex: n, categoryListRef: r, getScrollOffsetForIndex: i } = e,
            s = a.useRef(c.xAR),
            o = a.useRef(n);
        return (
            a.useEffect(() => {
                null != n &&
                    n !== o.current &&
                    (s.current !== c.xAR && window.cancelAnimationFrame(s.current),
                    (s.current = window.requestAnimationFrame(() => {
                        var e;
                        if (null == r.current) return;
                        let a = n > (null !== (e = o.current) && void 0 !== e ? e : -1),
                            l = null != i ? i(n, a) : 0;
                        r.current.scrollRowIntoView(n, {
                            animate: !0,
                            offset: l
                        }),
                            (s.current = c.xAR),
                            (o.current = n);
                    })));
            }, [n, r, i]),
            { categoryListRef: r }
        );
    },
    _ = function (e) {
        let { categoryListRef: n, expressionsListRef: r, categories: s, store: c, children: _, className: h, listPadding: p, rowCount: m, getScrollOffsetForIndex: g, categoryHeight: E, onScroll: v, renderCategoryListItem: I, rowCountBySection: T, renderSection: b } = e,
            y = c.useStore((e) => e.activeCategoryIndex);
        f({
            activeIndex: y,
            categoryListRef: n,
            getScrollOffsetForIndex: g
        });
        let S = a.useCallback(
                (e) => {
                    let { searchQuery: n } = u.Iu.getState();
                    if ((c.setActiveCategoryIndex(e), '' !== n)) (0, u.ql)('');
                    else {
                        var i;
                        null === (i = r.current) || void 0 === i || i.scrollToSectionTop(e);
                    }
                },
                [r, c]
            ),
            A = a.useCallback((e) => I(s[e], e, () => S(e), y === e), [y, s, S, I]),
            N = a.useMemo(() => ('function' == typeof E ? (e) => E(s[e], e) : E), [s, E]);
        return (0, i.jsxs)('div', {
            className: o()(d.wrapper, h),
            children: [
                (0, i.jsx)(l.Z, {
                    listPadding: p,
                    onScroll: v,
                    ref: n,
                    renderRow: A,
                    rowCount: m,
                    rowHeight: N,
                    hideScrollbar: !0,
                    rowCountBySection: T,
                    renderSection: b
                }),
                null == _ ? void 0 : _(S)
            ]
        });
    };
n.Z = _;
