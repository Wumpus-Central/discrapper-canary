n.d(t, { Z: () => T }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(828700),
    l = n(209173),
    s = n(288385),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(374939),
    p = n(283293),
    m = n(314897),
    h = n(471518),
    g = n(493646),
    f = n(370210),
    _ = n(678694),
    b = n(177653),
    x = n(216780),
    v = n(881294),
    C = n(523311),
    j = n(797908),
    y = n(258971),
    I = n(133743),
    S = n(120549),
    P = n(188607),
    O = n(979007),
    E = n(981631),
    N = n(36523);
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        A = (0, o.e7)([m.default], () => m.default.isAuthenticated()),
        L = i.useRef(null),
        R = (0, a.TH)(),
        Z = i.useRef(null),
        {
            query: w,
            page: D,
            categoryId: k,
        } = i.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(R.search),
                r = n.get("page"),
                i = null != r ? Number(r) : 1;
            return {
                query: null != (e = n.get("q")) ? e : "",
                page: i,
                categoryId:
                    null != (t = Number(n.get("category_id"))) ? t : O.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [R.search]),
        M = (0, o.e7)([_.Z], () => _.Z.getCategories()),
        G = i.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === k)), [M, k]),
        B = i.useCallback(
            (e) => {
                (0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCHED, {
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
    i.useEffect(() => {
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
    let { fetchState: U, searchResults: F } = (0, o.cj)([b.Z], () => ({
            fetchState: b.Z.getFetchState({
                query: w,
                categoryId: k,
                page: D,
                pageSize: O.PAGE_SIZE,
                source: s.F.APP_DIRECTORY,
            }),
            searchResults: b.Z.getSearchResults({
                query: w,
                categoryId: k,
                page: D,
                pageSize: O.PAGE_SIZE,
                source: s.F.APP_DIRECTORY,
            }),
        })),
        z = (0, o.cj)([b.Z], () => {
            let e = b.Z.getSearchResults({
                query: w,
                source: s.F.APP_DIRECTORY,
            });
            return null != e
                ? (function (e) {
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
                                  var r;
                                  (r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = r);
                              });
                      }
                      return e;
                  })({ [x.MU]: e.totalCount }, e.countsByCategory)
                : {};
        }),
        H = (0, d.Z)(F),
        V = i.useMemo(() => (U === f.M.FETCHING ? H : F), [U, H, F]),
        Y = i.useCallback(
            (e) => {
                (0, I.pR)({
                    query: w,
                    categoryId: k,
                    page: e,
                });
            },
            [k, w],
        ),
        W = i.useCallback(
            (e) => {
                (0, v.zZ)(E.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
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
        X = i.useCallback(
            (e, t) => {
                (0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
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
        K = (0, g.K)();
    return (0, r.jsxs)("div", {
        className: N.container,
        children: [
            (0, r.jsx)(p.Z, {
                ref: L,
                onScroll: T,
                children: (0, r.jsxs)("div", {
                    className: N.innerContainer,
                    children: [
                        A ? null : (0, r.jsx)("div", { className: N.centeringBuffer }),
                        (0, r.jsx)(u.Z, {
                            children: (0, r.jsxs)("div", {
                                className: N.contentContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: N.topFilterContainer,
                                        children: (0, r.jsx)(S.V, {
                                            countsByCategory: z,
                                            selectedCategoryId: k,
                                            onSelectCategory: W,
                                        }),
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        loading: U === f.M.FETCHING,
                                        children:
                                            U === f.M.FETCHED &&
                                            (null == V || (null == V ? void 0 : V.results.length) === 0)
                                                ? (0, r.jsx)(P.Z, {
                                                      selectedCategoryId: null != k ? k : K.id,
                                                      searchAllCategories: () => W(K),
                                                  })
                                                : (0, r.jsx)("div", {
                                                      className: N.content,
                                                      children:
                                                          null == V
                                                              ? void 0
                                                              : V.results.map((e, t) => {
                                                                    if (e.type === l.s.APPLICATION) {
                                                                        let n = e.data;
                                                                        return (0, r.jsx)(
                                                                            j.Z,
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
                                    (0, r.jsx)(c.DsT, {
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
            (0, r.jsx)("div", {
                className: N.sideFilterContainer,
                children: (0, r.jsx)("div", {
                    className: N.sideFilterContent,
                    children: (0, r.jsx)(S.Z, {
                        countsByCategory: z,
                        selectedCategoryId: k,
                        onSelectCategory: W,
                    }),
                }),
            }),
        ],
    });
}
