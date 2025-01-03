t.d(n, {
    Z: function () {
        return P;
    }
}),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var a = t(200651),
    i = t(192379),
    r = t(512969),
    l = t(209173),
    o = t(288385),
    s = t(442837),
    c = t(481060),
    d = t(110924),
    u = t(674588),
    m = t(264043),
    p = t(894653),
    _ = t(809547),
    g = t(34674),
    v = t(125909),
    f = t(374939),
    C = t(283293),
    x = t(314897),
    h = t(493646),
    b = t(881294),
    I = t(797908),
    j = t(258971),
    S = t(133743),
    N = t(120549),
    E = t(753511),
    y = t(979007),
    A = t(981631),
    T = t(378105);
function P(e) {
    var n;
    let { onSelectApplication: t, onScroll: P } = e,
        R = (0, s.e7)([x.default], () => x.default.isAuthenticated()),
        Z = i.useRef(null),
        L = (0, r.TH)(),
        O = i.useRef(null),
        {
            query: D,
            page: k,
            categoryId: M
        } = i.useMemo(() => {
            var e, n;
            let t = new URLSearchParams(L.search),
                a = t.get('page'),
                i = null != a ? Number(a) : 1;
            return {
                query: null !== (e = t.get('q')) && void 0 !== e ? e : '',
                page: i,
                categoryId: null !== (n = Number(t.get('category_id'))) && void 0 !== n ? n : y.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
            };
        }, [L.search]),
        B = (0, s.e7)([p.Z], () => p.Z.getCategories()),
        G = i.useMemo(() => (null == B ? void 0 : B.find((e) => e.id === M)), [B, M]),
        w = i.useCallback(
            (e) => {
                (0, b.zZ)(A.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: D,
                    num_results: e,
                    current_page: j.m_.SEARCH,
                    result_page: k,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id
                });
            },
            [D, k, null == G ? void 0 : G.name, null == G ? void 0 : G.id]
        );
    i.useEffect(() => {
        var e;
        null === (e = Z.current) || void 0 === e || e.scrollTo({ to: 0 }),
            D !== O.current &&
                ((O.current = D),
                u.yC({
                    query: D,
                    options: { source: o.F.APP_DIRECTORY }
                })),
            u.yC({
                query: D,
                options: {
                    categoryId: M,
                    page: k,
                    pageSize: y.PAGE_SIZE,
                    source: o.F.APP_DIRECTORY
                },
                onSuccessCallback: w
            });
    }, [M, k, D, w]);
    let { fetchState: H, searchResults: F } = (0, s.cj)([_.Z], () => ({
            fetchState: _.Z.getFetchState({
                query: D,
                categoryId: M,
                page: k,
                pageSize: y.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            }),
            searchResults: _.Z.getSearchResults({
                query: D,
                categoryId: M,
                page: k,
                pageSize: y.PAGE_SIZE,
                source: o.F.APP_DIRECTORY
            })
        })),
        z = (0, s.cj)([_.Z], () => {
            let e = _.Z.getSearchResults({
                query: D,
                source: o.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [g.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        U = (0, d.Z)(F),
        Y = i.useMemo(() => (H === m.M.FETCHING ? U : F), [H, U, F]),
        V = i.useCallback(
            (e) => {
                (0, S.pR)({
                    query: D,
                    categoryId: M,
                    page: e
                });
            },
            [M, D]
        ),
        K = i.useCallback(
            (e) => {
                (0, b.zZ)(A.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: j.m_.SEARCH
                }),
                    (0, S.pR)({
                        query: D,
                        categoryId: e.id
                    });
            },
            [D]
        ),
        X = i.useCallback(
            (e, n) => {
                (0, b.zZ)(A.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: j.m_.SEARCH,
                    application_id: e,
                    load_id: null == Y ? void 0 : Y.loadId,
                    search_term: D,
                    position: n
                }),
                    t(e);
            },
            [null == Y ? void 0 : Y.loadId, t, D]
        ),
        W = (0, h.K)();
    return (0, a.jsxs)('div', {
        className: T.container,
        children: [
            (0, a.jsx)(C.Z, {
                ref: Z,
                onScroll: P,
                children: (0, a.jsxs)('div', {
                    className: T.innerContainer,
                    children: [
                        R ? null : (0, a.jsx)('div', { className: T.centeringBuffer }),
                        (0, a.jsx)(f.Z, {
                            children: (0, a.jsxs)('div', {
                                className: T.contentContainer,
                                children: [
                                    (0, a.jsx)('div', {
                                        className: T.topFilterContainer,
                                        children: (0, a.jsx)(N.V, {
                                            countsByCategory: z,
                                            selectedCategoryId: M,
                                            onSelectCategory: K
                                        })
                                    }),
                                    (0, a.jsx)(v.Z, {
                                        loading: H === m.M.FETCHING,
                                        children:
                                            H === m.M.FETCHED && (null == Y || (null == Y ? void 0 : Y.results.length) === 0)
                                                ? (0, a.jsx)(E.Z, {
                                                      selectedCategoryId: null != M ? M : W.id,
                                                      searchAllCategories: () => K(W)
                                                  })
                                                : (0, a.jsx)('div', {
                                                      className: T.content,
                                                      children:
                                                          null == Y
                                                              ? void 0
                                                              : Y.results.map((e, n) => {
                                                                    if (e.type === l.s.APPLICATION) {
                                                                        let t = e.data;
                                                                        return (0, a.jsx)(
                                                                            I.Z,
                                                                            {
                                                                                application: t,
                                                                                onSelectApplication: (e) => X(e, n),
                                                                                showCategory: !0
                                                                            },
                                                                            t.id
                                                                        );
                                                                    }
                                                                    return null;
                                                                })
                                                  })
                                    }),
                                    (0, a.jsx)(c.Paginator, {
                                        className: T.paginationInput,
                                        totalCount: Math.min((null !== (n = null == Y ? void 0 : Y.totalPages) && void 0 !== n ? n : 0) * y.PAGE_SIZE, y.MAX_PAGES * y.PAGE_SIZE),
                                        pageSize: y.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: k,
                                        onPageChange: V
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, a.jsx)('div', {
                className: T.sideFilterContainer,
                children: (0, a.jsx)('div', {
                    className: T.sideFilterContent,
                    children: (0, a.jsx)(N.Z, {
                        countsByCategory: z,
                        selectedCategoryId: M,
                        onSelectCategory: K
                    })
                })
            })
        ]
    });
}
