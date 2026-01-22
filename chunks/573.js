n.d(t, {
    A: () => A,
}),
    n(896048),
    n(747238);
var l = n(627968),
    a = n(64700),
    r = n(935573),
    i = n(417597),
    s = n(397927),
    c = n(919796),
    o = n(354138),
    d = n(111042),
    u = n(651753),
    p = n(412461),
    h = n(867333),
    m = n(487953),
    b = n(111737),
    f = n(310419),
    g = n(435220),
    x = n(652215),
    v = n(689917);
let j = {
        results: [],
        totalPages: 0,
        loadId: "",
    },
    A = function (e) {
        var t;
        let { categoryId: n, onSelectApplication: A, resetScroll: _ } = e,
            [y, O] = a.useState(1),
            S = a.useCallback((e) => {
                O(e);
            }, []);
        a.useEffect(() => {
            O(1);
        }, [n]);
        let C = a.useMemo(
                () => ({
                    query: g.EMPTY_QUERY,
                    page: y,
                    pageSize: g.PAGE_SIZE,
                    categoryId: n,
                }),
                [y, n],
            ),
            E = (0, i.bG)([u.A], () =>
                u.A.getFetchState({
                    query: g.EMPTY_QUERY,
                    page: y,
                    pageSize: g.PAGE_SIZE,
                    categoryId: n,
                }),
            ),
            I = (0, i.cf)([u.A], () => {
                var e;
                return null != (e = u.A.getSearchResults(C)) ? e : j;
            }),
            P = null != (t = (0, c.A)(I)) ? t : j,
            { results: N, totalPages: R, loadId: T } = a.useMemo(() => (E === d.e.FETCHING ? P : I), [E, P, I]),
            L = a.useMemo(() => (null == N ? void 0 : N.filter((e) => e.type === r.j.APPLICATION)), [N]),
            D = a.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: l, guildId: a, fetchCounts: r } = e;
                r &&
                    o.$P({
                        query: g.EMPTY_QUERY,
                        guildId: a,
                    }),
                    o.$P({
                        query: g.EMPTY_QUERY,
                        guildId: a,
                        options: {
                            page: t,
                            pageSize: g.PAGE_SIZE,
                            categoryId: n,
                        },
                        onSuccessCallback: l,
                    });
            }, []);
        a.useEffect(() => {
            _(),
                D({
                    page: y,
                    activeCategoryId: n,
                    onSuccessCallback: () => {},
                });
        }, [n, _, D, y]);
        let w = a.useCallback(
            (e, t) => {
                (0, p.TR)(x.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: f.ev.SEARCH,
                    application_id: e,
                    load_id: T,
                    position: t,
                }),
                    A(e);
            },
            [T, A],
        );
        return E === d.e.ERROR
            ? (0, l.jsx)("div", {
                  className: v.Un,
                  children: (0, l.jsx)(b.A, {
                      className: v.z3,
                  }),
              })
            : (0, l.jsxs)(h.A, {
                  loading: E === d.e.FETCHING,
                  children: [
                      (0, l.jsx)("div", {
                          className: v.Qs,
                          children:
                              null == L
                                  ? void 0
                                  : L.map((e, t) => {
                                        if (e.type === r.j.APPLICATION) {
                                            let n = e.data;
                                            return (0, l.jsx)(
                                                m.A,
                                                {
                                                    application: n,
                                                    onSelectApplication: (e) => w(e, t),
                                                },
                                                n.id,
                                            );
                                        }
                                        return null;
                                    }),
                      }),
                      (0, l.jsx)(s.mgR, {
                          className: v.JV,
                          totalCount: Math.min(R * g.PAGE_SIZE, g.MAX_PAGES * g.PAGE_SIZE),
                          pageSize: g.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: y,
                          onPageChange: S,
                      }),
                  ],
              });
    };
