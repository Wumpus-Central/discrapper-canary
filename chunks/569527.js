n.d(t, { Z: () => A }), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    i = n(192379),
    a = n(512969),
    l = n(209173),
    o = n(288385),
    s = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(674588),
    p = n(264043),
    m = n(894653),
    h = n(809547),
    g = n(34674),
    f = n(125909),
    _ = n(374939),
    v = n(283293),
    b = n(314897),
    x = n(493646),
    C = n(881294),
    j = n(797908),
    y = n(258971),
    O = n(133743),
    I = n(120549),
    N = n(188607),
    P = n(979007),
    S = n(981631),
    E = n(789295);
function A(e) {
    var t;
    let { onSelectApplication: n, onScroll: A } = e,
        T = (0, s.e7)([b.default], () => b.default.isAuthenticated()),
        L = i.useRef(null),
        w = (0, a.TH)(),
        R = i.useRef(null),
        {
            query: Z,
            page: k,
            categoryId: D
        } = i.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(w.search),
                r = n.get('page'),
                i = null != r ? Number(r) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: i,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : P.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [w.search]),
        M = (0, s.e7)([m.Z], () => m.Z.getCategories()),
        G = i.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === D)), [M, D]),
        z = i.useCallback(
            (e) => {
                (0, C.zZ)(S.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: Z,
                    num_results: e,
                    current_page: y.m_.SEARCH,
                    result_page: k,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id
                });
            },
            [Z, k, null == G ? void 0 : G.name, null == G ? void 0 : G.id]
        );
    i.useEffect(() => {
        var e;
        null === (e = L.current) || void 0 === e || e.scrollTo({ to: 0 }),
            Z !== R.current &&
                ((R.current = Z),
                u.yC({
                    query: Z,
                    options: { source: o.F.APP_DIRECTORY }
                })),
            u.yC({
                query: Z,
                options: {
                    categoryId: D,
                    page: k,
                    pageSize: P.PAGE_SIZE,
                    source: o.F.APP_DIRECTORY
                },
                onSuccessCallback: z
            });
    }, [D, k, Z, z]);
    let { fetchState: B, searchResults: W } = (0, s.cj)([h.Z], () => ({
            fetchState: h.Z.getFetchState({
                query: Z,
                categoryId: D,
                page: k,
                pageSize: P.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            }),
            searchResults: h.Z.getSearchResults({
                query: Z,
                categoryId: D,
                page: k,
                pageSize: P.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            })
        })),
        U = (0, s.cj)([h.Z], () => {
            let e = h.Z.getSearchResults({
                query: Z,
                source: o.F.APP_DIRECTORY
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
                  })({ [g.MU]: e.totalCount }, e.countsByCategory)
                : {};
        }),
        V = (0, d.Z)(W),
        F = i.useMemo(() => (B === p.M.FETCHING ? V : W), [B, V, W]),
        H = i.useCallback(
            (e) => {
                (0, O.pR)({
                    query: Z,
                    categoryId: D,
                    page: e
                });
            },
            [D, Z]
        ),
        Y = i.useCallback(
            (e) => {
                (0, C.zZ)(S.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: y.m_.SEARCH
                }),
                    (0, O.pR)({
                        query: Z,
                        categoryId: e.id
                    });
            },
            [Z]
        ),
        X = i.useCallback(
            (e, t) => {
                (0, C.zZ)(S.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.m_.SEARCH,
                    application_id: e,
                    load_id: null == F ? void 0 : F.loadId,
                    search_term: Z,
                    position: t
                }),
                    n(e);
            },
            [null == F ? void 0 : F.loadId, n, Z]
        ),
        q = (0, x.K)();
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsx)(v.Z, {
                ref: L,
                onScroll: A,
                children: (0, r.jsxs)('div', {
                    className: E.innerContainer,
                    children: [
                        T ? null : (0, r.jsx)('div', { className: E.centeringBuffer }),
                        (0, r.jsx)(_.Z, {
                            children: (0, r.jsxs)('div', {
                                className: E.contentContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.topFilterContainer,
                                        children: (0, r.jsx)(I.V, {
                                            countsByCategory: U,
                                            selectedCategoryId: D,
                                            onSelectCategory: Y
                                        })
                                    }),
                                    (0, r.jsx)(f.Z, {
                                        loading: B === p.M.FETCHING,
                                        children:
                                            B === p.M.FETCHED && (null == F || (null == F ? void 0 : F.results.length) === 0)
                                                ? (0, r.jsx)(N.Z, {
                                                      selectedCategoryId: null != D ? D : q.id,
                                                      searchAllCategories: () => Y(q)
                                                  })
                                                : (0, r.jsx)('div', {
                                                      className: E.content,
                                                      children:
                                                          null == F
                                                              ? void 0
                                                              : F.results.map((e, t) => {
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
                                        totalCount: Math.min((null !== (t = null == F ? void 0 : F.totalPages) && void 0 !== t ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
                                        pageSize: P.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: k,
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
                    children: (0, r.jsx)(I.Z, {
                        countsByCategory: U,
                        selectedCategoryId: D,
                        onSelectCategory: Y
                    })
                })
            })
        ]
    });
}
