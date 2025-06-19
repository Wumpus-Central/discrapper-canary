n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(218867),
    o = n(388081),
    s = n(74538),
    l = n(28546),
    c = n(122567),
    u = n(98528),
    d = n(204922);
let f = 20,
    _ = i.forwardRef(function (e, t) {
        let { categories: n, store: _, hasSearchResults: p, listPadding: h, renderRow: m, renderSection: g, renderSectionHeader: E, renderSectionFooter: b, renderInspector: y, renderEmptySearchState: O, rowCount: v, rowCountBySection: I, rowHeight: T, sectionHeaderHeight: S, sectionFooterHeight: A, renderUpsell: N, setShowUpsell: C } = e,
            R = i.useRef(!1),
            P = i.useRef(null),
            w = (0, l.Iu)((e) => e.searchQuery),
            D = _.useStore((e) => e.activeCategoryIndex),
            L = o.C.useExperiment({ location: 'ExpressionPickerList' }).moveDefaultToBottom,
            x = n.map((e) => ((0, s._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
            k = (0, u.Uf)({
                listRef: P,
                searchQuery: w,
                nitroLockedSectionStates: x,
                setShowUpsell: C
            }),
            M = (0, u.Qs)({
                activeCategoryIndex: D,
                isScrolling: R,
                listRef: P,
                onActiveCategoryIndexChange: _.setActiveCategoryIndex,
                scrollOffset: f,
                searchQuery: w
            }),
            j = i.useCallback(
                (e) => {
                    if ((k(e), M(e), L)) {
                        let t = (0, c.y)({
                            listRef: P,
                            searchQuery: w,
                            nitroLockedSectionStates: x,
                            scrollTop: e
                        });
                        l.Iu.setState({
                            isNitroLockedSectionVisible: t.isNitroLockedSectionVisible,
                            areOnlyNitroLockedSectionsVisible: t.areOnlyNitroLockedSectionsVisible
                        });
                    }
                },
                [k, M, w, x, L]
            );
        return (
            (0, u.Xs)({
                searchQuery: w,
                activeCategoryIndex: D,
                listRef: P
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = P.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = P.current) ? void 0 : e.getRowDescriptors()) ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = P.current) ? void 0 : e.getSectionDescriptors()) ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = P.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = P.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = P.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = P.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (t = null == (e = P.current) ? void 0 : e.getListDimensions(...r))
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
                className: d.wrapper,
                children: [
                    w.length > 0 && !p && null != O
                        ? O()
                        : (0, r.jsx)(a.Z, {
                              role: 'none presentation',
                              listPadding: h,
                              onScroll: j,
                              renderRow: m,
                              renderSection: g,
                              renderSectionHeader: E,
                              renderSectionFooter: b,
                              rowCount: v,
                              rowCountBySection: I,
                              rowHeight: T,
                              sectionHeaderHeight: S,
                              sectionFooterHeight: A,
                              stickyHeaders: !0,
                              ref: P
                          }),
                    null == N ? void 0 : N(),
                    null == y ? void 0 : y()
                ]
            })
        );
    });
