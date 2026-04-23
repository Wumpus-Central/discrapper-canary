"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(962125),
    o = n(927578),
    l = n(151271),
    u = n(240864),
    c = n(887695),
    d = n(711548);
let _ = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: u,
                listPadding: _,
                renderRow: p,
                renderSection: h,
                renderSectionHeader: E,
                renderSectionFooter: m,
                renderInspector: g,
                renderEmptySearchState: A,
                rowCount: I,
                rowCountBySection: T,
                rowHeight: S,
                sectionHeaderHeight: y,
                sectionFooterHeight: N,
                renderUpsell: v,
                onScroll: C,
            } = e,
            O = i.useRef(!1),
            R = i.useRef(null),
            b = (0, l.RQ)((e) => e.searchQuery),
            D = s.useStore((e) => e.activeCategoryIndex),
            L = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, o.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            w = (0, c.Fk)({
                activeCategoryIndex: D,
                isScrolling: O,
                listRef: R,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: b,
            }),
            M = i.useCallback(
                (e) => {
                    w(e),
                        f({
                            listRef: R,
                            searchQuery: b,
                            nitroLockedSectionStates: L,
                            scrollTop: e,
                            sectionHeaderHeight: y,
                            sectionFooterHeight: N,
                        }),
                        C?.(e);
                },
                [w, b, L, y, N, C],
            );
        return (
            i.useEffect(() => {
                null != R.current && M(R.current.getScrollerNode()?.scrollTop ?? 0);
            }, [M, R]),
            (0, c.FV)({ searchQuery: b, activeCategoryIndex: D, listRef: R }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => R.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => R.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return R.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsxs)("div", {
                className: d.i,
                children: [
                    b.length > 0 && !u && null != A
                        ? A()
                        : (0, r.jsx)(a.A, {
                              role: "none presentation",
                              listPadding: _,
                              onScroll: M,
                              renderRow: p,
                              renderSection: h,
                              renderSectionHeader: E,
                              renderSectionFooter: m,
                              rowCount: I,
                              rowCountBySection: T,
                              rowHeight: S,
                              sectionHeaderHeight: y,
                              sectionFooterHeight: N,
                              stickyHeaders: !0,
                              ref: R,
                          }),
                    v?.(),
                    g?.(),
                ],
            })
        );
    }),
    f = (0, s.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: r,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            } = e;
            if (null == t.current) return;
            let o = (0, u.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: r,
                scrollTop: i,
                sectionHeaderHeight: s,
                sectionFooterHeight: a,
            });
            l.RQ.setState({
                isNitroLockedSectionVisible: o.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: o.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    ),
    p = _;
