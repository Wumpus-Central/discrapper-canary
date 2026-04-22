a.r(t), a.d(t, { default: () => X });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(735438),
    o = a(311907),
    c = a(323384),
    d = a(548411),
    u = a(534514),
    h = a(417098),
    m = a(111159),
    p = a(834730),
    _ = a(178629),
    g = a(770472),
    x = a(737823),
    A = (a(153527), a(876622)),
    f = a(299593),
    C = a(965660),
    v = a(976860),
    b = a(961350),
    j = a(287809),
    I = a(954571),
    E = a(354138),
    N = a(416730),
    S = a(212534),
    y = a(38181),
    P = a(767599),
    R = a(412461),
    T = a(157561),
    L = a(497773),
    D = a(310419),
    k = a(656106),
    O = a(97432),
    G = a(22079),
    M = a(569495),
    w = a(410608),
    U = a(360832),
    B = a(435220),
    F = a(652215),
    V = a(985018),
    H = a(386607);
function Y(e) {
    let { applicationId: t, hideDetailHeaderButtons: a, onClickBack: i } = e,
        r = (0, o.bG)([S.A], () => S.A.getApplication(t)),
        [c, h] = l.useState(a),
        m = l.useCallback(() => {
            h(a);
        }, [a]);
    return (0, n.jsxs)("div", {
        className: H._u,
        children: [
            (0, n.jsx)("div", { className: H.w$, children: (0, n.jsx)(x.XQ, { icon: d.Z, onClick: i }) }),
            (0, n.jsx)(u.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: H.Rm,
                lineClamp: 1,
                children: r?.name,
            }),
            (0, n.jsx)("div", {
                className: s()(H.w$, H.xY, { [H.RK]: !a, [H.jD]: a && !c, [H.R]: a && c }),
                onTransitionEnd: m,
                children: null != r ? (0, n.jsx)(M.A, { application: r, size: "sm" }) : null,
            }),
        ],
    });
}
function z() {
    let e = l.useCallback(() => {
            (0, R.dG)();
        }, []),
        t = l.useCallback(() => {
            (0, R.jL)();
        }, []);
    return (0, n.jsxs)(h.$T, {
        color: h.Hv.BRAND,
        className: H.aL,
        children: [
            (0, n.jsx)(m.p, { size: "custom", color: "white", className: H.wm }),
            (0, n.jsx)(p.E, {
                tag: "span",
                color: "always-white",
                variant: "text-md/normal",
                children: V.intl.string(V.t.Ol3MIt),
            }),
            (0, n.jsxs)("div", {
                className: H.ll,
                children: [
                    (0, n.jsx)(h.Z_, { onClick: e, noticeType: F.kqX.LOGIN, children: V.intl.string(V.t["825cFy"]) }),
                    (0, n.jsx)(h.Z_, {
                        onClick: t,
                        noticeType: F.kqX.REGISTER,
                        minor: !0,
                        children: V.intl.string(V.t.HAkXzo),
                    }),
                ],
            }),
        ],
    });
}
let X = function () {
    let e = (0, o.bG)([b.default], () => !b.default.isAuthenticated()),
        { onScroll: t, scrollPosition: a, resetScrollPosition: i } = (0, _.G)(),
        h = (0, D.R4)(),
        m = (0, R.DB)(),
        p = h?.type === D.ev.CATEGORY ? h.categoryId : void 0,
        { applicationId: S, section: M } = h?.type === D.ev.APPLICATION ? h : {},
        { query: X, categoryId: K } = h?.type === D.ev.SEARCH ? h : {},
        W = (0, o.bG)([y.A], () => y.A.getCategories()),
        $ = l.useMemo(() => [(0, P.AU)(), ...W], [W]),
        J = l.useMemo(() => $.find((e) => e.id === Number(K)), [$, K]),
        { tabs: Q, selectedTab: Z, onSelectTab: q } = (0, L.S)(p?.toString()),
        [ee, et] = l.useState(!0),
        ea = D.h.useField("trackedOpenedFromExternalEntrypoint"),
        en = D.h.useField("sessionId"),
        el = (0, o.bG)([j.default], () => j.default.getCurrentUser());
    l.useEffect(() => {
        if (!ea && null == en) {
            let e = (0, C.YP)();
            I.default.track(F.HAw.APP_DIRECTORY_OPENED, { source: D.sW.EXTERNAL, session_id: e, user_id: el?.id }),
                D.h.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: D.sW.EXTERNAL },
                    guildId: null,
                });
        }
    }, [en, ea, el?.id]),
        l.useEffect(() => {
            E.bW();
        }, []),
        l.useEffect(() => {
            m && E.wD();
        }, [m]),
        l.useEffect(() => D.tS.setState({ lastItem: h }), [h]);
    let ei = null != S,
        es = h?.type === D.ev.SEARCH,
        {
            searchQuery: er,
            onSearchTextChange: eo,
            onClearSearch: ec,
            onSearchSubmit: ed,
        } = (0, T.v)({ initialQuery: X ?? "" }),
        eu = N.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: eh,
            onCollapsedSearchBarClick: em,
            onSearchBarBlur: ep,
            tabsClassName: e_,
        } = (0, g.p)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: "" === er.trim(),
            searchBarState: eu,
            setSearchBarState: (e) => N.A.setState({ searchBarState: e }),
        }),
        eg = l.useCallback(
            (e) => {
                q(e), es && ec(), i();
            },
            [es, ec, q, i],
        ),
        ex = l.useCallback((e) => (0, k.YR)({ applicationId: e }), []),
        eA = ei || es,
        ef = l.useCallback(() => {
            null != (0, D.Bn)() ? (0, v.aX)() : (0, k.eM)();
        }, []),
        eC = l.useMemo(
            () =>
                (0, r.debounce)((e) => {
                    let { scrollTop: t, offsetHeight: a, scrollHeight: n, location: l } = e;
                    t > 0 &&
                        (0, R.TR)(F.HAw.APP_DIRECTORY_PAGE_SCROLLED, {
                            scroll_visible_percentile: (t + a) / n,
                            current_page: l,
                        });
                }, 200),
            [],
        ),
        ev = l.useCallback(
            (e, a) => {
                t(e),
                    eC({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: a,
                    });
            },
            [eC, t],
        );
    return (0, n.jsxs)("div", {
        className: s()(H.nw, { [H.Yz]: e }),
        children: [
            e ? (0, n.jsx)(z, {}) : null,
            (0, n.jsxs)("div", {
                className: H.WH,
                children: [
                    (0, n.jsxs)(x.Ay, {
                        variant: eA ? x.Z5.RELATIVE : x.Z5.OVERLAY,
                        children: [
                            !eA && (0, n.jsx)(x.ns, { scrollPosition: a }),
                            ei
                                ? (0, n.jsx)(Y, { applicationId: S, hideDetailHeaderButtons: ee, onClickBack: ef })
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          es
                                              ? (0, n.jsx)(x.XQ, { icon: d.Z, onClick: ef })
                                              : (0, n.jsx)(x.T4, { icon: c.k }),
                                          es
                                              ? (0, n.jsx)(u.D, {
                                                    variant: "heading-lg/semibold",
                                                    color: "text-strong",
                                                    className: H.wL,
                                                    children:
                                                        null != X && "" !== X
                                                            ? V.intl.formatToPlainString(V.t.zHdzqW, { query: X })
                                                            : V.intl.formatToPlainString(V.t.Qhj5Br, {
                                                                  categoryName: J?.name ?? V.intl.string(V.t.E407b7),
                                                              }),
                                                })
                                              : (0, n.jsx)(A.A, {
                                                    className: e_,
                                                    tabs: Q,
                                                    selectedTab: Z,
                                                    onTabSelect: eg,
                                                    onAvailableWidthChange: eh,
                                                }),
                                          (0, n.jsx)(f.A, {
                                              query: er,
                                              placeholder: V.intl.string(V.t["5h0QOP"]),
                                              onTextChange: eo,
                                              onClear: ec,
                                              onSubmit: ed,
                                              onCollapsedClick: em,
                                              state: eu,
                                              onBlur: ep,
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                    ei
                        ? (0, n.jsx)(G.A, {
                              onScroll: (e) => ev(e, D.ev.APPLICATION),
                              onSelectApplication: ex,
                              applicationId: S,
                              initialTab: M,
                              onButtonsVisibilityChange: et,
                          })
                        : es
                          ? (0, n.jsx)(U.A, { onSelectApplication: ex, onScroll: (e) => ev(e, D.ev.SEARCH) })
                          : Z === B.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                            ? (0, n.jsx)(w.A, { onScroll: (e) => ev(e, D.ev.HOME), onSelectApplication: ex })
                            : (0, n.jsx)(O.A, {
                                  tabId: Number(Z),
                                  onScroll: (e) => ev(e, D.ev.CATEGORY),
                                  onSelectApplication: ex,
                              }),
                ],
            }),
        ],
    });
};
