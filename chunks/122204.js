n.r(t),
    n.d(t, {
        default: () => H,
    }),
    n(896048),
    n(733351);
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(735438),
    c = n(311907),
    o = n(397927),
    d = n(178629),
    u = n(770472),
    p = n(737823),
    h = (n(153527), n(876622)),
    m = n(521974),
    b = n(965660),
    f = n(976860),
    g = n(961350),
    x = n(287809),
    v = n(954571),
    j = n(354138),
    A = n(416730),
    _ = n(212534),
    y = n(38181),
    O = n(767599),
    S = n(412461),
    C = n(157561),
    E = n(497773),
    I = n(310419),
    P = n(656106),
    N = n(97432),
    R = n(244460),
    T = n(569495),
    L = n(410608),
    D = n(360832),
    w = n(435220),
    k = n(652215),
    M = n(985018),
    U = n(67242);

function G(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: r } = e,
        s = (0, c.bG)([_.A], () => _.A.getApplication(t)),
        [d, u] = a.useState(n),
        h = a.useCallback(() => {
            u(n);
        }, [n]);
    return (0, l.jsxs)("div", {
        className: U._u,
        children: [
            (0, l.jsx)("div", {
                className: U.w$,
                children: (0, l.jsx)(p.XQ, {
                    icon: o.Zge,
                    onClick: r,
                }),
            }),
            (0, l.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: U.Rm,
                lineClamp: 1,
                children: null == s ? void 0 : s.name,
            }),
            (0, l.jsx)("div", {
                className: i()(U.w$, U.xY, {
                    [U.RK]: !n,
                    [U.jD]: n && !d,
                    [U.R]: n && d,
                }),
                onTransitionEnd: h,
                children:
                    null != s
                        ? (0, l.jsx)(T.A, {
                              application: s,
                              size: "sm",
                          })
                        : null,
            }),
        ],
    });
}

