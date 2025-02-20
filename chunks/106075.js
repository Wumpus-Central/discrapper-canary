n.d(t, { Z: () => I }), n(566702);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(979233),
    a = n(88693),
    s = n(611928),
    c = n(922122),
    u = n(680180),
    d = n(164991),
    p = n(444324),
    h = n(726115),
    g = n(859921),
    f = n(750910),
    m = n(28494),
    b = n(29086),
    _ = n(590771),
    E = n(273596),
    O = n(128449),
    N = n(49898),
    v = n(388032),
    y = n(881229);
function I() {
    let e = i.useRef((0, h.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: I } = (0, o.M)(),
        { tabs: C, selectedTab: S, setSelectedTab: T } = (0, b.Y)(),
        P = (0, h.lg)(S),
        j = !O.MU.has(S),
        { searchQuery: A, onSearchTextChange: Z, onClearSearch: x, onSearchSubmit: L, isSearchVisible: w } = (0, m.H)({ loadId: e.current }),
        R = g.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: D,
            onCollapsedSearchBarClick: k,
            onSearchBarBlur: M,
            tabsClassName: U
        } = (0, a.U)({
            isSearchBarVisible: j,
            isSearchBarEmpty: '' === A.trim(),
            searchBarState: R,
            setSearchBarState: (e) => g.Z.setState({ searchBarState: e })
        }),
        G = d.Z.useField('fetchedQuery'),
        W = i.useCallback(
            (e) => {
                T(e), w && x();
            },
            [w, x, T]
        ),
        V = i.useMemo(
            () =>
                w
                    ? C.filter((e) => {
                          let { id: t } = e;
                          return !O.MU.has(t);
                      })
                    : C,
            [C, w]
        ),
        B = i.useRef(new p.Z(P)),
        { onGuildCardSeen: H, onGuildCardClick: F } = (0, f.H)({
            guildDiscoveryCardSeenManager: B.current,
            loadId: e.current
        });
    return (
        i.useEffect(() => {
            B.current.flushSeenGuilds(e.current);
        }, [P]),
        i.useEffect(() => {
            I();
        }, [S, I]),
        i.useEffect(() => {
            w || d.Z.setState({ scrollPosition: null });
        }, [w]),
        (0, r.jsxs)('div', {
            className: y.container,
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
                                tabs: V,
                                selectedTab: w ? null : S,
                                onTabSelect: W,
                                onAvailableWidthChange: D
                            }),
                        w &&
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: y.searchResultsHeader,
                                children: v.NW.format(v.t.zHdzqa, { query: G })
                            }),
                        j &&
                            (0, r.jsx)(u.Z, {
                                query: A,
                                placeholder: v.NW.string(v.t['5h0QOD']),
                                onTextChange: Z,
                                onClear: x,
                                onSubmit: L,
                                onCollapsedClick: k,
                                state: w ? N.GlobalDiscoverySearchBarState.DEFAULT : R,
                                onBlur: M
                            })
                    ]
                }),
                w
                    ? (0, r.jsx)(E.Z, {
                          loadId: e.current,
                          onGuildCardClick: F,
                          onGuildCardSeen: H
                      })
                    : (0, r.jsx)(_.Z, {
                          selectedTab: S,
                          onScroll: t,
                          onGuildCardClick: F,
                          onGuildCardSeen: H
                      })
            ]
        })
    );
}
