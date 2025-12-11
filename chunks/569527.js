n.d(t, { Z: () => T }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
    i = n(828700),
    l = n(209173),
    s = n(288385),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(374939),
    p = n(283293),
    m = n(314897),
    h = n(471518),
    f = n(493646),
    b = n(370210),
    g = n(678694),
    x = n(177653),
    v = n(216780),
    C = n(881294),
    j = n(523311),
    _ = n(797908),
    y = n(258971),
    I = n(133743),
    S = n(120549),
    P = n(188607),
    O = n(979007),
    E = n(981631),
    N = n(843931);
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        A = (0, o.e7)([m.default], () => m.default.isAuthenticated()),
        L = r.useRef(null),
        R = (0, i.TH)(),
        Z = r.useRef(null),
        {
            query: w,
            page: D,
            categoryId: k,
        } = r.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(R.search),
                a = n.get("page"),
                r = null != a ? Number(a) : 1;
            return {
                query: null != (e = n.get("q")) ? e : "",
                page: r,
                categoryId:
                    null != (t = Number(n.get("category_id"))) ? t : O.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [R.search]),
        M = (0, o.e7)([g.Z], () => g.Z.getCategories()),
        G = r.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === k)), [M, k]),
        B = r.useCallback(
            (e) => {
                (0, C.zZ)(E.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: w,
                    num_results: e,
                    current_page: y.m_.SEARCH,
                    result_page: D,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id,
                });
            },
            [w, D, null == G ? void 0 : G.name, null == G ? void 0 : G.id],
        );
    r.useEffect(() => {
        var e;
        null == (e = L.current) || e.scrollTo({ to: 0 }),
            w !== Z.current &&
                ((Z.current = w),
                h.yC({
                    query: w,
                    options: { source: s.F.APP_DIRECTORY },
                })),
            h.yC({
                query: w,
                options: {
                    categoryId: k,
                    page: D,
                    pageSize: O.PAGE_SIZE,
                    source: s.F.APP_DIRECTORY,
                },
                onSuccessCallback: B,
            });
    }, [k, D, w, B]);
    let { fetchState: U, searchResults: F } = (0, o.cj)([x.Z], () => ({
            fetchState: x.Z.getFetchState({
                query: w,
                categoryId: k,
                page: D,
                pageSize: O.PAGE_SIZE,
                source: s.F.APP_DIRECTORY,
            }),
            searchResults: x.Z.getSearchResults({
                query: w,
                categoryId: k,
                page: D,
                pageSize: O.PAGE_SIZE,
                source: s.F.APP_DIRECTORY,
            }),
        })),
        H = (0, o.cj)([x.Z], () => {
            let e = x.Z.getSearchResults({
                query: w,
                source: s.F.APP_DIRECTORY,
            });
            return null != e
                ? (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              a = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (a = a.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  }),
                              )),
                              a.forEach(function (t) {
                                  var a;
                                  (a = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: a,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = a);
                              });
                      }
                      return e;
                  })({ [v.MU]: e.totalCount }, e.countsByCategory)
                : {};
        }),
        z = (0, d.Z)(F),
        V = r.useMemo(() => (U === b.M.FETCHING ? z : F), [U, z, F]),
        Y = r.useCallback(
            (e) => {
                (0, I.pR)({
                    query: w,
                    categoryId: k,
                    page: e,
                });
            },
            [k, w],
        ),
        W = r.useCallback(
            (e) => {
                (0, C.zZ)(E.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: y.m_.SEARCH,
                }),
                    (0, I.pR)({
                        query: w,
                        categoryId: e.id,
                    });
            },
            [w],
        ),
        X = r.useCallback(
            (e, t) => {
                (0, C.zZ)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.m_.SEARCH,
                    application_id: e,
                    load_id: null == V ? void 0 : V.loadId,
                    search_term: w,
                    position: t,
                }),
                    n(e);
            },
            [null == V ? void 0 : V.loadId, n, w],
        ),
        K = (0, f.K)();
    return (0, a.jsxs)("div", {
        className: N.container,
        children: [
            (0, a.jsx)(p.Z, {
                ref: L,
                onScroll: T,
                children: (0, a.jsxs)("div", {
                    className: N.innerContainer,
                    children: [
                        A ? null : (0, a.jsx)("div", { className: N.centeringBuffer }),
                        (0, a.jsx)(u.Z, {
                            children: (0, a.jsxs)("div", {
                                className: N.contentContainer,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: N.topFilterContainer,
                                        children: (0, a.jsx)(S.V, {
                                            countsByCategory: H,
                                            selectedCategoryId: k,
                                            onSelectCategory: W,
                                        }),
                                    }),
                                    (0, a.jsx)(j.Z, {
                                        loading: U === b.M.FETCHING,
                                        children:
                                            U === b.M.FETCHED &&
                                            (null == V || (null == V ? void 0 : V.results.length) === 0)
                                                ? (0, a.jsx)(P.Z, {
                                                      selectedCategoryId: null != k ? k : K.id,
                                                      searchAllCategories: () => W(K),
                                                  })
                                                : (0, a.jsx)("div", {
                                                      className: N.content,
                                                      children:
                                                          null == V
                                                              ? void 0
                                                              : V.results.map((e, t) => {
                                                                    if (e.type === l.s.APPLICATION) {
                                                                        let n = e.data;
                                                                        return (0, a.jsx)(
                                                                            _.Z,
                                                                            {
                                                                                application: n,
                                                                                onSelectApplication: (e) => X(e, t),
                                                                                showCategory: !0,
                                                                            },
                                                                            n.id,
                                                                        );
                                                                    }
                                                                    return null;
                                                                }),
                                                  }),
                                    }),
                                    (0, a.jsx)(c.DsT, {
                                        className: N.paginationInput,
                                        totalCount: Math.min(
                                            (null != (t = null == V ? void 0 : V.totalPages) ? t : 0) * O.PAGE_SIZE,
                                            O.MAX_PAGES * O.PAGE_SIZE,
                                        ),
                                        pageSize: O.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: D,
                                        onPageChange: Y,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, a.jsx)("div", {
                className: N.sideFilterContainer,
                children: (0, a.jsx)("div", {
                    className: N.sideFilterContent,
                    children: (0, a.jsx)(S.Z, {
                        countsByCategory: H,
                        selectedCategoryId: k,
                        onSelectCategory: W,
                    }),
                }),
            }),
        ],
    });
}
