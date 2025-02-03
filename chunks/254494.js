n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(218867),
    l = n(28546),
    u = n(981631),
    c = n(670638);
let d = (e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: i } = e,
            a = r.useRef(u.xAR),
            s = r.useRef(t);
        return (
            r.useEffect(() => {
                null != t &&
                    t !== s.current &&
                    (a.current !== u.xAR && window.cancelAnimationFrame(a.current),
                    (a.current = window.requestAnimationFrame(() => {
                        var e;
                        if (null == n.current) return;
                        let r = t > (null !== (e = s.current) && void 0 !== e ? e : -1),
                            o = null != i ? i(t, r) : 0;
                        n.current.scrollRowIntoView(t, {
                            animate: !0,
                            offset: o
                        }),
                            (a.current = u.xAR),
                            (s.current = t);
                    })));
            }, [t, n, i]),
            { categoryListRef: n }
        );
    },
    f = function (e) {
        let { categoryListRef: t, expressionsListRef: n, categories: a, store: u, children: f, className: _, listPadding: p, rowCount: h, getScrollOffsetForIndex: m, categoryHeight: g, onScroll: E, renderCategoryListItem: v, rowCountBySection: y, renderSection: I } = e,
            b = u.useStore((e) => e.activeCategoryIndex);
        d({
            activeIndex: b,
            categoryListRef: t,
            getScrollOffsetForIndex: m
        });
        let T = r.useCallback(
                (e) => {
                    let { searchQuery: t } = l.Iu.getState();
                    if ((u.setActiveCategoryIndex(e), '' !== t)) (0, l.ql)('');
                    else {
                        var i;
                        null === (i = n.current) || void 0 === i || i.scrollToSectionTop(e);
                    }
                },
                [n, u]
            ),
            S = r.useCallback((e) => v(a[e], e, () => T(e), b === e), [b, a, T, v]),
            A = r.useMemo(() => ('function' == typeof g ? (e) => g(a[e], e) : g), [a, g]);
        return (0, i.jsxs)('div', {
            className: s()(c.wrapper, _),
            children: [
                (0, i.jsx)(o.Z, {
                    listPadding: p,
                    onScroll: E,
                    ref: t,
                    renderRow: S,
                    rowCount: h,
                    rowHeight: A,
                    hideScrollbar: !0,
                    rowCountBySection: y,
                    renderSection: I
                }),
                null == f ? void 0 : f(T)
            ]
        });
    };
