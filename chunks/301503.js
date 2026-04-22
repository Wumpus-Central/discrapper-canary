a.d(t, { A: () => R });
var s = a(627968),
    l = a(64700),
    r = a(664121),
    i = a(548411),
    n = a(534514),
    c = a(178629),
    o = a(770472),
    d = a(737823),
    u = (a(153527), a(876622)),
    h = a(299593),
    g = a(282026),
    A = a(881973),
    _ = a(965660),
    m = a(601193),
    C = a(424956),
    f = a(19925),
    y = a(689817),
    I = a(38894),
    S = a(299579),
    E = a(324580),
    b = a(488995),
    p = a(985018),
    x = a(595864);
function R() {
    let e = l.useRef((0, _.YP)()),
        { onScroll: t, scrollPosition: a, resetScrollPosition: R } = (0, c.G)(),
        { tabs: j, selectedTab: D, setSelectedTab: v } = (0, y.f)(),
        T = (0, _.Ub)(D),
        G = !E.R0.has(D),
        {
            searchQuery: L,
            onSearchTextChange: N,
            onClearSearch: U,
            onSearchSubmit: k,
            isSearchVisible: F,
        } = (0, f.X)({ loadId: e.current }),
        O = m.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: w,
            onCollapsedSearchBarClick: V,
            onSearchBarBlur: M,
            tabsClassName: Y,
        } = (0, o.p)({
            isSearchBarVisible: G,
            isSearchBarEmpty: "" === L.trim(),
            searchBarState: O,
            setSearchBarState: (e) => m.A.setState({ searchBarState: e }),
        }),
        q = g.A.useField("fetchedQuery"),
        H = l.useCallback(
            (e) => {
                v(e), F && U();
            },
            [F, U, v],
        ),
        P = l.useMemo(
            () =>
                F
                    ? j.filter((e) => {
                          let { id: t } = e;
                          return !E.R0.has(t);
                      })
                    : j,
            [j, F],
        ),
        Q = l.useRef(new A.A(T)),
        { onGuildCardSeen: B, onGuildCardClick: z } = (0, C.p)({
            guildDiscoveryCardSeenManager: Q.current,
            loadId: e.current,
        });
    return (
        l.useEffect(() => {
            Q.current.flushSeenGuilds(e.current);
        }, [T]),
        l.useEffect(() => {
            R();
        }, [D, R]),
        l.useEffect(() => {
            F || g.A.setState({ scrollPosition: null });
        }, [F]),
        (0, s.jsxs)("div", {
            className: x.kL,
            children: [
                (0, s.jsxs)(d.Ay, {
                    variant: F ? d.Z5.RELATIVE : d.Z5.OVERLAY,
                    children: [
                        !F && (0, s.jsx)(d.ns, { scrollPosition: a }),
                        F ? (0, s.jsx)(d.XQ, { icon: i.Z, onClick: U }) : (0, s.jsx)(d.T4, { icon: r.R }),
                        !F &&
                            (0, s.jsx)(u.A, {
                                className: Y,
                                tabs: P,
                                selectedTab: D,
                                onTabSelect: H,
                                onAvailableWidthChange: w,
                            }),
                        F &&
                            (0, s.jsx)(n.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: x.ov,
                                children: p.intl.format(p.t.zHdzqW, { query: q }),
                            }),
                        G &&
                            (0, s.jsx)(h.A, {
                                query: L,
                                placeholder: p.intl.string(p.t["5h0QOP"]),
                                onTextChange: N,
                                onClear: U,
                                onSubmit: k,
                                onCollapsedClick: V,
                                state: F ? b.GlobalDiscoverySearchBarState.DEFAULT : O,
                                onBlur: M,
                            }),
                    ],
                }),
                F
                    ? (0, s.jsx)(S.A, { loadId: e.current, onGuildCardClick: z, onGuildCardSeen: B })
                    : (0, s.jsx)(I.A, { selectedTab: D, onScroll: t, onGuildCardClick: z, onGuildCardSeen: B }),
            ],
        })
    );
}
