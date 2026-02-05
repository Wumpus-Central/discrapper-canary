a.d(t, { A: () => v });
var n = a(627968),
    i = a(64700),
    s = a(935573),
    l = a(417597),
    r = a(397927),
    o = a(919796),
    c = a(354138),
    d = a(111042),
    u = a(651753),
    h = a(412461),
    m = a(867333),
    p = a(487953),
    _ = a(111737),
    g = a(310419),
    x = a(435220),
    A = a(652215),
    C = a(689917);
let b = { results: [], totalPages: 0, loadId: "" },
    v = function (e) {
        let { categoryId: t, onSelectApplication: a, resetScroll: v } = e,
            [f, j] = i.useState(1),
            I = i.useCallback((e) => {
                j(e);
            }, []);
        i.useEffect(() => {
            j(1);
        }, [t]);
        let E = i.useMemo(() => ({ query: x.EMPTY_QUERY, page: f, pageSize: x.PAGE_SIZE, categoryId: t }), [f, t]),
            S = (0, l.bG)([u.A], () =>
                u.A.getFetchState({ query: x.EMPTY_QUERY, page: f, pageSize: x.PAGE_SIZE, categoryId: t }),
            ),
            N = (0, l.cf)([u.A], () => u.A.getSearchResults(E) ?? b),
            y = (0, o.A)(N) ?? b,
            { results: T, totalPages: R, loadId: L } = i.useMemo(() => (S === d.e.FETCHING ? y : N), [S, y, N]),
            P = i.useMemo(() => T?.filter((e) => e.type === s.j.APPLICATION), [T]),
            D = i.useCallback((e) => {
                let { page: t, activeCategoryId: a, onSuccessCallback: n, guildId: i, fetchCounts: s } = e;
                s && c.$P({ query: x.EMPTY_QUERY, guildId: i }),
                    c.$P({
                        query: x.EMPTY_QUERY,
                        guildId: i,
                        options: { page: t, pageSize: x.PAGE_SIZE, categoryId: a },
                        onSuccessCallback: n,
                    });
            }, []);
        i.useEffect(() => {
            v(), D({ page: f, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, v, D, f]);
        let O = i.useCallback(
            (e, t) => {
                (0, h.TR)(A.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: g.ev.SEARCH,
                    application_id: e,
                    load_id: L,
                    position: t,
                }),
                    a(e);
            },
            [L, a],
        );
        return S === d.e.ERROR
            ? (0, n.jsx)("div", { className: C.Un, children: (0, n.jsx)(_.A, { className: C.z3 }) })
            : (0, n.jsxs)(m.A, {
                  loading: S === d.e.FETCHING,
                  children: [
                      (0, n.jsx)("div", {
                          className: C.Qs,
                          children: P?.map((e, t) => {
                              if (e.type === s.j.APPLICATION) {
                                  let a = e.data;
                                  return (0, n.jsx)(p.A, { application: a, onSelectApplication: (e) => O(e, t) }, a.id);
                              }
                              return null;
                          }),
                      }),
                      (0, n.jsx)(r.mgR, {
                          className: C.JV,
                          totalCount: Math.min(R * x.PAGE_SIZE, x.MAX_PAGES * x.PAGE_SIZE),
                          pageSize: x.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: f,
                          onPageChange: I,
                      }),
                  ],
              });
    };