function V() {
    let e = a.useCallback(() => {
            (0, S.dG)();
        }, []),
        t = a.useCallback(() => {
            (0, S.jL)();
        }, []);
    return (0, l.jsxs)(o.$Td, {
        color: o.Hv$.BRAND,
        className: U.aL,
        children: [
            (0, l.jsx)(o.pVd, {
                size: "custom",
                color: "white",
                className: U.wm,
            }),
            (0, l.jsx)(o.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: M.intl.string(M.t.Ol3MIt),
            }),
            (0, l.jsxs)("div", {
                className: U.ll,
                children: [
                    (0, l.jsx)(o.Z_L, {
                        onClick: e,
                        noticeType: k.kqX.LOGIN,
                        children: M.intl.string(M.t["825cFy"]),
                    }),
                    (0, l.jsx)(o.Z_L, {
                        onClick: t,
                        noticeType: k.kqX.REGISTER,
                        minor: !0,
                        children: M.intl.string(M.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let H = function () {
    var e;
    let t = (0, c.bG)([g.default], () => !g.default.isAuthenticated()),
        { onScroll: n, scrollPosition: r, resetScrollPosition: _ } = (0, d.G)(),
        T = (0, I.R4)(),
        H = (0, S.DB)(),
        F = (null == T ? void 0 : T.type) === I.ev.CATEGORY ? T.categoryId : void 0,
        { applicationId: B, section: Y } = (null == T ? void 0 : T.type) === I.ev.APPLICATION ? T : {},
        { query: z, categoryId: X } = (null == T ? void 0 : T.type) === I.ev.SEARCH ? T : {},
        K = (0, c.bG)([y.A], () => y.A.getCategories()),
        W = a.useMemo(() => [(0, O.AU)(), ...K], [K]),
        Z = a.useMemo(() => W.find((e) => e.id === Number(X)), [W, X]),
        { tabs: J, selectedTab: Q, onSelectTab: q } = (0, E.S)(null == F ? void 0 : F.toString()),
        [$, ee] = a.useState(!0),
        et = I.h.useField("trackedOpenedFromExternalEntrypoint"),
        en = I.h.useField("sessionId"),
        el = (0, c.bG)([x.default], () => x.default.getCurrentUser());
    a.useEffect(() => {
        if (!et && null == en) {
            let e = (0, b.YP)();
            v.default.track(k.HAw.APP_DIRECTORY_OPENED, {
                source: I.sW.EXTERNAL,
                session_id: e,
                user_id: null == el ? void 0 : el.id,
            }),
                I.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: {
                        name: I.sW.EXTERNAL,
                    },
                    guildId: null,
                });
        }
    }, [en, et, null == el ? void 0 : el.id]),
        a.useEffect(() => {
            j.bW();
        }, []),
        a.useEffect(() => {
            H && j.wD();
        }, [H]),
        a.useEffect(
            () =>
                I.tS.setState({
                    lastItem: T,
                }),
            [T],
        );
    let ea = null != B,
        er = (null == T ? void 0 : T.type) === I.ev.SEARCH,
        {
            searchQuery: ei,
            onSearchTextChange: es,
            onClearSearch: ec,
            onSearchSubmit: eo,
        } = (0, C.v)({
            initialQuery: null != z ? z : "",
        }),
        ed = A.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eu,
            onCollapsedSearchBarClick: ep,
            onSearchBarBlur: eh,
        } = (0, u.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === ei.trim(),
            searchBarState: ed,
            setSearchBarState: (e) =>
                A.A.setState({
                    searchBarState: e,
                }),
        }),
        em = a.useCallback(
            (e) => {
                q(e), er && ec(), _();
            },
            [er, ec, q, _],
        ),
        eb = a.useCallback(
            (e) =>
                (0, P.YR)({
                    applicationId: e,
                }),
            [],
        ),
        ef = ea || er,
        eg = a.useCallback(() => {
            null != (0, I.Bn)() ? (0, f.aX)() : (0, P.eM)();
        }, []),
        ex = a.useMemo(
            () =>
                (0, s.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: n, scrollHeight: l, location: a } = e;
                    t > 0 &&
                        (0, S.TR)(k.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + n) / l,
                            current_page: a,
                        });
                }, 200),
            [],
        ),
        ev = a.useCallback(
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
    return (0, l.jsxs)("div", {
        className: i()(U.nw, {
            [U.Yz]: t,
        }),
        children: [
            t ? (0, l.jsx)(V, {}) : null,
            (0, l.jsxs)("div", {
                className: U.WH,
                children: [
                    (0, l.jsxs)(p.Ay, {
                        variant: ef ? p.Z5.RELATIVE : p.Z5.OVERLAY,
                        children: [
                            !ef &&
                                (0, l.jsx)(p.ns, {
                                    scrollPosition: r,
                                }),
                            ea
                                ? (0, l.jsx)(G, {
                                      applicationId: B,
                                      hideDetailHeaderButtons: $,
                                      onClickBack: eg,
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          er
                                              ? (0, l.jsx)(p.XQ, {
                                                    icon: o.Zge,
                                                    onClick: eg,
                                                })
                                              : (0, l.jsx)(p.T4, {
                                                    icon: o.k9F,
                                                }),
                                          er
                                              ? (0, l.jsx)(o.Heading, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: U.wL,
                                                    children:
                                                        null != z && "" !== z
                                                            ? M.intl.formatToPlainString(M.t.zHdzqW, {
                                                                  query: z,
                                                              })
                                                            : M.intl.formatToPlainString(M.t.Qhj5Br, {
                                                                  categoryName:
                                                                      null != (e = null == Z ? void 0 : Z.name)
                                                                          ? e
                                                                          : M.intl.string(M.t.E407b7),
                                                              }),
                                                })
                                              : (0, l.jsx)(h.A, {
                                                    tabs: J,
                                                    selectedTab: Q,
                                                    onTabSelect: em,
                                                    onAvailableWidthChange: eu,
                                                }),
                                          (0, l.jsx)(m.A, {
                                              query: ei,
                                              placeholder: M.intl.string(M.t["5h0QOP"]),
                                              onTextChange: es,
                                              onClear: ec,
                                              onSubmit: eo,
                                              onCollapsedClick: ep,
                                              state: ed,
                                              onBlur: eh,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    ea
                        ? (0, l.jsx)(R.A, {
                              onScroll: (e) => ev(e, I.ev.APPLICATION),
                              onSelectApplication: eb,
                              applicationId: B,
                              initialTab: Y,
                              onButtonsVisibilityChange: ee,
                          })
                        : er
                          ? (0, l.jsx)(D.A, {
                                onSelectApplication: eb,
                                onScroll: (e) => ev(e, I.ev.SEARCH),
                            })
                          : Q === w.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, l.jsx)(L.A, {
                                  onScroll: (e) => ev(e, I.ev.HOME),
                                  onSelectApplication: eb,
                              })
                            : (0, l.jsx)(N.A, {
                                  tabId: Number(Q),
                                  onScroll: (e) => ev(e, I.ev.CATEGORY),
                                  onSelectApplication: eb,
                              }),
                ],
            }),
        ],
    });
};
