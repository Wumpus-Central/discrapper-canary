n.d(t, { Z: () => T }), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(512969),
    l = n(209173),
    o = n(288385),
    s = n(442837),
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
    O = n(133743),
    I = n(120549),
    N = n(188607),
    P = n(979007),
    S = n(981631),
    E = n(709929);
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        A = (0, s.e7)([m.default], () => m.default.isAuthenticated()),
        L = a.useRef(null),
        R = (0, i.TH)(),
        w = a.useRef(null),
        {
            query: Z,
            page: k,
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
        M = (0, s.e7)([_.Z], () => _.Z.getCategories()),
        z = a.useMemo(() => (null == M ? void 0 : M.find((e) => e.id === D)), [M, D]),
        G = a.useCallback(
            (e) => {
                (0, v.zZ)(S.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: Z,
                    num_results: e,
                    current_page: y.m_.SEARCH,
                    result_page: k,
                    category: null == z ? void 0 : z.name,
                    category_id: null == z ? void 0 : z.id
                });
            },
            [Z, k, null == z ? void 0 : z.name, null == z ? void 0 : z.id]
        );
    a.useEffect(() => {
        var e;
        null == (e = L.current) || e.scrollTo({ to: 0 }),
            Z !== w.current &&
                ((w.current = Z),
                h.yC({
                    query: Z,
                    options: { source: o.F.APP_DIRECTORY }
                })),
            h.yC({
                query: Z,
                options: {
                    categoryId: D,
                    page: k,
                    pageSize: P.PAGE_SIZE,
                    source: o.F.APP_DIRECTORY
                },
                onSuccessCallback: G
            });
    }, [D, k, Z, G]);
    let { fetchState: B, searchResults: W } = (0, s.cj)([b.Z], () => ({
            fetchState: b.Z.getFetchState({
                query: Z,
                categoryId: D,
                page: k,
                pageSize: P.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            }),
            searchResults: b.Z.getSearchResults({
                query: Z,
                categoryId: D,
                page: k,
                pageSize: P.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            })
        })),
        U = (0, s.cj)([b.Z], () => {
            let e = b.Z.getSearchResults({
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
                  })({ [x.MU]: e.totalCount }, e.countsByCategory)
                : {};
        }),
        F = (0, d.Z)(W),
        V = a.useMemo(() => (B === f.M.FETCHING ? F : W), [B, F, W]),
        H = a.useCallback(
            (e) => {
                (0, O.pR)({
                    query: Z,
                    categoryId: D,
                    page: e
                });
            },
            [D, Z]
        ),
        Y = a.useCallback(
            (e) => {
                (0, v.zZ)(S.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
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
        X = a.useCallback(
            (e, t) => {
                (0, v.zZ)(S.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.m_.SEARCH,
                    application_id: e,
                    load_id: null == V ? void 0 : V.loadId,
                    search_term: Z,
                    position: t
                }),
                    n(e);
            },
            [null == V ? void 0 : V.loadId, n, Z]
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
                                        children: (0, r.jsx)(I.V, {
                                            countsByCategory: U,
                                            selectedCategoryId: D,
                                            onSelectCategory: Y
                                        })
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        loading: B === f.M.FETCHING,
                                        children:
                                            B === f.M.FETCHED && (null == V || (null == V ? void 0 : V.results.length) === 0)
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
                                        totalCount: Math.min((null != (t = null == V ? void 0 : V.totalPages) ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
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
