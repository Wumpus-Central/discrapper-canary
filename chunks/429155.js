n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(218867),
    s = n(74538),
    o = n(28546),
    l = n(98528),
    u = n(88076);
let c = 20,
    d = r.forwardRef(function (e, t) {
        let { categories: n, store: d, hasSearchResults: f, listPadding: _, renderRow: p, renderSection: h, renderSectionHeader: m, renderSectionFooter: g, renderInspector: E, renderEmptySearchState: v, rowCount: y, rowCountBySection: I, rowHeight: T, sectionHeaderHeight: b, sectionFooterHeight: S, renderUpsell: A, setShowUpsell: N } = e,
            C = r.useRef(!1),
            R = r.useRef(null),
            O = (0, o.Iu)((e) => e.searchQuery),
            D = d.useStore((e) => e.activeCategoryIndex),
            L = n.map((e) => ((0, s._O)(e.categoryInfo) ? { isNitroLocked: e.categoryInfo.isNitroLocked } : { isNitroLocked: !1 })),
            x = (0, l.Uf)({
                listRef: R,
                searchQuery: O,
                nitroLockedSectionStates: L,
                setShowUpsell: N
            }),
            P = (0, l.Qs)({
                activeCategoryIndex: D,
                isScrolling: C,
                listRef: R,
                onActiveCategoryIndexChange: d.setActiveCategoryIndex,
                scrollOffset: c,
                searchQuery: O
            }),
            w = r.useCallback(
                (e) => {
                    x(e), P(e);
                },
                [x, P]
            );
        return (
            (0, l.Xs)({
                searchQuery: O,
                activeCategoryIndex: D,
                listRef: R
            }),
            r.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollTo(...n);
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : [];
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : [];
                    },
                    scrollToSectionTop: function () {
                        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n);
                    },
                    scrollRowIntoView: function () {
                        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n);
                    },
                    getScrollerNode: function () {
                        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.getScrollerNode(...n);
                    },
                    scrollIntoViewNode: function () {
                        for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return null === (e = R.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n);
                    },
                    getListDimensions: function () {
                        for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return null !== (t = null === (e = R.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t
                            ? t
                            : {
                                  height: -1,
                                  totalHeight: -1
                              };
                    }
                }),
                []
            ),
            (0, i.jsxs)('div', {
                className: u.wrapper,
                children: [
                    O.length > 0 && !f && null != v
                        ? v()
                        : (0, i.jsx)(a.Z, {
                              role: 'none presentation',
                              listPadding: _,
                              onScroll: w,
                              renderRow: p,
                              renderSection: h,
                              renderSectionHeader: m,
                              renderSectionFooter: g,
                              rowCount: y,
                              rowCountBySection: I,
                              rowHeight: T,
                              sectionHeaderHeight: b,
                              sectionFooterHeight: S,
                              stickyHeaders: !0,
                              ref: R
                          }),
                    null == A ? void 0 : A(),
                    null == E ? void 0 : E()
                ]
            })
        );
    });
