r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(28546),
    s = r(98528),
    l = r(429155),
    u = r(810462),
    c = r(252084);
function d(e) {
    let { categories: n, collapsedCategories: r, containerWidth: d, store: f, onSelectItem: p, onSearchExpressions: h, hasSearchResults: _, defaultSearchPlaceholder: m, emptySearchPlaceholder: g, renderEmptyState: E, renderRow: v, renderSection: y, renderSectionHeader: b, renderSectionFooter: I, renderInspector: T, renderEmptySearchState: S, renderCategoryList: A, renderHeaderAccessories: C, rowHeight: N, sectionHeaderHeight: R, sectionFooterHeight: O, itemNodeWidth: D, listPaddingRight: L, itemNodeMargin: x, listPadding: w, gridNavigatorId: P, gridNotice: M, renderHeader: k, renderUpsell: U, setShowUpsell: B } = e,
        G = a.useRef(null),
        Z = a.useRef(null),
        F = a.useRef(null),
        V = 0 === n.length,
        j = (0, o.Iu)((e) => e.searchQuery),
        H = f.useStore((e) => e.inspectedExpressionPosition),
        Y = (0, s.ep)({
            gridWrapperRef: G,
            containerWidth: d,
            showingEmptyState: V
        }),
        {
            expressionsGrid: W,
            rowCount: K,
            rowCountBySection: z,
            columnCounts: q,
            gutterWidth: Q
        } = (0, s.yi)({
            categories: n,
            collapsedCategories: r,
            gridWidth: Y,
            listPaddingRight: L,
            itemNodeWidth: D,
            itemNodeMargin: x
        }),
        {
            getItemProps: X,
            getRowProps: J,
            gridContainerProps: $,
            handleGridContainerKeyDown: ee,
            isUsingKeyboardNavigation: et
        } = (0, s.t$)({
            columnCounts: q,
            expressionsListRef: Z,
            expressionsGrid: W,
            onSelectItem: p,
            store: f,
            gridNavigatorId: P
        }),
        en = a.useCallback(
            (e, n) =>
                v(
                    W[e],
                    J(e),
                    {
                        isUsingKeyboardNavigation: et.current,
                        gutterWidth: Q,
                        rowIndex: e,
                        totalRowCount: K,
                        sectionIndex: n.sectionIndex
                    },
                    (n) => X(e, n),
                    (n) => f.setInspectedExpressionPosition(n, e)
                ),
            [W, X, J, Q, et, v, f, K]
        ),
        er = a.useCallback((e) => (null == y ? void 0 : y(n[e])), [n, y]),
        ei = a.useCallback((e) => (null == b ? void 0 : b(n[e], e)), [n, b]),
        ea = a.useCallback((e) => (null == I ? void 0 : I(n[e], e)), [n, I]),
        eo = a.useCallback(() => {
            var e;
            return null == T ? void 0 : T(null == W ? void 0 : null === (e = W[H.rowIndex]) || void 0 === e ? void 0 : e[H.columnIndex]);
        }, [W, H.columnIndex, H.rowIndex, T]);
    a.useEffect(() => {
        h(j);
    }, [h, j]),
        a.useEffect(() => {
            var e, n;
            f.setBottomPosition(null !== (n = null === (e = G.current) || void 0 === e ? void 0 : e.getBoundingClientRect().bottom) && void 0 !== n ? n : null);
        }),
        a.useEffect(() => f.resetStoreState, [f.resetStoreState]),
        a.useLayoutEffect(() => {
            var e;
            null === (e = F.current) || void 0 === e || e.focus();
        }, []);
    let es = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(u.Z, {
                ref: F,
                store: f,
                hasSendableExpressions: !0,
                onKeyDown: ee,
                expressionsListRef: Z,
                gridNavigatorId: P,
                defaultSearchPlaceholder: m,
                emptySearchPlaceholder: g
            }),
            null == C ? void 0 : C()
        ]
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != k
                ? k(es)
                : (0, i.jsxs)('div', {
                      className: c.header,
                      children: [' ', es, ' ']
                  }),
            V && null != E
                ? E(c.emptyState)
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          A(Z),
                          null != M &&
                              (0, i.jsx)('div', {
                                  className: c.gridNoticeWrapper,
                                  children: M
                              }),
                          (0, i.jsx)('div', {
                              ref: G,
                              className: c.listWrapper,
                              id: P,
                              ...$,
                              children:
                                  null != Y
                                      ? (0, i.jsx)(l.Z, {
                                            categories: n,
                                            ref: Z,
                                            store: f,
                                            hasSearchResults: _,
                                            listPadding: w,
                                            renderRow: en,
                                            renderSection: null != y ? er : void 0,
                                            renderSectionHeader: null != b ? ei : void 0,
                                            renderSectionFooter: null != I ? ea : void 0,
                                            renderInspector: null != T ? eo : void 0,
                                            renderEmptySearchState: S,
                                            rowCount: K,
                                            rowCountBySection: z,
                                            rowHeight: N,
                                            sectionHeaderHeight: R,
                                            sectionFooterHeight: O,
                                            renderUpsell: U,
                                            setShowUpsell: B
                                        })
                                      : null
                          })
                      ]
                  })
        ]
    });
}
