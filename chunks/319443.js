n.r(t), n.d(t, { default: () => B }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(392711),
    s = n(442837),
    c = n(481060),
    d = n(979233),
    u = n(88693),
    p = n(611928),
    m = n(922122),
    h = n(680180),
    g = n(726115),
    _ = n(703656),
    f = n(314897),
    b = n(594174),
    v = n(626135),
    x = n(471518),
    C = n(31569),
    j = n(370210),
    y = n(678694),
    I = n(216780),
    O = n(881294),
    N = n(975907),
    P = n(119014),
    S = n(258971),
    E = n(133743),
    A = n(726941),
    L = n(666697),
    T = n(548514),
    R = n(370648),
    k = n(569527),
    Z = n(979007),
    w = n(981631),
    D = n(388032),
    M = n(483943);
function G(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: a } = e,
        o = (0, s.e7)([j.Z], () => j.Z.getApplication(t)),
        [d, u] = i.useState(n),
        m = i.useCallback(() => {
            u(n);
        }, [n]);
    return (0, r.jsxs)('div', {
        className: M.detailHeaderContainer,
        children: [
            (0, r.jsx)('div', {
                className: M.detailHeaderSection,
                children: (0, r.jsx)(p.Cm, {
                    icon: c.j9r,
                    onClick: a
                })
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: M.detailHeader,
                lineClamp: 1,
                children: null == o ? void 0 : o.name
            }),
            (0, r.jsx)('div', {
                className: l()(M.detailHeaderSection, M.detailHeaderButtonsContainer, {
                    [M.visible]: !n,
                    [M.hide]: n && !d,
                    [M.hidden]: n && d
                }),
                onTransitionEnd: m,
                children:
                    null != o
                        ? (0, r.jsx)(T.Z, {
                              application: o,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
function z() {
    let e = i.useCallback(() => {
            (0, O.qF)();
        }, []),
        t = i.useCallback(() => {
            (0, O.rf)();
        }, []);
    return (0, r.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: M.nagbar,
        children: [
            (0, r.jsx)(c.gw7, {
                size: 'custom',
                color: 'white',
                className: M.logo
            }),
            (0, r.jsx)(c.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: D.NW.string(D.t.Ol3MIi)
            }),
            (0, r.jsxs)('div', {
                className: M.nagbarActionContainer,
                children: [
                    (0, r.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: w.kVF.LOGIN,
                        children: D.NW.string(D.t['825cFx'])
                    }),
                    (0, r.jsx)(c.NoS, {
                        onClick: t,
                        noticeType: w.kVF.REGISTER,
                        minor: !0,
                        children: D.NW.string(D.t.HAkXzs)
                    })
                ]
            })
        ]
    });
}
let B = function () {
    var e;
    let t = (0, s.e7)([f.default], () => !f.default.isAuthenticated()),
        { onScroll: n, scrollPosition: a, resetScrollPosition: j } = (0, d.M)(),
        T = (0, S.Xh)(),
        B = (0, O.nu)(),
        U = (null == T ? void 0 : T.type) === S.m_.CATEGORY ? T.categoryId : void 0,
        { applicationId: W, section: F } = (null == T ? void 0 : T.type) === S.m_.APPLICATION ? T : {},
        { query: V, categoryId: H } = (null == T ? void 0 : T.type) === S.m_.SEARCH ? T : {},
        Y = (0, s.e7)([y.Z], () => y.Z.getCategories()),
        X = i.useMemo(() => [(0, I.KQ)(), ...Y], [Y]),
        K = i.useMemo(() => X.find((e) => e.id === Number(H)), [X, H]),
        { tabs: q, selectedTab: Q, onSelectTab: J } = (0, P.i)(null == U ? void 0 : U.toString()),
        [$, ee] = i.useState(!0),
        et = S.z8.useField('trackedOpenedFromExternalEntrypoint'),
        en = S.z8.useField('sessionId'),
        er = (0, s.e7)([b.default], () => b.default.getCurrentUser());
    i.useEffect(() => {
        if (!et && null == en) {
            let e = (0, g.PM)();
            v.default.track(w.rMx.APP_DIRECTORY_OPENED, {
                source: S.xF.EXTERNAL,
                session_id: e,
                user_id: null == er ? void 0 : er.id
            }),
                S.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: S.xF.EXTERNAL },
                    guildId: null
                });
        }
    }, [en, et, null == er ? void 0 : er.id]),
        i.useEffect(() => {
            x.CP();
        }, []),
        i.useEffect(() => {
            B && x.g5();
        }, [B]),
        i.useEffect(() => S.aQ.setState({ lastItem: T }), [T]);
    let ei = null != W,
        ea = (null == T ? void 0 : T.type) === S.m_.SEARCH,
        { searchQuery: el, onSearchTextChange: eo, onClearSearch: es, onSearchSubmit: ec } = (0, N.M)({ initialQuery: null != V ? V : '' }),
        ed = C.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: em
        } = (0, u.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === el.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => C.Z.setState({ searchBarState: e })
        }),
        eh = i.useCallback(
            (e) => {
                J(e), ea && es(), j();
            },
            [ea, es, J, j]
        ),
        eg = i.useCallback((e) => (0, E.ph)({ applicationId: e }), []),
        e_ = ei || ea,
        ef = i.useCallback(() => {
            null != (0, S.Uc)() ? (0, _.op)() : (0, E.Yp)();
        }, []),
        eb = (0, o.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r, location: i } = e;
            t > 0 &&
                (0, O.zZ)(w.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / r,
                    current_page: i
                });
        }, 200),
        ev = i.useCallback(
            (e, t) => {
                n(e),
                    eb({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t
                    });
            },
            [eb, n]
        );
    return (0, r.jsxs)('div', {
        className: l()(M.outerContainer, { [M.loggedOutContainer]: t }),
        children: [
            t ? (0, r.jsx)(z, {}) : null,
            (0, r.jsxs)('div', {
                className: M.innerContainer,
                children: [
                    (0, r.jsxs)(p.ZP, {
                        variant: e_ ? p._6.RELATIVE : p._6.OVERLAY,
                        children: [
                            !e_ && (0, r.jsx)(p.z6, { scrollPosition: a }),
                            ei
                                ? (0, r.jsx)(G, {
                                      applicationId: W,
                                      hideDetailHeaderButtons: $,
                                      onClickBack: ef
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          ea
                                              ? (0, r.jsx)(p.Cm, {
                                                    icon: c.j9r,
                                                    onClick: ef
                                                })
                                              : (0, r.jsx)(p.aV, { icon: c.jje }),
                                          ea
                                              ? (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: M.searchHeader,
                                                    children: null != V && '' !== V ? D.NW.formatToPlainString(D.t.zHdzqa, { query: V }) : D.NW.formatToPlainString(D.t.Qhj5Bg, { categoryName: null !== (e = null == K ? void 0 : K.name) && void 0 !== e ? e : D.NW.string(D.t.E407b2) })
                                                })
                                              : (0, r.jsx)(m.Z, {
                                                    tabs: q,
                                                    selectedTab: Q,
                                                    onTabSelect: eh,
                                                    onAvailableWidthChange: eu
                                                }),
                                          (0, r.jsx)(h.Z, {
                                              query: el,
                                              placeholder: D.NW.string(D.t['5h0QOD']),
                                              onTextChange: eo,
                                              onClear: es,
                                              onSubmit: ec,
                                              onCollapsedClick: ep,
                                              state: ed,
                                              onBlur: em
                                          })
                                      ]
                                  })
                        ]
                    }),
                    ei
                        ? (0, r.jsx)(L.Z, {
                              onScroll: (e) => ev(e, S.m_.APPLICATION),
                              onSelectApplication: eg,
                              applicationId: W,
                              initialTab: F,
                              onButtonsVisibilityChange: ee
                          })
                        : ea
                          ? (0, r.jsx)(k.Z, {
                                onSelectApplication: eg,
                                onScroll: (e) => ev(e, S.m_.SEARCH)
                            })
                          : Q === Z.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, r.jsx)(R.Z, {
                                  onScroll: (e) => ev(e, S.m_.HOME),
                                  onSelectApplication: eg
                              })
                            : (0, r.jsx)(A.Z, {
                                  tabId: Number(Q),
                                  onScroll: (e) => ev(e, S.m_.CATEGORY),
                                  onSelectApplication: eg
                              })
                ]
            })
        ]
    });
};
