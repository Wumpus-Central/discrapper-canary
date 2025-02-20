n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(218867),
    l = n(28546),
    c = n(981631),
    u = n(678568);
let d = (e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: r } = e,
            o = i.useRef(c.xAR),
            a = i.useRef(t);
        return (
            i.useEffect(() => {
                null != t &&
                    t !== a.current &&
                    (o.current !== c.xAR && window.cancelAnimationFrame(o.current),
                    (o.current = window.requestAnimationFrame(() => {
                        var e;
                        if (null == n.current) return;
                        let i = t > (null !== (e = a.current) && void 0 !== e ? e : -1),
                            s = null != r ? r(t, i) : 0;
                        n.current.scrollRowIntoView(t, {
                            animate: !0,
                            offset: s
                        }),
                            (o.current = c.xAR),
                            (a.current = t);
                    })));
            }, [t, n, r]),
            { categoryListRef: n }
        );
    },
    f = function (e) {
        let { categoryListRef: t, expressionsListRef: n, categories: o, store: c, children: f, className: p, listPadding: _, rowCount: h, getScrollOffsetForIndex: m, categoryHeight: g, onScroll: E, renderCategoryListItem: v, rowCountBySection: b, renderSection: y } = e,
            O = c.useStore((e) => e.activeCategoryIndex);
        d({
            activeIndex: O,
            categoryListRef: t,
            getScrollOffsetForIndex: m
        });
        let S = i.useCallback(
                (e) => {
                    let { searchQuery: t } = l.Iu.getState();
                    if ((c.setActiveCategoryIndex(e), '' !== t)) (0, l.ql)('');
                    else {
                        var r;
                        null === (r = n.current) || void 0 === r || r.scrollToSectionTop(e);
                    }
                },
                [n, c]
            ),
            I = i.useCallback((e) => v(o[e], e, () => S(e), O === e), [O, o, S, v]),
            T = i.useMemo(() => ('function' == typeof g ? (e) => g(o[e], e) : g), [o, g]);
        return (0, r.jsxs)('div', {
            className: a()(u.wrapper, p),
            children: [
                (0, r.jsx)(s.Z, {
                    listPadding: _,
                    onScroll: E,
                    ref: t,
                    renderRow: I,
                    rowCount: h,
                    rowHeight: T,
                    hideScrollbar: !0,
                    rowCountBySection: b,
                    renderSection: y
                }),
                null == f ? void 0 : f(S)
            ]
        });
    };
