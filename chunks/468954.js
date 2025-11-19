n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(28546),
    o = n(98528),
    s = n(429155),
    l = n(810462),
    c = n(181845);
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
    let {
            categories: t,
            collapsedCategories: n,
            containerWidth: u,
            store: f,
            onSelectItem: p,
            onSearchExpressions: h,
            onScroll: m,
            hasSearchResults: g,
            defaultSearchPlaceholder: E,
            emptySearchPlaceholder: b,
            renderEmptyState: y,
            renderRow: O,
            renderSection: v,
            renderSectionHeader: I,
            renderSectionFooter: T,
            renderInspector: S,
            renderEmptySearchState: A,
            renderCategoryList: C,
            renderHeaderAccessories: N,
            rowHeight: R,
            sectionHeaderHeight: P,
            sectionFooterHeight: D,
            itemNodeWidth: w,
            listPaddingRight: L,
            itemNodeMargin: x,
            listPadding: M,
            gridNavigatorId: j,
            gridNotice: k,
            renderHeader: U,
            renderUpsell: G,
        } = e,
        B = i.useRef(null),
        Z = i.useRef(null),
        F = i.useRef(null),
        V = 0 === t.length,
        H = (0, a.Iu)((e) => e.searchQuery),
        Y = f.useStore((e) => e.inspectedExpressionPosition),
        W = (0, o.ep)({
            gridWrapperRef: B,
            containerWidth: u,
            showingEmptyState: V,
        }),
        {
            expressionsGrid: K,
            rowCount: z,
            rowCountBySection: q,
            columnCounts: X,
            gutterWidth: Q,
        } = (0, o.yi)({
            categories: t,
            collapsedCategories: n,
            gridWidth: W,
            listPaddingRight: L,
            itemNodeWidth: w,
            itemNodeMargin: x,
        }),
        {
            getItemProps: J,
            getRowProps: $,
            gridContainerProps: ee,
            handleGridContainerKeyDown: et,
            isUsingKeyboardNavigation: en,
        } = (0, o.t$)({
            columnCounts: X,
            expressionsListRef: Z,
            expressionsGrid: K,
            onSelectItem: p,
            store: f,
            gridNavigatorId: j,
        }),
        er = i.useCallback(
            (e, t) =>
                O(
                    K[e],
                    $(e),
                    {
                        isUsingKeyboardNavigation: en.current,
                        gutterWidth: Q,
                        rowIndex: e,
                        totalRowCount: z,
                        sectionIndex: t.sectionIndex,
                    },
                    (t) => J(e, t),
                    (t) => f.setInspectedExpressionPosition(t, e),
                ),
            [K, J, $, Q, en, O, f, z],
        ),
        ei = i.useCallback((e) => (null == I ? void 0 : I(t[e], e)), [t, I]),
        ea = i.useCallback((e) => (null == T ? void 0 : T(t[e], e)), [t, T]),
        eo = i.useCallback(() => {
            var e;
            return null == S ? void 0 : S(null == K || null == (e = K[Y.rowIndex]) ? void 0 : e[Y.columnIndex]);
        }, [K, Y.columnIndex, Y.rowIndex, S]);
    i.useEffect(() => {
        h(H);
    }, [h, H]),
        i.useEffect(() => {
            var e, t;
            f.setBottomPosition(
                null != (t = null == (e = B.current) ? void 0 : e.getBoundingClientRect().bottom) ? t : null,
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
                expressionsListRef: Z,
                gridNavigatorId: j,
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
                          C(Z),
                          null != k &&
                              (0, r.jsx)("div", {
                                  className: c.gridNoticeWrapper,
                                  children: k,
                              }),
                          (0, r.jsx)(
                              "div",
                              _(
                                  d(
                                      {
                                          ref: B,
                                          className: c.listWrapper,
                                          id: j,
                                      },
                                      ee,
                                  ),
                                  {
                                      children:
                                          null != W
                                              ? (0, r.jsx)(s.Z, {
                                                    categories: t,
                                                    ref: Z,
                                                    store: f,
                                                    hasSearchResults: g,
                                                    listPadding: M,
                                                    renderRow: er,
                                                    renderSection: v,
                                                    renderSectionHeader: null != I ? ei : void 0,
                                                    renderSectionFooter: null != T ? ea : void 0,
                                                    renderInspector: null != S ? eo : void 0,
                                                    renderEmptySearchState: A,
                                                    rowCount: z,
                                                    rowCountBySection: q,
                                                    rowHeight: R,
                                                    sectionHeaderHeight: P,
                                                    sectionFooterHeight: D,
                                                    renderUpsell: G,
                                                    onScroll: m,
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
