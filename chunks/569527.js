n.d(t, { Z: () => T }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(512969),
    l = n(209173),
    s = n(288385),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(674588),
    m = n(264043),
    h = n(894653),
    p = n(809547),
    g = n(34674),
    _ = n(125909),
    x = n(374939),
    C = n(283293),
    v = n(314897),
    f = n(493646),
    I = n(881294),
    b = n(797908),
    j = n(258971),
    S = n(133743),
    N = n(120549),
    E = n(188607),
    y = n(979007),
    P = n(981631),
    A = n(590854);
function T(e) {
    var t;
    let { onSelectApplication: n, onScroll: T } = e,
        L = (0, o.e7)([v.default], () => v.default.isAuthenticated()),
        R = a.useRef(null),
        Z = (0, r.TH)(),
        O = a.useRef(null),
        {
            query: k,
            page: M,
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
        w = (0, o.e7)([h.Z], () => h.Z.getCategories()),
        G = a.useMemo(() => (null == w ? void 0 : w.find((e) => e.id === D)), [w, D]),
        z = a.useCallback(
            (e) => {
                (0, I.zZ)(P.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: k,
                    num_results: e,
                    current_page: j.m_.SEARCH,
                    result_page: M,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id
                });
            },
            [k, M, null == G ? void 0 : G.name, null == G ? void 0 : G.id]
        );
    a.useEffect(() => {
        var e;
        null === (e = R.current) || void 0 === e || e.scrollTo({ to: 0 }),
            k !== O.current &&
                ((O.current = k),
                u.yC({
                    query: k,
                    options: { source: s.F.APP_DIRECTORY }
                })),
            u.yC({
                query: k,
                options: {
                    categoryId: D,
                    page: M,
                    pageSize: y.PAGE_SIZE,
                    source: s.F.APP_DIRECTORY
                },
                onSuccessCallback: z
            });
    }, [D, M, k, z]);
    let { fetchState: B, searchResults: U } = (0, o.cj)([p.Z], () => ({
            fetchState: p.Z.getFetchState({
                query: k,
                categoryId: D,
                page: M,
                pageSize: y.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            }),
            searchResults: p.Z.getSearchResults({
                query: k,
                categoryId: D,
                page: M,
                pageSize: y.PAGE_SIZE,
                source: s.F.APP_DIRECTORY
            })
        })),
        V = (0, o.cj)([p.Z], () => {
            let e = p.Z.getSearchResults({
                query: k,
                source: s.F.APP_DIRECTORY
            });
            return null != e
                ? {
                      [g.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        F = (0, d.Z)(U),
        H = a.useMemo(() => (B === m.M.FETCHING ? F : U), [B, F, U]),
        Y = a.useCallback(
            (e) => {
                (0, S.pR)({
                    query: k,
                    categoryId: D,
                    page: e
                });
            },
            [D, k]
        ),
        W = a.useCallback(
            (e) => {
                (0, I.zZ)(P.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: j.m_.SEARCH
                }),
                    (0, S.pR)({
                        query: k,
                        categoryId: e.id
                    });
            },
            [k]
        ),
        X = a.useCallback(
            (e, t) => {
                (0, I.zZ)(P.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: j.m_.SEARCH,
                    application_id: e,
                    load_id: null == H ? void 0 : H.loadId,
                    search_term: k,
                    position: t
                }),
                    n(e);
            },
            [null == H ? void 0 : H.loadId, n, k]
        ),
        q = (0, f.K)();
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(C.Z, {
                ref: R,
                onScroll: T,
                children: (0, i.jsxs)('div', {
                    className: A.innerContainer,
                    children: [
                        L ? null : (0, i.jsx)('div', { className: A.centeringBuffer }),
                        (0, i.jsx)(x.Z, {
                            children: (0, i.jsxs)('div', {
                                className: A.contentContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: A.topFilterContainer,
                                        children: (0, i.jsx)(N.V, {
                                            countsByCategory: V,
                                            selectedCategoryId: D,
                                            onSelectCategory: W
                                        })
                                    }),
                                    (0, i.jsx)(_.Z, {
                                        loading: B === m.M.FETCHING,
                                        children:
                                            B === m.M.FETCHED && (null == H || (null == H ? void 0 : H.results.length) === 0)
                                                ? (0, i.jsx)(E.Z, {
                                                      selectedCategoryId: null != D ? D : q.id,
                                                      searchAllCategories: () => W(q)
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: A.content,
                                                      children:
                                                          null == H
                                                              ? void 0
                                                              : H.results.map((e, t) => {
                                                                    if (e.type === l.s.APPLICATION) {
                                                                        let n = e.data;
                                                                        return (0, i.jsx)(
                                                                            b.Z,
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
                                    (0, i.jsx)(c.DsT, {
                                        className: A.paginationInput,
                                        totalCount: Math.min((null !== (t = null == H ? void 0 : H.totalPages) && void 0 !== t ? t : 0) * y.PAGE_SIZE, y.MAX_PAGES * y.PAGE_SIZE),
                                        pageSize: y.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: M,
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
                        countsByCategory: V,
                        selectedCategoryId: D,
                        onSelectCategory: W
                    })
                })
            })
        ]
    });
}
