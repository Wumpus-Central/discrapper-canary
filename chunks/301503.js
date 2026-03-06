n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(178629),
    s = n(770472),
    o = n(737823),
    d = (n(153527), n(876622)),
    c = n(521974),
    u = n(282026),
    A = n(881973),
    h = n(965660),
    _ = n(601193),
    m = n(202575),
    g = n(19925),
    p = n(689817),
    E = n(38894),
    I = n(299579),
    f = n(324580),
    C = n(488995),
    T = n(985018),
    N = n(625201);
function S() {
    let e = r.useRef((0, h.YP)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: S } = (0, a.G)(),
        { tabs: x, selectedTab: v, setSelectedTab: y } = (0, p.f)(),
        b = (0, h.Ub)(v),
        O = !f.R0.has(v),
        {
            searchQuery: L,
            onSearchTextChange: R,
            onClearSearch: P,
            onSearchSubmit: j,
            isSearchVisible: D,
        } = (0, g.X)({ loadId: e.current }),
        M = _.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: w,
            onCollapsedSearchBarClick: U,
            onSearchBarBlur: G,
            tabsClassName: k,
        } = (0, s.p)({
            isSearchBarVisible: O,
            isSearchBarEmpty: "" === L.trim(),
            searchBarState: M,
            setSearchBarState: (e) => _.A.setState({ searchBarState: e }),
        }),
        V = u.A.useField("fetchedQuery"),
        B = r.useCallback(
            (e) => {
                y(e), D && P();
            },
            [D, P, y],
        ),
        H = r.useMemo(
            () =>
                D
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !f.R0.has(t);
                      })
                    : x,
            [x, D],
        ),
        F = r.useRef(new A.A(b)),
        { onGuildCardSeen: Y, onGuildCardClick: W } = (0, m.p)({
            guildDiscoveryCardSeenManager: F.current,
            loadId: e.current,
        });
    return (
        r.useEffect(() => {
            F.current.flushSeenGuilds(e.current);
        }, [b]),
        r.useEffect(() => {
            S();
        }, [v, S]),
        r.useEffect(() => {
            D || u.A.setState({ scrollPosition: null });
        }, [D]),
        (0, i.jsxs)("div", {
            className: N.kL,
            children: [
                (0, i.jsxs)(o.Ay, {
                    variant: D ? o.Z5.RELATIVE : o.Z5.OVERLAY,
                    children: [
                        !D && (0, i.jsx)(o.ns, { scrollPosition: n }),
                        D ? (0, i.jsx)(o.XQ, { icon: l.Zge, onClick: P }) : (0, i.jsx)(o.T4, { icon: l.RR9 }),
                        !D &&
                            (0, i.jsx)(d.A, {
                                className: k,
                                tabs: H,
                                selectedTab: v,
                                onTabSelect: B,
                                onAvailableWidthChange: w,
                            }),
                        D &&
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                className: N.ov,
                                children: T.intl.format(T.t.zHdzqW, { query: V }),
                            }),
                        O &&
                            (0, i.jsx)(c.A, {
                                query: L,
                                placeholder: T.intl.string(T.t["5h0QOP"]),
                                onTextChange: R,
                                onClear: P,
                                onSubmit: j,
                                onCollapsedClick: U,
                                state: D ? C.GlobalDiscoverySearchBarState.DEFAULT : M,
                                onBlur: G,
                            }),
                    ],
                }),
                D
                    ? (0, i.jsx)(I.A, { loadId: e.current, onGuildCardClick: W, onGuildCardSeen: Y })
                    : (0, i.jsx)(E.A, { selectedTab: v, onScroll: t, onGuildCardClick: W, onGuildCardSeen: Y }),
            ],
        })
    );
}
