(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(218867),
    o = n(74538),
    s = n(28546),
    l = n(122567),
    c = n(98528),
    u = n(204922);
let d = 20,
    f = i.forwardRef(function (e, t) {
        let { categories: n, store: f, hasSearchResults: _, listPadding: p, renderRow: h, renderSection: m, renderSectionHeader: g, renderSectionFooter: E, renderInspector: b, renderEmptySearchState: y, rowCount: O, rowCountBySection: v, rowHeight: I, sectionHeaderHeight: T, sectionFooterHeight: S, renderUpsell: A, setShowUpsell: N } = e,
            C = i.useRef(!1),
            R = i.useRef(null),
            P = (0, s.Iu)((e) => e.searchQuery),
            w = f.useStore((e) => e.activeCategoryIndex),
            D = n.map((e) => ((0, o._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
            L = (0, c.Uf)({
                listRef: R,
                searchQuery: P,
                nitroLockedSectionStates: D,
                setShowUpsell: N
            }),
            x = (0, c.Qs)({
                activeCategoryIndex: w,
                isScrolling: C,
                listRef: R,
                onActiveCategoryIndexChange: f.setActiveCategoryIndex,
                scrollOffset: d,
                searchQuery: P
            }),
            k = i.useCallback(
                (e) => {
                    (L(e), x(e));
                    let t = (0, l.y)({
                        listRef: R,
                        searchQuery: P,
                        nitroLockedSectionStates: D,
                        scrollTop: e
                    });
                    s.Iu.setState({
                        isNitroLockedSectionVisible: t.isNitroLockedSectionVisible,
                        areOnlyNitroLockedSectionsVisible: t.areOnlyNitroLockedSectionsVisible
                    });
                },
                [L, x, P, D]
            );
        return (
            (0, c.Xs)({
                searchQuery: P,
                activeCategoryIndex: w,
                listRef: R
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = R.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = R.current) ? void 0 : e.getRowDescriptors()) ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = R.current) ? void 0 : e.getSectionDescriptors()) ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = R.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = R.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = R.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = R.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (t = null == (e = R.current) ? void 0 : e.getListDimensions(...r))
                            ? t
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, r.jsxs)('div', {
                className: u.wrapper,
                children: [
                    P.length > 0 && !_ && null != y
                        ? y()
                        : (0, r.jsx)(a.Z, {
                              role: 'none presentation',
                              listPadding: p,
                              onScroll: k,
                              renderRow: h,
                              renderSection: m,
                              renderSectionHeader: g,
                              renderSectionFooter: E,
                              rowCount: O,
                              rowCountBySection: v,
                              rowHeight: I,
                              sectionHeaderHeight: T,
                              sectionFooterHeight: S,
                              stickyHeaders: !0,
                              ref: R
                          }),
                    null == A ? void 0 : A(),
                    null == b ? void 0 : b()
                ]
            })
        );
    });
