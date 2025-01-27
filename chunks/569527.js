n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(512969),
    l = n(209173),
    o = n(288385),
    s = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(674588),
    m = n(264043),
    p = n(894653),
    h = n(809547),
    g = n(34674),
    C = n(125909),
    x = n(374939),
    v = n(283293),
    _ = n(314897),
    f = n(493646),
    b = n(881294),
    I = n(797908),
    S = n(258971),
    j = n(133743),
    N = n(120549),
    E = n(753511),
    y = n(979007),
    P = n(981631),
    A = n(378105);
function L(e) {
    var t;
    let { onSelectApplication: n, onScroll: L } = e,
        T = (0, s.e7)([_.default], () => _.default.isAuthenticated()),
        R = a.useRef(null),
        Z = (0, r.TH)(),
        O = a.useRef(null),
        {
            query: M,
            page: k,
            categoryId: D
        } = a.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(Z.search),
                i = n.get('page'),
                a = null != i ? Number(i) : 1;
            return {
                query: null !== (e = n.get('q')) && void 0 !== e ? e : '',
                page: a,
                categoryId: null !== (t = Number(n.get('category_id'))) && void 0 !== t ? t : y.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [Z.search]),
        w = (0, s.e7)([p.Z], () => p.Z.getCategories()),
        B = a.useMemo(() => (null == w ? void 0 : w.find((e) => e.id === D)), [w, D]),
        G = a.useCallback(
            (e) => {
                (0, b.zZ)(P.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: M,
                    num_results: e,
                    current_page: S.m_.SEARCH,
                    result_page: k,
                    category: null == B ? void 0 : B.name,
                    category_id: null == B ? void 0 : B.id
                });
            },
            [M, k, null == B ? void 0 : B.name, null == B ? void 0 : B.id]
        );
    a.useEffect(() => {
        var e;
        null === (e = R.current) || void 0 === e || e.scrollTo({ to: 0 }),
            M !== O.current &&
                ((O.current = M),
                u.yC({
                    query: M,
                    options: { source: o.F.APP_DIRECTORY }
                })),
            u.yC({
                query: M,
                options: {
                    categoryId: D,
                    page: k,
                    pageSize: y.PAGE_SIZE,
                    source: o.F.APP_DIRECTORY
                },
                onSuccessCallback: G
            });
    }, [D, k, M, G]);
    let { fetchState: U, searchResults: H } = (0, s.cj)([h.Z], () => ({
            fetchState: h.Z.getFetchState({
                query: M,
                categoryId: D,
                page: k,
                pageSize: y.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            }),
            searchResults: h.Z.getSearchResults({
                query: M,
                categoryId: D,
                page: k,
                pageSize: y.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            })
        })),
        z = (0, s.cj)([h.Z], () => {
            let e = h.Z.getSearchResults({
                query: M,
                source: o.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [g.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        V = (0, d.Z)(H),
        F = a.useMemo(() => (U === m.M.FETCHING ? V : H), [U, V, H]),
        Y = a.useCallback(
            (e) => {
                (0, j.pR)({
                    query: M,
                    categoryId: D,
                    page: e
                });
            },
            [D, M]
        ),
        W = a.useCallback(
            (e) => {
                (0, b.zZ)(P.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: S.m_.SEARCH
                }),
                    (0, j.pR)({
                        query: M,
                        categoryId: e.id
                    });
            },
            [M]
        ),
        X = a.useCallback(
            (e, t) => {
                (0, b.zZ)(P.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: S.m_.SEARCH,
                    application_id: e,
                    load_id: null == F ? void 0 : F.loadId,
                    search_term: M,
                    position: t
                }),
                    n(e);
            },
            [null == F ? void 0 : F.loadId, n, M]
        ),
        K = (0, f.K)();
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(v.Z, {
                ref: R,
                onScroll: L,
                children: (0, i.jsxs)('div', {
                    className: A.innerContainer,
                    children: [
                        T ? null : (0, i.jsx)('div', { className: A.centeringBuffer }),
                        (0, i.jsx)(x.Z, {
                            children: (0, i.jsxs)('div', {
                                className: A.contentContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: A.topFilterContainer,
                                        children: (0, i.jsx)(N.V, {
                                            countsByCategory: z,
                                            selectedCategoryId: D,
                                            onSelectCategory: W
                                        })
                                    }),
                                    (0, i.jsx)(C.Z, {
                                        loading: U === m.M.FETCHING,
                                        children:
                                            U === m.M.FETCHED && (null == F || (null == F ? void 0 : F.results.length) === 0)
                                                ? (0, i.jsx)(E.Z, {
                                                      selectedCategoryId: null != D ? D : K.id,
                                                      searchAllCategories: () => W(K)
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: A.content,
                                                      children:
                                                          null == F
                                                              ? void 0
                                                              : F.results.map((e, t) => {
                                                                    if (e.type === l.s.APPLICATION) {
                                                                        let n = e.data;
                                                                        return (0, i.jsx)(
                                                                            I.Z,
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
                                    (0, i.jsx)(c.Paginator, {
                                        className: A.paginationInput,
                                        totalCount: Math.min((null !== (t = null == F ? void 0 : F.totalPages) && void 0 !== t ? t : 0) * y.PAGE_SIZE, y.MAX_PAGES * y.PAGE_SIZE),
                                        pageSize: y.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: k,
                                        onPageChange: Y
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: A.sideFilterContainer,
                children: (0, i.jsx)('div', {
                    className: A.sideFilterContent,
                    children: (0, i.jsx)(N.Z, {
                        countsByCategory: z,
                        selectedCategoryId: D,
                        onSelectCategory: W
                    })
                })
            })
        ]
    });
}
