"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(962125),
    a = n(927578),
    o = n(151271),
    c = n(240864),
    u = n(887695),
    d = n(711548);
let h = l.forwardRef(function (e, t) {
        let {
                categories: n,
                store: s,
                hasSearchResults: c,
                listPadding: h,
                renderRow: p,
                renderSection: f,
                renderSectionHeader: g,
                renderSectionFooter: _,
                renderInspector: x,
                renderEmptySearchState: A,
                rowCount: C,
                rowCountBySection: E,
                rowHeight: I,
                sectionHeaderHeight: v,
                sectionFooterHeight: y,
                renderUpsell: S,
                onScroll: b,
            } = e,
            N = l.useRef(!1),
            T = l.useRef(null),
            j = (0, o.RQ)((e) => e.searchQuery),
            R = s.useStore((e) => e.activeCategoryIndex),
            w = l.useMemo(
                () =>
                    n.map((e) =>
                        (0, a.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            L = (0, u.Fk)({
                activeCategoryIndex: R,
                isScrolling: N,
                listRef: T,
                onActiveCategoryIndexChange: s.setActiveCategoryIndex,
                scrollOffset: 20,
                searchQuery: j,
            }),
            M = l.useCallback(
                (e) => {
                    L(e),
                        m({
                            listRef: T,
                            searchQuery: j,
                            nitroLockedSectionStates: w,
                            scrollTop: e,
                            sectionHeaderHeight: v,
                            sectionFooterHeight: y,
                        }),
                        b?.(e);
                },
                [L, j, w, v, y, b],
            );
        return (
            l.useEffect(() => {
                null != T.current && M(T.current.getScrollerNode()?.scrollTop ?? 0);
            }, [M, T]),
            (0, u.FV)({ searchQuery: j, activeCategoryIndex: R, listRef: T }),
            l.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => T.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => T.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return T.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, i.jsxs)("div", {
                className: d.i,
                children: [
                    j.length > 0 && !c && null != A
                        ? A()
                        : (0, i.jsx)(r.A, {
                              role: "none presentation",
                              listPadding: h,
                              onScroll: M,
                              renderRow: p,
                              renderSection: f,
                              renderSectionHeader: g,
                              renderSectionFooter: _,
                              rowCount: C,
                              rowCountBySection: E,
                              rowHeight: I,
                              sectionHeaderHeight: v,
                              sectionFooterHeight: y,
                              stickyHeaders: !0,
                              ref: T,
                          }),
                    S?.(),
                    x?.(),
                ],
            })
        );
    }),
    m = (0, s.throttle)(
        function (e) {
            let {
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: l,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            } = e;
            if (null == t.current) return;
            let a = (0, c.s)({
                listRef: t,
                searchQuery: n,
                nitroLockedSectionStates: i,
                scrollTop: l,
                sectionHeaderHeight: s,
                sectionFooterHeight: r,
            });
            o.RQ.setState({
                isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
                areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
            });
        },
        300,
        { leading: !1, trailing: !0 },
    ),
    p = h;
