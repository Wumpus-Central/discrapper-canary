n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(28546),
    o = n(98528),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { categories: t, collapsedCategories: n, containerWidth: u, store: _, onSelectItem: p, onSearchExpressions: h, hasSearchResults: m, defaultSearchPlaceholder: g, emptySearchPlaceholder: E, renderEmptyState: b, renderRow: y, renderSection: O, renderSectionHeader: v, renderSectionFooter: I, renderInspector: T, renderEmptySearchState: S, renderCategoryList: A, renderHeaderAccessories: N, rowHeight: C, sectionHeaderHeight: R, sectionFooterHeight: P, itemNodeWidth: w, listPaddingRight: D, itemNodeMargin: L, listPadding: x, gridNavigatorId: M, gridNotice: k, renderHeader: j, renderUpsell: U } = e,
        G = i.useRef(null),
        B = i.useRef(null),
        V = i.useRef(null),
        F = 0 === t.length,
        Z = (0, a.Iu)((e) => e.searchQuery),
        H = _.useStore((e) => e.inspectedExpressionPosition),
        Y = (0, o.ep)({
            gridWrapperRef: G,
            containerWidth: u,
            showingEmptyState: F
        }),
        {
            expressionsGrid: W,
            rowCount: K,
            rowCountBySection: z,
            columnCounts: q,
            gutterWidth: X
        } = (0, o.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: Y,
            listPaddingRight: D,
            itemNodeWidth: w,
            itemNodeMargin: L
        }),
        {
            getItemProps: Q,
            getRowProps: J,
            gridContainerProps: $,
            handleGridContainerKeyDown: ee,
            isUsingKeyboardNavigation: et
        } = (0, o.t$)({
            columnCounts: q,
            expressionsListRef: B,
            expressionsGrid: W,
            onSelectItem: p,
            store: _,
            gridNavigatorId: M
        }),
        en = i.useCallback(
            (e, t) =>
                y(
                    W[e],
                    J(e),
                    {
                        isUsingKeyboardNavigation: et.current,
                        gutterWidth: X,
                        rowIndex: e,
                        totalRowCount: K,
                        sectionIndex: t.sectionIndex
                    },
                    (t) => Q(e, t),
                    (t) => _.setInspectedExpressionPosition(t, e)
                ),
            [W, Q, J, X, et, y, _, K]
        ),
        er = i.useCallback((e) => (null == O ? void 0 : O(t[e])), [t, O]),
        ei = i.useCallback((e) => (null == v ? void 0 : v(t[e], e)), [t, v]),
        ea = i.useCallback((e) => (null == I ? void 0 : I(t[e], e)), [t, I]),
        eo = i.useCallback(() => {
            var e;
            return null == T ? void 0 : T(null == W || null == (e = W[H.rowIndex]) ? void 0 : e[H.columnIndex]);
        }, [W, H.columnIndex, H.rowIndex, T]);
    (i.useEffect(() => {
        h(Z);
    }, [h, Z]),
        i.useEffect(() => {
            var e, t;
            _.setBottomPosition(null != (t = null == (e = G.current) ? void 0 : e.getBoundingClientRect().bottom) ? t : null);
        }),
        i.useEffect(() => _.resetStoreState, [_.resetStoreState]),
        i.useLayoutEffect(() => {
            var e;
            null == (e = V.current) || e.focus();
        }, []));
    let es = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                ref: V,
                store: _,
                hasSendableExpressions: !0,
                onKeyDown: ee,
                expressionsListRef: B,
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
                ? j(es)
                : (0, r.jsxs)('div', {
                      className: c.header,
                      children: [' ', es, ' ']
                  }),
            F && null != b
                ? b(c.emptyState)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          A(B),
                          null != k &&
                              (0, r.jsx)('div', {
                                  className: c.gridNoticeWrapper,
                                  children: k
                              }),
                          (0, r.jsx)(
                              'div',
                              f(
                                  d(
                                      {
                                          ref: G,
                                          className: c.listWrapper,
                                          id: M
                                      },
                                      $
                                  ),
                                  {
                                      children:
                                          null != Y
                                              ? (0, r.jsx)(s.Z, {
                                                    categories: t,
                                                    ref: B,
                                                    store: _,
                                                    hasSearchResults: m,
                                                    listPadding: x,
                                                    renderRow: en,
                                                    renderSection: null != O ? er : void 0,
                                                    renderSectionHeader: null != v ? ei : void 0,
                                                    renderSectionFooter: null != I ? ea : void 0,
                                                    renderInspector: null != T ? eo : void 0,
                                                    renderEmptySearchState: S,
                                                    rowCount: K,
                                                    rowCountBySection: z,
                                                    rowHeight: C,
                                                    sectionHeaderHeight: R,
                                                    sectionFooterHeight: P,
                                                    renderUpsell: U
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
