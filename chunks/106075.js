n.d(t, { Z: () => S });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(979233),
    s = n(88693),
    o = n(611928),
    d = n(922122),
    c = n(680180),
    u = n(164991),
    h = n(444324),
    m = n(726115),
    p = n(859921),
    g = n(750910),
    _ = n(28494),
    f = n(29086),
    E = n(590771),
    I = n(273596),
    C = n(128449),
    N = n(49898),
    v = n(388032),
    T = n(607495);
function S() {
    let e = l.useRef((0, m.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: S } = (0, a.M)(),
        { tabs: A, selectedTab: Z, setSelectedTab: x } = (0, f.Y)(),
        b = (0, m.lg)(Z),
        L = !C.MU.has(Z),
        { searchQuery: y, onSearchTextChange: O, onClearSearch: P, onSearchSubmit: R, isSearchVisible: j } = (0, _.H)({ loadId: e.current }),
        D = p.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: w,
            onCollapsedSearchBarClick: M,
            onSearchBarBlur: k,
            tabsClassName: U
        } = (0, s.U)({
            isSearchBarVisible: L,
            isSearchBarEmpty: '' === y.trim(),
            searchBarState: D,
            setSearchBarState: (e) => p.Z.setState({ searchBarState: e })
        }),
        G = u.Z.useField('fetchedQuery'),
        B = l.useCallback(
            (e) => {
                x(e), j && P();
            },
            [j, P, x]
        ),
        V = l.useMemo(
            () =>
                j
                    ? A.filter((e) => {
                          let { id: t } = e;
                          return !C.MU.has(t);
                      })
                    : A,
            [A, j]
        ),
        H = l.useRef(new h.Z(b)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, g.H)({
            guildDiscoveryCardSeenManager: H.current,
            loadId: e.current
        });
    return (
        l.useEffect(() => {
            H.current.flushSeenGuilds(e.current);
        }, [b]),
        l.useEffect(() => {
            S();
        }, [Z, S]),
        l.useEffect(() => {
            j || u.Z.setState({ scrollPosition: null });
        }, [j]),
        (0, i.jsxs)('div', {
            className: T.container,
            children: [
                (0, i.jsxs)(o.ZP, {
                    variant: j ? o._6.RELATIVE : o._6.OVERLAY,
                    children: [
                        !j && (0, i.jsx)(o.z6, { scrollPosition: n }),
                        j
                            ? (0, i.jsx)(o.Cm, {
                                  icon: r.j9r,
                                  onClick: P
                              })
                            : (0, i.jsx)(o.aV, { icon: r.QTo }),
                        !j &&
                            (0, i.jsx)(d.Z, {
                                className: U,
                                tabs: V,
                                selectedTab: j ? null : Z,
                                onTabSelect: B,
                                onAvailableWidthChange: w
                            }),
                        j &&
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: T.searchResultsHeader,
                                children: v.intl.format(v.t.zHdzqa, { query: G })
                            }),
                        L &&
                            (0, i.jsx)(c.Z, {
                                query: y,
                                placeholder: v.intl.string(v.t['5h0QOD']),
                                onTextChange: O,
                                onClear: P,
                                onSubmit: R,
                                onCollapsedClick: M,
                                state: j ? N.GlobalDiscoverySearchBarState.DEFAULT : D,
                                onBlur: k
                            })
                    ]
                }),
                j
                    ? (0, i.jsx)(I.Z, {
                          loadId: e.current,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
                    : (0, i.jsx)(E.Z, {
                          selectedTab: Z,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
