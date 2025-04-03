n.d(t, { Z: () => S }), n(566702);
var r = n(200651),
    i = n(192379),
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
    N = n(273596),
    y = n(128449),
    I = n(49898),
    v = n(388032),
    C = n(398075);
function S() {
    let e = i.useRef((0, g.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: S } = (0, a.M)(),
        { tabs: T, selectedTab: P, setSelectedTab: j } = (0, E.Y)(),
        A = (0, g.lg)(P),
        Z = !y.MU.has(P),
        { searchQuery: x, onSearchTextChange: L, onClearSearch: w, onSearchSubmit: R, isSearchVisible: D } = (0, _.H)({ loadId: e.current }),
        { enabled: k } = (0, p.W)({ location: 'global_discovery_header_bar' }),
        M = m.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: U,
            onCollapsedSearchBarClick: G,
            onSearchBarBlur: W,
            tabsClassName: V
        } = (0, o.U)({
            isSearchBarVisible: Z,
            isSearchBarEmpty: '' === x.trim(),
            searchBarState: M,
            setSearchBarState: (e) => m.Z.setState({ searchBarState: e })
        }),
        B = h.Z.useField('fetchedQuery'),
        H = i.useCallback(
            (e) => {
                j(e), D && w();
            },
            [D, w, j]
        ),
        F = i.useMemo(
            () =>
                D
                    ? T.filter((e) => {
                          let { id: t } = e;
                          return !y.MU.has(t);
                      })
                    : T,
            [T, D]
        ),
        z = i.useRef(new f.Z(A)),
        { onGuildCardSeen: Y, onGuildCardClick: K } = (0, b.H)({
            guildDiscoveryCardSeenManager: z.current,
            loadId: e.current
        });
    return (
        i.useEffect(() => {
            z.current.flushSeenGuilds(e.current);
        }, [A]),
        i.useEffect(() => {
            S();
        }, [P, S]),
        i.useEffect(() => {
            D || h.Z.setState({ scrollPosition: null });
        }, [D]),
        (0, r.jsxs)('div', {
            className: C.container,
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
                                      onClick: w
                                  }),
                              D &&
                                  (0, r.jsx)(l.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      className: C.searchResultsHeader,
                                      children: v.NW.format(v.t.zHdzqa, { query: B })
                                  }),
                              Z &&
                                  (0, r.jsx)(d.Z, {
                                      query: x,
                                      placeholder: v.NW.string(v.t['5h0QOD']),
                                      onTextChange: L,
                                      onClear: w,
                                      onSubmit: R,
                                      onCollapsedClick: G,
                                      state: D ? I.GlobalDiscoverySearchBarState.DEFAULT : M,
                                      onBlur: W
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
                                        onClick: w
                                    })
                                  : (0, r.jsx)(s.aV, { icon: l.QTo }),
                              !D &&
                                  (0, r.jsx)(u.Z, {
                                      className: V,
                                      tabs: F,
                                      selectedTab: D ? null : P,
                                      onTabSelect: H,
                                      onAvailableWidthChange: U
                                  }),
                              D &&
                                  (0, r.jsx)(l.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      className: C.searchResultsHeader,
                                      children: v.NW.format(v.t.zHdzqa, { query: B })
                                  }),
                              Z &&
                                  (0, r.jsx)(d.Z, {
                                      query: x,
                                      placeholder: v.NW.string(v.t['5h0QOD']),
                                      onTextChange: L,
                                      onClear: w,
                                      onSubmit: R,
                                      onCollapsedClick: G,
                                      state: D ? I.GlobalDiscoverySearchBarState.DEFAULT : M,
                                      onBlur: W
                                  })
                          ]
                      }),
                D
                    ? (0, r.jsx)(N.Z, {
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
