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
    x = t(76413);
let h = {
    results: [],
    totalPages: 0,
    loadId: ''
};
n.Z = function (e) {
    var n;
    let { categoryId: t, onSelectApplication: b, resetScroll: I } = e,
        [j, S] = i.useState(1),
        N = i.useCallback((e) => {
            S(e);
        }, []);
    i.useEffect(() => {
        S(1);
    }, [t]);
    let E = i.useMemo(
            () => ({
                query: f.EMPTY_QUERY,
                page: j,
                pageSize: f.PAGE_SIZE,
                categoryId: t
            }),
            [j, t]
        ),
        y = (0, l.e7)([u.Z], () =>
            u.Z.getFetchState({
                query: f.EMPTY_QUERY,
                page: j,
                pageSize: f.PAGE_SIZE,
                categoryId: t
            })
        ),
        A = (0, l.cj)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getSearchResults(E)) && void 0 !== e ? e : h;
        }),
        T = null !== (n = (0, s.Z)(A)) && void 0 !== n ? n : h,
        { results: P, totalPages: R, loadId: Z } = i.useMemo(() => (y === d.M.FETCHING ? T : A), [y, T, A]),
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
                page: j,
                activeCategoryId: t,
                onSuccessCallback: () => {}
            });
    }, [t, I, O, j]);
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
    return y === d.M.ERROR
        ? (0, a.jsx)('div', {
              className: x.errorContainer,
              children: (0, a.jsx)(g.Z, { className: x.error })
          })
        : (0, a.jsxs)(m.Z, {
              loading: y === d.M.FETCHING,
              children: [
                  (0, a.jsx)('div', {
                      className: x.content,
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
                      className: x.paginationInput,
                      totalCount: Math.min(R * f.PAGE_SIZE, f.MAX_PAGES * f.PAGE_SIZE),
                      pageSize: f.PAGE_SIZE,
                      disablePaginationGap: !0,
                      hideMaxPage: !0,
                      currentPage: j,
                      onPageChange: N
                  })
              ]
          });
};
