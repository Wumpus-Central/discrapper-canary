"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(962125),
    o = n(927578),
    l = n(151271),
    u = n(240864),
    c = n(887695),
    d = n(19397);
let _ = 20,
    f = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: u,
                listPadding: f,
                renderRow: h,
                renderSection: m,
                renderSectionHeader: E,
                renderSectionFooter: g,
                renderInspector: A,
                renderEmptySearchState: I,
                rowCount: T,
                rowCountBySection: S,
                rowHeight: y,
                sectionHeaderHeight: v,
                sectionFooterHeight: N,
                renderUpsell: C,
                onScroll: R,
            } = e,
            O = i.useRef(!1),
            b = i.useRef(null),
            D = (0, l.RQ)((e) => e.searchQuery),
            L = s.useStore((e) => e.activeCategoryIndex),
            w = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, o.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            M = (0, c.Fk)({
                activeCategoryIndex: L,
                isScrolling: O,
                listRef: b,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: _,
                searchQuery: D,
            }),
            x = i.useCallback(
                (e) => {
                    M(e),
                        p({
                            listRef: b,
                            searchQuery: D,
                            nitroLockedSectionStates: w,
                            scrollTop: e,
                            sectionHeaderHeight: v,
                            sectionFooterHeight: N,
                        }),
                        R?.(e);
                },
                [M, D, w, v, N, R],
            );
        return (
            i.useEffect(() => {
                null != b.current && x(b.current.getScrollerNode()?.scrollTop ?? 0);
            }, [x, b]),
            (0, c.FV)({ searchQuery: D, activeCategoryIndex: L, listRef: b }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => b.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => b.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return b.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsxs)("div", {
                className: d.i,
                children: [
                    D.length > 0 && !u && null != I
                        ? I()
                        : (0, r.jsx)(a.A, {
                              role: "none presentation",
                              listPadding: f,
                              onScroll: x,
                              renderRow: h,
                              renderSection: m,
                              renderSectionHeader: E,
                              renderSectionFooter: g,
                              rowCount: T,
                              rowCountBySection: S,
                              rowHeight: y,
                              sectionHeaderHeight: v,
                              sectionFooterHeight: N,
                              stickyHeaders: !0,
                              ref: b,
                          }),
                    C?.(),
                    A?.(),
                ],
            })
        );
    }),
    p = (0, s.throttle)(h, 300, { leading: !1, trailing: !0 });
function h(e) {
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
}
let m = f;
