var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(218867),
    l = r(74538),
    u = r(28546),
    c = r(98528),
    d = r(695606);
let f = 20,
    _ = s.forwardRef(function (e, n) {
        let { categories: r, store: i, hasSearchResults: _, listPadding: h, renderRow: p, renderSection: m, renderSectionHeader: g, renderSectionFooter: E, renderInspector: v, renderEmptySearchState: I, rowCount: T, rowCountBySection: b, rowHeight: y, sectionHeaderHeight: S, sectionFooterHeight: A, renderUpsell: N, setShowUpsell: C } = e,
            R = s.useRef(!1),
            O = s.useRef(null),
            D = (0, u.Iu)((e) => e.searchQuery),
            L = i.useStore((e) => e.activeCategoryIndex),
            x = r.map((e) => ((0, l._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
            w = (0, c.Uf)({
                listRef: O,
                searchQuery: D,
                nitroLockedSectionStates: x,
                setShowUpsell: C
            }),
            P = (0, c.Qs)({
                activeCategoryIndex: L,
                isScrolling: R,
                listRef: O,
                onActiveCategoryIndexChange: i.setActiveCategoryIndex,
                scrollOffset: f,
                searchQuery: D
            }),
            M = s.useCallback(
                (e) => {
                    w(e), P(e);
                },
                [w, P]
            );
        return (
            (0, c.Xs)({
                searchQuery: D,
                activeCategoryIndex: L,
                listRef: O
            }),
            s.useImperativeHandle(
                n,
                () => ({
                    scrollTo: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = O.current) || void 0 === e ? void 0 : e.scrollTo(...r);
                    },
                    getRowDescriptors: () => {
                        var e, n;
                        return null !== (n = null === (e = O.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== n ? n : [];
                    },
                    getSectionDescriptors: () => {
                        var e, n;
                        return null !== (n = null === (e = O.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== n ? n : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = O.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...r);
                    },
                    scrollRowIntoView: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = O.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...r);
                    },
                    getScrollerNode: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = O.current) || void 0 === e ? void 0 : e.getScrollerNode(...r);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return null === (e = O.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...r);
                    },
                    getListDimensions: function () {
                        for (var e, n, r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        return null !== (n = null === (e = O.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== n
                            ? n
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, a.jsxs)('div', {
                className: d.wrapper,
                children: [
                    D.length > 0 && !_ && null != I
                        ? I()
                        : (0, a.jsx)(o.Z, {
                              role: 'none presentation',
                              listPadding: h,
                              onScroll: M,
                              renderRow: p,
                              renderSection: m,
                              renderSectionHeader: g,
                              renderSectionFooter: E,
                              rowCount: T,
                              rowCountBySection: b,
                              rowHeight: y,
                              sectionHeaderHeight: S,
                              sectionFooterHeight: A,
                              stickyHeaders: !0,
                              ref: O
                          }),
                    null == N ? void 0 : N(),
                    null == v ? void 0 : v()
                ]
            })
        );
    });
n.Z = _;
