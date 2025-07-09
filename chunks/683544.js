(n.d(t, { Z: () => C }), n(388685), n(35282));
var r = n(255367),
    a = n(73800),
    i = n(209173),
    l = n(399606),
    s = n(481060),
    o = n(699682),
    c = n(471518),
    d = n(425986),
    u = n(177653),
    p = n(881294),
    m = n(523311),
    h = n(797908),
    g = n(292191),
    f = n(258971),
    _ = n(979007),
    b = n(981631),
    x = n(175457);
let v = {
        results: [],
        totalPages: 0,
        loadId: ''
    },
    C = function (e) {
        var t;
        let { categoryId: n, onSelectApplication: C, resetScroll: j } = e,
            [y, I] = a.useState(1),
            O = a.useCallback((e) => {
                I(e);
            }, []);
        a.useEffect(() => {
            I(1);
        }, [n]);
        let S = a.useMemo(
                () => ({
                    query: _.EMPTY_QUERY,
                    page: y,
                    pageSize: _.PAGE_SIZE,
                    categoryId: n
                }),
                [y, n]
            ),
            P = (0, l.e7)([u.Z], () =>
                u.Z.getFetchState({
                    query: _.EMPTY_QUERY,
                    page: y,
                    pageSize: _.PAGE_SIZE,
                    categoryId: n
                })
            ),
            E = (0, l.cj)([u.Z], () => {
                var e;
                return null != (e = u.Z.getSearchResults(S)) ? e : v;
            }),
            N = null != (t = (0, o.Z)(E)) ? t : v,
            { results: T, totalPages: A, loadId: L } = a.useMemo(() => (P === d.M.FETCHING ? N : E), [P, N, E]),
            R = a.useMemo(() => (null == T ? void 0 : T.filter((e) => e.type === i.s.APPLICATION)), [T]),
            Z = a.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: r, guildId: a, fetchCounts: i } = e;
                (i &&
                    c.yC({
                        query: _.EMPTY_QUERY,
                        guildId: a
                    }),
                    c.yC({
                        query: _.EMPTY_QUERY,
                        guildId: a,
                        options: {
                            page: t,
                            pageSize: _.PAGE_SIZE,
                            categoryId: n
                        },
                        onSuccessCallback: r
                    }));
            }, []);
        a.useEffect(() => {
            (j(),
                Z({
                    page: y,
                    activeCategoryId: n,
                    onSuccessCallback: () => {}
                }));
        }, [n, j, Z, y]);
        let w = a.useCallback(
            (e, t) => {
                ((0, p.zZ)(b.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: f.m_.SEARCH,
                    application_id: e,
                    load_id: L,
                    position: t
                }),
                    C(e));
            },
            [L, C]
        );
        return P === d.M.ERROR
            ? (0, r.jsx)('div', {
                  className: x.errorContainer,
                  children: (0, r.jsx)(g.Z, { className: x.error })
              })
            : (0, r.jsxs)(m.Z, {
                  loading: P === d.M.FETCHING,
                  children: [
                      (0, r.jsx)('div', {
                          className: x.content,
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
                      (0, r.jsx)(s.DsT, {
                          className: x.paginationInput,
                          totalCount: Math.min(A * _.PAGE_SIZE, _.MAX_PAGES * _.PAGE_SIZE),
                          pageSize: _.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: y,
                          onPageChange: O
                      })
                  ]
              });
    };
