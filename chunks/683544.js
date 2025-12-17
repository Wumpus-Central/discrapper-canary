n.d(t, { Z: () => j }), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
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
    f = n(292191),
    g = n(258971),
    b = n(979007),
    x = n(981631),
    v = n(461353);
let C = {
        results: [],
        totalPages: 0,
        loadId: "",
    },
    j = function (e) {
        var t;
        let { categoryId: n, onSelectApplication: j, resetScroll: _ } = e,
            [y, I] = r.useState(1),
            S = r.useCallback((e) => {
                I(e);
            }, []);
        r.useEffect(() => {
            I(1);
        }, [n]);
        let P = r.useMemo(
                () => ({
                    query: b.EMPTY_QUERY,
                    page: y,
                    pageSize: b.PAGE_SIZE,
                    categoryId: n,
                }),
                [y, n],
            ),
            O = (0, l.e7)([u.Z], () =>
                u.Z.getFetchState({
                    query: b.EMPTY_QUERY,
                    page: y,
                    pageSize: b.PAGE_SIZE,
                    categoryId: n,
                }),
            ),
            E = (0, l.cj)([u.Z], () => {
                var e;
                return null != (e = u.Z.getSearchResults(P)) ? e : C;
            }),
            N = null != (t = (0, o.Z)(E)) ? t : C,
            { results: T, totalPages: A, loadId: L } = r.useMemo(() => (O === d.M.FETCHING ? N : E), [O, N, E]),
            R = r.useMemo(() => (null == T ? void 0 : T.filter((e) => e.type === i.s.APPLICATION)), [T]),
            Z = r.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: a, guildId: r, fetchCounts: i } = e;
                i &&
                    c.yC({
                        query: b.EMPTY_QUERY,
                        guildId: r,
                    }),
                    c.yC({
                        query: b.EMPTY_QUERY,
                        guildId: r,
                        options: {
                            page: t,
                            pageSize: b.PAGE_SIZE,
                            categoryId: n,
                        },
                        onSuccessCallback: a,
                    });
            }, []);
        r.useEffect(() => {
            _(),
                Z({
                    page: y,
                    activeCategoryId: n,
                    onSuccessCallback: () => {},
                });
        }, [n, _, Z, y]);
        let w = r.useCallback(
            (e, t) => {
                (0, p.zZ)(x.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: g.m_.SEARCH,
                    application_id: e,
                    load_id: L,
                    position: t,
                }),
                    j(e);
            },
            [L, j],
        );
        return O === d.M.ERROR
            ? (0, a.jsx)("div", {
                  className: v.errorContainer,
                  children: (0, a.jsx)(f.Z, { className: v.error }),
              })
            : (0, a.jsxs)(m.Z, {
                  loading: O === d.M.FETCHING,
                  children: [
                      (0, a.jsx)("div", {
                          className: v.content,
                          children:
                              null == R
                                  ? void 0
                                  : R.map((e, t) => {
                                        if (e.type === i.s.APPLICATION) {
                                            let n = e.data;
                                            return (0, a.jsx)(
                                                h.Z,
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
                      (0, a.jsx)(s.DsT, {
                          className: v.paginationInput,
                          totalCount: Math.min(A * b.PAGE_SIZE, b.MAX_PAGES * b.PAGE_SIZE),
                          pageSize: b.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: y,
                          onPageChange: S,
                      }),
                  ],
              });
    };
