n.d(t, { Z: () => S }), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(979233),
    o = n(88693),
    s = n(611928),
    c = (n(763433), n(922122)),
    u = n(680180),
    d = n(164991),
    p = n(444324),
    f = n(726115),
    h = n(859921),
    g = n(750910),
    m = n(28494),
    b = n(29086),
    _ = n(590771),
    O = n(273596),
    E = n(128449),
    y = n(49898),
    v = n(388032),
    I = n(301578);
function S() {
    let e = i.useRef((0, f.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: S } = (0, a.M)(),
        { tabs: C, selectedTab: T, setSelectedTab: N } = (0, b.Y)(),
        j = (0, f.lg)(T),
        P = !E.MU.has(T),
        {
            searchQuery: x,
            onSearchTextChange: A,
            onClearSearch: Z,
            onSearchSubmit: w,
            isSearchVisible: L,
        } = (0, m.H)({ loadId: e.current }),
        R = h.Z.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: D,
            onCollapsedSearchBarClick: k,
            onSearchBarBlur: M,
            tabsClassName: U,
        } = (0, o.U)({
            isSearchBarVisible: P,
            isSearchBarEmpty: "" === x.trim(),
            searchBarState: R,
            setSearchBarState: (e) => h.Z.setState({ searchBarState: e }),
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
                    ? C.filter((e) => {
                          let { id: t } = e;
                          return !E.MU.has(t);
                      })
                    : C,
            [C, L],
        ),
        V = i.useRef(new p.Z(j)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, g.H)({
            guildDiscoveryCardSeenManager: V.current,
            loadId: e.current,
        });
    return (
        i.useEffect(() => {
            V.current.flushSeenGuilds(e.current);
        }, [j]),
        i.useEffect(() => {
            S();
        }, [T, S]),
        i.useEffect(() => {
            L || d.Z.setState({ scrollPosition: null });
        }, [L]),
        (0, r.jsxs)("div", {
            className: I.container,
            children: [
                (0, r.jsxs)(s.ZP, {
                    variant: L ? s._6.RELATIVE : s._6.OVERLAY,
                    children: [
                        !L && (0, r.jsx)(s.z6, { scrollPosition: n }),
                        L
                            ? (0, r.jsx)(s.Cm, {
                                  icon: l.j9r,
                                  onClick: Z,
                              })
                            : (0, r.jsx)(s.aV, { icon: l.QTo }),
                        !L &&
                            (0, r.jsx)(c.Z, {
                                className: U,
                                tabs: H,
                                selectedTab: L ? null : T,
                                onTabSelect: B,
                                onAvailableWidthChange: D,
                            }),
                        L &&
                            (0, r.jsx)(l.X6q, {
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                className: I.searchResultsHeader,
                                children: v.intl.format(v.t.zHdzqa, { query: G }),
                            }),
                        P &&
                            (0, r.jsx)(u.Z, {
                                query: x,
                                placeholder: v.intl.string(v.t["5h0QOD"]),
                                onTextChange: A,
                                onClear: Z,
                                onSubmit: w,
                                onCollapsedClick: k,
                                state: L ? y.GlobalDiscoverySearchBarState.DEFAULT : R,
                                onBlur: M,
                            }),
                    ],
                }),
                L
                    ? (0, r.jsx)(O.Z, {
                          loadId: e.current,
                          onGuildCardClick: z,
                          onGuildCardSeen: F,
                      })
                    : (0, r.jsx)(_.Z, {
                          selectedTab: T,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F,
                      }),
            ],
        })
    );
}
