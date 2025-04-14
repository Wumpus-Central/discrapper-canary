n.d(t, { Z: () => d }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(218867),
    a = n(74538),
    s = n(28546),
    l = n(98528),
    c = n(204922);
let u = 20,
    d = i.forwardRef(function (e, t) {
        let { categories: n, store: d, hasSearchResults: f, listPadding: _, renderRow: p, renderSection: h, renderSectionHeader: m, renderSectionFooter: g, renderInspector: E, renderEmptySearchState: b, rowCount: y, rowCountBySection: v, rowHeight: O, sectionHeaderHeight: I, sectionFooterHeight: S, renderUpsell: T, setShowUpsell: N } = e,
            A = i.useRef(!1),
            C = i.useRef(null),
            R = (0, s.Iu)((e) => e.searchQuery),
            P = d.useStore((e) => e.activeCategoryIndex),
            w = n.map((e) => ((0, a._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
            D = (0, l.Uf)({
                listRef: C,
                searchQuery: R,
                nitroLockedSectionStates: w,
                setShowUpsell: N
            }),
            L = (0, l.Qs)({
                activeCategoryIndex: P,
                isScrolling: A,
                listRef: C,
                onActiveCategoryIndexChange: d.setActiveCategoryIndex,
                scrollOffset: u,
                searchQuery: R
            }),
            x = i.useCallback(
                (e) => {
                    D(e), L(e);
                },
                [D, L]
            );
        return (
            (0, l.Xs)({
                searchQuery: R,
                activeCategoryIndex: P,
                listRef: C
            }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = C.current) ? void 0 : e.getRowDescriptors()) ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null != (t = null == (e = C.current) ? void 0 : e.getSectionDescriptors()) ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return null == (e = C.current) ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null != (t = null == (e = C.current) ? void 0 : e.getListDimensions(...r))
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
                className: c.wrapper,
                children: [
                    R.length > 0 && !f && null != b
                        ? b()
                        : (0, r.jsx)(o.Z, {
                              role: 'none presentation',
                              listPadding: _,
                              onScroll: x,
                              renderRow: p,
                              renderSection: h,
                              renderSectionHeader: m,
                              renderSectionFooter: g,
                              rowCount: y,
                              rowCountBySection: v,
                              rowHeight: O,
                              sectionHeaderHeight: I,
                              sectionFooterHeight: S,
                              stickyHeaders: !0,
                              ref: C
                          }),
                    null == T ? void 0 : T(),
                    null == E ? void 0 : E()
                ]
            })
        );
    });
