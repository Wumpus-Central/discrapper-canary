n.d(t, { Z: () => C }), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(209173),
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
    _ = n(258971),
    f = n(979007),
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
            [y, I] = i.useState(1),
            O = i.useCallback((e) => {
                I(e);
            }, []);
        i.useEffect(() => {
            I(1);
        }, [n]);
        let P = i.useMemo(
                () => ({
                    query: f.EMPTY_QUERY,
                    page: y,
                    pageSize: f.PAGE_SIZE,
                    categoryId: n
                }),
                [y, n]
            ),
            S = (0, l.e7)([u.Z], () =>
                u.Z.getFetchState({
                    query: f.EMPTY_QUERY,
                    page: y,
                    pageSize: f.PAGE_SIZE,
                    categoryId: n
                })
            ),
            E = (0, l.cj)([u.Z], () => {
                var e;
                return null != (e = u.Z.getSearchResults(P)) ? e : v;
            }),
            N = null != (t = (0, o.Z)(E)) ? t : v,
            { results: T, totalPages: A, loadId: L } = i.useMemo(() => (S === d.M.FETCHING ? N : E), [S, N, E]),
            R = i.useMemo(() => (null == T ? void 0 : T.filter((e) => e.type === a.s.APPLICATION)), [T]),
            Z = i.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: r, guildId: i, fetchCounts: a } = e;
                a &&
                    c.yC({
                        query: f.EMPTY_QUERY,
                        guildId: i
                    }),
                    c.yC({
                        query: f.EMPTY_QUERY,
                        guildId: i,
                        options: {
                            page: t,
                            pageSize: f.PAGE_SIZE,
                            categoryId: n
                        },
                        onSuccessCallback: r
                    });
            }, []);
        i.useEffect(() => {
            j(),
                Z({
                    page: y,
                    activeCategoryId: n,
                    onSuccessCallback: () => {}
                });
        }, [n, j, Z, y]);
        let k = i.useCallback(
            (e, t) => {
                (0, p.zZ)(b.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: _.m_.SEARCH,
                    application_id: e,
                    load_id: L,
                    position: t
                }),
                    C(e);
            },
            [L, C]
        );
        return S === d.M.ERROR
            ? (0, r.jsx)('div', {
                  className: x.errorContainer,
                  children: (0, r.jsx)(g.Z, { className: x.error })
              })
            : (0, r.jsxs)(m.Z, {
                  loading: S === d.M.FETCHING,
                  children: [
                      (0, r.jsx)('div', {
                          className: x.content,
                          children:
                              null == R
                                  ? void 0
                                  : R.map((e, t) => {
                                        if (e.type === a.s.APPLICATION) {
                                            let n = e.data;
                                            return (0, r.jsx)(
                                                h.Z,
                                                {
                                                    application: n,
                                                    onSelectApplication: (e) => k(e, t)
                                                },
                                                n.id
                                            );
                                        }
                                        return null;
                                    })
                      }),
                      (0, r.jsx)(s.DsT, {
                          className: x.paginationInput,
                          totalCount: Math.min(A * f.PAGE_SIZE, f.MAX_PAGES * f.PAGE_SIZE),
                          pageSize: f.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: y,
                          onPageChange: O
                      })
                  ]
              });
    };
