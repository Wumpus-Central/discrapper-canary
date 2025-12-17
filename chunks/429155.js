n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(218867),
    s = n(74538),
    l = n(28546),
    c = n(122567),
    u = n(98528),
    d = n(889230);
let f = 20,
    p = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: a,
                hasSearchResults: c,
                listPadding: p,
                renderRow: m,
                renderSection: h,
                renderSectionHeader: g,
                renderSectionFooter: E,
                renderInspector: b,
                renderEmptySearchState: y,
                rowCount: O,
                rowCountBySection: v,
                rowHeight: S,
                sectionHeaderHeight: I,
                sectionFooterHeight: T,
                renderUpsell: C,
                onScroll: A,
            } = e,
            N = i.useRef(!1),
            P = i.useRef(null),
            R = (0, l.Iu)((e) => e.searchQuery),
            w = a.useStore((e) => e.activeCategoryIndex),
            D = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, s._O)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            x = (0, u.Qs)({
                activeCategoryIndex: w,
                isScrolling: N,
                listRef: P,
                onActiveCategoryIndexChange: a.setActiveCategoryIndex,
                scrollOffset: f,
                searchQuery: R,
            }),
            L = i.useCallback(
                (e) => {
                    x(e),
                        _({
                            listRef: P,
                            searchQuery: R,
                            nitroLockedSectionStates: D,
                            scrollTop: e,
                        }),
                        null == A || A(e);
                },
                [x, R, D, A],
            );
        return (
            i.useEffect(() => {
                null != P.current && L(0);
            }, [L, P]),
            (0, u.Xs)({
                searchQuery: R,
                activeCategoryIndex: w,
                listRef: P,
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
                                  totalHeight: -1,
                              };
                    },
                }),
                [],
            ),
            (0, r.jsxs)("div", {
                className: d.wrapper,
                children: [
                    R.length > 0 && !c && null != y
                        ? y()
                        : (0, r.jsx)(o.Z, {
                              role: "none presentation",
                              listPadding: p,
                              onScroll: L,
                              renderRow: m,
                              renderSection: h,
                              renderSectionHeader: g,
                              renderSectionFooter: E,
                              rowCount: O,
                              rowCountBySection: v,
                              rowHeight: S,
                              sectionHeaderHeight: I,
                              sectionFooterHeight: T,
                              stickyHeaders: !0,
                              ref: P,
                          }),
                    null == C ? void 0 : C(),
                    null == b ? void 0 : b(),
                ],
            })
        );
    }),
    _ = (0, a.throttle)(m, 300, {
        leading: !1,
        trailing: !0,
    });
function m(e) {
    let { listRef: t, searchQuery: n, nitroLockedSectionStates: r, scrollTop: i } = e;
    if (null == t.current) return;
    let a = (0, c.y)({
        listRef: t,
        searchQuery: n,
        nitroLockedSectionStates: r,
        scrollTop: i,
    });
    l.Iu.setState({
        isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
        areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
    });
}
let h = p;
