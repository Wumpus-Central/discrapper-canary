n.r(t), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(392711),
    s = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(264043),
    m = n(894653),
    p = n(34674),
    h = n(132871),
    g = n(979233),
    C = n(88693),
    x = n(611928),
    v = n(922122),
    _ = n(680180),
    f = n(726115),
    b = n(703656),
    I = n(314897),
    S = n(594174),
    j = n(626135),
    N = n(31569),
    E = n(881294),
    y = n(975907),
    P = n(119014),
    A = n(258971),
    L = n(133743),
    T = n(726941),
    R = n(666697),
    Z = n(548514),
    O = n(370648),
    M = n(569527),
    k = n(979007),
    D = n(981631),
    w = n(388032),
    B = n(544973);
function G(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: r } = e,
        o = (0, s.e7)([u.Z], () => u.Z.getApplication(t)),
        [d, m] = a.useState(n),
        p = a.useCallback(() => {
            m(n);
        }, [n]);
    return (0, i.jsxs)('div', {
        className: B.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: B.detailHeaderSection,
                children: (0, i.jsx)(x.Cm, {
                    icon: c.ArrowLargeLeftIcon,
                    onClick: r
                })
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: B.detailHeader,
                lineClamp: 1,
                children: null == o ? void 0 : o.name
            }),
            (0, i.jsx)('div', {
                className: l()(B.detailHeaderSection, B.detailHeaderButtonsContainer, {
                    [B.visible]: !n,
                    [B.hide]: n && !d,
                    [B.hidden]: n && d
                }),
                onTransitionEnd: p,
                children:
                    null != o
                        ? (0, i.jsx)(Z.Z, {
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
            (0, E.qF)();
        }, []),
        t = a.useCallback(() => {
            (0, E.rf)();
        }, []);
    return (0, i.jsxs)(c.Notice, {
        color: c.NoticeColors.BRAND,
        className: B.nagbar,
        children: [
            (0, i.jsx)(c.ClydeIcon, {
                size: 'custom',
                color: 'white',
                className: B.logo
            }),
            (0, i.jsx)(c.Text, {
                tag: 'span',
                color: 'always-white',
                variant: 'text-md/normal',
                children: w.intl.string(w.t.Ol3MIi)
            }),
            (0, i.jsxs)('div', {
                className: B.nagbarActionContainer,
                children: [
                    (0, i.jsx)(c.PrimaryCTANoticeButton, {
                        onClick: e,
                        noticeType: D.kVF.LOGIN,
                        children: w.intl.string(w.t['825cFx'])
                    }),
                    (0, i.jsx)(c.PrimaryCTANoticeButton, {
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
t.default = function () {
    var e;
    let t = (0, s.e7)([I.default], () => !I.default.isAuthenticated()),
        { onScroll: n, scrollPosition: r, resetScrollPosition: u } = (0, g.M)(),
        Z = (0, A.Xh)(),
        H = (0, E.nu)(),
        z = (null == Z ? void 0 : Z.type) === A.m_.CATEGORY ? Z.categoryId : void 0,
        { applicationId: V, section: F } = (null == Z ? void 0 : Z.type) === A.m_.APPLICATION ? Z : {},
        { query: Y, categoryId: W } = (null == Z ? void 0 : Z.type) === A.m_.SEARCH ? Z : {},
        X = (0, s.e7)([m.Z], () => m.Z.getCategories()),
        K = a.useMemo(() => [(0, p.KQ)(), ...X], [X]),
        q = a.useMemo(() => K.find((e) => e.id === Number(W)), [K, W]),
        { tabs: Q, selectedTab: J, onSelectTab: $ } = (0, P.i)(null == z ? void 0 : z.toString()),
        [ee, et] = a.useState(!0),
        en = A.z8.useField('trackedOpenedFromExternalEntrypoint'),
        ei = A.z8.useField('sessionId'),
        ea = (0, s.e7)([S.default], () => S.default.getCurrentUser());
    a.useEffect(() => {
        if (!en && null == ei) {
            let e = (0, f.PM)();
            j.default.track(D.rMx.APP_DIRECTORY_OPENED, {
                source: h.n3.EXTERNAL,
                session_id: e,
                user_id: null == ea ? void 0 : ea.id
            }),
                A.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: h.n3.EXTERNAL },
                    guildId: null
                });
        }
    }, [ei, en, null == ea ? void 0 : ea.id]),
        a.useEffect(() => {
            d.CP();
        }, []),
        a.useEffect(() => {
            H && d.g5();
        }, [H]),
        a.useEffect(() => A.aQ.setState({ lastItem: Z }), [Z]);
    let er = null != V,
        el = (null == Z ? void 0 : Z.type) === A.m_.SEARCH,
        { searchQuery: eo, onSearchTextChange: es, onClearSearch: ec, onSearchSubmit: ed } = (0, y.M)({ initialQuery: null != Y ? Y : '' }),
        eu = N.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: em,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: eh
        } = (0, C.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === eo.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => N.Z.setState({ searchBarState: e })
        }),
        eg = a.useCallback(
            (e) => {
                $(e), el && ec(), u();
            },
            [el, ec, $, u]
        ),
        eC = a.useCallback((e) => (0, L.ph)({ applicationId: e }), []),
        ex = er || el,
        ev = a.useCallback(() => {
            null != (0, A.Uc)() ? (0, b.op)() : (0, L.Yp)();
        }, []),
        e_ = (0, o.debounce)((e) => {
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
                    e_({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t
                    });
            },
            [e_, n]
        );
    return (0, i.jsxs)('div', {
        className: l()(B.outerContainer, { [B.loggedOutContainer]: t }),
        children: [
            t ? (0, i.jsx)(U, {}) : null,
            (0, i.jsxs)('div', {
                className: B.innerContainer,
                children: [
                    (0, i.jsxs)(x.ZP, {
                        variant: ex ? x._6.RELATIVE : x._6.OVERLAY,
                        children: [
                            !ex && (0, i.jsx)(x.z6, { scrollPosition: r }),
                            er
                                ? (0, i.jsx)(G, {
                                      applicationId: V,
                                      hideDetailHeaderButtons: ee,
                                      onClickBack: ev
                                  })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          el
                                              ? (0, i.jsx)(x.Cm, {
                                                    icon: c.ArrowLargeLeftIcon,
                                                    onClick: ev
                                                })
                                              : (0, i.jsx)(x.aV, { icon: c.AppsIcon }),
                                          el
                                              ? (0, i.jsx)(c.Heading, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: B.searchHeader,
                                                    children: null != Y && '' !== Y ? w.intl.formatToPlainString(w.t.zHdzqa, { query: Y }) : w.intl.formatToPlainString(w.t.Qhj5Bg, { categoryName: null !== (e = null == q ? void 0 : q.name) && void 0 !== e ? e : w.intl.string(w.t.E407b2) })
                                                })
                                              : (0, i.jsx)(v.Z, {
                                                    tabs: Q,
                                                    selectedTab: J,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: em
                                                }),
                                          (0, i.jsx)(_.Z, {
                                              query: eo,
                                              placeholder: w.intl.string(w.t.HPQXEB),
                                              onTextChange: es,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: ep,
                                              state: eu,
                                              onBlur: eh
                                          })
                                      ]
                                  })
                        ]
                    }),
                    er
                        ? (0, i.jsx)(R.Z, {
                              onScroll: (e) => ef(e, A.m_.APPLICATION),
                              onSelectApplication: eC,
                              applicationId: V,
                              initialTab: F,
                              onButtonsVisibilityChange: et
                          })
                        : el
                          ? (0, i.jsx)(M.Z, {
                                onSelectApplication: eC,
                                onScroll: (e) => ef(e, A.m_.SEARCH)
                            })
                          : J === k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, i.jsx)(O.Z, {
                                  onScroll: (e) => ef(e, A.m_.HOME),
                                  onSelectApplication: eC
                              })
                            : (0, i.jsx)(T.Z, {
                                  tabId: Number(J),
                                  onScroll: (e) => ef(e, A.m_.CATEGORY),
                                  onSelectApplication: eC
                              })
                ]
            })
        ]
    });
};
