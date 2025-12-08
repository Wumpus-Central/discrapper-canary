n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(28546),
    o = n(98528),
    s = n(429155),
    l = n(810462),
    c = n(681561);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function p(e, t) {
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
function _(e) {
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: u,
            store: f,
            onSelectItem: _,
            onSearchExpressions: m,
            onScroll: h,
            hasSearchResults: g,
            defaultSearchPlaceholder: E,
            emptySearchPlaceholder: b,
            renderEmptyState: y,
            renderRow: O,
            renderSection: v,
            renderSectionHeader: S,
            renderSectionFooter: I,
            renderInspector: T,
            renderEmptySearchState: A,
            renderCategoryList: C,
            renderHeaderAccessories: N,
            rowHeight: P,
            sectionHeaderHeight: R,
            sectionFooterHeight: w,
            itemNodeWidth: D,
            listPaddingRight: x,
            itemNodeMargin: L,
            listPadding: j,
            gridNavigatorId: M,
            gridNotice: k,
            renderHeader: U,
            renderUpsell: G,
        } = e,
        Z = i.useRef(null),
        B = i.useRef(null),
        F = i.useRef(null),
        V = 0 === t.length,
        H = (0, a.Iu)((e) => e.searchQuery),
        Y = f.useStore((e) => e.inspectedExpressionPosition),
        W = (0, o.ep)({
            gridWrapperRef: Z,
            containerWidth: u,
            showingEmptyState: V,
        }),
        {
            expressionsGrid: K,
            rowCount: z,
            rowCountBySection: q,
            columnCounts: Q,
            gutterWidth: X,
        } = (0, o.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: W,
            listPaddingRight: x,
            itemNodeWidth: D,
            itemNodeMargin: L,
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: ee,
            handleGridContainerKeyDown: et,
            isUsingKeyboardNavigation: en,
        } = (0, o.t$)({
            columnCounts: Q,
            expressionsListRef: B,
            expressionsGrid: K,
            onSelectItem: _,
            store: f,
            gridNavigatorId: M,
        }),
        er = i.useCallback(
            (e, t) =>
                O(
                    K[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: en.current,
                        gutterWidth: X,
                        rowIndex: e,
                        totalRowCount: z,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => J(e, t),
                    (t) => f.setInspectedExpressionPosition(t, e),
                ),
            [K, J, $, X, en, O, f, z],
        ),
        ei = i.useCallback((e) => (null == S ? void 0 : S(t[e], e)), [t, S]),
        ea = i.useCallback((e) => (null == I ? void 0 : I(t[e], e)), [t, I]),
        eo = i.useCallback(() => {
            var e;
            return null == T ? void 0 : T(null == K || null == (e = K[Y.rowIndex]) ? void 0 : e[Y.columnIndex]);
        }, [K, Y.columnIndex, Y.rowIndex, T]);
    i.useEffect(() => {
        m(H);
    }, [m, H]),
        i.useEffect(() => {
            var e, t;
            f.setBottomPosition(
                null != (t = null == (e = Z.current) ? void 0 : e.getBoundingClientRect().bottom) ? t : null,
            );
        }),
        i.useEffect(() => f.resetStoreState, [f.resetStoreState]),
        i.useLayoutEffect(() => {
            var e;
            null == (e = F.current) || e.focus();
        }, []);
    let es = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Z, {
                ref: F,
                store: f,
                hasSendableExpressions: !0,
                onKeyDown: et,
                expressionsListRef: B,
                gridNavigatorId: M,
                defaultSearchPlaceholder: E,
                emptySearchPlaceholder: b,
            }),
            null == N ? void 0 : N(),
        ],
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != U
                ? U(es)
                : (0, r.jsxs)("div", {
                      className: c.header,
                      children: [" ", es, " "],
                  }),
            V && null != y
                ? y(c.emptyState)
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          C(B),
                          null != k &&
                              (0, r.jsx)("div", {
                                  className: c.gridNoticeWrapper,
                                  children: k,
                              }),
                          (0, r.jsx)(
                              "div",
                              p(
                                  d(
                                      {
                                          ref: Z,
                                          className: c.listWrapper,
                                          id: M,
                                      },
                                      ee,
                                  ),
                                  {
                                      children:
                                          null != W
                                              ? (0, r.jsx)(s.Z, {
                                                    categories: t,
                                                    ref: B,
                                                    store: f,
                                                    hasSearchResults: g,
                                                    listPadding: j,
                                                    renderRow: er,
                                                    renderSection: v,
                                                    renderSectionHeader: null != S ? ei : void 0,
                                                    renderSectionFooter: null != I ? ea : void 0,
                                                    renderInspector: null != T ? eo : void 0,
                                                    renderEmptySearchState: A,
                                                    rowCount: z,
                                                    rowCountBySection: q,
                                                    rowHeight: P,
                                                    sectionHeaderHeight: R,
                                                    sectionFooterHeight: w,
                                                    renderUpsell: G,
                                                    onScroll: h,
                                                })
                                              : null,
                                  },
                              ),
                          ),
                      ],
                  }),
        ],
    });
}
