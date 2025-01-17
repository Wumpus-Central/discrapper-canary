r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(28546),
    o = r(98528),
    l = r(429155),
    u = r(810462),
    c = r(252084);
function d(e) {
    let { categories: n, collapsedCategories: r, containerWidth: d, store: f, onSelectItem: _, onSearchExpressions: h, hasSearchResults: p, defaultSearchPlaceholder: m, emptySearchPlaceholder: g, renderEmptyState: E, renderRow: v, renderSection: I, renderSectionHeader: T, renderSectionFooter: b, renderInspector: y, renderEmptySearchState: S, renderCategoryList: A, renderHeaderAccessories: N, rowHeight: C, sectionHeaderHeight: R, sectionFooterHeight: O, itemNodeWidth: D, listPaddingRight: L, itemNodeMargin: x, listPadding: w, gridNavigatorId: P, gridNotice: M, renderHeader: k, renderUpsell: U, setShowUpsell: B } = e,
        G = a.useRef(null),
        Z = a.useRef(null),
        F = a.useRef(null),
        V = 0 === n.length,
        j = (0, s.Iu)((e) => e.searchQuery),
        H = f.useStore((e) => e.inspectedExpressionPosition),
        Y = (0, o.ep)({
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
        } = (0, o.yi)({
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
        } = (0, o.t$)({
            columnCounts: q,
            expressionsListRef: Z,
            expressionsGrid: W,
            onSelectItem: _,
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
        er = a.useCallback((e) => (null == I ? void 0 : I(n[e])), [n, I]),
        ei = a.useCallback((e) => (null == T ? void 0 : T(n[e], e)), [n, T]),
        ea = a.useCallback((e) => (null == b ? void 0 : b(n[e], e)), [n, b]),
        es = a.useCallback(() => {
            var e;
            return null == y ? void 0 : y(null == W ? void 0 : null === (e = W[H.rowIndex]) || void 0 === e ? void 0 : e[H.columnIndex]);
        }, [W, H.columnIndex, H.rowIndex, y]);
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
    let eo = (0, i.jsxs)(i.Fragment, {
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
            null == N ? void 0 : N()
        ]
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != k
                ? k(eo)
                : (0, i.jsxs)('div', {
                      className: c.header,
                      children: [' ', eo, ' ']
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
                                            hasSearchResults: p,
                                            listPadding: w,
                                            renderRow: en,
                                            renderSection: null != I ? er : void 0,
                                            renderSectionHeader: null != T ? ei : void 0,
                                            renderSectionFooter: null != b ? ea : void 0,
                                            renderInspector: null != y ? es : void 0,
                                            renderEmptySearchState: S,
                                            rowCount: K,
                                            rowCountBySection: z,
                                            rowHeight: C,
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
