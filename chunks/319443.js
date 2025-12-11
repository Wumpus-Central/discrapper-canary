n.r(t), n.d(t, { default: () => U }), n(388685), n(781311);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(979233),
    u = n(88693),
    p = n(611928),
    m = (n(763433), n(175118)),
    h = n(680180),
    f = n(726115),
    g = n(703656),
    b = n(314897),
    x = n(594174),
    v = n(626135),
    C = n(471518),
    j = n(31569),
    _ = n(370210),
    y = n(678694),
    I = n(216780),
    S = n(881294),
    P = n(975907),
    O = n(119014),
    E = n(258971),
    N = n(133743),
    T = n(726941),
    A = n(666697),
    L = n(548514),
    R = n(370648),
    Z = n(569527),
    w = n(979007),
    D = n(981631),
    k = n(388032),
    M = n(563267);
function G(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: i } = e,
        s = (0, o.e7)([_.Z], () => _.Z.getApplication(t)),
        [d, u] = r.useState(n),
        m = r.useCallback(() => {
            u(n);
        }, [n]);
    return (0, a.jsxs)("div", {
        className: M.detailHeaderContainer,
        children: [
            (0, a.jsx)("div", {
                className: M.detailHeaderSection,
                children: (0, a.jsx)(p.Cm, {
                    icon: c.j9r,
                    onClick: i,
                }),
            }),
            (0, a.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: M.detailHeader,
                lineClamp: 1,
                children: null == s ? void 0 : s.name,
            }),
            (0, a.jsx)("div", {
                className: l()(M.detailHeaderSection, M.detailHeaderButtonsContainer, {
                    [M.visible]: !n,
                    [M.hide]: n && !d,
                    [M.hidden]: n && d,
                }),
                onTransitionEnd: m,
                children:
                    null != s
                        ? (0, a.jsx)(L.Z, {
                              application: s,
                              size: "sm",
                          })
                        : null,
            }),
        ],
    });
}
function B() {
    let e = r.useCallback(() => {
            (0, S.qF)();
        }, []),
        t = r.useCallback(() => {
            (0, S.rf)();
        }, []);
    return (0, a.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: M.nagbar,
        children: [
            (0, a.jsx)(c.gw7, {
                size: "custom",
                color: "white",
                className: M.logo,
            }),
            (0, a.jsx)(c.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: k.intl.string(k.t.Ol3MIt),
            }),
            (0, a.jsxs)("div", {
                className: M.nagbarActionContainer,
                children: [
                    (0, a.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: D.kVF.LOGIN,
                        children: k.intl.string(k.t["825cFy"]),
                    }),
                    (0, a.jsx)(c.NoS, {
                        onClick: t,
                        noticeType: D.kVF.REGISTER,
                        minor: !0,
                        children: k.intl.string(k.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let U = function () {
    var e;
    let t = (0, o.e7)([b.default], () => !b.default.isAuthenticated()),
        { onScroll: n, scrollPosition: i, resetScrollPosition: _ } = (0, d.M)(),
        L = (0, E.Xh)(),
        U = (0, S.nu)(),
        F = (null == L ? void 0 : L.type) === E.m_.CATEGORY ? L.categoryId : void 0,
        { applicationId: z, section: H } = (null == L ? void 0 : L.type) === E.m_.APPLICATION ? L : {},
        { query: V, categoryId: Y } = (null == L ? void 0 : L.type) === E.m_.SEARCH ? L : {},
        W = (0, o.e7)([y.Z], () => y.Z.getCategories()),
        X = r.useMemo(() => [(0, I.KQ)(), ...W], [W]),
        K = r.useMemo(() => X.find((e) => e.id === Number(Y)), [X, Y]),
        { tabs: q, selectedTab: Q, onSelectTab: J } = (0, O.i)(null == F ? void 0 : F.toString()),
        [$, ee] = r.useState(!0),
        et = E.z8.useField("trackedOpenedFromExternalEntrypoint"),
        en = E.z8.useField("sessionId"),
        ea = (0, o.e7)([x.default], () => x.default.getCurrentUser());
    r.useEffect(() => {
        if (!et && null == en) {
            let e = (0, f.PM)();
            v.default.track(D.rMx.APP_DIRECTORY_OPENED, {
                source: E.xF.EXTERNAL,
                session_id: e,
                user_id: null == ea ? void 0 : ea.id,
            }),
                E.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: E.xF.EXTERNAL },
                    guildId: null,
                });
        }
    }, [en, et, null == ea ? void 0 : ea.id]),
        r.useEffect(() => {
            C.CP();
        }, []),
        r.useEffect(() => {
            U && C.g5();
        }, [U]),
        r.useEffect(() => E.aQ.setState({ lastItem: L }), [L]);
    let er = null != z,
        ei = (null == L ? void 0 : L.type) === E.m_.SEARCH,
        {
            searchQuery: el,
            onSearchTextChange: es,
            onClearSearch: eo,
            onSearchSubmit: ec,
        } = (0, P.M)({ initialQuery: null != V ? V : "" }),
        ed = j.Z.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: em,
        } = (0, u.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === el.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => j.Z.setState({ searchBarState: e }),
        }),
        eh = r.useCallback(
            (e) => {
                J(e), ei && eo(), _();
            },
            [ei, eo, J, _],
        ),
        ef = r.useCallback((e) => (0, N.ph)({ applicationId: e }), []),
        eg = er || ei,
        eb = r.useCallback(() => {
            null != (0, E.Uc)() ? (0, g.op)() : (0, N.Yp)();
        }, []),
        ex = r.useMemo(
            () =>
                (0, s.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: n, scrollHeight: a, location: r } = e;
                    t > 0 &&
                        (0, S.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + n) / a,
                            current_page: r,
                        });
                }, 200),
            [],
        ),
        ev = r.useCallback(
            (e, t) => {
                n(e),
                    ex({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    });
            },
            [ex, n],
        );
    return (0, a.jsxs)("div", {
        className: l()(M.outerContainer, { [M.loggedOutContainer]: t }),
        children: [
            t ? (0, a.jsx)(B, {}) : null,
            (0, a.jsxs)("div", {
                className: M.innerContainer,
                children: [
                    (0, a.jsxs)(p.ZP, {
                        variant: eg ? p._6.RELATIVE : p._6.OVERLAY,
                        children: [
                            !eg && (0, a.jsx)(p.z6, { scrollPosition: i }),
                            er
                                ? (0, a.jsx)(G, {
                                      applicationId: z,
                                      hideDetailHeaderButtons: $,
                                      onClickBack: eb,
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          ei
                                              ? (0, a.jsx)(p.Cm, {
                                                    icon: c.j9r,
                                                    onClick: eb,
                                                })
                                              : (0, a.jsx)(p.aV, { icon: c.jje }),
                                          ei
                                              ? (0, a.jsx)(c.Heading, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: M.searchHeader,
                                                    children:
                                                        null != V && "" !== V
                                                            ? k.intl.formatToPlainString(k.t.zHdzqW, { query: V })
                                                            : k.intl.formatToPlainString(k.t.Qhj5Br, {
                                                                  categoryName:
                                                                      null != (e = null == K ? void 0 : K.name)
                                                                          ? e
                                                                          : k.intl.string(k.t.E407b7),
                                                              }),
                                                })
                                              : (0, a.jsx)(m.Z, {
                                                    tabs: q,
                                                    selectedTab: Q,
                                                    onTabSelect: eh,
                                                    onAvailableWidthChange: eu,
                                                }),
                                          (0, a.jsx)(h.Z, {
                                              query: el,
                                              placeholder: k.intl.string(k.t["5h0QOP"]),
                                              onTextChange: es,
                                              onClear: eo,
                                              onSubmit: ec,
                                              onCollapsedClick: ep,
                                              state: ed,
                                              onBlur: em,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    er
                        ? (0, a.jsx)(A.Z, {
                              onScroll: (e) => ev(e, E.m_.APPLICATION),
                              onSelectApplication: ef,
                              applicationId: z,
                              initialTab: H,
                              onButtonsVisibilityChange: ee,
                          })
                        : ei
                          ? (0, a.jsx)(Z.Z, {
                                onSelectApplication: ef,
                                onScroll: (e) => ev(e, E.m_.SEARCH),
                            })
                          : Q === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, a.jsx)(R.Z, {
                                  onScroll: (e) => ev(e, E.m_.HOME),
                                  onSelectApplication: ef,
                              })
                            : (0, a.jsx)(T.Z, {
                                  tabId: Number(Q),
                                  onScroll: (e) => ev(e, E.m_.CATEGORY),
                                  onSelectApplication: ef,
                              }),
                ],
            }),
        ],
    });
};
