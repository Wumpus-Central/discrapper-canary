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
    E = t(31569),
    N = t(881294),
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
            (0, N.qF)();
        }, []),
        n = i.useCallback(() => {
            (0, N.rf)();
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
        { onScroll: t, scrollPosition: r, resetScrollPosition: u } = (0, g.M)(),
        L = (0, T.Xh)(),
        F = (0, N.nu)(),
        z = (null == L ? void 0 : L.type) === T.m_.CATEGORY ? L.categoryId : void 0,
        { applicationId: U, section: Y } = (null == L ? void 0 : L.type) === T.m_.APPLICATION ? L : {},
        { query: V, categoryId: K } = (null == L ? void 0 : L.type) === T.m_.SEARCH ? L : {},
        X = (0, s.e7)([m.Z], () => m.Z.getCategories()),
        W = i.useMemo(() => [(0, p.KQ)(), ...X], [X]),
        q = i.useMemo(() => W.find((e) => e.id === Number(K)), [W, K]),
        { tabs: Q, selectedTab: J, onSelectTab: $ } = (0, A.i)(null == z ? void 0 : z.toString()),
        [ee, en] = i.useState(!0),
        et = T.z8.useField('trackedOpenedFromExternalEntrypoint'),
        ea = T.z8.useField('sessionId'),
        ei = (0, s.e7)([j.default], () => j.default.getCurrentUser());
    i.useEffect(() => {
        if (!et && null == ea) {
            let e = (0, h.PM)();
            S.default.track(M.rMx.APP_DIRECTORY_OPENED, {
                source: _.ApplicationDirectoryEntrypointNames.EXTERNAL,
                session_id: e,
                user_id: null == ei ? void 0 : ei.id
            }),
                T.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: _.ApplicationDirectoryEntrypointNames.EXTERNAL },
                    guildId: null
                });
        }
    }, [ea, et, null == ei ? void 0 : ei.id]),
        i.useEffect(() => {
            d.CP();
        }, []),
        i.useEffect(() => {
            F && d.g5();
        }, [F]),
        i.useEffect(() => T.aQ.setState({ lastItem: L }), [L]);
    let er = null != U,
        el = (null == L ? void 0 : L.type) === T.m_.SEARCH,
        { searchQuery: eo, onSearchTextChange: es, onClearSearch: ec, onSearchSubmit: ed } = (0, y.M)({ initialQuery: null != V ? V : '' }),
        eu = E.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: em,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: e_
        } = (0, f.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === eo.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => E.Z.setState({ searchBarState: e })
        }),
        eg = i.useCallback(
            (e) => {
                $(e), el && ec(), u();
            },
            [el, ec, $, u]
        ),
        ef = i.useCallback((e) => (0, P.ph)({ applicationId: e }), []),
        ev = er || el,
        eC = i.useCallback(() => {
            null != (0, T.Uc)() ? (0, b.op)() : (0, P.Yp)();
        }, []),
        ex = (0, o.debounce)((e) => {
            let { scrollTop: n, offsetHeight: t, scrollHeight: a, location: i } = e;
            n > 0 &&
                (0, N.zZ)(M.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (n + t) / a,
                    current_page: i
                });
        }, 200),
        eh = i.useCallback(
            (e, n) => {
                t(e),
                    ex({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: n
                    });
            },
            [ex, t]
        );
    return (0, a.jsxs)('div', {
        className: l()(G.outerContainer, { [G.loggedOutContainer]: n }),
        children: [
            n ? (0, a.jsx)(H, {}) : null,
            (0, a.jsxs)('div', {
                className: G.innerContainer,
                children: [
                    (0, a.jsxs)(v.ZP, {
                        variant: ev ? v._6.RELATIVE : v._6.OVERLAY,
                        children: [
                            !ev && (0, a.jsx)(v.z6, { scrollPosition: r }),
                            er
                                ? (0, a.jsx)(w, {
                                      applicationId: U,
                                      hideDetailHeaderButtons: ee,
                                      onClickBack: eC
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          el
                                              ? (0, a.jsx)(v.Cm, {
                                                    icon: c.ArrowLargeLeftIcon,
                                                    onClick: eC
                                                })
                                              : (0, a.jsx)(v.aV, { icon: c.AppsIcon }),
                                          el
                                              ? (0, a.jsx)(c.Heading, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: G.searchHeader,
                                                    children: null != V && '' !== V ? B.intl.formatToPlainString(B.t.zHdzqa, { query: V }) : B.intl.formatToPlainString(B.t.Qhj5Bg, { categoryName: null !== (e = null == q ? void 0 : q.name) && void 0 !== e ? e : B.intl.string(B.t.E407b2) })
                                                })
                                              : (0, a.jsx)(C.Z, {
                                                    tabs: Q,
                                                    selectedTab: J,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: em
                                                }),
                                          (0, a.jsx)(x.Z, {
                                              query: eo,
                                              placeholder: B.intl.string(B.t.HPQXEB),
                                              onTextChange: es,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: ep,
                                              state: eu,
                                              onBlur: e_
                                          })
                                      ]
                                  })
                        ]
                    }),
                    er
                        ? (0, a.jsx)(Z.Z, {
                              onScroll: (e) => eh(e, T.m_.APPLICATION),
                              onSelectApplication: ef,
                              applicationId: U,
                              initialTab: Y,
                              onButtonsVisibilityChange: en
                          })
                        : el
                          ? (0, a.jsx)(D.Z, {
                                onSelectApplication: ef,
                                onScroll: (e) => eh(e, T.m_.SEARCH)
                            })
                          : J === k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, a.jsx)(O.Z, {
                                  onScroll: (e) => eh(e, T.m_.HOME),
                                  onSelectApplication: ef
                              })
                            : (0, a.jsx)(R.Z, {
                                  tabId: Number(J),
                                  onScroll: (e) => eh(e, T.m_.CATEGORY),
                                  onSelectApplication: ef
                              })
                ]
            })
        ]
    });
};
