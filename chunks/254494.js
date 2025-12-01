n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(218867),
    l = n(28546),
    c = n(981631),
    u = n(111437);
let d = (e) => {
        let { activeIndex: t, categoryListRef: n, getScrollOffsetForIndex: r } = e,
            a = i.useRef(c.xAR),
            o = i.useRef(t);
        return (
            i.useEffect(() => {
                null != t &&
                    t !== o.current &&
                    (a.current !== c.xAR && window.cancelAnimationFrame(a.current),
                    (a.current = window.requestAnimationFrame(() => {
                        var e;
                        if (null == n.current) return;
                        let i = t > (null != (e = o.current) ? e : -1),
                            s = null != r ? r(t, i) : 0;
                        n.current.scrollRowIntoView(t, {
                            animate: !0,
                            offset: s,
                        }),
                            (a.current = c.xAR),
                            (o.current = t);
                    })));
            }, [t, n, r]),
            { categoryListRef: n }
        );
    },
    f = function (e) {
        let {
                categoryListRef: t,
                expressionsListRef: n,
                categories: a,
                store: c,
                children: f,
                className: p,
                listPadding: _,
                rowCount: m,
                getScrollOffsetForIndex: h,
                categoryHeight: g,
                onScroll: E,
                renderCategoryListItem: b,
                rowCountBySection: y,
                renderSection: O,
            } = e,
            v = c.useStore((e) => e.activeCategoryIndex);
        d({
            activeIndex: v,
            categoryListRef: t,
            getScrollOffsetForIndex: h,
        });
        let S = i.useCallback(
                (e) => {
                    let { searchQuery: t } = l.Iu.getState();
                    if ((c.setActiveCategoryIndex(e), "" !== t)) (0, l.ql)("");
                    else {
                        var r;
                        null == (r = n.current) || r.scrollToSectionTop(e);
                    }
                },
                [n, c],
            ),
            I = i.useCallback((e) => b(a[e], e, () => S(e), v === e), [v, a, S, b]),
            T = i.useMemo(() => ("function" == typeof g ? (e) => g(a[e], e) : g), [a, g]);
        return (0, r.jsxs)("div", {
            className: o()(u.wrapper, p),
            children: [
                (0, r.jsx)(s.Z, {
                    listPadding: _,
                    onScroll: E,
                    ref: t,
                    renderRow: I,
                    rowCount: m,
                    rowHeight: T,
                    hideScrollbar: !0,
                    rowCountBySection: y,
                    renderSection: O,
                }),
                null == f ? void 0 : f(S),
            ],
        });
    };
