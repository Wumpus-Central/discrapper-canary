a.r(t), a.d(t, { default: () => H });
var n = a(627968),
    i = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(735438),
    o = a(311907),
    c = a(397927),
    d = a(178629),
    u = a(770472),
    h = a(737823),
    m = (a(153527), a(876622)),
    p = a(521974),
    _ = a(965660),
    g = a(976860),
    x = a(961350),
    A = a(287809),
    C = a(954571),
    b = a(354138),
    v = a(416730),
    f = a(212534),
    j = a(38181),
    I = a(767599),
    E = a(412461),
    S = a(157561),
    N = a(497773),
    y = a(310419),
    T = a(656106),
    R = a(97432),
    L = a(244460),
    P = a(569495),
    D = a(410608),
    O = a(360832),
    k = a(435220),
    M = a(652215),
    G = a(985018),
    U = a(67242);
function w(e) {
    let { applicationId: t, hideDetailHeaderButtons: a, onClickBack: s } = e,
        r = (0, o.bG)([f.A], () => f.A.getApplication(t)),
        [d, u] = i.useState(a),
        m = i.useCallback(() => {
            u(a);
        }, [a]);
    return (0, n.jsxs)("div", {
        className: U._u,
        children: [
            (0, n.jsx)("div", { className: U.w$, children: (0, n.jsx)(h.XQ, { icon: c.Zge, onClick: s }) }),
            (0, n.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: U.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, n.jsx)("div", {
                className: l()(U.w$, U.xY, { [U.RK]: !a, [U.jD]: a && !d, [U.R]: a && d }),
                onTransitionEnd: m,
                children: null != r ? (0, n.jsx)(P.A, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function V() {
    let e = i.useCallback(() => {
            (0, E.dG)();
        }, []),
        t = i.useCallback(() => {
            (0, E.jL)();
        }, []);
    return (0, n.jsxs)(c.$Td, {
        color: c.Hv$.BRAND,
        className: U.aL,
        children: [
            (0, n.jsx)(c.pVd, { size: "custom", color: "white", className: U.wm }),
            (0, n.jsx)(c.Text, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: G.intl.string(G.t.Ol3MIt),
            }),
            (0, n.jsxs)("div", {
                className: U.ll,
                children: [
                    (0, n.jsx)(c.Z_L, { onClick: e, noticeType: M.kqX.LOGIN, children: G.intl.string(G.t["825cFy"]) }),
                    (0, n.jsx)(c.Z_L, {
                        onClick: t,
                        noticeType: M.kqX.REGISTER,
                        minor: !0,
                        children: G.intl.string(G.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let H = function () {
    let e = (0, o.bG)([x.default], () => !x.default.isAuthenticated()),
        { onScroll: t, scrollPosition: a, resetScrollPosition: s } = (0, d.G)(),
        f = (0, y.R4)(),
        P = (0, E.DB)(),
        H = f?.type === y.ev.CATEGORY ? f.categoryId : void 0,
        { applicationId: B, section: F } = f?.type === y.ev.APPLICATION ? f : {},
        { query: Y, categoryId: z } = f?.type === y.ev.SEARCH ? f : {},
        X = (0, o.bG)([j.A], () => j.A.getCategories()),
        W = i.useMemo(() => [(0, I.AU)(), ...X], [X]),
        K = i.useMemo(() => W.find((e) => e.id === Number(z)), [W, z]),
        { tabs: Z, selectedTab: $, onSelectTab: Q } = (0, N.S)(H?.toString()),
        [J, q] = i.useState(!0),
        ee = y.h.useField("trackedOpenedFromExternalEntrypoint"),
        et = y.h.useField("sessionId"),
        ea = (0, o.bG)([A.default], () => A.default.getCurrentUser());
    i.useEffect(() => {
        if (!ee && null == et) {
            let e = (0, _.YP)();
            C.default.track(M.HAw.APP_DIRECTORY_OPENED, { source: y.sW.EXTERNAL, session_id: e, user_id: ea?.id }),
                y.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: y.sW.EXTERNAL },
                    guildId: null,
                });
        }
    }, [et, ee, ea?.id]),
        i.useEffect(() => {
            b.bW();
        }, []),
        i.useEffect(() => {
            P && b.wD();
        }, [P]),
        i.useEffect(() => y.tS.setState({ lastItem: f }), [f]);
    let en = null != B,
        ei = f?.type === y.ev.SEARCH,
        {
            searchQuery: es,
            onSearchTextChange: el,
            onClearSearch: er,
            onSearchSubmit: eo,
        } = (0, S.v)({ initialQuery: Y ?? "" }),
        ec = v.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: ed,
            onCollapsedSearchBarClick: eu,
            onSearchBarBlur: eh,
        } = (0, u.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === es.trim(),
            searchBarState: ec,
            setSearchBarState: (e) => v.A.setState({ searchBarState: e }),
        }),
        em = i.useCallback(
            (e) => {
                Q(e), ei && er(), s();
            },
            [ei, er, Q, s],
        ),
        ep = i.useCallback((e) => (0, T.YR)({ applicationId: e }), []),
        e_ = en || ei,
        eg = i.useCallback(() => {
            null != (0, y.Bn)() ? (0, g.aX)() : (0, T.eM)();
        }, []),
        ex = i.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: a, scrollHeight: n, location: i } = e;
                    t > 0 &&
                        (0, E.TR)(M.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + a) / n,
                            current_page: i,
                        });
                }, 200),
            [],
        ),
        eA = i.useCallback(
            (e, a) => {
                t(e),
                    ex({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: a,
                    });
            },
            [ex, t],
        );
    return (0, n.jsxs)("div", {
        className: l()(U.nw, { [U.Yz]: e }),
        children: [
            e ? (0, n.jsx)(V, {}) : null,
            (0, n.jsxs)("div", {
                className: U.WH,
                children: [
                    (0, n.jsxs)(h.Ay, {
                        variant: e_ ? h.Z5.RELATIVE : h.Z5.OVERLAY,
                        children: [
                            !e_ && (0, n.jsx)(h.ns, { scrollPosition: a }),
                            en
                                ? (0, n.jsx)(w, { applicationId: B, hideDetailHeaderButtons: J, onClickBack: eg })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          ei
                                              ? (0, n.jsx)(h.XQ, { icon: c.Zge, onClick: eg })
                                              : (0, n.jsx)(h.T4, { icon: c.k9F }),
                                          ei
                                              ? (0, n.jsx)(c.Heading, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: U.wL,
                                                    children:
                                                        null != Y && "" !== Y
                                                            ? G.intl.formatToPlainString(G.t.zHdzqW, { query: Y })
                                                            : G.intl.formatToPlainString(G.t.Qhj5Br, {
                                                                  categoryName: K?.name ?? G.intl.string(G.t.E407b7),
                                                              }),
                                                })
                                              : (0, n.jsx)(m.A, {
                                                    tabs: Z,
                                                    selectedTab: $,
                                                    onTabSelect: em,
                                                    onAvailableWidthChange: ed,
                                                }),
                                          (0, n.jsx)(p.A, {
                                              query: es,
                                              placeholder: G.intl.string(G.t["5h0QOP"]),
                                              onTextChange: el,
                                              onClear: er,
                                              onSubmit: eo,
                                              onCollapsedClick: eu,
                                              state: ec,
                                              onBlur: eh,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    en
                        ? (0, n.jsx)(L.A, {
                              onScroll: (e) => eA(e, y.ev.APPLICATION),
                              onSelectApplication: ep,
                              applicationId: B,
                              initialTab: F,
                              onButtonsVisibilityChange: q,
                          })
                        : ei
                          ? (0, n.jsx)(O.A, { onSelectApplication: ep, onScroll: (e) => eA(e, y.ev.SEARCH) })
                          : $ === k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, n.jsx)(D.A, { onScroll: (e) => eA(e, y.ev.HOME), onSelectApplication: ep })
                            : (0, n.jsx)(R.A, {
                                  tabId: Number($),
                                  onScroll: (e) => eA(e, y.ev.CATEGORY),
                                  onSelectApplication: ep,
                              }),
                ],
            }),
        ],
    });
};
