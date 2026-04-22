a.d(t, { A: () => R }), a(323874), a(14289), a(35956);
var n = a(627968),
    l = a(64700),
    i = a(873263),
    s = a(935573),
    r = a(994369),
    o = a(311907),
    c = a(158142),
    d = a(475743),
    u = a(979590),
    h = a(783531),
    m = a(961350),
    p = a(354138),
    _ = a(620140),
    g = a(212534),
    x = a(38181),
    A = a(651753),
    f = a(767599),
    C = a(412461),
    v = a(867333),
    b = a(487953),
    j = a(310419),
    I = a(656106),
    E = a(847525),
    N = a(734786),
    S = a(435220),
    y = a(652215),
    P = a(798387);
function R(e) {
    let { onSelectApplication: t, onScroll: a } = e,
        R = (0, o.bG)([m.default], () => m.default.isAuthenticated()),
        T = l.useRef(null),
        L = (0, i.zy)(),
        D = l.useRef(null),
        {
            query: k,
            page: O,
            categoryId: G,
        } = l.useMemo(() => {
            let e = new URLSearchParams(L.search),
                t = e.get("page"),
                a = null != t ? Number(t) : 1;
            return {
                query: e.get("q") ?? "",
                page: a,
                categoryId: Number(e.get("category_id")) ?? S.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [L.search]),
        M = (0, o.bG)([x.A], () => x.A.getCategories()),
        w = l.useMemo(() => M?.find((e) => e.id === G), [M, G]),
        U = l.useCallback(
            (e) => {
                (0, C.TR)(y.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: k,
                    num_results: e,
                    current_page: j.ev.SEARCH,
                    result_page: O,
                    category: w?.name,
                    category_id: w?.id,
                });
            },
            [k, O, w?.name, w?.id],
        );
    l.useEffect(() => {
        T.current?.scrollTo({ to: 0 }),
            k !== D.current && ((D.current = k), p.$P({ query: k, options: { source: r.V.APP_DIRECTORY } })),
            p.$P({
                query: k,
                options: { categoryId: G, page: O, pageSize: S.PAGE_SIZE, source: r.V.APP_DIRECTORY },
                onSuccessCallback: U,
            });
    }, [G, O, k, U]);
    let { fetchState: B, searchResults: F } = (0, o.cf)([A.A], () => ({
            fetchState: A.A.getFetchState({
                query: k,
                categoryId: G,
                page: O,
                pageSize: S.PAGE_SIZE,
                source: r.V.APP_DIRECTORY,
            }),
            searchResults: A.A.getSearchResults({
                query: k,
                categoryId: G,
                page: O,
                pageSize: S.PAGE_SIZE,
                source: r.V.APP_DIRECTORY,
            }),
        })),
        V = (0, o.cf)([A.A], () => {
            let e = A.A.getSearchResults({ query: k, source: r.V.APP_DIRECTORY });
            return null != e ? { [f.lj]: e.totalCount, ...e.countsByCategory } : {};
        }),
        H = (0, d.A)(F),
        Y = l.useMemo(() => (B === g.e.FETCHING ? H : F), [B, H, F]),
        z = l.useCallback(
            (e) => {
                (0, I.JX)({ query: k, categoryId: G, page: e });
            },
            [G, k],
        ),
        X = l.useCallback(
            (e) => {
                (0, C.TR)(y.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: j.ev.SEARCH,
                }),
                    (0, I.JX)({ query: k, categoryId: e.id });
            },
            [k],
        ),
        K = l.useCallback(
            (e, a) => {
                (0, C.TR)(y.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: j.ev.SEARCH,
                    application_id: e,
                    load_id: Y?.loadId,
                    search_term: k,
                    position: a,
                }),
                    t(e);
            },
            [Y?.loadId, t, k],
        ),
        W = (0, _.A)();
    return (0, n.jsxs)("div", {
        className: P.kL,
        children: [
            (0, n.jsx)(h.A, {
                ref: T,
                onScroll: a,
                children: (0, n.jsxs)("div", {
                    className: P.WH,
                    children: [
                        R ? null : (0, n.jsx)("div", { className: P.AW }),
                        (0, n.jsx)(u.A, {
                            children: (0, n.jsxs)("div", {
                                className: P.hQ,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: P.$B,
                                        children: (0, n.jsx)(E.e, {
                                            countsByCategory: V,
                                            selectedCategoryId: G,
                                            onSelectCategory: X,
                                        }),
                                    }),
                                    (0, n.jsx)(v.A, {
                                        loading: B === g.e.FETCHING,
                                        children:
                                            B === g.e.FETCHED && (null == Y || Y?.results.length === 0)
                                                ? (0, n.jsx)(N.A, {
                                                      selectedCategoryId: G ?? W.id,
                                                      searchAllCategories: () => X(W),
                                                  })
                                                : (0, n.jsx)("div", {
                                                      className: P.Qs,
                                                      children: Y?.results.map((e, t) => {
                                                          if (e.type === s.j.APPLICATION) {
                                                              let a = e.data;
                                                              return (0, n.jsx)(
                                                                  b.A,
                                                                  {
                                                                      application: a,
                                                                      onSelectApplication: (e) => K(e, t),
                                                                      showCategory: !0,
                                                                  },
                                                                  a.id,
                                                              );
                                                          }
                                                          return null;
                                                      }),
                                                  }),
                                    }),
                                    (0, n.jsx)(c.m, {
                                        className: P.JV,
                                        totalCount: Math.min(
                                            (Y?.totalPages ?? 0) * S.PAGE_SIZE,
                                            S.MAX_PAGES * S.PAGE_SIZE,
                                        ),
                                        pageSize: S.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: O,
                                        onPageChange: z,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, n.jsx)("div", {
                className: P.pn,
                children: (0, n.jsx)("div", {
                    className: P.jv,
                    children: (0, n.jsx)(E.A, { countsByCategory: V, selectedCategoryId: G, onSelectCategory: X }),
                }),
            }),
        ],
    });
}
