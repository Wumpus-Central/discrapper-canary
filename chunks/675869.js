n.r(t),
    n.d(t, {
        default: function () {
            return M;
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
    p = n(209613),
    h = n(626135),
    _ = n(674588),
    x = n(463571),
    C = n(894653),
    v = n(809547),
    b = n(738130),
    j = n(34674),
    I = n(170771),
    N = n(33146),
    S = n(125909),
    y = n(190733),
    A = n(101741),
    T = n(132871),
    L = n(147890),
    R = n(166996),
    P = n(981631),
    E = n(669867),
    Z = n(878428);
function M() {
    var e;
    let t;
    let n = (0, T.useApplicationDirectoryHistory)((e) => e.guildId),
        l = (0, g.e7)([C.Z], () => C.Z.getCategories()),
        c = (0, s.TH)(),
        {
            queryParam: o,
            pageParam: d,
            categoryIdParam: f
        } = a.useMemo(() => {
            let e = new URLSearchParams(c.search);
            return {
                queryParam: e.get('q'),
                pageParam: e.get('page'),
                categoryIdParam: e.get('category_id')
            };
        }, []),
        [p, x] = a.useState(null != d ? Number(d) : 1),
        [I, M] = a.useState(null != o ? o : ''),
        [w, G] = a.useState(null !== (e = Number(f)) && void 0 !== e ? e : j.MU),
        O = a.useMemo(() => (null == l ? void 0 : l.find((e) => e.id === w)), [l, w]),
        D = a.useCallback((e) => {
            G(e.id), x(1);
        }, []),
        U = a.useCallback((e) => {
            M(e), x(1), 0 === e.length && G(j.MU);
        }, []),
        B = a.useCallback(
            (e) => {
                var t, n;
                let { query: i, categoryId: a, page: l } = e,
                    r = new URLSearchParams(c.search);
                '' === i ? r.delete('q') : r.set('q', i), a === j.MU ? r.delete('category_id') : r.set('category_id', null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ''), 1 === l ? r.delete('page') : r.set('page', null !== (n = null == l ? void 0 : l.toString()) && void 0 !== n ? n : ''), (0, L.replaceAppDirectoryURLWith)(''.concat(P.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(r.toString()));
            },
            [c.search]
        ),
        H = a.useMemo(() => r().debounce(B, 400), [B]);
    a.useEffect(() => {
        H({
            query: I,
            categoryId: w,
            page: p
        });
    }, [H, I, w, p]);
    let z = (0, g.e7)([v.Z], () =>
            v.Z.getFetchState({
                query: I,
                guildId: n,
                page: p,
                pageSize: 7,
                categoryId: w
            })
        ),
        F = a.useRef({
            query: '',
            guildId: void 0,
            page: void 0,
            pageSize: void 0,
            categoryId: void 0
        }),
        Y = (0, g.cj)([v.Z], () => {
            let e = v.Z.getSearchResults({
                query: I,
                guildId: n
            });
            return null != e
                ? {
                      [j.MU]: e.totalCount,
                      ...e.countsByCategory
                  }
                : {};
        }),
        {
            pageResults: V,
            pageCount: W,
            searchResultsType: q,
            loadId: K
        } = (0, g.cj)([v.Z], () => {
            var e, t;
            let i = {
                    query: I,
                    guildId: n,
                    page: p,
                    pageSize: 7,
                    categoryId: w
                },
                a = v.Z.getSearchResults(i);
            return (
                null == a ? (a = v.Z.getSearchResults(F.current)) : (F.current = i),
                {
                    pageResults: null == a ? void 0 : a.results,
                    pageCount: null !== (e = null == a ? void 0 : a.totalPages) && void 0 !== e ? e : 0,
                    searchResultsType: null !== (t = null == a ? void 0 : a.type) && void 0 !== t ? t : m.c.SEARCH_RESULTS,
                    loadId: null == a ? void 0 : a.loadId
                }
            );
        }),
        J = a.useMemo(() => (null == V ? void 0 : V.filter((e) => !(q === m.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION))), [V, q]),
        X = a.useRef(null),
        Q = (0, T.getCurrentView)(),
        $ = a.useCallback(
            (e) => {
                h.default.track(P.rMx.APP_DIRECTORY_SEARCHED, {
                    search_term: I,
                    num_results: e,
                    current_page: null == Q ? void 0 : Q.type,
                    result_page: p,
                    category: null == O ? void 0 : O.name,
                    category_id: null == O ? void 0 : O.id,
                    guild_id: n
                });
            },
            [null == O ? void 0 : O.id, null == O ? void 0 : O.name, p, n, I, Q]
        ),
        ee = a.useCallback((e) => {
            let { query: t, page: n, activeCategoryId: i, onSuccessCallback: a, guildId: l, fetchCounts: r } = e;
            r &&
                _.yC({
                    query: t,
                    guildId: l
                }),
                _.yC({
                    query: t,
                    guildId: l,
                    options: {
                        page: n,
                        pageSize: 7,
                        categoryId: i
                    },
                    onSuccessCallback: a
                }),
                (X.current = t);
        }, []),
        [et] = a.useState(() =>
            r().debounce(ee, 400, {
                leading: !1,
                trailing: !0
            })
        ),
        en = a.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        ei = a.useCallback(
            (e) => {
                let { application: t, mutualGuilds: i } = e;
                h.default.track(P.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                    current_page: T.ApplicationDirectoryViews.SEARCH,
                    application_id: t.id,
                    load_id: K,
                    search_term: I,
                    guild_id: n,
                    shown_mutual_guilds_count: i.length
                }),
                    (0, L.goToApplication)({ applicationId: t.id });
            },
            [K, I, n]
        );
    a.useEffect(() => {
        ee({
            query: I,
            page: p,
            activeCategoryId: w,
            guildId: n,
            fetchCounts: I !== X.current,
            onSuccessCallback: $
        });
    }, [ee, O, n, p]),
        a.useEffect(() => {
            et({
                query: I,
                page: p,
                activeCategoryId: w,
                guildId: n,
                fetchCounts: I !== X.current,
                onSuccessCallback: $
            });
        }, [I, et]);
    let ea = a.useMemo(() => Object.keys(Y).length > 0, [Y]);
    return (
        (null != J && 0 === W) || z === v.M.ERROR
            ? (t = (0, i.jsx)(N.Z, {
                  category: O,
                  onViewAll: () => {
                      x(1), G(j.MU);
                  }
              }))
            : null != J && J.length > 0 && q === m.c.SEARCH_RESULTS
              ? (t = (0, i.jsx)(k, {
                    items: J,
                    pageCount: W,
                    currentPage: p,
                    showPrimaryCategory: w === j.MU,
                    onItemClick: ei,
                    onChangePage: en
                }))
              : null != J &&
                J.length > 0 &&
                q === m.c.MUSIC &&
                (t = (0, i.jsx)(A.Z, {
                    guildId: n,
                    results: J
                })),
        (0, i.jsx)(b.Z, {
            children: (0, i.jsxs)('div', {
                className: E.page,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.sidebar,
                        children: [
                            (0, i.jsx)('img', {
                                src: Z,
                                alt: '',
                                className: E.sidebarImage
                            }),
                            (0, i.jsx)(R.Z, {
                                className: E.categoryList,
                                countsByCategory: ea ? Y : void 0,
                                currentCategoryId: w,
                                onView: D
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: E.content,
                        children: [
                            (0, i.jsx)(y.Z, {
                                query: I,
                                onChange: U
                            }),
                            (0, i.jsx)(S.Z, {
                                loading: z === v.M.FETCHING,
                                children: (0, i.jsx)('div', {
                                    className: E.contentContainer,
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
function k(e) {
    let { items: t, currentPage: n, pageCount: l, showPrimaryCategory: r, onItemClick: c, onChangePage: o } = e,
        s = (0, p.Z)('application-directory-search');
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
                                            x.Z,
                                            {
                                                href: P.Z5c.APPLICATION_DIRECTORY_PROFILE(a.id),
                                                children: (0, i.jsx)(I.Z, {
                                                    className: E.listing,
                                                    childrenClassName: E.listingDetails,
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
                                                                  className: E.listingDescription,
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
