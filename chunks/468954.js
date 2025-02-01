n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(28546),
    s = n(98528),
    o = n(429155),
    l = n(810462),
    u = n(252084);
function c(e) {
    let { categories: t, collapsedCategories: n, containerWidth: c, store: d, onSelectItem: f, onSearchExpressions: _, hasSearchResults: p, defaultSearchPlaceholder: h, emptySearchPlaceholder: m, renderEmptyState: g, renderRow: E, renderSection: v, renderSectionHeader: y, renderSectionFooter: I, renderInspector: T, renderEmptySearchState: b, renderCategoryList: S, renderHeaderAccessories: A, rowHeight: N, sectionHeaderHeight: C, sectionFooterHeight: R, itemNodeWidth: O, listPaddingRight: D, itemNodeMargin: x, listPadding: L, gridNavigatorId: P, gridNotice: w, renderHeader: M, renderUpsell: k, setShowUpsell: U } = e,
        G = r.useRef(null),
        B = r.useRef(null),
        Z = r.useRef(null),
        F = 0 === t.length,
        V = (0, a.Iu)((e) => e.searchQuery),
        j = d.useStore((e) => e.inspectedExpressionPosition),
        H = (0, s.ep)({
            gridWrapperRef: G,
            containerWidth: c,
            showingEmptyState: F
        }),
        {
            expressionsGrid: Y,
            rowCount: W,
            rowCountBySection: K,
            columnCounts: z,
            gutterWidth: q
        } = (0, s.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: D,
            itemNodeWidth: O,
            itemNodeMargin: x
        }),
        {
            getItemProps: Q,
            getRowProps: X,
            gridContainerProps: J,
            handleGridContainerKeyDown: $,
            isUsingKeyboardNavigation: ee
        } = (0, s.t$)({
            columnCounts: z,
            expressionsListRef: B,
            expressionsGrid: Y,
            onSelectItem: f,
            store: d,
            gridNavigatorId: P
        }),
        et = r.useCallback(
            (e, t) =>
                E(
                    Y[e],
                    X(e),
                    {
                        isUsingKeyboardNavigation: ee.current,
                        gutterWidth: q,
                        rowIndex: e,
                        totalRowCount: W,
                        sectionIndex: t.sectionIndex
                    },
                    (t) => Q(e, t),
                    (t) => d.setInspectedExpressionPosition(t, e)
                ),
            [Y, Q, X, q, ee, E, d, W]
        ),
        en = r.useCallback((e) => (null == v ? void 0 : v(t[e])), [t, v]),
        ei = r.useCallback((e) => (null == y ? void 0 : y(t[e], e)), [t, y]),
        er = r.useCallback((e) => (null == I ? void 0 : I(t[e], e)), [t, I]),
        ea = r.useCallback(() => {
            var e;
            return null == T ? void 0 : T(null == Y ? void 0 : null === (e = Y[j.rowIndex]) || void 0 === e ? void 0 : e[j.columnIndex]);
        }, [Y, j.columnIndex, j.rowIndex, T]);
    r.useEffect(() => {
        _(V);
    }, [_, V]),
        r.useEffect(() => {
            var e, t;
            d.setBottomPosition(null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) && void 0 !== t ? t : null);
        }),
        r.useEffect(() => d.resetStoreState, [d.resetStoreState]),
        r.useLayoutEffect(() => {
            var e;
            null === (e = Z.current) || void 0 === e || e.focus();
        }, []);
    let es = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Z, {
                ref: Z,
                store: d,
                hasSendableExpressions: !0,
                onKeyDown: $,
                expressionsListRef: B,
                gridNavigatorId: P,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: m
            }),
            null == A ? void 0 : A()
        ]
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != M
                ? M(es)
                : (0, i.jsxs)('div', {
                      className: u.header,
                      children: [' ', es, ' ']
                  }),
            F && null != g
                ? g(u.emptyState)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          S(B),
                          null != w &&
                              (0, i.jsx)('div', {
                                  className: u.gridNoticeWrapper,
                                  children: w
                              }),
                          (0, i.jsx)('div', {
                              ref: G,
                              className: u.listWrapper,
                              id: P,
                              ...J,
                              children:
                                  null != H
                                      ? (0, i.jsx)(o.Z, {
                                            categories: t,
                                            ref: B,
                                            store: d,
                                            hasSearchResults: p,
                                            listPadding: L,
                                            renderRow: et,
                                            renderSection: null != v ? en : void 0,
                                            renderSectionHeader: null != y ? ei : void 0,
                                            renderSectionFooter: null != I ? er : void 0,
                                            renderInspector: null != T ? ea : void 0,
                                            renderEmptySearchState: b,
                                            rowCount: W,
                                            rowCountBySection: K,
                                            rowHeight: N,
                                            sectionHeaderHeight: C,
                                            sectionFooterHeight: R,
                                            renderUpsell: k,
                                            setShowUpsell: U
                                        })
                                      : null
                          })
                      ]
                  })
        ]
    });
}
