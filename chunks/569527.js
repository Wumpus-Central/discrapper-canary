n.d(t, { Z: () => T }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(200651),
    a = n(192379),
    i = n(512969),
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
    _ = n(370210),
    f = n(678694),
    b = n(177653),
    x = n(216780),
    v = n(881294),
    C = n(523311),
    j = n(797908),
    y = n(258971),
    I = n(133743),
    N = n(120549),
    O = n(188607),
    P = n(979007),
    S = n(981631),
    E = n(709929);
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        A = (0, o.e7)([m.default], () => m.default.isAuthenticated()),
        L = a.useRef(null),
        R = (0, i.TH)(),
        Z = a.useRef(null),
        {
            query: k,
            page: w,
            categoryId: D
        } = a.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(R.search),
                r = n.get('page'),
                a = null != r ? Number(r) : 1;
            return {
                query: null != (e = n.get('q')) ? e : '',
                page: a,
                categoryId: null != (t = Number(n.get('category_id'))) ? t : P.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [R.search]),
        M = (0, o.e7)([f.Z], () => f.Z.getCategories()),
        G = a.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === D)), [M, D]),
        z = a.useCallback(
            (e) => {
                (0, v.zZ)(S.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: k,
                    num_results: e,
                    current_page: y.m_.SEARCH,
                    result_page: w,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id
                });
            },
            [k, w, null == G ? void 0 : G.name, null == G ? void 0 : G.id]
        );
    a.useEffect(() => {
        var e;
        null == (e = L.current) || e.scrollTo({ to: 0 }),
            k !== Z.current &&
                ((Z.current = k),
                h.yC({
                    query: k,
                    options: { source: s.F.APP_DIRECTORY }
                })),
            h.yC({
                query: k,
                options: {
                    categoryId: D,
                    page: w,
                    pageSize: P.PAGE_SIZE,
                    source: s.F.APP_DIRECTORY
                },
                onSuccessCallback: z
            });
    }, [D, w, k, z]);
    let { fetchState: B, searchResults: W } = (0, o.cj)([b.Z], () => ({
            fetchState: b.Z.getFetchState({
                query: k,
                categoryId: D,
                page: w,
                pageSize: P.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            }),
            searchResults: b.Z.getSearchResults({
                query: k,
                categoryId: D,
                page: w,
                pageSize: P.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            })
        })),
        U = (0, o.cj)([b.Z], () => {
            let e = b.Z.getSearchResults({
                query: k,
                source: s.F.APP_DIRECTORY
            });
            return null != e
                ? (function (e) {
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
                                  var r;
                                  (r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[t] = r);
                              });
                      }
                      return e;
                  })({ [x.MU]: e.totalCount }, e.countsByCategory)
                : {};
        }),
        F = (0, d.Z)(W),
        V = a.useMemo(() => (B === _.M.FETCHING ? F : W), [B, F, W]),
        H = a.useCallback(
            (e) => {
                (0, I.pR)({
                    query: k,
                    categoryId: D,
                    page: e
                });
            },
            [D, k]
        ),
        Y = a.useCallback(
            (e) => {
                (0, v.zZ)(S.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: y.m_.SEARCH
                }),
                    (0, I.pR)({
                        query: k,
                        categoryId: e.id
                    });
            },
            [k]
        ),
        X = a.useCallback(
            (e, t) => {
                (0, v.zZ)(S.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.m_.SEARCH,
                    application_id: e,
                    load_id: null == V ? void 0 : V.loadId,
                    search_term: k,
                    position: t
                }),
                    n(e);
            },
            [null == V ? void 0 : V.loadId, n, k]
        ),
        q = (0, g.K)();
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsx)(p.Z, {
                ref: L,
                onScroll: T,
                children: (0, r.jsxs)('div', {
                    className: E.innerContainer,
                    children: [
                        A ? null : (0, r.jsx)('div', { className: E.centeringBuffer }),
                        (0, r.jsx)(u.Z, {
                            children: (0, r.jsxs)('div', {
                                className: E.contentContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.topFilterContainer,
                                        children: (0, r.jsx)(N.V, {
                                            countsByCategory: U,
                                            selectedCategoryId: D,
                                            onSelectCategory: Y
                                        })
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        loading: B === _.M.FETCHING,
                                        children:
                                            B === _.M.FETCHED && (null == V || (null == V ? void 0 : V.results.length) === 0)
                                                ? (0, r.jsx)(O.Z, {
                                                      selectedCategoryId: null != D ? D : q.id,
                                                      searchAllCategories: () => Y(q)
                                                  })
                                                : (0, r.jsx)('div', {
                                                      className: E.content,
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
                                                                                showCategory: !0
                                                                            },
                                                                            n.id
                                                                        );
                                                                    }
                                                                    return null;
                                                                })
                                                  })
                                    }),
                                    (0, r.jsx)(c.DsT, {
                                        className: E.paginationInput,
                                        totalCount: Math.min((null != (t = null == V ? void 0 : V.totalPages) ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
                                        pageSize: P.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: w,
                                        onPageChange: H
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, r.jsx)('div', {
                className: E.sideFilterContainer,
                children: (0, r.jsx)('div', {
                    className: E.sideFilterContent,
                    children: (0, r.jsx)(N.Z, {
                        countsByCategory: U,
                        selectedCategoryId: D,
                        onSelectCategory: Y
                    })
                })
            })
        ]
    });
}
