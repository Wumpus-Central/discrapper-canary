n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(209173),
    l = n(399606),
    s = n(481060),
    o = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    m = n(125909),
    h = n(881294),
    p = n(797908),
    g = n(292191),
    _ = n(258971),
    x = n(979007),
    C = n(981631),
    v = n(76413);
let f = {
        results: [],
        totalPages: 0,
        loadId: ''
    },
    I = function (e) {
        var t;
        let { categoryId: n, onSelectApplication: I, resetScroll: b } = e,
            [j, S] = a.useState(1),
            N = a.useCallback((e) => {
                S(e);
            }, []);
        a.useEffect(() => {
            S(1);
        }, [n]);
        let E = a.useMemo(
                () => ({
                    query: x.EMPTY_QUERY,
                    page: j,
                    pageSize: x.PAGE_SIZE,
                    categoryId: n
                }),
                [j, n]
            ),
            y = (0, l.e7)([u.Z], () =>
                u.Z.getFetchState({
                    query: x.EMPTY_QUERY,
                    page: j,
                    pageSize: x.PAGE_SIZE,
                    categoryId: n
                })
            ),
            P = (0, l.cj)([u.Z], () => {
                var e;
                return null !== (e = u.Z.getSearchResults(E)) && void 0 !== e ? e : f;
            }),
            A = null !== (t = (0, o.Z)(P)) && void 0 !== t ? t : f,
            { results: T, totalPages: L, loadId: R } = a.useMemo(() => (y === d.M.FETCHING ? A : P), [y, A, P]),
            Z = a.useMemo(() => (null == T ? void 0 : T.filter((e) => !(e.type !== r.s.APPLICATION))), [T]),
            O = a.useCallback((e) => {
                let { page: t, activeCategoryId: n, onSuccessCallback: i, guildId: a, fetchCounts: r } = e;
                r &&
                    c.yC({
                        query: x.EMPTY_QUERY,
                        guildId: a
                    }),
                    c.yC({
                        query: x.EMPTY_QUERY,
                        guildId: a,
                        options: {
                            page: t,
                            pageSize: x.PAGE_SIZE,
                            categoryId: n
                        },
                        onSuccessCallback: i
                    });
            }, []);
        a.useEffect(() => {
            b(),
                O({
                    page: j,
                    activeCategoryId: n,
                    onSuccessCallback: () => {}
                });
        }, [n, b, O, j]);
        let k = a.useCallback(
            (e, t) => {
                (0, h.zZ)(C.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: _.m_.SEARCH,
                    application_id: e,
                    load_id: R,
                    position: t
                }),
                    I(e);
            },
            [R, I]
        );
        return y === d.M.ERROR
            ? (0, i.jsx)('div', {
                  className: v.errorContainer,
                  children: (0, i.jsx)(g.Z, { className: v.error })
              })
            : (0, i.jsxs)(m.Z, {
                  loading: y === d.M.FETCHING,
                  children: [
                      (0, i.jsx)('div', {
                          className: v.content,
                          children:
                              null == Z
                                  ? void 0
                                  : Z.map((e, t) => {
                                        if (e.type === r.s.APPLICATION) {
                                            let n = e.data;
                                            return (0, i.jsx)(
                                                p.Z,
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
                      (0, i.jsx)(s.DsT, {
                          className: v.paginationInput,
                          totalCount: Math.min(L * x.PAGE_SIZE, x.MAX_PAGES * x.PAGE_SIZE),
                          pageSize: x.PAGE_SIZE,
                          disablePaginationGap: !0,
                          hideMaxPage: !0,
                          currentPage: j,
                          onPageChange: N
                      })
                  ]
              });
    };
