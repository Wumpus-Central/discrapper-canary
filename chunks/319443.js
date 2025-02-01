n.r(t), n.d(t, { default: () => U }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(264043),
    m = n(894653),
    h = n(34674),
    p = n(132871),
    g = n(979233),
    _ = n(88693),
    x = n(611928),
    C = n(922122),
    v = n(680180),
    f = n(726115),
    I = n(703656),
    b = n(314897),
    j = n(594174),
    S = n(626135),
    N = n(31569),
    E = n(881294),
    y = n(975907),
    P = n(119014),
    A = n(258971),
    T = n(133743),
    L = n(726941),
    R = n(666697),
    Z = n(548514),
    O = n(370648),
    k = n(569527),
    M = n(979007),
    D = n(981631),
    w = n(388032),
    G = n(544973);
function z(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: r } = e,
        s = (0, o.e7)([u.Z], () => u.Z.getApplication(t)),
        [d, m] = a.useState(n),
        h = a.useCallback(() => {
            m(n);
        }, [n]);
    return (0, i.jsxs)('div', {
        className: G.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: G.detailHeaderSection,
                children: (0, i.jsx)(x.Cm, {
                    icon: c.j9r,
                    onClick: r
                })
            }),
            (0, i.jsx)(c.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: G.detailHeader,
                lineClamp: 1,
                children: null == s ? void 0 : s.name
            }),
            (0, i.jsx)('div', {
                className: l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
                    [G.visible]: !n,
                    [G.hide]: n && !d,
                    [G.hidden]: n && d
                }),
                onTransitionEnd: h,
                children:
                    null != s
                        ? (0, i.jsx)(Z.Z, {
                              application: s,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
function B() {
    let e = a.useCallback(() => {
            (0, E.qF)();
        }, []),
        t = a.useCallback(() => {
            (0, E.rf)();
        }, []);
    return (0, i.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: G.nagbar,
        children: [
            (0, i.jsx)(c.gw7, {
                size: 'custom',
                color: 'white',
                className: G.logo
            }),
            (0, i.jsx)(c.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: w.intl.string(w.t.Ol3MIi)
            }),
            (0, i.jsxs)('div', {
                className: G.nagbarActionContainer,
                children: [
                    (0, i.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: D.kVF.LOGIN,
                        children: w.intl.string(w.t['825cFx'])
                    }),
                    (0, i.jsx)(c.NoS, {
                        onClick: t,
                        noticeType: D.kVF.REGISTER,
                        minor: !0,
                        children: w.intl.string(w.t.HAkXzs)
                    })
                ]
            })
        ]
    });
}
let U = function () {
    var e;
    let t = (0, o.e7)([b.default], () => !b.default.isAuthenticated()),
        { onScroll: n, scrollPosition: r, resetScrollPosition: u } = (0, g.M)(),
        Z = (0, A.Xh)(),
        U = (0, E.nu)(),
        V = (null == Z ? void 0 : Z.type) === A.m_.CATEGORY ? Z.categoryId : void 0,
        { applicationId: F, section: H } = (null == Z ? void 0 : Z.type) === A.m_.APPLICATION ? Z : {},
        { query: Y, categoryId: W } = (null == Z ? void 0 : Z.type) === A.m_.SEARCH ? Z : {},
        X = (0, o.e7)([m.Z], () => m.Z.getCategories()),
        q = a.useMemo(() => [(0, h.KQ)(), ...X], [X]),
        K = a.useMemo(() => q.find((e) => e.id === Number(W)), [q, W]),
        { tabs: Q, selectedTab: J, onSelectTab: $ } = (0, P.i)(null == V ? void 0 : V.toString()),
        [ee, et] = a.useState(!0),
        en = A.z8.useField('trackedOpenedFromExternalEntrypoint'),
        ei = A.z8.useField('sessionId'),
        ea = (0, o.e7)([j.default], () => j.default.getCurrentUser());
    a.useEffect(() => {
        if (!en && null == ei) {
            let e = (0, f.PM)();
            S.default.track(D.rMx.APP_DIRECTORY_OPENED, {
                source: p.n3.EXTERNAL,
                session_id: e,
                user_id: null == ea ? void 0 : ea.id
            }),
                A.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: p.n3.EXTERNAL },
                    guildId: null
                });
        }
    }, [ei, en, null == ea ? void 0 : ea.id]),
        a.useEffect(() => {
            d.CP();
        }, []),
        a.useEffect(() => {
            U && d.g5();
        }, [U]),
        a.useEffect(() => A.aQ.setState({ lastItem: Z }), [Z]);
    let er = null != F,
        el = (null == Z ? void 0 : Z.type) === A.m_.SEARCH,
        { searchQuery: es, onSearchTextChange: eo, onClearSearch: ec, onSearchSubmit: ed } = (0, y.M)({ initialQuery: null != Y ? Y : '' }),
        eu = N.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: em,
            onCollapsedSearchBarClick: eh,
            onSearchBarBlur: ep
        } = (0, _.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === es.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => N.Z.setState({ searchBarState: e })
        }),
        eg = a.useCallback(
            (e) => {
                $(e), el && ec(), u();
            },
            [el, ec, $, u]
        ),
        e_ = a.useCallback((e) => (0, T.ph)({ applicationId: e }), []),
        ex = er || el,
        eC = a.useCallback(() => {
            null != (0, A.Uc)() ? (0, I.op)() : (0, T.Yp)();
        }, []),
        ev = (0, s.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: i, location: a } = e;
            t > 0 &&
                (0, E.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / i,
                    current_page: a
                });
        }, 200),
        ef = a.useCallback(
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
        );
    return (0, i.jsxs)('div', {
        className: l()(G.outerContainer, { [G.loggedOutContainer]: t }),
        children: [
            t ? (0, i.jsx)(B, {}) : null,
            (0, i.jsxs)('div', {
                className: G.innerContainer,
                children: [
                    (0, i.jsxs)(x.ZP, {
                        variant: ex ? x._6.RELATIVE : x._6.OVERLAY,
                        children: [
                            !ex && (0, i.jsx)(x.z6, { scrollPosition: r }),
                            er
                                ? (0, i.jsx)(z, {
                                      applicationId: F,
                                      hideDetailHeaderButtons: ee,
                                      onClickBack: eC
                                  })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          el
                                              ? (0, i.jsx)(x.Cm, {
                                                    icon: c.j9r,
                                                    onClick: eC
                                                })
                                              : (0, i.jsx)(x.aV, { icon: c.jje }),
                                          el
                                              ? (0, i.jsx)(c.X6q, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: G.searchHeader,
                                                    children: null != Y && '' !== Y ? w.intl.formatToPlainString(w.t.zHdzqa, { query: Y }) : w.intl.formatToPlainString(w.t.Qhj5Bg, { categoryName: null !== (e = null == K ? void 0 : K.name) && void 0 !== e ? e : w.intl.string(w.t.E407b2) })
                                                })
                                              : (0, i.jsx)(C.Z, {
                                                    tabs: Q,
                                                    selectedTab: J,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: em
                                                }),
                                          (0, i.jsx)(v.Z, {
                                              query: es,
                                              placeholder: w.intl.string(w.t['5h0QOD']),
                                              onTextChange: eo,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: eh,
                                              state: eu,
                                              onBlur: ep
                                          })
                                      ]
                                  })
                        ]
                    }),
                    er
                        ? (0, i.jsx)(R.Z, {
                              onScroll: (e) => ef(e, A.m_.APPLICATION),
                              onSelectApplication: e_,
                              applicationId: F,
                              initialTab: H,
                              onButtonsVisibilityChange: et
                          })
                        : el
                          ? (0, i.jsx)(k.Z, {
                                onSelectApplication: e_,
                                onScroll: (e) => ef(e, A.m_.SEARCH)
                            })
                          : J === M.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, i.jsx)(O.Z, {
                                  onScroll: (e) => ef(e, A.m_.HOME),
                                  onSelectApplication: e_
                              })
                            : (0, i.jsx)(L.Z, {
                                  tabId: Number(J),
                                  onScroll: (e) => ef(e, A.m_.CATEGORY),
                                  onSelectApplication: e_
                              })
                ]
            })
        ]
    });
};
