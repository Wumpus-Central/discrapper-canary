n(47120);
var i = n(200651),
    a = n(192379),
    r = n(209173),
    l = n(399606),
    o = n(481060),
    s = n(699682),
    c = n(674588),
    d = n(368862),
    u = n(809547),
    m = n(125909),
    p = n(881294),
    h = n(797908),
    g = n(292191),
    C = n(258971),
    x = n(979007),
    v = n(981631),
    _ = n(76413);
let f = {
    results: [],
    totalPages: 0,
    loadId: ''
};
t.Z = function (e) {
    var t;
    let { categoryId: n, onSelectApplication: b, resetScroll: I } = e,
        [S, j] = a.useState(1),
        N = a.useCallback((e) => {
            j(e);
        }, []);
    a.useEffect(() => {
        j(1);
    }, [n]);
    let E = a.useMemo(
            () => ({
                query: x.EMPTY_QUERY,
                page: S,
                pageSize: x.PAGE_SIZE,
                categoryId: n
            }),
            [S, n]
        ),
        y = (0, l.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: x.EMPTY_QUERY,
                page: S,
                pageSize: x.PAGE_SIZE,
                categoryId: n
            })
        ),
        P = (0, l.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(E)) && void 0 !== e ? e : f;
        }),
        A = null !== (t = (0, s.Z)(P)) && void 0 !== t ? t : f,
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
        I(),
            O({
                page: S,
                activeCategoryId: n,
                onSuccessCallback: () => {}
            });
    }, [n, I, O, S]);
    let M = a.useCallback(
        (e, t) => {
            (0, p.zZ)(v.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: C.m_.SEARCH,
                application_id: e,
                load_id: R,
                position: t
            }),
                b(e);
        },
        [R, b]
    );
    return y === d.M.ERROR
        ? (0, i.jsx)('div', {
              className: _.errorContainer,
              children: (0, i.jsx)(g.Z, { className: _.error })
          })
        : (0, i.jsxs)(m.Z, {
              loading: y === d.M.FETCHING,
              children: [
                  (0, i.jsx)('div', {
                      className: _.content,
                      children:
                          null == Z
                              ? void 0
                              : Z.map((e, t) => {
                                    if (e.type === r.s.APPLICATION) {
                                        let n = e.data;
                                        return (0, i.jsx)(
                                            h.Z,
                                            {
                                                application: n,
                                                onSelectApplication: (e) => M(e, t)
                                            },
                                            n.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, i.jsx)(o.Paginator, {
                      className: _.paginationInput,
                      totalCount: Math.min(L * x.PAGE_SIZE, x.MAX_PAGES * x.PAGE_SIZE),
                      pageSize: x.PAGE_SIZE,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: S,
                      onPageChange: N
                  })
              ]
          });
};
