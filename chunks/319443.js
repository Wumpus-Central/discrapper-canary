n.r(t), n.d(t, { default: () => F }), n(47120), n(566702);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n(442837),
    c = n(481060),
    d = n(456100),
    u = n(979233),
    p = n(88693),
    m = n(611928),
    h = n(763433),
    g = n(922122),
    f = n(680180),
    _ = n(726115),
    b = n(703656),
    v = n(822857),
    x = n(314897),
    C = n(594174),
    j = n(626135),
    y = n(471518),
    O = n(31569),
    P = n(370210),
    I = n(678694),
    N = n(216780),
    S = n(881294),
    E = n(975907),
    T = n(119014),
    A = n(258971),
    L = n(133743),
    R = n(726941),
    w = n(666697),
    k = n(548514),
    Z = n(370648),
    D = n(569527),
    M = n(979007),
    G = n(981631),
    z = n(388032),
    B = n(483943);
function W(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: i } = e,
        o = (0, s.e7)([P.Z], () => P.Z.getApplication(t)),
        [d, u] = a.useState(n),
        p = a.useCallback(() => {
            u(n);
        }, [n]);
    return (0, r.jsxs)('div', {
        className: B.detailHeaderContainer,
        children: [
            (0, r.jsx)('div', {
                className: B.detailHeaderSection,
                children: (0, r.jsx)(m.Cm, {
                    icon: c.j9r,
                    onClick: i
                })
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: B.detailHeader,
                lineClamp: 1,
                children: null == o ? void 0 : o.name
            }),
            (0, r.jsx)('div', {
                className: l()(B.detailHeaderSection, B.detailHeaderButtonsContainer, {
                    [B.visible]: !n,
                    [B.hide]: n && !d,
                    [B.hidden]: n && d
                }),
                onTransitionEnd: p,
                children:
                    null != o
                        ? (0, r.jsx)(k.Z, {
                              application: o,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
function U() {
    let e = a.useCallback(() => {
            (0, S.qF)();
        }, []),
        t = a.useCallback(() => {
            (0, S.rf)();
        }, []);
    return (0, r.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: B.nagbar,
        children: [
            (0, r.jsx)(c.gw7, {
                size: 'custom',
                color: 'white',
                className: B.logo
            }),
            (0, r.jsx)(c.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: z.NW.string(z.t.Ol3MIi)
            }),
            (0, r.jsxs)('div', {
                className: B.nagbarActionContainer,
                children: [
                    (0, r.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: G.kVF.LOGIN,
                        children: z.NW.string(z.t['825cFx'])
                    }),
                    (0, r.jsx)(c.NoS, {
                        onClick: t,
                        noticeType: G.kVF.REGISTER,
                        minor: !0,
                        children: z.NW.string(z.t.HAkXzs)
                    })
                ]
            })
        ]
    });
}
let F = function () {
    var e, t;
    let n = (0, s.e7)([x.default], () => !x.default.isAuthenticated()),
        { onScroll: i, scrollPosition: P, resetScrollPosition: k } = (0, u.M)(),
        F = (0, A.Xh)(),
        V = (0, S.nu)(),
        H = (null == F ? void 0 : F.type) === A.m_.CATEGORY ? F.categoryId : void 0,
        { applicationId: Y, section: X } = (null == F ? void 0 : F.type) === A.m_.APPLICATION ? F : {},
        { query: q, categoryId: K } = (null == F ? void 0 : F.type) === A.m_.SEARCH ? F : {},
        Q = (0, s.e7)([I.Z], () => I.Z.getCategories()),
        J = a.useMemo(() => [(0, N.KQ)(), ...Q], [Q]),
        $ = a.useMemo(() => J.find((e) => e.id === Number(K)), [J, K]),
        { tabs: ee, selectedTab: et, onSelectTab: en } = (0, T.i)(null == H ? void 0 : H.toString()),
        [er, ea] = a.useState(!0),
        ei = A.z8.useField('trackedOpenedFromExternalEntrypoint'),
        el = A.z8.useField('sessionId'),
        eo = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        { enabled: es } = (0, v.W)({ location: 'global_discovery_apps' });
    a.useEffect(() => {
        if (!ei && null == el) {
            let e = (0, _.PM)();
            j.default.track(G.rMx.APP_DIRECTORY_OPENED, {
                source: A.xF.EXTERNAL,
                session_id: e,
                user_id: null == eo ? void 0 : eo.id
            }),
                A.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: A.xF.EXTERNAL },
                    guildId: null
                });
        }
    }, [el, ei, null == eo ? void 0 : eo.id]),
        a.useEffect(() => {
            y.CP();
        }, []),
        a.useEffect(() => {
            V && y.g5();
        }, [V]),
        a.useEffect(() => A.aQ.setState({ lastItem: F }), [F]);
    let { enabled: ec } = d.c.useExperiment({ location: 'GlobalDiscoveryAppsRoot' }, { autoTrackExposure: !0 }),
        ed = null != Y,
        eu = (null == F ? void 0 : F.type) === A.m_.SEARCH,
        { searchQuery: ep, onSearchTextChange: em, onClearSearch: eh, onSearchSubmit: eg } = (0, E.M)({ initialQuery: null != q ? q : '' }),
        ef = O.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: e_,
            onCollapsedSearchBarClick: eb,
            onSearchBarBlur: ev
        } = (0, p.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === ep.trim(),
            searchBarState: ef,
            setSearchBarState: (e) => O.Z.setState({ searchBarState: e })
        }),
        ex = a.useCallback(
            (e) => {
                en(e), eu && eh(), k();
            },
            [eu, eh, en, k]
        ),
        eC = a.useCallback((e) => (0, L.ph)({ applicationId: e }), []),
        ej = ed || eu,
        ey = a.useCallback(() => {
            null != (0, A.Uc)() ? (0, b.op)() : (0, L.Yp)();
        }, []),
        eO = (0, o.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r, location: a } = e;
            t > 0 &&
                (0, S.zZ)(G.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / r,
                    current_page: a
                });
        }, 200),
        eP = a.useCallback(
            (e, t) => {
                i(e),
                    eO({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t
                    });
            },
            [eO, i]
        ),
        eI = ec ? c.iWm : c.jje;
    return (0, r.jsxs)('div', {
        className: l()(B.outerContainer, { [B.loggedOutContainer]: n }),
        children: [
            n ? (0, r.jsx)(U, {}) : null,
            (0, r.jsxs)('div', {
                className: B.innerContainer,
                children: [
                    es
                        ? (0, r.jsxs)(h.a, {
                              selectedTabId: et,
                              handleTransition: ex,
                              tabs: ee,
                              icon: eI,
                              state: ed || eu ? h.r.SEARCH : h.r.DEFAULT,
                              onAvailableWidthChange: e_,
                              children: [
                                  !ej && (0, r.jsx)(m.z6, { scrollPosition: P }),
                                  ed
                                      ? (0, r.jsx)(W, {
                                            applicationId: Y,
                                            hideDetailHeaderButtons: er,
                                            onClickBack: ey
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                eu &&
                                                    (0, r.jsx)(m.Cm, {
                                                        icon: c.j9r,
                                                        onClick: ey
                                                    }),
                                                eu &&
                                                    (0, r.jsx)(c.X6q, {
                                                        variant: 'heading-lg/semibold',
                                                        color: 'header-primary',
                                                        className: B.searchHeader,
                                                        children: null != q && '' !== q ? z.NW.formatToPlainString(z.t.zHdzqa, { query: q }) : z.NW.formatToPlainString(z.t.Qhj5Bg, { categoryName: null !== (e = null == $ ? void 0 : $.name) && void 0 !== e ? e : z.NW.string(z.t.E407b2) })
                                                    }),
                                                (0, r.jsx)(f.Z, {
                                                    query: ep,
                                                    placeholder: z.NW.string(z.t['5h0QOD']),
                                                    onTextChange: em,
                                                    onClear: eh,
                                                    onSubmit: eg,
                                                    onCollapsedClick: eb,
                                                    state: ef,
                                                    onBlur: ev
                                                })
                                            ]
                                        })
                              ]
                          })
                        : (0, r.jsxs)(m.ZP, {
                              variant: ej ? m._6.RELATIVE : m._6.OVERLAY,
                              children: [
                                  !ej && (0, r.jsx)(m.z6, { scrollPosition: P }),
                                  ed
                                      ? (0, r.jsx)(W, {
                                            applicationId: Y,
                                            hideDetailHeaderButtons: er,
                                            onClickBack: ey
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                eu
                                                    ? (0, r.jsx)(m.Cm, {
                                                          icon: c.j9r,
                                                          onClick: ey
                                                      })
                                                    : (0, r.jsx)(m.aV, { icon: eI }),
                                                eu
                                                    ? (0, r.jsx)(c.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          color: 'header-primary',
                                                          className: B.searchHeader,
                                                          children: null != q && '' !== q ? z.NW.formatToPlainString(z.t.zHdzqa, { query: q }) : z.NW.formatToPlainString(z.t.Qhj5Bg, { categoryName: null !== (t = null == $ ? void 0 : $.name) && void 0 !== t ? t : z.NW.string(z.t.E407b2) })
                                                      })
                                                    : (0, r.jsx)(g.Z, {
                                                          tabs: ee,
                                                          selectedTab: et,
                                                          onTabSelect: ex,
                                                          onAvailableWidthChange: e_
                                                      }),
                                                (0, r.jsx)(f.Z, {
                                                    query: ep,
                                                    placeholder: z.NW.string(z.t['5h0QOD']),
                                                    onTextChange: em,
                                                    onClear: eh,
                                                    onSubmit: eg,
                                                    onCollapsedClick: eb,
                                                    state: ef,
                                                    onBlur: ev
                                                })
                                            ]
                                        })
                              ]
                          }),
                    ed
                        ? (0, r.jsx)(w.Z, {
                              onScroll: (e) => eP(e, A.m_.APPLICATION),
                              onSelectApplication: eC,
                              applicationId: Y,
                              initialTab: X,
                              onButtonsVisibilityChange: ea
                          })
                        : eu
                          ? (0, r.jsx)(D.Z, {
                                onSelectApplication: eC,
                                onScroll: (e) => eP(e, A.m_.SEARCH)
                            })
                          : et === M.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, r.jsx)(Z.Z, {
                                  onScroll: (e) => eP(e, A.m_.HOME),
                                  onSelectApplication: eC
                              })
                            : (0, r.jsx)(R.Z, {
                                  tabId: Number(et),
                                  onScroll: (e) => eP(e, A.m_.CATEGORY),
                                  onSelectApplication: eC
                              })
                ]
            })
        ]
    });
};
