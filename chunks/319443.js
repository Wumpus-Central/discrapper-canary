t.r(n), t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(392711),
    s = t(442837),
    c = t(481060),
    d = t(674588),
    u = t(264043),
    m = t(894653),
    p = t(34674),
    _ = t(132871),
    g = t(979233),
    f = t(88693),
    v = t(611928),
    C = t(922122),
    x = t(680180),
    h = t(726115),
    b = t(703656),
    I = t(314897),
    j = t(594174),
    S = t(626135),
    N = t(31569),
    E = t(881294),
    y = t(975907),
    A = t(119014),
    T = t(258971),
    P = t(133743),
    R = t(726941),
    Z = t(666697),
    L = t(548514),
    O = t(370648),
    D = t(569527),
    k = t(979007),
    M = t(981631),
    B = t(388032),
    G = t(544973);
function w(e) {
    let { applicationId: n, hideDetailHeaderButtons: t, onClickBack: r } = e,
        o = (0, s.e7)([u.Z], () => u.Z.getApplication(n)),
        [d, m] = i.useState(t),
        p = i.useCallback(() => {
            m(t);
        }, [t]);
    return (0, a.jsxs)('div', {
        className: G.detailHeaderContainer,
        children: [
            (0, a.jsx)('div', {
                className: G.detailHeaderSection,
                children: (0, a.jsx)(v.Cm, {
                    icon: c.ArrowLargeLeftIcon,
                    onClick: r
                })
            }),
            (0, a.jsx)(c.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: G.detailHeader,
                lineClamp: 1,
                children: null == o ? void 0 : o.name
            }),
            (0, a.jsx)('div', {
                className: l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
                    [G.visible]: !t,
                    [G.hide]: t && !d,
                    [G.hidden]: t && d
                }),
                onTransitionEnd: p,
                children:
                    null != o
                        ? (0, a.jsx)(L.Z, {
                              application: o,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
function H() {
    let e = i.useCallback(() => {
            (0, E.qF)();
        }, []),
        n = i.useCallback(() => {
            (0, E.rf)();
        }, []);
    return (0, a.jsxs)(c.Notice, {
        color: c.NoticeColors.BRAND,
        className: G.nagbar,
        children: [
            (0, a.jsx)(c.ClydeIcon, {
                size: 'custom',
                color: 'white',
                className: G.logo
            }),
            (0, a.jsx)(c.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: B.intl.string(B.t.Ol3MIi)
            }),
            (0, a.jsxs)('div', {
                className: G.nagbarActionContainer,
                children: [
                    (0, a.jsx)(c.PrimaryCTANoticeButton, {
                        onClick: e,
                        noticeType: M.kVF.LOGIN,
                        children: B.intl.string(B.t['825cFx'])
                    }),
                    (0, a.jsx)(c.PrimaryCTANoticeButton, {
                        onClick: n,
                        noticeType: M.kVF.REGISTER,
                        minor: !0,
                        children: B.intl.string(B.t.HAkXzs)
                    })
                ]
            })
        ]
    });
}
n.default = function () {
    var e;
    let n = (0, s.e7)([I.default], () => !I.default.isAuthenticated()),
        { onScroll: t, scrollPosition: r, resetScrollPosition: l } = (0, g.M)(),
        u = (0, T.Xh)(),
        L = (0, E.nu)(),
        F = (null == u ? void 0 : u.type) === T.m_.CATEGORY ? u.categoryId : void 0,
        { applicationId: z, section: U } = (null == u ? void 0 : u.type) === T.m_.APPLICATION ? u : {},
        { query: Y, categoryId: V } = (null == u ? void 0 : u.type) === T.m_.SEARCH ? u : {},
        K = (0, s.e7)([m.Z], () => m.Z.getCategories()),
        X = i.useMemo(() => [(0, p.KQ)(), ...K], [K]),
        W = i.useMemo(() => X.find((e) => e.id === Number(V)), [X, V]),
        { tabs: q, selectedTab: Q, onSelectTab: J } = (0, A.i)(null == F ? void 0 : F.toString()),
        [$, ee] = i.useState(!0),
        en = T.z8.useField('trackedOpenedFromExternalEntrypoint'),
        et = T.z8.useField('sessionId'),
        ea = (0, s.e7)([j.default], () => j.default.getCurrentUser());
    i.useEffect(() => {
        if (!en && null == et) {
            let e = (0, h.PM)();
            S.default.track(M.rMx.APP_DIRECTORY_OPENED, {
                source: _.ApplicationDirectoryEntrypointNames.EXTERNAL,
                session_id: e,
                user_id: null == ea ? void 0 : ea.id
            }),
                T.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: _.ApplicationDirectoryEntrypointNames.EXTERNAL },
                    guildId: null
                });
        }
    }, [et, en, null == ea ? void 0 : ea.id]),
        i.useEffect(() => {
            d.CP();
        }, []),
        i.useEffect(() => {
            L && d.g5();
        }, [L]),
        i.useEffect(() => T.aQ.setState({ lastItem: u }), [u]);
    let ei = null != z,
        er = (null == u ? void 0 : u.type) === T.m_.SEARCH,
        { searchQuery: el, onSearchTextChange: eo, onClearSearch: es, onSearchSubmit: ec } = (0, y.M)({ initialQuery: null != Y ? Y : '' }),
        ed = N.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: ep
        } = (0, f.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === el.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => N.Z.setState({ searchBarState: e })
        }),
        e_ = i.useCallback(
            (e) => {
                J(e), er && es(), l();
            },
            [er, es, J, l]
        ),
        eg = i.useCallback((e) => (0, P.ph)({ applicationId: e }), []),
        ef = ei || er,
        ev = i.useCallback(() => {
            null != (0, T.Uc)() ? (0, b.op)() : (0, P.Yp)();
        }, []),
        eC = (0, o.debounce)((e) => {
            let { scrollTop: n, offsetHeight: t, scrollHeight: a, location: i } = e;
            n > 0 &&
                (0, E.zZ)(M.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (n + t) / a,
                    current_page: i
                });
        }, 200),
        ex = i.useCallback(
            (e, n) => {
                t(e),
                    eC({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: n
                    });
            },
            [eC, t]
        );
    return (0, a.jsxs)('div', {
        className: G.outerContainer,
        children: [
            n ? (0, a.jsx)(H, {}) : null,
            (0, a.jsxs)('div', {
                className: G.innerContainer,
                children: [
                    (0, a.jsxs)(v.ZP, {
                        variant: ef ? v._6.RELATIVE : v._6.OVERLAY,
                        children: [
                            !ef && (0, a.jsx)(v.z6, { scrollPosition: r }),
                            ei
                                ? (0, a.jsx)(w, {
                                      applicationId: z,
                                      hideDetailHeaderButtons: $,
                                      onClickBack: ev
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          er
                                              ? (0, a.jsx)(v.Cm, {
                                                    icon: c.ArrowLargeLeftIcon,
                                                    onClick: ev
                                                })
                                              : (0, a.jsx)(v.aV, { icon: c.AppsIcon }),
                                          er
                                              ? (0, a.jsx)(c.Heading, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: G.searchHeader,
                                                    children: null != Y && '' !== Y ? B.intl.formatToPlainString(B.t.zHdzqa, { query: Y }) : B.intl.formatToPlainString(B.t.Qhj5Bg, { categoryName: null !== (e = null == W ? void 0 : W.name) && void 0 !== e ? e : B.intl.string(B.t.E407b2) })
                                                })
                                              : (0, a.jsx)(C.Z, {
                                                    tabs: q,
                                                    selectedTab: Q,
                                                    onTabSelect: e_,
                                                    onAvailableWidthChange: eu
                                                }),
                                          (0, a.jsx)(x.Z, {
                                              query: el,
                                              placeholder: B.intl.string(B.t.HPQXEB),
                                              onTextChange: eo,
                                              onClear: es,
                                              onSubmit: ec,
                                              onCollapsedClick: em,
                                              state: ed,
                                              onBlur: ep
                                          })
                                      ]
                                  })
                        ]
                    }),
                    ei
                        ? (0, a.jsx)(Z.Z, {
                              onScroll: (e) => ex(e, T.m_.APPLICATION),
                              onSelectApplication: eg,
                              applicationId: z,
                              initialTab: U,
                              onButtonsVisibilityChange: ee
                          })
                        : er
                          ? (0, a.jsx)(D.Z, {
                                onSelectApplication: eg,
                                onScroll: (e) => ex(e, T.m_.SEARCH)
                            })
                          : Q === k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, a.jsx)(O.Z, {
                                  onScroll: (e) => ex(e, T.m_.HOME),
                                  onSelectApplication: eg
                              })
                            : (0, a.jsx)(R.Z, {
                                  tabId: Number(Q),
                                  onScroll: (e) => ex(e, T.m_.CATEGORY),
                                  onSelectApplication: eg
                              })
                ]
            })
        ]
    });
};
