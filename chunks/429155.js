n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n(218867),
    s = n(74538),
    l = n(28546),
    c = n(122567),
    u = n(98528),
    d = n(557340);
let f = 20,
    _ = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: a,
                hasSearchResults: c,
                listPadding: _,
                renderRow: h,
                renderSection: m,
                renderSectionHeader: g,
                renderSectionFooter: E,
                renderInspector: b,
                renderEmptySearchState: y,
                rowCount: O,
                rowCountBySection: v,
                rowHeight: I,
                sectionHeaderHeight: T,
                sectionFooterHeight: S,
                renderUpsell: A,
                onScroll: C,
            } = e,
            N = i.useRef(!1),
            R = i.useRef(null),
            P = (0, l.Iu)((e) => e.searchQuery),
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
                listRef: R,
                onActiveCategoryIndexChange: a.setActiveCategoryIndex,
                scrollOffset: f,
                searchQuery: P,
            }),
            L = i.useCallback(
                (e) => {
                    x(e),
                        p({
                            listRef: R,
                            searchQuery: P,
                            nitroLockedSectionStates: D,
                            scrollTop: e,
                        }),
                        null == C || C(e);
                },
                [x, P, D, C],
            );
        return (
            i.useEffect(() => {
                null != R.current && L(0);
            }, [L, R]),
            (0, u.Xs)({
                searchQuery: P,
                activeCategoryIndex: w,
                listRef: R,
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
                                  totalHeight: -1,
                              };
                    },
                }),
                [],
            ),
            (0, r.jsxs)("div", {
                className: d.wrapper,
                children: [
                    P.length > 0 && !c && null != y
                        ? y()
                        : (0, r.jsx)(o.Z, {
                              role: "none presentation",
                              listPadding: _,
                              onScroll: L,
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
                              ref: R,
                          }),
                    null == A ? void 0 : A(),
                    null == b ? void 0 : b(),
                ],
            })
        );
    }),
    p = (0, a.throttle)(h, 300, {
        leading: !1,
        trailing: !0,
    });
function h(e) {
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
let m = _;
