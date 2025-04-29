n.d(t, { Z: () => T }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(114858),
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
    O = n(120549),
    P = n(188607),
    S = n(979007),
    E = n(981631),
    N = n(709929);
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        A = (0, o.e7)([m.default], () => m.default.isAuthenticated()),
        L = i.useRef(null),
        R = (0, a.TH)(),
        Z = i.useRef(null),
        {
            query: k,
            page: w,
            categoryId: D
        } = i.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(R.search),
                r = n.get('page'),
                i = null != r ? Number(r) : 1;
            return {
                query: null != (e = n.get('q')) ? e : '',
                page: i,
                categoryId: null != (t = Number(n.get('category_id'))) ? t : S.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [R.search]),
        M = (0, o.e7)([f.Z], () => f.Z.getCategories()),
        G = i.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === D)), [M, D]),
        z = i.useCallback(
            (e) => {
                (0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCHED, {
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
    i.useEffect(() => {
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
                    pageSize: S.PAGE_SIZE,
                    source: s.F.APP_DIRECTORY
                },
                onSuccessCallback: z
            });
    }, [D, w, k, z]);
    let { fetchState: B, searchResults: U } = (0, o.cj)([b.Z], () => ({
            fetchState: b.Z.getFetchState({
                query: k,
                categoryId: D,
                page: w,
                pageSize: S.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            }),
            searchResults: b.Z.getSearchResults({
                query: k,
                categoryId: D,
                page: w,
                pageSize: S.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            })
        })),
        F = (0, o.cj)([b.Z], () => {
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
        V = (0, d.Z)(U),
        H = i.useMemo(() => (B === _.M.FETCHING ? V : U), [B, V, U]),
        Y = i.useCallback(
            (e) => {
                (0, I.pR)({
                    query: k,
                    categoryId: D,
                    page: e
                });
            },
            [D, k]
        ),
        W = i.useCallback(
            (e) => {
                (0, v.zZ)(E.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
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
        X = i.useCallback(
            (e, t) => {
                (0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.m_.SEARCH,
                    application_id: e,
                    load_id: null == H ? void 0 : H.loadId,
                    search_term: k,
                    position: t
                }),
                    n(e);
            },
            [null == H ? void 0 : H.loadId, n, k]
        ),
        q = (0, g.K)();
    return (0, r.jsxs)('div', {
        className: N.container,
        children: [
            (0, r.jsx)(p.Z, {
                ref: L,
                onScroll: T,
                children: (0, r.jsxs)('div', {
                    className: N.innerContainer,
                    children: [
                        A ? null : (0, r.jsx)('div', { className: N.centeringBuffer }),
                        (0, r.jsx)(u.Z, {
                            children: (0, r.jsxs)('div', {
                                className: N.contentContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: N.topFilterContainer,
                                        children: (0, r.jsx)(O.V, {
                                            countsByCategory: F,
                                            selectedCategoryId: D,
                                            onSelectCategory: W
                                        })
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        loading: B === _.M.FETCHING,
                                        children:
                                            B === _.M.FETCHED && (null == H || (null == H ? void 0 : H.results.length) === 0)
                                                ? (0, r.jsx)(P.Z, {
                                                      selectedCategoryId: null != D ? D : q.id,
                                                      searchAllCategories: () => W(q)
                                                  })
                                                : (0, r.jsx)('div', {
                                                      className: N.content,
                                                      children:
                                                          null == H
                                                              ? void 0
                                                              : H.results.map((e, t) => {
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
                                        className: N.paginationInput,
                                        totalCount: Math.min((null != (t = null == H ? void 0 : H.totalPages) ? t : 0) * S.PAGE_SIZE, S.MAX_PAGES * S.PAGE_SIZE),
                                        pageSize: S.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: w,
                                        onPageChange: Y
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, r.jsx)('div', {
                className: N.sideFilterContainer,
                children: (0, r.jsx)('div', {
                    className: N.sideFilterContent,
                    children: (0, r.jsx)(O.Z, {
                        countsByCategory: F,
                        selectedCategoryId: D,
                        onSelectCategory: W
                    })
                })
            })
        ]
    });
}
