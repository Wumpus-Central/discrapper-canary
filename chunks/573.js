a.d(t, { A: () => v });
var n = a(627968),
    l = a(64700),
    i = a(935573),
    s = a(417597),
    r = a(158142),
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
    f = a(392896);
let C = { results: [], totalPages: 0, loadId: "" },
    v = function (e) {
        let { categoryId: t, onSelectApplication: a, resetScroll: v } = e,
            [b, j] = l.useState(1),
            I = l.useCallback((e) => {
                j(e);
            }, []);
        l.useEffect(() => {
            j(1);
        }, [t]);
        let E = l.useMemo(() => ({ query: x.EMPTY_QUERY, page: b, pageSize: x.PAGE_SIZE, categoryId: t }), [b, t]),
            N = (0, s.bG)([u.A], () =>
                u.A.getFetchState({ query: x.EMPTY_QUERY, page: b, pageSize: x.PAGE_SIZE, categoryId: t }),
            ),
            S = (0, s.cf)([u.A], () => u.A.getSearchResults(E) ?? C),
            y = (0, o.A)(S) ?? C,
            { results: P, totalPages: R, loadId: T } = l.useMemo(() => (N === d.e.FETCHING ? y : S), [N, y, S]),
            L = l.useMemo(() => P?.filter((e) => e.type === i.j.APPLICATION), [P]),
            D = l.useCallback((e) => {
                let { page: t, activeCategoryId: a, onSuccessCallback: n, guildId: l, fetchCounts: i } = e;
                i && c.$P({ query: x.EMPTY_QUERY, guildId: l }),
                    c.$P({
                        query: x.EMPTY_QUERY,
                        guildId: l,
                        options: { page: t, pageSize: x.PAGE_SIZE, categoryId: a },
                        onSuccessCallback: n,
                    });
            }, []);
        l.useEffect(() => {
            v(), D({ page: b, activeCategoryId: t, onSuccessCallback: () => {} });
        }, [t, v, D, b]);
        let k = l.useCallback(
            (e, t) => {
                (0, h.TR)(A.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: g.ev.SEARCH,
                    application_id: e,
                    load_id: T,
                    position: t,
                }),
                    a(e);
            },
            [T, a],
        );
        return N === d.e.ERROR
            ? (0, n.jsx)("div", { className: f.Un, children: (0, n.jsx)(_.A, { className: f.z3 }) })
            : (0, n.jsxs)(m.A, {
                  loading: N === d.e.FETCHING,
                  children: [
                      (0, n.jsx)("div", {
                          className: f.Qs,
                          children: L?.map((e, t) => {
                              if (e.type === i.j.APPLICATION) {
                                  let a = e.data;
                                  return (0, n.jsx)(p.A, { application: a, onSelectApplication: (e) => k(e, t) }, a.id);
                              }
                              return null;
                          }),
                      }),
                      (0, n.jsx)(r.m, {
                          className: f.JV,
                          totalCount: Math.min(R * x.PAGE_SIZE, x.MAX_PAGES * x.PAGE_SIZE),
                          pageSize: x.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: b,
                          onPageChange: I,
                      }),
                  ],
              });
    };
