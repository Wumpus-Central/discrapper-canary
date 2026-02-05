"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(962125),
    o = n(927578),
    l = n(151271),
    u = n(240864),
    c = n(887695),
    d = n(198743);
let _ = 20,
    f = i.forwardRef(function (e, t) {
        let {
                categories: n,
                store: a,
                hasSearchResults: u,
                listPadding: f,
                renderRow: h,
                renderSection: m,
                renderSectionHeader: g,
                renderSectionFooter: E,
                renderInspector: A,
                renderEmptySearchState: I,
                rowCount: T,
                rowCountBySection: y,
                rowHeight: S,
                sectionHeaderHeight: v,
                sectionFooterHeight: C,
                renderUpsell: b,
                onScroll: N,
            } = e,
            R = i.useRef(!1),
            O = i.useRef(null),
            D = (0, l.RQ)((e) => e.searchQuery),
            L = a.useStore((e) => e.activeCategoryIndex),
            w = i.useMemo(
                () =>
                    n.map((e) =>
                        (0, o.Em)(e.categoryInfo)
                            ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                            : { isNitroLocked: !1 },
                    ),
                [n],
            ),
            x = (0, c.Fk)({
                activeCategoryIndex: L,
                isScrolling: R,
                listRef: O,
                onActiveCategoryIndexChange: a.setActiveCategoryIndex,
                scrollOffset: _,
                searchQuery: D,
            }),
            P = i.useCallback(
                (e) => {
                    x(e), p({ listRef: O, searchQuery: D, nitroLockedSectionStates: w, scrollTop: e }), N?.(e);
                },
                [x, D, w, N],
            );
        return (
            i.useEffect(() => {
                null != O.current && P(0);
            }, [P, O]),
            (0, c.FV)({ searchQuery: D, activeCategoryIndex: L, listRef: O }),
            i.useImperativeHandle(
                t,
                () => ({
                    scrollTo: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return O.current?.scrollTo(...t);
                    },
                    getRowDescriptors: () => O.current?.getRowDescriptors() ?? [],
                    getSectionDescriptors: () => O.current?.getSectionDescriptors() ?? [],
                    scrollToSectionTop: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return O.current?.scrollToSectionTop(...t);
                    },
                    scrollRowIntoView: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return O.current?.scrollRowIntoView(...t);
                    },
                    getScrollerNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return O.current?.getScrollerNode(...t);
                    },
                    scrollIntoViewNode: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return O.current?.scrollIntoViewNode(...t);
                    },
                    getListDimensions: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return O.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
                    },
                }),
                [],
            ),
            (0, r.jsxs)("div", {
                className: d.i,
                children: [
                    D.length > 0 && !u && null != I
                        ? I()
                        : (0, r.jsx)(s.A, {
                              role: "none presentation",
                              listPadding: f,
                              onScroll: P,
                              renderRow: h,
                              renderSection: m,
                              renderSectionHeader: g,
                              renderSectionFooter: E,
                              rowCount: T,
                              rowCountBySection: y,
                              rowHeight: S,
                              sectionHeaderHeight: v,
                              sectionFooterHeight: C,
                              stickyHeaders: !0,
                              ref: O,
                          }),
                    b?.(),
                    A?.(),
                ],
            })
        );
    }),
    p = (0, a.throttle)(h, 300, { leading: !1, trailing: !0 });
function h(e) {
    let { listRef: t, searchQuery: n, nitroLockedSectionStates: r, scrollTop: i } = e;
    if (null == t.current) return;
    let a = (0, u.s)({ listRef: t, searchQuery: n, nitroLockedSectionStates: r, scrollTop: i });
    l.RQ.setState({
        isNitroLockedSectionVisible: a.isNitroLockedSectionVisible,
        areOnlyNitroLockedSectionsVisible: a.areOnlyNitroLockedSectionsVisible,
    });
}
let m = f;
