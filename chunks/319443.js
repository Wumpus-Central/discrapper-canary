n.r(t), n.d(t, { default: () => U }), n(47120), n(566702);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(264043),
    p = n(894653),
    m = n(34674),
    h = n(132871),
    g = n(979233),
    _ = n(88693),
    f = n(611928),
    v = n(922122),
    b = n(680180),
    x = n(726115),
    C = n(703656),
    j = n(314897),
    y = n(594174),
    O = n(626135),
    I = n(31569),
    N = n(881294),
    P = n(975907),
    S = n(119014),
    E = n(258971),
    T = n(133743),
    A = n(726941),
    L = n(666697),
    R = n(548514),
    Z = n(100402),
    w = n(569527),
    k = n(979007),
    D = n(981631),
    M = n(388032),
    G = n(512966);
function z(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: i } = e,
        o = (0, s.e7)([u.Z], () => u.Z.getApplication(t)),
        [d, p] = a.useState(n),
        m = a.useCallback(() => {
            p(n);
        }, [n]);
    return (0, r.jsxs)('div', {
        className: G.detailHeaderContainer,
        children: [
            (0, r.jsx)('div', {
                className: G.detailHeaderSection,
                children: (0, r.jsx)(f.Cm, {
                    icon: c.j9r,
                    onClick: i
                })
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: G.detailHeader,
                lineClamp: 1,
                children: null == o ? void 0 : o.name
            }),
            (0, r.jsx)('div', {
                className: l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
                    [G.visible]: !n,
                    [G.hide]: n && !d,
                    [G.hidden]: n && d
                }),
                onTransitionEnd: m,
                children:
                    null != o
                        ? (0, r.jsx)(R.Z, {
                              application: o,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
function B() {
    let e = a.useCallback(() => {
            (0, N.qF)();
        }, []),
        t = a.useCallback(() => {
            (0, N.rf)();
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
                children: M.NW.string(M.t.Ol3MIi)
            }),
            (0, r.jsxs)('div', {
                className: G.nagbarActionContainer,
                children: [
                    (0, r.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: D.kVF.LOGIN,
                        children: M.NW.string(M.t['825cFx'])
                    }),
                    (0, r.jsx)(c.NoS, {
                        onClick: t,
                        noticeType: D.kVF.REGISTER,
                        minor: !0,
                        children: M.NW.string(M.t.HAkXzs)
                    })
                ]
            })
        ]
    });
}
let U = function () {
    var e;
    let t = (0, s.e7)([j.default], () => !j.default.isAuthenticated()),
        { onScroll: n, scrollPosition: i, resetScrollPosition: u } = (0, g.M)(),
        R = (0, E.Xh)(),
        U = (0, N.nu)(),
        W = (null == R ? void 0 : R.type) === E.m_.CATEGORY ? R.categoryId : void 0,
        { applicationId: F, section: V } = (null == R ? void 0 : R.type) === E.m_.APPLICATION ? R : {},
        { query: H, categoryId: Y } = (null == R ? void 0 : R.type) === E.m_.SEARCH ? R : {},
        X = (0, s.e7)([p.Z], () => p.Z.getCategories()),
        q = a.useMemo(() => [(0, m.KQ)(), ...X], [X]),
        K = a.useMemo(() => q.find((e) => e.id === Number(Y)), [q, Y]),
        { tabs: Q, selectedTab: J, onSelectTab: $ } = (0, S.i)(null == W ? void 0 : W.toString()),
        [ee, et] = a.useState(!0),
        en = E.z8.useField('trackedOpenedFromExternalEntrypoint'),
        er = E.z8.useField('sessionId'),
        ea = (0, s.e7)([y.default], () => y.default.getCurrentUser());
    a.useEffect(() => {
        if (!en && null == er) {
            let e = (0, x.PM)();
            O.default.track(D.rMx.APP_DIRECTORY_OPENED, {
                source: h.n3.EXTERNAL,
                session_id: e,
                user_id: null == ea ? void 0 : ea.id
            }),
                E.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: h.n3.EXTERNAL },
                    guildId: null
                });
        }
    }, [er, en, null == ea ? void 0 : ea.id]),
        a.useEffect(() => {
            d.CP();
        }, []),
        a.useEffect(() => {
            U && d.g5();
        }, [U]),
        a.useEffect(() => E.aQ.setState({ lastItem: R }), [R]);
    let ei = null != F,
        el = (null == R ? void 0 : R.type) === E.m_.SEARCH,
        { searchQuery: eo, onSearchTextChange: es, onClearSearch: ec, onSearchSubmit: ed } = (0, P.M)({ initialQuery: null != H ? H : '' }),
        eu = I.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: ep,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: eh
        } = (0, _.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === eo.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => I.Z.setState({ searchBarState: e })
        }),
        eg = a.useCallback(
            (e) => {
                $(e), el && ec(), u();
            },
            [el, ec, $, u]
        ),
        e_ = a.useCallback((e) => (0, T.ph)({ applicationId: e }), []),
        ef = ei || el,
        ev = a.useCallback(() => {
            null != (0, E.Uc)() ? (0, C.op)() : (0, T.Yp)();
        }, []),
        eb = (0, o.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: r, location: a } = e;
            t > 0 &&
                (0, N.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / r,
                    current_page: a
                });
        }, 200),
        ex = a.useCallback(
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
        className: l()(G.outerContainer, { [G.loggedOutContainer]: t }),
        children: [
            t ? (0, r.jsx)(B, {}) : null,
            (0, r.jsxs)('div', {
                className: G.innerContainer,
                children: [
                    (0, r.jsxs)(f.ZP, {
                        variant: ef ? f._6.RELATIVE : f._6.OVERLAY,
                        children: [
                            !ef && (0, r.jsx)(f.z6, { scrollPosition: i }),
                            ei
                                ? (0, r.jsx)(z, {
                                      applicationId: F,
                                      hideDetailHeaderButtons: ee,
                                      onClickBack: ev
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          el
                                              ? (0, r.jsx)(f.Cm, {
                                                    icon: c.j9r,
                                                    onClick: ev
                                                })
                                              : (0, r.jsx)(f.aV, { icon: c.jje }),
                                          el
                                              ? (0, r.jsx)(c.X6q, {
                                                    variant: 'heading-lg/semibold',
                                                    color: 'header-primary',
                                                    className: G.searchHeader,
                                                    children: null != H && '' !== H ? M.NW.formatToPlainString(M.t.zHdzqa, { query: H }) : M.NW.formatToPlainString(M.t.Qhj5Bg, { categoryName: null !== (e = null == K ? void 0 : K.name) && void 0 !== e ? e : M.NW.string(M.t.E407b2) })
                                                })
                                              : (0, r.jsx)(v.Z, {
                                                    tabs: Q,
                                                    selectedTab: J,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: ep
                                                }),
                                          (0, r.jsx)(b.Z, {
                                              query: eo,
                                              placeholder: M.NW.string(M.t['5h0QOD']),
                                              onTextChange: es,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: em,
                                              state: eu,
                                              onBlur: eh
                                          })
                                      ]
                                  })
                        ]
                    }),
                    ei
                        ? (0, r.jsx)(L.Z, {
                              onScroll: (e) => ex(e, E.m_.APPLICATION),
                              onSelectApplication: e_,
                              applicationId: F,
                              initialTab: V,
                              onButtonsVisibilityChange: et
                          })
                        : el
                          ? (0, r.jsx)(w.Z, {
                                onSelectApplication: e_,
                                onScroll: (e) => ex(e, E.m_.SEARCH)
                            })
                          : J === k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, r.jsx)(Z.Z, {
                                  onScroll: (e) => ex(e, E.m_.HOME),
                                  onSelectApplication: e_
                              })
                            : (0, r.jsx)(A.Z, {
                                  tabId: Number(J),
                                  onScroll: (e) => ex(e, E.m_.CATEGORY),
                                  onSelectApplication: e_
                              })
                ]
            })
        ]
    });
};
