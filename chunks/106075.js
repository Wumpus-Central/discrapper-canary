n.d(t, { Z: () => C }), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(979233),
    s = n(88693),
    o = n(611928),
    c = (n(763433), n(175118)),
    u = n(680180),
    d = n(164991),
    p = n(444324),
    f = n(726115),
    m = n(859921),
    h = n(750910),
    g = n(28494),
    _ = n(29086),
    b = n(590771),
    E = n(273596),
    O = n(128449),
    I = n(49898),
    y = n(388032),
    v = n(301578);
function C() {
    let e = i.useRef((0, f.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: C } = (0, a.M)(),
        { tabs: S, selectedTab: T, setSelectedTab: N } = (0, _.Y)(),
        j = (0, f.lg)(T),
        P = !O.MU.has(T),
        {
            searchQuery: x,
            onSearchTextChange: A,
            onClearSearch: Z,
            onSearchSubmit: w,
            isSearchVisible: L,
        } = (0, g.H)({ loadId: e.current }),
        R = m.Z.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: D,
            onCollapsedSearchBarClick: M,
            onSearchBarBlur: k,
            tabsClassName: U,
        } = (0, s.U)({
            isSearchBarVisible: P,
            isSearchBarEmpty: "" === x.trim(),
            searchBarState: R,
            setSearchBarState: (e) => m.Z.setState({ searchBarState: e }),
        }),
        G = d.Z.useField("fetchedQuery"),
        B = i.useCallback(
            (e) => {
                N(e), L && Z();
            },
            [L, Z, N],
        ),
        H = i.useMemo(
            () =>
                L
                    ? S.filter((e) => {
                          let { id: t } = e;
                          return !O.MU.has(t);
                      })
                    : S,
            [S, L],
        ),
        V = i.useRef(new p.Z(j)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, h.H)({
            guildDiscoveryCardSeenManager: V.current,
            loadId: e.current,
        });
    return (
        i.useEffect(() => {
            V.current.flushSeenGuilds(e.current);
        }, [j]),
        i.useEffect(() => {
            C();
        }, [T, C]),
        i.useEffect(() => {
            L || d.Z.setState({ scrollPosition: null });
        }, [L]),
        (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsxs)(o.ZP, {
                    variant: L ? o._6.RELATIVE : o._6.OVERLAY,
                    children: [
                        !L && (0, r.jsx)(o.z6, { scrollPosition: n }),
                        L
                            ? (0, r.jsx)(o.Cm, {
                                  icon: l.j9r,
                                  onClick: Z,
                              })
                            : (0, r.jsx)(o.aV, { icon: l.QTo }),
                        !L &&
                            (0, r.jsx)(c.Z, {
                                className: U,
                                tabs: H,
                                selectedTab: L ? null : T,
                                onTabSelect: B,
                                onAvailableWidthChange: D,
                            }),
                        L &&
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                className: v.searchResultsHeader,
                                children: y.intl.format(y.t.zHdzqW, { query: G }),
                            }),
                        P &&
                            (0, r.jsx)(u.Z, {
                                query: x,
                                placeholder: y.intl.string(y.t["5h0QOP"]),
                                onTextChange: A,
                                onClear: Z,
                                onSubmit: w,
                                onCollapsedClick: M,
                                state: L ? I.GlobalDiscoverySearchBarState.DEFAULT : R,
                                onBlur: k,
                            }),
                    ],
                }),
                L
                    ? (0, r.jsx)(E.Z, {
                          loadId: e.current,
                          onGuildCardClick: z,
                          onGuildCardSeen: F,
                      })
                    : (0, r.jsx)(b.Z, {
                          selectedTab: T,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F,
                      }),
            ],
        })
    );
}
