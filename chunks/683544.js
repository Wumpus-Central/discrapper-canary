t(47120);
var a = t(200651),
    i = t(192379),
    r = t(209173),
    l = t(399606),
    o = t(481060),
    s = t(699682),
    c = t(674588),
    d = t(368862),
    u = t(809547),
    m = t(125909),
    p = t(881294),
    _ = t(797908),
    g = t(292191),
    v = t(258971),
    f = t(979007),
    C = t(981631),
    h = t(76413);
let x = {
    results: [],
    totalPages: 0,
    loadId: ''
};
n.Z = function (e) {
    var n;
    let { categoryId: t, onSelectApplication: b, resetScroll: I } = e,
        [S, j] = i.useState(1),
        E = i.useCallback((e) => {
            j(e);
        }, []);
    i.useEffect(() => {
        j(1);
    }, [t]);
    let y = i.useMemo(
            () => ({
                query: f.EMPTY_QUERY,
                page: S,
                pageSize: f.PAGE_SIZE,
                categoryId: t
            }),
            [S, t]
        ),
        N = (0, l.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: f.EMPTY_QUERY,
                page: S,
                pageSize: f.PAGE_SIZE,
                categoryId: t
            })
        ),
        A = (0, l.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(y)) && void 0 !== e ? e : x;
        }),
        T = null !== (n = (0, s.Z)(A)) && void 0 !== n ? n : x,
        { results: P, totalPages: R, loadId: Z } = i.useMemo(() => (N === d.M.FETCHING ? T : A), [N, T, A]),
        L = i.useMemo(() => (null == P ? void 0 : P.filter((e) => !(e.type !== r.s.APPLICATION))), [P]),
        O = i.useCallback((e) => {
            let { page: n, activeCategoryId: t, onSuccessCallback: a, guildId: i, fetchCounts: r } = e;
            r &&
                c.yC({
                    query: f.EMPTY_QUERY,
                    guildId: i
                }),
                c.yC({
                    query: f.EMPTY_QUERY,
                    guildId: i,
                    options: {
                        page: n,
                        pageSize: f.PAGE_SIZE,
                        categoryId: t
                    },
                    onSuccessCallback: a
                });
        }, []);
    i.useEffect(() => {
        I(),
            O({
                page: S,
                activeCategoryId: t,
                onSuccessCallback: () => {}
            });
    }, [t, I, O, S]);
    let D = i.useCallback(
        (e, n) => {
            (0, p.zZ)(C.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: v.m_.SEARCH,
                application_id: e,
                load_id: Z,
                position: n
            }),
                b(e);
        },
        [Z, b]
    );
    return N === d.M.ERROR
        ? (0, a.jsx)('div', {
              className: h.errorContainer,
              children: (0, a.jsx)(g.Z, { className: h.error })
          })
        : (0, a.jsxs)(m.Z, {
              loading: N === d.M.FETCHING,
              children: [
                  (0, a.jsx)('div', {
                      className: h.content,
                      children:
                          null == L
                              ? void 0
                              : L.map((e, n) => {
                                    if (e.type === r.s.APPLICATION) {
                                        let t = e.data;
                                        return (0, a.jsx)(
                                            _.Z,
                                            {
                                                application: t,
                                                onSelectApplication: (e) => D(e, n)
                                            },
                                            t.id
                                        );
                                    }
                                    return null;
                                })
                  }),
                  (0, a.jsx)(o.Paginator, {
                      className: h.paginationInput,
                      totalCount: Math.min(R * f.PAGE_SIZE, f.MAX_PAGES * f.PAGE_SIZE),
                      pageSize: f.PAGE_SIZE,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: S,
                      onPageChange: E
                  })
              ]
          });
};
