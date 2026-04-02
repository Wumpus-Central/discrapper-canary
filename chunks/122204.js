a.r(t), a.d(t, { default: () => V });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(735438),
    o = a(311907),
    c = a(397927),
    d = a(178629),
    u = a(770472),
    m = a(737823),
    h = (a(153527), a(876622)),
    p = a(521974),
    _ = a(965660),
    g = a(976860),
    x = a(961350),
    A = a(287809),
    f = a(954571),
    b = a(354138),
    C = a(416730),
    v = a(212534),
    j = a(38181),
    I = a(767599),
    S = a(412461),
    E = a(157561),
    N = a(497773),
    y = a(310419),
    T = a(656106),
    R = a(97432),
    P = a(244460),
    L = a(569495),
    D = a(410608),
    O = a(360832),
    k = a(435220),
    G = a(652215),
    M = a(985018),
    U = a(947736);
function w(e) {
    let { applicationId: t, hideDetailHeaderButtons: a, onClickBack: l } = e,
        r = (0, o.bG)([v.A], () => v.A.getApplication(t)),
        [d, u] = i.useState(a),
        h = i.useCallback(() => {
            u(a);
        }, [a]);
    return (0, n.jsxs)("div", {
        className: U._u,
        children: [
            (0, n.jsx)("div", { className: U.w$, children: (0, n.jsx)(m.XQ, { icon: c.Zge, onClick: l }) }),
            (0, n.jsx)(c.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: U.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, n.jsx)("div", {
                className: s()(U.w$, U.xY, { [U.RK]: !a, [U.jD]: a && !d, [U.R]: a && d }),
                onTransitionEnd: h,
                children: null != r ? (0, n.jsx)(L.A, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function H() {
    let e = i.useCallback(() => {
            (0, S.dG)();
        }, []),
        t = i.useCallback(() => {
            (0, S.jL)();
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
                children: M.intl.string(M.t.Ol3MIt),
            }),
            (0, n.jsxs)("div", {
                className: U.ll,
                children: [
                    (0, n.jsx)(c.Z_L, { onClick: e, noticeType: G.kqX.LOGIN, children: M.intl.string(M.t["825cFy"]) }),
                    (0, n.jsx)(c.Z_L, {
                        onClick: t,
                        noticeType: G.kqX.REGISTER,
                        minor: !0,
                        children: M.intl.string(M.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let V = function () {
    let e = (0, o.bG)([x.default], () => !x.default.isAuthenticated()),
        { onScroll: t, scrollPosition: a, resetScrollPosition: l } = (0, d.G)(),
        v = (0, y.R4)(),
        L = (0, S.DB)(),
        V = v?.type === y.ev.CATEGORY ? v.categoryId : void 0,
        { applicationId: B, section: F } = v?.type === y.ev.APPLICATION ? v : {},
        { query: Y, categoryId: z } = v?.type === y.ev.SEARCH ? v : {},
        X = (0, o.bG)([j.A], () => j.A.getCategories()),
        W = i.useMemo(() => [(0, I.AU)(), ...X], [X]),
        K = i.useMemo(() => W.find((e) => e.id === Number(z)), [W, z]),
        { tabs: Z, selectedTab: $, onSelectTab: Q } = (0, N.S)(V?.toString()),
        [J, q] = i.useState(!0),
        ee = y.h.useField("trackedOpenedFromExternalEntrypoint"),
        et = y.h.useField("sessionId"),
        ea = (0, o.bG)([A.default], () => A.default.getCurrentUser());
    i.useEffect(() => {
        if (!ee && null == et) {
            let e = (0, _.YP)();
            f.default.track(G.HAw.APP_DIRECTORY_OPENED, { source: y.sW.EXTERNAL, session_id: e, user_id: ea?.id }),
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
            L && b.wD();
        }, [L]),
        i.useEffect(() => y.tS.setState({ lastItem: v }), [v]);
    let en = null != B,
        ei = v?.type === y.ev.SEARCH,
        {
            searchQuery: el,
            onSearchTextChange: es,
            onClearSearch: er,
            onSearchSubmit: eo,
        } = (0, E.v)({ initialQuery: Y ?? "" }),
        ec = C.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: ed,
            onCollapsedSearchBarClick: eu,
            onSearchBarBlur: em,
            tabsClassName: eh,
        } = (0, u.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === el.trim(),
            searchBarState: ec,
            setSearchBarState: (e) => C.A.setState({ searchBarState: e }),
        }),
        ep = i.useCallback(
            (e) => {
                Q(e), ei && er(), l();
            },
            [ei, er, Q, l],
        ),
        e_ = i.useCallback((e) => (0, T.YR)({ applicationId: e }), []),
        eg = en || ei,
        ex = i.useCallback(() => {
            null != (0, y.Bn)() ? (0, g.aX)() : (0, T.eM)();
        }, []),
        eA = i.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: a, scrollHeight: n, location: i } = e;
                    t > 0 &&
                        (0, S.TR)(G.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + a) / n,
                            current_page: i,
                        });
                }, 200),
            [],
        ),
        ef = i.useCallback(
            (e, a) => {
                t(e),
                    eA({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: a,
                    });
            },
            [eA, t],
        );
    return (0, n.jsxs)("div", {
        className: s()(U.nw, { [U.Yz]: e }),
        children: [
            e ? (0, n.jsx)(H, {}) : null,
            (0, n.jsxs)("div", {
                className: U.WH,
                children: [
                    (0, n.jsxs)(m.Ay, {
                        variant: eg ? m.Z5.RELATIVE : m.Z5.OVERLAY,
                        children: [
                            !eg && (0, n.jsx)(m.ns, { scrollPosition: a }),
                            en
                                ? (0, n.jsx)(w, { applicationId: B, hideDetailHeaderButtons: J, onClickBack: ex })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          ei
                                              ? (0, n.jsx)(m.XQ, { icon: c.Zge, onClick: ex })
                                              : (0, n.jsx)(m.T4, { icon: c.k9F }),
                                          ei
                                              ? (0, n.jsx)(c.Heading, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: U.wL,
                                                    children:
                                                        null != Y && "" !== Y
                                                            ? M.intl.formatToPlainString(M.t.zHdzqW, { query: Y })
                                                            : M.intl.formatToPlainString(M.t.Qhj5Br, {
                                                                  categoryName: K?.name ?? M.intl.string(M.t.E407b7),
                                                              }),
                                                })
                                              : (0, n.jsx)(h.A, {
                                                    className: eh,
                                                    tabs: Z,
                                                    selectedTab: $,
                                                    onTabSelect: ep,
                                                    onAvailableWidthChange: ed,
                                                }),
                                          (0, n.jsx)(p.A, {
                                              query: el,
                                              placeholder: M.intl.string(M.t["5h0QOP"]),
                                              onTextChange: es,
                                              onClear: er,
                                              onSubmit: eo,
                                              onCollapsedClick: eu,
                                              state: ec,
                                              onBlur: em,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    en
                        ? (0, n.jsx)(P.A, {
                              onScroll: (e) => ef(e, y.ev.APPLICATION),
                              onSelectApplication: e_,
                              applicationId: B,
                              initialTab: F,
                              onButtonsVisibilityChange: q,
                          })
                        : ei
                          ? (0, n.jsx)(O.A, { onSelectApplication: e_, onScroll: (e) => ef(e, y.ev.SEARCH) })
                          : $ === k.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, n.jsx)(D.A, { onScroll: (e) => ef(e, y.ev.HOME), onSelectApplication: e_ })
                            : (0, n.jsx)(R.A, {
                                  tabId: Number($),
                                  onScroll: (e) => ef(e, y.ev.CATEGORY),
                                  onSelectApplication: e_,
                              }),
                ],
            }),
        ],
    });
};
