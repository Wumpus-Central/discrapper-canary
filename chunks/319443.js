n.r(t), n.d(t, { default: () => U }), n(388685), n(781311);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(456100),
    u = n(114851),
    p = n(88693),
    m = n(611928),
    h = (n(763433), n(922122)),
    g = n(680180),
    _ = n(726115),
    f = n(703656),
    b = n(314897),
    x = n(594174),
    v = n(626135),
    C = n(471518),
    j = n(31569),
    y = n(370210),
    I = n(678694),
    O = n(216780),
    P = n(881294),
    S = n(975907),
    E = n(119014),
    N = n(258971),
    T = n(133743),
    A = n(726941),
    L = n(666697),
    R = n(548514),
    Z = n(370648),
    k = n(569527),
    w = n(979007),
    D = n(981631),
    M = n(388032),
    G = n(691133);
function z(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: a } = e,
        s = (0, o.e7)([y.Z], () => y.Z.getApplication(t)),
        [d, u] = i.useState(n),
        p = i.useCallback(() => {
            u(n);
        }, [n]);
    return (0, r.jsxs)('div', {
        className: G.detailHeaderContainer,
        children: [
            (0, r.jsx)('div', {
                className: G.detailHeaderSection,
                children: (0, r.jsx)(m.Cm, {
                    icon: c.j9r,
                    onClick: a
                })
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: G.detailHeader,
                lineClamp: 1,
                children: null == s ? void 0 : s.name
            }),
            (0, r.jsx)('div', {
                className: l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
                    [G.visible]: !n,
                    [G.hide]: n && !d,
                    [G.hidden]: n && d
                }),
                onTransitionEnd: p,
                children:
                    null != s
                        ? (0, r.jsx)(R.Z, {
                              application: s,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
function B() {
    let e = i.useCallback(() => {
            (0, P.qF)();
        }, []),
        t = i.useCallback(() => {
            (0, P.rf)();
        }, []);
    return (0, r.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: G.nagbar,
        children: [
            (0, r.jsx)(c.gw7, {
                size: 'custom',
                color: 'white',
                className: G.logo
            }),
            (0, r.jsx)(c.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: M.intl.string(M.t.Ol3MIi)
            }),
            (0, r.jsxs)('div', {
                className: G.nagbarActionContainer,
                children: [
                    (0, r.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: D.kVF.LOGIN,
                        children: M.intl.string(M.t['825cFx'])
                    }),
                    (0, r.jsx)(c.NoS, {
                        onClick: t,
                        noticeType: D.kVF.REGISTER,
                        minor: !0,
                        children: M.intl.string(M.t.HAkXzs)
                    })
                ]
            })
        ]
    });
}
let U = function () {
    var e;
    let t = (0, o.e7)([b.default], () => !b.default.isAuthenticated()),
        { onScroll: n, scrollPosition: a, resetScrollPosition: y } = (0, u.M)(),
        R = (0, N.Xh)(),
        U = (0, P.nu)(),
        F = (null == R ? void 0 : R.type) === N.m_.CATEGORY ? R.categoryId : void 0,
        { applicationId: V, section: H } = (null == R ? void 0 : R.type) === N.m_.APPLICATION ? R : {},
        { query: Y, categoryId: W } = (null == R ? void 0 : R.type) === N.m_.SEARCH ? R : {},
        X = (0, o.e7)([I.Z], () => I.Z.getCategories()),
        K = i.useMemo(() => [(0, O.KQ)(), ...X], [X]),
        q = i.useMemo(() => K.find((e) => e.id === Number(W)), [K, W]),
        { tabs: Q, selectedTab: J, onSelectTab: $ } = (0, E.i)(null == F ? void 0 : F.toString()),
        [ee, et] = i.useState(!0),
        en = N.z8.useField('trackedOpenedFromExternalEntrypoint'),
        er = N.z8.useField('sessionId'),
        ei = (0, o.e7)([x.default], () => x.default.getCurrentUser());
    i.useEffect(() => {
        if (!en && null == er) {
            let e = (0, _.PM)();
            v.default.track(D.rMx.APP_DIRECTORY_OPENED, {
                source: N.xF.EXTERNAL,
                session_id: e,
                user_id: null == ei ? void 0 : ei.id
            }),
                N.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: N.xF.EXTERNAL },
                    guildId: null
                });
        }
    }, [er, en, null == ei ? void 0 : ei.id]),
        i.useEffect(() => {
            C.CP();
        }, []),
        i.useEffect(() => {
            U && C.g5();
        }, [U]),
        i.useEffect(() => N.aQ.setState({ lastItem: R }), [R]);
    let { enabled: ea } = d.c.useExperiment({ location: 'GlobalDiscoveryAppsRoot' }, { autoTrackExposure: !0 }),
        el = null != V,
        es = (null == R ? void 0 : R.type) === N.m_.SEARCH,
        { searchQuery: eo, onSearchTextChange: ec, onClearSearch: ed, onSearchSubmit: eu } = (0, S.M)({ initialQuery: null != Y ? Y : '' }),
        ep = j.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: em,
            onCollapsedSearchBarClick: eh,
            onSearchBarBlur: eg
        } = (0, p.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === eo.trim(),
            searchBarState: ep,
            setSearchBarState: (e) => j.Z.setState({ searchBarState: e })
        }),
        e_ = i.useCallback(
            (e) => {
                $(e), es && ed(), y();
            },
            [es, ed, $, y]
        ),
        ef = i.useCallback((e) => (0, T.ph)({ applicationId: e }), []),
        eb = el || es,
        ex = i.useCallback(() => {
            null != (0, N.Uc)() ? (0, f.op)() : (0, T.Yp)();
        }, []),
        ev = (0, s.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r, location: i } = e;
            t > 0 &&
                (0, P.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / r,
                    current_page: i
                });
        }, 200),
        eC = i.useCallback(
            (e, t) => {
                n(e),
                    ev({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t
                    });
            },
            [ev, n]
        ),
        ej = ea ? c.iWm : c.jje;
    return (0, r.jsxs)('div', {
        className: l()(G.outerContainer, { [G.loggedOutContainer]: t }),
        children: [
            t ? (0, r.jsx)(B, {}) : null,
            (0, r.jsxs)('div', {
                className: G.innerContainer,
                children: [
                    (0, r.jsxs)(m.ZP, {
                        variant: eb ? m._6.RELATIVE : m._6.OVERLAY,
                        children: [
                            !eb && (0, r.jsx)(m.z6, { scrollPosition: a }),
                            el
                                ? (0, r.jsx)(z, {
                                      applicationId: V,
                                      hideDetailHeaderButtons: ee,
                                      onClickBack: ex
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          es
                                              ? (0, r.jsx)(m.Cm, {
                                                    icon: c.j9r,
                                                    onClick: ex
                                                })
                                              : (0, r.jsx)(m.aV, { icon: ej }),
                                          es
                                              ? (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: G.searchHeader,
                                                    children: null != Y && '' !== Y ? M.intl.formatToPlainString(M.t.zHdzqa, { query: Y }) : M.intl.formatToPlainString(M.t.Qhj5Bg, { categoryName: null != (e = null == q ? void 0 : q.name) ? e : M.intl.string(M.t.E407b2) })
                                                })
                                              : (0, r.jsx)(h.Z, {
                                                    tabs: Q,
                                                    selectedTab: J,
                                                    onTabSelect: e_,
                                                    onAvailableWidthChange: em
                                                }),
                                          (0, r.jsx)(g.Z, {
                                              query: eo,
                                              placeholder: M.intl.string(M.t['5h0QOD']),
                                              onTextChange: ec,
                                              onClear: ed,
                                              onSubmit: eu,
                                              onCollapsedClick: eh,
                                              state: ep,
                                              onBlur: eg
                                          })
                                      ]
                                  })
                        ]
                    }),
                    el
                        ? (0, r.jsx)(L.Z, {
                              onScroll: (e) => eC(e, N.m_.APPLICATION),
                              onSelectApplication: ef,
                              applicationId: V,
                              initialTab: H,
                              onButtonsVisibilityChange: et
                          })
                        : es
                          ? (0, r.jsx)(k.Z, {
                                onSelectApplication: ef,
                                onScroll: (e) => eC(e, N.m_.SEARCH)
                            })
                          : J === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, r.jsx)(Z.Z, {
                                  onScroll: (e) => eC(e, N.m_.HOME),
                                  onSelectApplication: ef
                              })
                            : (0, r.jsx)(A.Z, {
                                  tabId: Number(J),
                                  onScroll: (e) => eC(e, N.m_.CATEGORY),
                                  onSelectApplication: ef
                              })
                ]
            })
        ]
    });
};
