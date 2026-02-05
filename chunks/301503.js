n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(178629),
    s = n(770472),
    o = n(737823),
    d = (n(153527), n(876622)),
    c = n(521974),
    u = n(282026),
    A = n(881973),
    h = n(965660),
    _ = n(601193),
    m = n(424956),
    p = n(19925),
    g = n(689817),
    E = n(38894),
    f = n(299579),
    I = n(324580),
    C = n(488995),
    N = n(985018),
    T = n(734539);
function S() {
    let e = r.useRef((0, h.YP)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: S } = (0, l.G)(),
        { tabs: x, selectedTab: v, setSelectedTab: b } = (0, g.f)(),
        y = (0, h.Ub)(v),
        L = !I.R0.has(v),
        {
            searchQuery: O,
            onSearchTextChange: R,
            onClearSearch: P,
            onSearchSubmit: j,
            isSearchVisible: D,
        } = (0, p.X)({ loadId: e.current }),
        w = _.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: U,
            onSearchBarBlur: G,
            tabsClassName: k,
        } = (0, s.p)({
            isSearchBarVisible: L,
            isSearchBarEmpty: "" === O.trim(),
            searchBarState: w,
            setSearchBarState: (e) => _.A.setState({ searchBarState: e }),
        }),
        V = u.A.useField("fetchedQuery"),
        B = r.useCallback(
            (e) => {
                b(e), D && P();
            },
            [D, P, b],
        ),
        H = r.useMemo(
            () =>
                D
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !I.R0.has(t);
                      })
                    : x,
            [x, D],
        ),
        F = r.useRef(new A.A(y)),
        { onGuildCardSeen: Y, onGuildCardClick: W } = (0, m.p)({
            guildDiscoveryCardSeenManager: F.current,
            loadId: e.current,
        });
    return (
        r.useEffect(() => {
            F.current.flushSeenGuilds(e.current);
        }, [y]),
        r.useEffect(() => {
            S();
        }, [v, S]),
        r.useEffect(() => {
            D || u.A.setState({ scrollPosition: null });
        }, [D]),
        (0, i.jsxs)("div", {
            className: T.kL,
            children: [
                (0, i.jsxs)(o.Ay, {
                    variant: D ? o.Z5.RELATIVE : o.Z5.OVERLAY,
                    children: [
                        !D && (0, i.jsx)(o.ns, { scrollPosition: n }),
                        D ? (0, i.jsx)(o.XQ, { icon: a.Zge, onClick: P }) : (0, i.jsx)(o.T4, { icon: a.RR9 }),
                        !D &&
                            (0, i.jsx)(d.A, {
                                className: k,
                                tabs: H,
                                selectedTab: D ? null : v,
                                onTabSelect: B,
                                onAvailableWidthChange: M,
                            }),
                        D &&
                            (0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: T.ov,
                                children: N.intl.format(N.t.zHdzqW, { query: V }),
                            }),
                        L &&
                            (0, i.jsx)(c.A, {
                                query: O,
                                placeholder: N.intl.string(N.t["5h0QOP"]),
                                onTextChange: R,
                                onClear: P,
                                onSubmit: j,
                                onCollapsedClick: U,
                                state: D ? C.GlobalDiscoverySearchBarState.DEFAULT : w,
                                onBlur: G,
                            }),
                    ],
                }),
                D
                    ? (0, i.jsx)(f.A, { loadId: e.current, onGuildCardClick: W, onGuildCardSeen: Y })
                    : (0, i.jsx)(E.A, { selectedTab: v, onScroll: t, onGuildCardClick: W, onGuildCardSeen: Y }),
            ],
        })
    );
}
