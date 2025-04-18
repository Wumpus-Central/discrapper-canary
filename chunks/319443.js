n.r(t), n.d(t, { default: () => F }), n(388685), n(781311);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(456100),
    u = n(114851),
    p = n(88693),
    m = n(611928),
    h = n(763433),
    g = n(922122),
    _ = n(680180),
    f = n(726115),
    b = n(703656),
    x = n(822857),
    v = n(314897),
    C = n(594174),
    j = n(626135),
    y = n(471518),
    I = n(31569),
    N = n(370210),
    O = n(678694),
    P = n(216780),
    S = n(881294),
    E = n(975907),
    T = n(119014),
    A = n(258971),
    L = n(133743),
    R = n(726941),
    Z = n(666697),
    k = n(548514),
    w = n(370648),
    D = n(569527),
    M = n(979007),
    G = n(981631),
    z = n(388032),
    B = n(691133);
function W(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: i } = e,
        s = (0, o.e7)([N.Z], () => N.Z.getApplication(t)),
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
                children: null == s ? void 0 : s.name
            }),
            (0, r.jsx)('div', {
                className: l()(B.detailHeaderSection, B.detailHeaderButtonsContainer, {
                    [B.visible]: !n,
                    [B.hide]: n && !d,
                    [B.hidden]: n && d
                }),
                onTransitionEnd: p,
                children:
                    null != s
                        ? (0, r.jsx)(k.Z, {
                              application: s,
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
    let n = (0, o.e7)([v.default], () => !v.default.isAuthenticated()),
        { onScroll: i, scrollPosition: N, resetScrollPosition: k } = (0, u.M)(),
        F = (0, A.Xh)(),
        V = (0, S.nu)(),
        H = (null == F ? void 0 : F.type) === A.m_.CATEGORY ? F.categoryId : void 0,
        { applicationId: Y, section: X } = (null == F ? void 0 : F.type) === A.m_.APPLICATION ? F : {},
        { query: q, categoryId: K } = (null == F ? void 0 : F.type) === A.m_.SEARCH ? F : {},
        Q = (0, o.e7)([O.Z], () => O.Z.getCategories()),
        J = a.useMemo(() => [(0, P.KQ)(), ...Q], [Q]),
        $ = a.useMemo(() => J.find((e) => e.id === Number(K)), [J, K]),
        { tabs: ee, selectedTab: et, onSelectTab: en } = (0, T.i)(null == H ? void 0 : H.toString()),
        [er, ea] = a.useState(!0),
        ei = A.z8.useField('trackedOpenedFromExternalEntrypoint'),
        el = A.z8.useField('sessionId'),
        es = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        { enabled: eo } = (0, x.W)({ location: 'global_discovery_apps' });
    a.useEffect(() => {
        if (!ei && null == el) {
            let e = (0, f.PM)();
            j.default.track(G.rMx.APP_DIRECTORY_OPENED, {
                source: A.xF.EXTERNAL,
                session_id: e,
                user_id: null == es ? void 0 : es.id
            }),
                A.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: A.xF.EXTERNAL },
                    guildId: null
                });
        }
    }, [el, ei, null == es ? void 0 : es.id]),
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
        e_ = I.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: ef,
            onCollapsedSearchBarClick: eb,
            onSearchBarBlur: ex
        } = (0, p.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === ep.trim(),
            searchBarState: e_,
            setSearchBarState: (e) => I.Z.setState({ searchBarState: e })
        }),
        ev = a.useCallback(
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
        eI = (0, s.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r, location: a } = e;
            t > 0 &&
                (0, S.zZ)(G.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / r,
                    current_page: a
                });
        }, 200),
        eN = a.useCallback(
            (e, t) => {
                i(e),
                    eI({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t
                    });
            },
            [eI, i]
        ),
        eO = ec ? c.iWm : c.jje;
    return (0, r.jsxs)('div', {
        className: l()(B.outerContainer, { [B.loggedOutContainer]: n }),
        children: [
            n ? (0, r.jsx)(U, {}) : null,
            (0, r.jsxs)('div', {
                className: B.innerContainer,
                children: [
                    eo
                        ? (0, r.jsxs)(h.a, {
                              selectedTabId: et,
                              handleTransition: ev,
                              tabs: ee,
                              icon: eO,
                              state: ed || eu ? h.r.SEARCH : h.r.DEFAULT,
                              onAvailableWidthChange: ef,
                              children: [
                                  !ej && (0, r.jsx)(m.z6, { scrollPosition: N }),
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
                                                        children: null != q && '' !== q ? z.NW.formatToPlainString(z.t.zHdzqa, { query: q }) : z.NW.formatToPlainString(z.t.Qhj5Bg, { categoryName: null != (e = null == $ ? void 0 : $.name) ? e : z.NW.string(z.t.E407b2) })
                                                    }),
                                                (0, r.jsx)(_.Z, {
                                                    query: ep,
                                                    placeholder: z.NW.string(z.t['5h0QOD']),
                                                    onTextChange: em,
                                                    onClear: eh,
                                                    onSubmit: eg,
                                                    onCollapsedClick: eb,
                                                    state: e_,
                                                    onBlur: ex
                                                })
                                            ]
                                        })
                              ]
                          })
                        : (0, r.jsxs)(m.ZP, {
                              variant: ej ? m._6.RELATIVE : m._6.OVERLAY,
                              children: [
                                  !ej && (0, r.jsx)(m.z6, { scrollPosition: N }),
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
                                                    : (0, r.jsx)(m.aV, { icon: eO }),
                                                eu
                                                    ? (0, r.jsx)(c.X6q, {
                                                          variant: 'heading-lg/semibold',
                                                          color: 'header-primary',
                                                          className: B.searchHeader,
                                                          children: null != q && '' !== q ? z.NW.formatToPlainString(z.t.zHdzqa, { query: q }) : z.NW.formatToPlainString(z.t.Qhj5Bg, { categoryName: null != (t = null == $ ? void 0 : $.name) ? t : z.NW.string(z.t.E407b2) })
                                                      })
                                                    : (0, r.jsx)(g.Z, {
                                                          tabs: ee,
                                                          selectedTab: et,
                                                          onTabSelect: ev,
                                                          onAvailableWidthChange: ef
                                                      }),
                                                (0, r.jsx)(_.Z, {
                                                    query: ep,
                                                    placeholder: z.NW.string(z.t['5h0QOD']),
                                                    onTextChange: em,
                                                    onClear: eh,
                                                    onSubmit: eg,
                                                    onCollapsedClick: eb,
                                                    state: e_,
                                                    onBlur: ex
                                                })
                                            ]
                                        })
                              ]
                          }),
                    ed
                        ? (0, r.jsx)(Z.Z, {
                              onScroll: (e) => eN(e, A.m_.APPLICATION),
                              onSelectApplication: eC,
                              applicationId: Y,
                              initialTab: X,
                              onButtonsVisibilityChange: ea
                          })
                        : eu
                          ? (0, r.jsx)(D.Z, {
                                onSelectApplication: eC,
                                onScroll: (e) => eN(e, A.m_.SEARCH)
                            })
                          : et === M.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, r.jsx)(w.Z, {
                                  onScroll: (e) => eN(e, A.m_.HOME),
                                  onSelectApplication: eC
                              })
                            : (0, r.jsx)(R.Z, {
                                  tabId: Number(et),
                                  onScroll: (e) => eN(e, A.m_.CATEGORY),
                                  onSelectApplication: eC
                              })
                ]
            })
        ]
    });
};
