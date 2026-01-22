n.d(t, {
    A: () => N,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var l = n(627968),
    a = n(64700),
    r = n(960488),
    i = n(935573),
    s = n(994369),
    c = n(311907),
    o = n(397927),
    d = n(475743),
    u = n(979590),
    p = n(783531),
    h = n(961350),
    m = n(354138),
    b = n(620140),
    f = n(212534),
    g = n(38181),
    x = n(651753),
    v = n(767599),
    j = n(412461),
    A = n(867333),
    _ = n(487953),
    y = n(310419),
    O = n(656106),
    S = n(847525),
    C = n(734786),
    E = n(435220),
    I = n(652215),
    P = n(563962);

function N(e) {
    var t;
    let { onSelectApplication: n, onScroll: N } = e,
        R = (0, c.bG)([h.default], () => h.default.isAuthenticated()),
        T = a.useRef(null),
        L = (0, r.zy)(),
        D = a.useRef(null),
        {
            query: w,
            page: k,
            categoryId: M,
        } = a.useMemo(() => {
            var e, t;
            let n = new URLSearchParams(L.search),
                l = n.get("page"),
                a = null != l ? Number(l) : 1;
            return {
                query: null != (e = n.get("q")) ? e : "",
                page: a,
                categoryId:
                    null != (t = Number(n.get("category_id"))) ? t : E.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
            };
        }, [L.search]),
        U = (0, c.bG)([g.A], () => g.A.getCategories()),
        G = a.useMemo(() => (null == U ? void 0 : U.find((e) => e.id === M)), [U, M]),
        V = a.useCallback(
            (e) => {
                (0, j.TR)(I.HAw.APP_DIRECTORY_SEARCHED, {
                    search_term: w,
                    num_results: e,
                    current_page: y.ev.SEARCH,
                    result_page: k,
                    category: null == G ? void 0 : G.name,
                    category_id: null == G ? void 0 : G.id,
                });
            },
            [w, k, null == G ? void 0 : G.name, null == G ? void 0 : G.id],
        );
    a.useEffect(() => {
        var e;
        null == (e = T.current) ||
            e.scrollTo({
                to: 0,
            }),
            w !== D.current &&
                ((D.current = w),
                m.$P({
                    query: w,
                    options: {
                        source: s.V.APP_DIRECTORY,
                    },
                })),
            m.$P({
                query: w,
                options: {
                    categoryId: M,
                    page: k,
                    pageSize: E.PAGE_SIZE,
                    source: s.V.APP_DIRECTORY,
                },
                onSuccessCallback: V,
            });
    }, [M, k, w, V]);
    let { fetchState: H, searchResults: F } = (0, c.cf)([x.A], () => ({
            fetchState: x.A.getFetchState({
                query: w,
                categoryId: M,
                page: k,
                pageSize: E.PAGE_SIZE,
                source: s.V.APP_DIRECTORY,
            }),
            searchResults: x.A.getSearchResults({
                query: w,
                categoryId: M,
                page: k,
                pageSize: E.PAGE_SIZE,
                source: s.V.APP_DIRECTORY,
            }),
        })),
        B = (0, c.cf)([x.A], () => {
            let e = x.A.getSearchResults({
                query: w,
                source: s.V.APP_DIRECTORY,
            });
            return null != e
                ? (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              l = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (l = l.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  }),
                              )),
                              l.forEach(function (t) {
                                  var l;
                                  (l = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: l,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0,
                                            })
                                          : (e[t] = l);
                              });
                      }
                      return e;
                  })(
                      {
                          [v.lj]: e.totalCount,
                      },
                      e.countsByCategory,
                  )
                : {};
        }),
        Y = (0, d.A)(F),
        z = a.useMemo(() => (H === f.e.FETCHING ? Y : F), [H, Y, F]),
        X = a.useCallback(
            (e) => {
                (0, O.JX)({
                    query: w,
                    categoryId: M,
                    page: e,
                });
            },
            [M, w],
        ),
        K = a.useCallback(
            (e) => {
                (0, j.TR)(I.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                    category: e.name,
                    category_id: e.id,
                    current_page: y.ev.SEARCH,
                }),
                    (0, O.JX)({
                        query: w,
                        categoryId: e.id,
                    });
            },
            [w],
        ),
        W = a.useCallback(
            (e, t) => {
                (0, j.TR)(I.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: y.ev.SEARCH,
                    application_id: e,
                    load_id: null == z ? void 0 : z.loadId,
                    search_term: w,
                    position: t,
                }),
                    n(e);
            },
            [null == z ? void 0 : z.loadId, n, w],
        ),
        Z = (0, b.A)();
    return (0, l.jsxs)("div", {
        className: P.kL,
        children: [
            (0, l.jsx)(p.A, {
                ref: T,
                onScroll: N,
                children: (0, l.jsxs)("div", {
                    className: P.WH,
                    children: [
                        R
                            ? null
                            : (0, l.jsx)("div", {
                                  className: P.AW,
                              }),
                        (0, l.jsx)(u.A, {
                            children: (0, l.jsxs)("div", {
                                className: P.hQ,
                                children: [
                                    (0, l.jsx)("div", {
                                        className: P.$B,
                                        children: (0, l.jsx)(S.e, {
                                            countsByCategory: B,
                                            selectedCategoryId: M,
                                            onSelectCategory: K,
                                        }),
                                    }),
                                    (0, l.jsx)(A.A, {
                                        loading: H === f.e.FETCHING,
                                        children:
                                            H === f.e.FETCHED &&
                                            (null == z || (null == z ? void 0 : z.results.length) === 0)
                                                ? (0, l.jsx)(C.A, {
                                                      selectedCategoryId: null != M ? M : Z.id,
                                                      searchAllCategories: () => K(Z),
                                                  })
                                                : (0, l.jsx)("div", {
                                                      className: P.Qs,
                                                      children:
                                                          null == z
                                                              ? void 0
                                                              : z.results.map((e, t) => {
                                                                    if (e.type === i.j.APPLICATION) {
                                                                        let n = e.data;
                                                                        return (0, l.jsx)(
                                                                            _.A,
                                                                            {
                                                                                application: n,
                                                                                onSelectApplication: (e) => W(e, t),
                                                                                showCategory: !0,
                                                                            },
                                                                            n.id,
                                                                        );
                                                                    }
                                                                    return null;
                                                                }),
                                                  }),
                                    }),
                                    (0, l.jsx)(o.mgR, {
                                        className: P.JV,
                                        totalCount: Math.min(
                                            (null != (t = null == z ? void 0 : z.totalPages) ? t : 0) * E.PAGE_SIZE,
                                            E.MAX_PAGES * E.PAGE_SIZE,
                                        ),
                                        pageSize: E.PAGE_SIZE,
                                        disablePaginationGap: !0,
                                        hideMaxPage: !0,
                                        currentPage: k,
                                        onPageChange: X,
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)("div", {
                className: P.pn,
                children: (0, l.jsx)("div", {
                    className: P.jv,
                    children: (0, l.jsx)(S.A, {
                        countsByCategory: B,
                        selectedCategoryId: M,
                        onSelectCategory: K,
                    }),
                }),
            }),
        ],
    });
}
