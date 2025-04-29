n.d(t, { Z: () => N }), n(781311);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(114851),
    o = n(88693),
    s = n(611928),
    c = n(763433),
    u = n(922122),
    d = n(680180),
    p = n(822857),
    h = n(164991),
    f = n(444324),
    g = n(726115),
    m = n(859921),
    b = n(750910),
    _ = n(28494),
    E = n(29086),
    O = n(590771),
    y = n(273596),
    I = n(128449),
    v = n(49898),
    C = n(388032),
    S = n(398075);
function N() {
    let e = i.useRef((0, g.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: N } = (0, a.M)(),
        { tabs: T, selectedTab: P, setSelectedTab: j } = (0, E.Y)(),
        A = (0, g.lg)(P),
        Z = !I.MU.has(P),
        { searchQuery: x, onSearchTextChange: w, onClearSearch: L, onSearchSubmit: R, isSearchVisible: D } = (0, _.H)({ loadId: e.current }),
        { enabled: k } = (0, p.W)({ location: 'global_discovery_header_bar' }),
        M = m.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: U,
            onCollapsedSearchBarClick: G,
            onSearchBarBlur: V,
            tabsClassName: B
        } = (0, o.U)({
            isSearchBarVisible: Z,
            isSearchBarEmpty: '' === x.trim(),
            searchBarState: M,
            setSearchBarState: (e) => m.Z.setState({ searchBarState: e })
        }),
        H = h.Z.useField('fetchedQuery'),
        F = i.useCallback(
            (e) => {
                j(e), D && L();
            },
            [D, L, j]
        ),
        z = i.useMemo(
            () =>
                D
                    ? T.filter((e) => {
                          let { id: t } = e;
                          return !I.MU.has(t);
                      })
                    : T,
            [T, D]
        ),
        W = i.useRef(new f.Z(A)),
        { onGuildCardSeen: Y, onGuildCardClick: K } = (0, b.H)({
            guildDiscoveryCardSeenManager: W.current,
            loadId: e.current
        });
    return (
        i.useEffect(() => {
            W.current.flushSeenGuilds(e.current);
        }, [A]),
        i.useEffect(() => {
            N();
        }, [P, N]),
        i.useEffect(() => {
            D || h.Z.setState({ scrollPosition: null });
        }, [D]),
        (0, r.jsxs)('div', {
            className: S.container,
            children: [
                k
                    ? (0, r.jsxs)(c.a, {
                          selectedTabId: P,
                          handleTransition: j,
                          tabs: T,
                          state: D ? c.r.SEARCH : c.r.DEFAULT,
                          icon: l.QTo,
                          onAvailableWidthChange: U,
                          children: [
                              !D && (0, r.jsx)(s.z6, { scrollPosition: n }),
                              D &&
                                  (0, r.jsx)(s.Cm, {
                                      icon: l.j9r,
                                      onClick: L
                                  }),
                              D &&
                                  (0, r.jsx)(l.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      className: S.searchResultsHeader,
                                      children: C.intl.format(C.t.zHdzqa, { query: H })
                                  }),
                              Z &&
                                  (0, r.jsx)(d.Z, {
                                      query: x,
                                      placeholder: C.intl.string(C.t['5h0QOD']),
                                      onTextChange: w,
                                      onClear: L,
                                      onSubmit: R,
                                      onCollapsedClick: G,
                                      state: D ? v.GlobalDiscoverySearchBarState.DEFAULT : M,
                                      onBlur: V
                                  })
                          ]
                      })
                    : (0, r.jsxs)(s.ZP, {
                          variant: D ? s._6.RELATIVE : s._6.OVERLAY,
                          children: [
                              !D && (0, r.jsx)(s.z6, { scrollPosition: n }),
                              D
                                  ? (0, r.jsx)(s.Cm, {
                                        icon: l.j9r,
                                        onClick: L
                                    })
                                  : (0, r.jsx)(s.aV, { icon: l.QTo }),
                              !D &&
                                  (0, r.jsx)(u.Z, {
                                      className: B,
                                      tabs: z,
                                      selectedTab: D ? null : P,
                                      onTabSelect: F,
                                      onAvailableWidthChange: U
                                  }),
                              D &&
                                  (0, r.jsx)(l.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      className: S.searchResultsHeader,
                                      children: C.intl.format(C.t.zHdzqa, { query: H })
                                  }),
                              Z &&
                                  (0, r.jsx)(d.Z, {
                                      query: x,
                                      placeholder: C.intl.string(C.t['5h0QOD']),
                                      onTextChange: w,
                                      onClear: L,
                                      onSubmit: R,
                                      onCollapsedClick: G,
                                      state: D ? v.GlobalDiscoverySearchBarState.DEFAULT : M,
                                      onBlur: V
                                  })
                          ]
                      }),
                D
                    ? (0, r.jsx)(y.Z, {
                          loadId: e.current,
                          onGuildCardClick: K,
                          onGuildCardSeen: Y
                      })
                    : (0, r.jsx)(O.Z, {
                          selectedTab: P,
                          onScroll: t,
                          onGuildCardClick: K,
                          onGuildCardSeen: Y
                      })
            ]
        })
    );
}
