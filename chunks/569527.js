n.d(t, { Z: () => T }), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(512969),
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
    _ = n(125909),
    f = n(374939),
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
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        A = (0, s.e7)([b.default], () => b.default.isAuthenticated()),
        L = a.useRef(null),
        R = (0, i.TH)(),
        Z = a.useRef(null),
        {
            query: w,
            page: k,
            categoryId: D
        } = a.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(R.search),
                r = n.get('page'),
                a = null != r ? Number(r) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: a,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : P.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [R.search]),
        M = (0, s.e7)([m.Z], () => m.Z.getCategories()),
        G = a.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === D)), [M, D]),
        z = a.useCallback(
            (e) => {
                (0, C.zZ)(S.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: w,
                    num_results: e,
                    current_page: y.m_.SEARCH,
                    result_page: k,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id
                });
            },
            [w, k, null == G ? void 0 : G.name, null == G ? void 0 : G.id]
        );
    a.useEffect(() => {
        var e;
        null === (e = L.current) || void 0 === e || e.scrollTo({ to: 0 }),
            w !== Z.current &&
                ((Z.current = w),
                u.yC({
                    query: w,
                    options: { source: o.F.APP_DIRECTORY }
                })),
            u.yC({
                query: w,
                options: {
                    categoryId: D,
                    page: k,
                    pageSize: P.PAGE_SIZE,
                    source: o.F.APP_DIRECTORY
                },
                onSuccessCallback: z
            });
    }, [D, k, w, z]);
    let { fetchState: B, searchResults: U } = (0, s.cj)([h.Z], () => ({
            fetchState: h.Z.getFetchState({
                query: w,
                categoryId: D,
                page: k,
                pageSize: P.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            }),
            searchResults: h.Z.getSearchResults({
                query: w,
                categoryId: D,
                page: k,
                pageSize: P.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            })
        })),
        W = (0, s.cj)([h.Z], () => {
            let e = h.Z.getSearchResults({
                query: w,
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
        F = (0, d.Z)(U),
        V = a.useMemo(() => (B === p.M.FETCHING ? F : U), [B, F, U]),
        H = a.useCallback(
            (e) => {
                (0, O.pR)({
                    query: w,
                    categoryId: D,
                    page: e
                });
            },
            [D, w]
        ),
        Y = a.useCallback(
            (e) => {
                (0, C.zZ)(S.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: y.m_.SEARCH
                }),
                    (0, O.pR)({
                        query: w,
                        categoryId: e.id
                    });
            },
            [w]
        ),
        X = a.useCallback(
            (e, t) => {
                (0, C.zZ)(S.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.m_.SEARCH,
                    application_id: e,
                    load_id: null == V ? void 0 : V.loadId,
                    search_term: w,
                    position: t
                }),
                    n(e);
            },
            [null == V ? void 0 : V.loadId, n, w]
        ),
        q = (0, x.K)();
    return (0, r.jsxs)('div', {
        className: E.container,
        children: [
            (0, r.jsx)(v.Z, {
                ref: L,
                onScroll: T,
                children: (0, r.jsxs)('div', {
                    className: E.innerContainer,
                    children: [
                        A ? null : (0, r.jsx)('div', { className: E.centeringBuffer }),
                        (0, r.jsx)(f.Z, {
                            children: (0, r.jsxs)('div', {
                                className: E.contentContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.topFilterContainer,
                                        children: (0, r.jsx)(I.V, {
                                            countsByCategory: W,
                                            selectedCategoryId: D,
                                            onSelectCategory: Y
                                        })
                                    }),
                                    (0, r.jsx)(_.Z, {
                                        loading: B === p.M.FETCHING,
                                        children:
                                            B === p.M.FETCHED && (null == V || (null == V ? void 0 : V.results.length) === 0)
                                                ? (0, r.jsx)(N.Z, {
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
                                        totalCount: Math.min((null !== (t = null == V ? void 0 : V.totalPages) && void 0 !== t ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
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
                        countsByCategory: W,
                        selectedCategoryId: D,
                        onSelectCategory: Y
                    })
                })
            })
        ]
    });
}
