n.d(t, { Z: () => C }), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(209173),
    l = n(399606),
    o = n(481060),
    s = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    p = n(125909),
    m = n(881294),
    h = n(797908),
    g = n(292191),
    _ = n(258971),
    f = n(979007),
    v = n(981631),
    b = n(284080);
let x = {
        results: [],
        totalPages: 0,
        loadId: ''
    },
    C = function (e) {
        var t;
        let { categoryId: n, onSelectApplication: C, resetScroll: j } = e,
            [y, O] = a.useState(1),
            I = a.useCallback((e) => {
                O(e);
            }, []);
        a.useEffect(() => {
            O(1);
        }, [n]);
        let N = a.useMemo(
                () => ({
                    query: f.EMPTY_QUERY,
                    page: y,
                    pageSize: f.PAGE_SIZE,
                    categoryId: n
                }),
                [y, n]
            ),
            P = (0, l.e7)([u.Z], () =>
                u.Z.getFetchState({
                    query: f.EMPTY_QUERY,
                    page: y,
                    pageSize: f.PAGE_SIZE,
                    categoryId: n
                })
            ),
            S = (0, l.cj)([u.Z], () => {
                var e;
                return null !== (e = u.Z.getSearchResults(N)) && void 0 !== e ? e : x;
            }),
            E = null !== (t = (0, s.Z)(S)) && void 0 !== t ? t : x,
            { results: T, totalPages: A, loadId: L } = a.useMemo(() => (P === d.M.FETCHING ? E : S), [P, E, S]),
            R = a.useMemo(() => (null == T ? void 0 : T.filter((e) => e.type === i.s.APPLICATION)), [T]),
            Z = a.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: r, guildId: a, fetchCounts: i } = e;
                i &&
                    c.yC({
                        query: f.EMPTY_QUERY,
                        guildId: a
                    }),
                    c.yC({
                        query: f.EMPTY_QUERY,
                        guildId: a,
                        options: {
                            page: t,
                            pageSize: f.PAGE_SIZE,
                            categoryId: n
                        },
                        onSuccessCallback: r
                    });
            }, []);
        a.useEffect(() => {
            j(),
                Z({
                    page: y,
                    activeCategoryId: n,
                    onSuccessCallback: () => {}
                });
        }, [n, j, Z, y]);
        let w = a.useCallback(
            (e, t) => {
                (0, m.zZ)(v.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: _.m_.SEARCH,
                    application_id: e,
                    load_id: L,
                    position: t
                }),
                    C(e);
            },
            [L, C]
        );
        return P === d.M.ERROR
            ? (0, r.jsx)('div', {
                  className: b.errorContainer,
                  children: (0, r.jsx)(g.Z, { className: b.error })
              })
            : (0, r.jsxs)(p.Z, {
                  loading: P === d.M.FETCHING,
                  children: [
                      (0, r.jsx)('div', {
                          className: b.content,
                          children:
                              null == R
                                  ? void 0
                                  : R.map((e, t) => {
                                        if (e.type === i.s.APPLICATION) {
                                            let n = e.data;
                                            return (0, r.jsx)(
                                                h.Z,
                                                {
                                                    application: n,
                                                    onSelectApplication: (e) => w(e, t)
                                                },
                                                n.id
                                            );
                                        }
                                        return null;
                                    })
                      }),
                      (0, r.jsx)(o.DsT, {
                          className: b.paginationInput,
                          totalCount: Math.min(A * f.PAGE_SIZE, f.MAX_PAGES * f.PAGE_SIZE),
                          pageSize: f.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: y,
                          onPageChange: I
                      })
                  ]
              });
    };
