n.r(t),
    n.d(t, {
        default: function () {
            return k;
        }
    }),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(392711),
    r = n.n(l),
    c = n(991637),
    o = n.n(c),
    s = n(512969),
    d = n(91192),
    u = n(209173),
    m = n(375051),
    g = n(399606),
    f = n(481060),
    p = n(211266),
    h = n(209613),
    _ = n(626135),
    x = n(674588),
    C = n(463571),
    v = n(894653),
    b = n(809547),
    j = n(738130),
    I = n(34674),
    N = n(170771),
    S = n(33146),
    y = n(125909),
    A = n(190733),
    T = n(101741),
    L = n(132871),
    R = n(147890),
    P = n(166996),
    E = n(981631),
    Z = n(669867),
    M = n(878428);
function k() {
    var e;
    let t;
    let n = (0, L.useApplicationDirectoryHistory)((e) => e.guildId),
        l = (0, g.e7)([v.Z], () => v.Z.getCategories()),
        c = (0, s.TH)(),
        {
            queryParam: o,
            pageParam: d,
            categoryIdParam: f
        } = (0, p.Z)(() => {
            let e = new URLSearchParams(c.search);
            return {
                queryParam: e.get('q'),
                pageParam: e.get('page'),
                categoryIdParam: e.get('category_id')
            };
        }),
        [h, C] = a.useState(null != d ? Number(d) : 1),
        [N, k] = a.useState(null != o ? o : ''),
        [G, O] = a.useState(null !== (e = Number(f)) && void 0 !== e ? e : I.MU),
        D = a.useMemo(() => (null == l ? void 0 : l.find((e) => e.id === G)), [l, G]),
        U = a.useCallback((e) => {
            O(e.id), C(1);
        }, []),
        B = a.useCallback((e) => {
            k(e), C(1), 0 === e.length && O(I.MU);
        }, []),
        H = a.useCallback(
            (e) => {
                var t, n;
                let { query: i, categoryId: a, page: l } = e,
                    r = new URLSearchParams(c.search);
                '' === i ? r.delete('q') : r.set('q', i), a === I.MU ? r.delete('category_id') : r.set('category_id', null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ''), 1 === l ? r.delete('page') : r.set('page', null !== (n = null == l ? void 0 : l.toString()) && void 0 !== n ? n : ''), (0, R.replaceAppDirectoryURLWith)(''.concat(E.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(r.toString()));
            },
            [c.search]
        ),
        z = a.useMemo(() => r().debounce(H, 400), [H]);
    a.useEffect(() => {
        z({
            query: N,
            categoryId: G,
            page: h
        });
    }, [z, N, G, h]);
    let F = (0, g.e7)([b.Z], () =>
            b.Z.getFetchState({
                query: N,
                guildId: n,
                page: h,
                pageSize: 7,
                categoryId: G
            })
        ),
        Y = a.useRef({
            query: '',
            guildId: void 0,
            page: void 0,
            pageSize: void 0,
            categoryId: void 0
        }),
        V = (0, g.cj)([b.Z], () => {
            let e = b.Z.getSearchResults({
                query: N,
                guildId: n
            });
            return null != e
                ? {
                      [I.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        {
            pageResults: W,
            pageCount: q,
            searchResultsType: K,
            loadId: J
        } = (0, g.cj)([b.Z], () => {
            var e, t;
            let i = {
                    query: N,
                    guildId: n,
                    page: h,
                    pageSize: 7,
                    categoryId: G
                },
                a = b.Z.getSearchResults(i);
            return (
                null == a ? (a = b.Z.getSearchResults(Y.current)) : (Y.current = i),
                {
                    pageResults: null == a ? void 0 : a.results,
                    pageCount: null !== (e = null == a ? void 0 : a.totalPages) && void 0 !== e ? e : 0,
                    searchResultsType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : m.c.SEARCH_RESULTS,
                    loadId: null == a ? void 0 : a.loadId
                }
            );
        }),
        X = a.useMemo(() => (null == W ? void 0 : W.filter((e) => !(K === m.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION))), [W, K]),
        Q = a.useRef(null),
        $ = (0, L.getCurrentView)(),
        ee = a.useCallback(
            (e) => {
                _.default.track(E.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: N,
                    num_results: e,
                    current_page: null == $ ? void 0 : $.type,
                    result_page: h,
                    category: null == D ? void 0 : D.name,
                    category_id: null == D ? void 0 : D.id,
                    guild_id: n
                });
            },
            [null == D ? void 0 : D.id, null == D ? void 0 : D.name, h, n, N, $]
        ),
        et = a.useCallback((e) => {
            let { query: t, page: n, activeCategoryId: i, onSuccessCallback: a, guildId: l, fetchCounts: r } = e;
            r &&
                x.yC({
                    query: t,
                    guildId: l
                }),
                x.yC({
                    query: t,
                    guildId: l,
                    options: {
                        page: n,
                        pageSize: 7,
                        categoryId: i
                    },
                    onSuccessCallback: a
                }),
                (Q.current = t);
        }, []),
        [en] = a.useState(() =>
            r().debounce(et, 400, {
                leading: !1,
                trailing: !0
            })
        ),
        ei = a.useCallback(
            (e) => {
                C(e);
            },
            [C]
        ),
        ea = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: i } = e;
                _.default.track(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: L.ApplicationDirectoryViews.SEARCH,
                    application_id: t.id,
                    load_id: J,
                    search_term: N,
                    guild_id: n,
                    shown_mutual_guilds_count: i.length
                }),
                    (0, R.goToApplication)({ applicationId: t.id });
            },
            [J, N, n]
        ),
        el = {
            categoryId: G,
            query: N,
            trackAppDirectorySearched: ee,
            guildId: n,
            page: h
        },
        er = a.useRef(el);
    a.useEffect(() => {
        er.current = el;
    }),
        a.useEffect(() => {
            let { categoryId: e, query: t, trackAppDirectorySearched: i } = er.current;
            et({
                query: t,
                page: h,
                activeCategoryId: e,
                guildId: n,
                fetchCounts: t !== Q.current,
                onSuccessCallback: i
            });
        }, [et, D, n, h]),
        a.useEffect(() => {
            let { categoryId: e, query: t, trackAppDirectorySearched: n, guildId: i, page: a } = er.current;
            en({
                query: t,
                page: a,
                activeCategoryId: e,
                guildId: i,
                fetchCounts: t !== Q.current,
                onSuccessCallback: n
            });
        }, [N, en]);
    let ec = a.useMemo(() => Object.keys(V).length > 0, [V]);
    return (
        (null != X && 0 === q) || F === b.M.ERROR
            ? (t = (0, i.jsx)(S.Z, {
                  category: D,
                  onViewAll: () => {
                      C(1), O(I.MU);
                  }
              }))
            : null != X && X.length > 0 && K === m.c.SEARCH_RESULTS
              ? (t = (0, i.jsx)(w, {
                    items: X,
                    pageCount: q,
                    currentPage: h,
                    showPrimaryCategory: G === I.MU,
                    onItemClick: ea,
                    onChangePage: ei
                }))
              : null != X &&
                X.length > 0 &&
                K === m.c.MUSIC &&
                (t = (0, i.jsx)(T.Z, {
                    guildId: n,
                    results: X
                })),
        (0, i.jsx)(j.Z, {
            children: (0, i.jsxs)('div', {
                className: Z.page,
                children: [
                    (0, i.jsxs)('div', {
                        className: Z.sidebar,
                        children: [
                            (0, i.jsx)('img', {
                                src: M,
                                alt: '',
                                className: Z.sidebarImage
                            }),
                            (0, i.jsx)(P.Z, {
                                className: Z.categoryList,
                                countsByCategory: ec ? V : void 0,
                                currentCategoryId: G,
                                onView: U
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: Z.content,
                        children: [
                            (0, i.jsx)(A.Z, {
                                query: N,
                                onChange: B
                            }),
                            (0, i.jsx)(y.Z, {
                                loading: F === b.M.FETCHING,
                                children: (0, i.jsx)('div', {
                                    className: Z.contentContainer,
                                    children: t
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function w(e) {
    let { items: t, currentPage: n, pageCount: l, showPrimaryCategory: r, onItemClick: c, onChangePage: o } = e,
        s = (0, h.Z)('application-directory-search');
    return (0, i.jsxs)(a.Fragment, {
        children: [
            (0, i.jsx)(d.bG, {
                navigator: s,
                children: (0, i.jsx)(d.SJ, {
                    children: (e) => {
                        let { ref: n, ...a } = e;
                        return (0, i.jsx)('ul', {
                            ref: n,
                            ...a,
                            children: t.map((e) => {
                                if (e.type === u.s.APPLICATION) {
                                    var t;
                                    let n;
                                    let a = e.data;
                                    return (
                                        (null === (t = a.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && a.directory_entry.short_description.length > 0 ? (n = a.directory_entry.short_description) : null != a.description && a.description.length > 0 && (n = a.description),
                                        (0, i.jsx)(
                                            C.Z,
                                            {
                                                href: E.Z5c.APPLICATION_DIRECTORY_PROFILE(a.id),
                                                children: (0, i.jsx)(N.Z, {
                                                    className: Z.listing,
                                                    childrenClassName: Z.listingDetails,
                                                    application: a,
                                                    onView: (e) => {
                                                        let { mutualGuilds: t } = e;
                                                        return c({
                                                            application: a,
                                                            mutualGuilds: t
                                                        });
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: r,
                                                    source: 'search',
                                                    children:
                                                        null != n
                                                            ? (0, i.jsx)(f.Text, {
                                                                  className: Z.listingDescription,
                                                                  variant: 'text-md/normal',
                                                                  lineClamp: 3,
                                                                  children: n
                                                              })
                                                            : null
                                                })
                                            },
                                            a.id
                                        )
                                    );
                                }
                            })
                        });
                    }
                })
            }),
            (0, i.jsx)(f.Paginator, {
                currentPage: n,
                totalCount: Math.min(7 * l, 700),
                pageSize: 7,
                onPageChange: o,
                disablePaginationGap: !0
            })
        ]
    });
}
o().shim();
