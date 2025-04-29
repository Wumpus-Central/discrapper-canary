n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(28546),
    a = n(98528),
    s = n(429155),
    l = n(810462),
    c = n(783459);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { categories: t, collapsedCategories: n, containerWidth: u, store: f, onSelectItem: p, onSearchExpressions: h, hasSearchResults: m, defaultSearchPlaceholder: g, emptySearchPlaceholder: E, renderEmptyState: b, renderRow: y, renderSection: O, renderSectionHeader: v, renderSectionFooter: I, renderInspector: S, renderEmptySearchState: T, renderCategoryList: A, renderHeaderAccessories: N, rowHeight: C, sectionHeaderHeight: R, sectionFooterHeight: P, itemNodeWidth: w, listPaddingRight: D, itemNodeMargin: L, listPadding: x, gridNavigatorId: M, gridNotice: k, renderHeader: j, renderUpsell: U, setShowUpsell: G } = e,
        B = i.useRef(null),
        V = i.useRef(null),
        F = i.useRef(null),
        Z = 0 === t.length,
        H = (0, o.Iu)((e) => e.searchQuery),
        Y = f.useStore((e) => e.inspectedExpressionPosition),
        W = (0, a.ep)({
            gridWrapperRef: B,
            containerWidth: u,
            showingEmptyState: Z
        }),
        {
            expressionsGrid: K,
            rowCount: z,
            rowCountBySection: q,
            columnCounts: Q,
            gutterWidth: X
        } = (0, a.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: W,
            listPaddingRight: D,
            itemNodeWidth: w,
            itemNodeMargin: L
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: ee,
            handleGridContainerKeyDown: et,
            isUsingKeyboardNavigation: en
        } = (0, a.t$)({
            columnCounts: Q,
            expressionsListRef: V,
            expressionsGrid: K,
            onSelectItem: p,
            store: f,
            gridNavigatorId: M
        }),
        er = i.useCallback(
            (e, t) =>
                y(
                    K[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: en.current,
                        gutterWidth: X,
                        rowIndex: e,
                        totalRowCount: z,
                        sectionIndex: t.sectionIndex
                    },
                    (t) => J(e, t),
                    (t) => f.setInspectedExpressionPosition(t, e)
                ),
            [K, J, $, X, en, y, f, z]
        ),
        ei = i.useCallback((e) => (null == O ? void 0 : O(t[e])), [t, O]),
        eo = i.useCallback((e) => (null == v ? void 0 : v(t[e], e)), [t, v]),
        ea = i.useCallback((e) => (null == I ? void 0 : I(t[e], e)), [t, I]),
        es = i.useCallback(() => {
            var e;
            return null == S ? void 0 : S(null == K || null == (e = K[Y.rowIndex]) ? void 0 : e[Y.columnIndex]);
        }, [K, Y.columnIndex, Y.rowIndex, S]);
    i.useEffect(() => {
        h(H);
    }, [h, H]),
        i.useEffect(() => {
            var e, t;
            f.setBottomPosition(null != (t = null == (e = B.current) ? void 0 : e.getBoundingClientRect().bottom) ? t : null);
        }),
        i.useEffect(() => f.resetStoreState, [f.resetStoreState]),
        i.useLayoutEffect(() => {
            var e;
            null == (e = F.current) || e.focus();
        }, []);
    let el = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                ref: F,
                store: f,
                hasSendableExpressions: !0,
                onKeyDown: et,
                expressionsListRef: V,
                gridNavigatorId: M,
                defaultSearchPlaceholder: g,
                emptySearchPlaceholder: E
            }),
            null == N ? void 0 : N()
        ]
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != j
                ? j(el)
                : (0, r.jsxs)('div', {
                      className: c.header,
                      children: [' ', el, ' ']
                  }),
            Z && null != b
                ? b(c.emptyState)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          A(V),
                          null != k &&
                              (0, r.jsx)('div', {
                                  className: c.gridNoticeWrapper,
                                  children: k
                              }),
                          (0, r.jsx)(
                              'div',
                              _(
                                  d(
                                      {
                                          ref: B,
                                          className: c.listWrapper,
                                          id: M
                                      },
                                      ee
                                  ),
                                  {
                                      children:
                                          null != W
                                              ? (0, r.jsx)(s.Z, {
                                                    categories: t,
                                                    ref: V,
                                                    store: f,
                                                    hasSearchResults: m,
                                                    listPadding: x,
                                                    renderRow: er,
                                                    renderSection: null != O ? ei : void 0,
                                                    renderSectionHeader: null != v ? eo : void 0,
                                                    renderSectionFooter: null != I ? ea : void 0,
                                                    renderInspector: null != S ? es : void 0,
                                                    renderEmptySearchState: T,
                                                    rowCount: z,
                                                    rowCountBySection: q,
                                                    rowHeight: C,
                                                    sectionHeaderHeight: R,
                                                    sectionFooterHeight: P,
                                                    renderUpsell: U,
                                                    setShowUpsell: G
                                                })
                                              : null
                                  }
                              )
                          )
                      ]
                  })
        ]
    });
}
