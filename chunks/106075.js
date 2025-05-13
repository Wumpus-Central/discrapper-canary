n.d(t, { Z: () => C }), n(781311);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(114851),
    o = n(88693),
    s = n(611928),
    c = (n(763433), n(922122)),
    u = n(680180),
    d = n(164991),
    p = n(444324),
    h = n(726115),
    f = n(859921),
    g = n(750910),
    m = n(28494),
    b = n(29086),
    _ = n(590771),
    E = n(273596),
    O = n(128449),
    y = n(49898),
    I = n(388032),
    v = n(398075);
function C() {
    let e = i.useRef((0, h.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: C } = (0, a.M)(),
        { tabs: S, selectedTab: N, setSelectedTab: T } = (0, b.Y)(),
        P = (0, h.lg)(N),
        j = !O.MU.has(N),
        { searchQuery: A, onSearchTextChange: Z, onClearSearch: x, onSearchSubmit: L, isSearchVisible: w } = (0, m.H)({ loadId: e.current }),
        R = f.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: D,
            onCollapsedSearchBarClick: k,
            onSearchBarBlur: M,
            tabsClassName: U
        } = (0, o.U)({
            isSearchBarVisible: j,
            isSearchBarEmpty: '' === A.trim(),
            searchBarState: R,
            setSearchBarState: (e) => f.Z.setState({ searchBarState: e })
        }),
        G = d.Z.useField('fetchedQuery'),
        V = i.useCallback(
            (e) => {
                T(e), w && x();
            },
            [w, x, T]
        ),
        B = i.useMemo(
            () =>
                w
                    ? S.filter((e) => {
                          let { id: t } = e;
                          return !O.MU.has(t);
                      })
                    : S,
            [S, w]
        ),
        H = i.useRef(new p.Z(P)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, g.H)({
            guildDiscoveryCardSeenManager: H.current,
            loadId: e.current
        });
    return (
        i.useEffect(() => {
            H.current.flushSeenGuilds(e.current);
        }, [P]),
        i.useEffect(() => {
            C();
        }, [N, C]),
        i.useEffect(() => {
            w || d.Z.setState({ scrollPosition: null });
        }, [w]),
        (0, r.jsxs)('div', {
            className: v.container,
            children: [
                (0, r.jsxs)(s.ZP, {
                    variant: w ? s._6.RELATIVE : s._6.OVERLAY,
                    children: [
                        !w && (0, r.jsx)(s.z6, { scrollPosition: n }),
                        w
                            ? (0, r.jsx)(s.Cm, {
                                  icon: l.j9r,
                                  onClick: x
                              })
                            : (0, r.jsx)(s.aV, { icon: l.QTo }),
                        !w &&
                            (0, r.jsx)(c.Z, {
                                className: U,
                                tabs: B,
                                selectedTab: w ? null : N,
                                onTabSelect: V,
                                onAvailableWidthChange: D
                            }),
                        w &&
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: v.searchResultsHeader,
                                children: I.intl.format(I.t.zHdzqa, { query: G })
                            }),
                        j &&
                            (0, r.jsx)(u.Z, {
                                query: A,
                                placeholder: I.intl.string(I.t['5h0QOD']),
                                onTextChange: Z,
                                onClear: x,
                                onSubmit: L,
                                onCollapsedClick: k,
                                state: w ? y.GlobalDiscoverySearchBarState.DEFAULT : R,
                                onBlur: M
                            })
                    ]
                }),
                w
                    ? (0, r.jsx)(E.Z, {
                          loadId: e.current,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
                    : (0, r.jsx)(_.Z, {
                          selectedTab: N,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
