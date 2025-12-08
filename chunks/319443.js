n.r(t), n.d(t, { default: () => U }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(979233),
    u = n(88693),
    p = n(611928),
    m = (n(763433), n(175118)),
    h = n(680180),
    g = n(726115),
    f = n(703656),
    _ = n(314897),
    b = n(594174),
    x = n(626135),
    v = n(471518),
    C = n(31569),
    j = n(370210),
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
    M = n(813525);
function G(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: a } = e,
        s = (0, o.e7)([j.Z], () => j.Z.getApplication(t)),
        [d, u] = i.useState(n),
        m = i.useCallback(() => {
            u(n);
        }, [n]);
    return (0, r.jsxs)("div", {
        className: M.detailHeaderContainer,
        children: [
            (0, r.jsx)("div", {
                className: M.detailHeaderSection,
                children: (0, r.jsx)(p.Cm, {
                    icon: c.j9r,
                    onClick: a,
                }),
            }),
            (0, r.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                className: M.detailHeader,
                lineClamp: 1,
                children: null == s ? void 0 : s.name,
            }),
            (0, r.jsx)("div", {
                className: l()(M.detailHeaderSection, M.detailHeaderButtonsContainer, {
                    [M.visible]: !n,
                    [M.hide]: n && !d,
                    [M.hidden]: n && d,
                }),
                onTransitionEnd: m,
                children:
                    null != s
                        ? (0, r.jsx)(L.Z, {
                              application: s,
                              size: "sm",
                          })
                        : null,
            }),
        ],
    });
}
function B() {
    let e = i.useCallback(() => {
            (0, S.qF)();
        }, []),
        t = i.useCallback(() => {
            (0, S.rf)();
        }, []);
    return (0, r.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: M.nagbar,
        children: [
            (0, r.jsx)(c.gw7, {
                size: "custom",
                color: "white",
                className: M.logo,
            }),
            (0, r.jsx)(c.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: k.intl.string(k.t.Ol3MIt),
            }),
            (0, r.jsxs)("div", {
                className: M.nagbarActionContainer,
                children: [
                    (0, r.jsx)(c.NoS, {
                        onClick: e,
                        noticeType: D.kVF.LOGIN,
                        children: k.intl.string(k.t["825cFy"]),
                    }),
                    (0, r.jsx)(c.NoS, {
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
    let t = (0, o.e7)([_.default], () => !_.default.isAuthenticated()),
        { onScroll: n, scrollPosition: a, resetScrollPosition: j } = (0, d.M)(),
        L = (0, E.Xh)(),
        U = (0, S.nu)(),
        F = (null == L ? void 0 : L.type) === E.m_.CATEGORY ? L.categoryId : void 0,
        { applicationId: H, section: z } = (null == L ? void 0 : L.type) === E.m_.APPLICATION ? L : {},
        { query: V, categoryId: Y } = (null == L ? void 0 : L.type) === E.m_.SEARCH ? L : {},
        W = (0, o.e7)([y.Z], () => y.Z.getCategories()),
        X = i.useMemo(() => [(0, I.KQ)(), ...W], [W]),
        K = i.useMemo(() => X.find((e) => e.id === Number(Y)), [X, Y]),
        { tabs: q, selectedTab: Q, onSelectTab: J } = (0, O.i)(null == F ? void 0 : F.toString()),
        [$, ee] = i.useState(!0),
        et = E.z8.useField("trackedOpenedFromExternalEntrypoint"),
        en = E.z8.useField("sessionId"),
        er = (0, o.e7)([b.default], () => b.default.getCurrentUser());
    i.useEffect(() => {
        if (!et && null == en) {
            let e = (0, g.PM)();
            x.default.track(D.rMx.APP_DIRECTORY_OPENED, {
                source: E.xF.EXTERNAL,
                session_id: e,
                user_id: null == er ? void 0 : er.id,
            }),
                E.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: E.xF.EXTERNAL },
                    guildId: null,
                });
        }
    }, [en, et, null == er ? void 0 : er.id]),
        i.useEffect(() => {
            v.CP();
        }, []),
        i.useEffect(() => {
            U && v.g5();
        }, [U]),
        i.useEffect(() => E.aQ.setState({ lastItem: L }), [L]);
    let ei = null != H,
        ea = (null == L ? void 0 : L.type) === E.m_.SEARCH,
        {
            searchQuery: el,
            onSearchTextChange: es,
            onClearSearch: eo,
            onSearchSubmit: ec,
        } = (0, P.M)({ initialQuery: null != V ? V : "" }),
        ed = C.Z.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: em,
        } = (0, u.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === el.trim(),
            searchBarState: ed,
            setSearchBarState: (e) => C.Z.setState({ searchBarState: e }),
        }),
        eh = i.useCallback(
            (e) => {
                J(e), ea && eo(), j();
            },
            [ea, eo, J, j],
        ),
        eg = i.useCallback((e) => (0, N.ph)({ applicationId: e }), []),
        ef = ei || ea,
        e_ = i.useCallback(() => {
            null != (0, E.Uc)() ? (0, f.op)() : (0, N.Yp)();
        }, []),
        eb = i.useMemo(
            () =>
                (0, s.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: n, scrollHeight: r, location: i } = e;
                    t > 0 &&
                        (0, S.zZ)(D.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + n) / r,
                            current_page: i,
                        });
                }, 200),
            [],
        ),
        ex = i.useCallback(
            (e, t) => {
                n(e),
                    eb({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: t,
                    });
            },
            [eb, n],
        );
    return (0, r.jsxs)("div", {
        className: l()(M.outerContainer, { [M.loggedOutContainer]: t }),
        children: [
            t ? (0, r.jsx)(B, {}) : null,
            (0, r.jsxs)("div", {
                className: M.innerContainer,
                children: [
                    (0, r.jsxs)(p.ZP, {
                        variant: ef ? p._6.RELATIVE : p._6.OVERLAY,
                        children: [
                            !ef && (0, r.jsx)(p.z6, { scrollPosition: a }),
                            ei
                                ? (0, r.jsx)(G, {
                                      applicationId: H,
                                      hideDetailHeaderButtons: $,
                                      onClickBack: e_,
                                  })
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          ea
                                              ? (0, r.jsx)(p.Cm, {
                                                    icon: c.j9r,
                                                    onClick: e_,
                                                })
                                              : (0, r.jsx)(p.aV, { icon: c.jje }),
                                          ea
                                              ? (0, r.jsx)(c.Heading, {
                                                    variant: "heading-lg/semibold",
                                                    color: "header-primary",
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
                                              : (0, r.jsx)(m.Z, {
                                                    tabs: q,
                                                    selectedTab: Q,
                                                    onTabSelect: eh,
                                                    onAvailableWidthChange: eu,
                                                }),
                                          (0, r.jsx)(h.Z, {
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
                    ei
                        ? (0, r.jsx)(A.Z, {
                              onScroll: (e) => ex(e, E.m_.APPLICATION),
                              onSelectApplication: eg,
                              applicationId: H,
                              initialTab: z,
                              onButtonsVisibilityChange: ee,
                          })
                        : ea
                          ? (0, r.jsx)(Z.Z, {
                                onSelectApplication: eg,
                                onScroll: (e) => ex(e, E.m_.SEARCH),
                            })
                          : Q === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, r.jsx)(R.Z, {
                                  onScroll: (e) => ex(e, E.m_.HOME),
                                  onSelectApplication: eg,
                              })
                            : (0, r.jsx)(T.Z, {
                                  tabId: Number(Q),
                                  onScroll: (e) => ex(e, E.m_.CATEGORY),
                                  onSelectApplication: eg,
                              }),
                ],
            }),
        ],
    });
};
