var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(218867),
    u = r(28546),
    c = r(981631),
    d = r(670638);
let f = (e) => {
        let { activeIndex: n, categoryListRef: r, getScrollOffsetForIndex: i } = e,
            o = a.useRef(c.xAR),
            s = a.useRef(n);
        return (
            a.useEffect(() => {
                null != n &&
                    n !== s.current &&
                    (o.current !== c.xAR && window.cancelAnimationFrame(o.current),
                    (o.current = window.requestAnimationFrame(() => {
                        var e;
                        if (null == r.current) return;
                        let a = n > (null !== (e = s.current) && void 0 !== e ? e : -1),
                            l = null != i ? i(n, a) : 0;
                        r.current.scrollRowIntoView(n, {
                            animate: !0,
                            offset: l
                        }),
                            (o.current = c.xAR),
                            (s.current = n);
                    })));
            }, [n, r, i]),
            { categoryListRef: r }
        );
    },
    p = function (e) {
        let { categoryListRef: n, expressionsListRef: r, categories: o, store: c, children: p, className: h, listPadding: _, rowCount: m, getScrollOffsetForIndex: g, categoryHeight: E, onScroll: v, renderCategoryListItem: y, rowCountBySection: b, renderSection: I } = e,
            T = c.useStore((e) => e.activeCategoryIndex);
        f({
            activeIndex: T,
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
            A = a.useCallback((e) => y(o[e], e, () => S(e), T === e), [T, o, S, y]),
            C = a.useMemo(() => ('function' == typeof E ? (e) => E(o[e], e) : E), [o, E]);
        return (0, i.jsxs)('div', {
            className: s()(d.wrapper, h),
            children: [
                (0, i.jsx)(l.Z, {
                    listPadding: _,
                    onScroll: v,
                    ref: n,
                    renderRow: A,
                    rowCount: m,
                    rowHeight: C,
                    hideScrollbar: !0,
                    rowCountBySection: b,
                    renderSection: I
                }),
                null == p ? void 0 : p(S)
            ]
        });
    };
n.Z = p;
