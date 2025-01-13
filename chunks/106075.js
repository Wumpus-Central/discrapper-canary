n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(979233),
    s = n(88693),
    o = n(611928),
    c = n(922122),
    d = n(680180),
    u = n(164991),
    h = n(444324),
    m = n(726115),
    p = n(859921),
    g = n(750910),
    f = n(28494),
    _ = n(29086),
    E = n(590771),
    I = n(273596),
    C = n(128449),
    N = n(49898),
    v = n(388032),
    S = n(608576);
function T() {
    let e = r.useRef((0, m.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: T } = (0, a.M)(),
        { tabs: A, selectedTab: b, setSelectedTab: Z } = (0, _.Y)(),
        x = (0, m.lg)(b),
        L = !C.MU.has(b),
        { searchQuery: P, onSearchTextChange: O, onClearSearch: y, onSearchSubmit: R, isSearchVisible: j } = (0, f.H)({ loadId: e.current }),
        D = p.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: w,
            onSearchBarBlur: k,
            tabsClassName: U
        } = (0, s.U)({
            isSearchBarVisible: L,
            isSearchBarEmpty: '' === P.trim(),
            searchBarState: D,
            setSearchBarState: (e) => p.Z.setState({ searchBarState: e })
        }),
        G = u.Z.useField('fetchedQuery'),
        B = r.useCallback(
            (e) => {
                Z(e), j && y();
            },
            [j, y, Z]
        ),
        V = r.useMemo(
            () =>
                j
                    ? A.filter((e) => {
                          let { id: t } = e;
                          return !C.MU.has(t);
                      })
                    : A,
            [A, j]
        ),
        H = r.useRef(new h.Z(x)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, g.H)({
            guildDiscoveryCardSeenManager: H.current,
            loadId: e.current
        });
    return (
        r.useEffect(() => {
            H.current.flushSeenGuilds(e.current);
        }, [x]),
        r.useEffect(() => {
            T();
        }, [b, T]),
        r.useEffect(() => {
            !j && u.Z.setState({ scrollPosition: null });
        }, [j]),
        (0, i.jsxs)('div', {
            className: S.container,
            children: [
                (0, i.jsxs)(o.ZP, {
                    variant: j ? o._6.RELATIVE : o._6.OVERLAY,
                    children: [
                        !j && (0, i.jsx)(o.z6, { scrollPosition: n }),
                        j
                            ? (0, i.jsx)(o.Cm, {
                                  icon: l.ArrowLargeLeftIcon,
                                  onClick: y
                              })
                            : (0, i.jsx)(o.aV, { icon: l.ServerIcon }),
                        !j &&
                            (0, i.jsx)(c.Z, {
                                className: U,
                                tabs: V,
                                selectedTab: j ? null : b,
                                onTabSelect: B,
                                onAvailableWidthChange: M
                            }),
                        j &&
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: S.searchResultsHeader,
                                children: v.intl.format(v.t.zHdzqa, { query: G })
                            }),
                        L &&
                            (0, i.jsx)(d.Z, {
                                query: P,
                                placeholder: v.intl.string(v.t['5h0QOD']),
                                onTextChange: O,
                                onClear: y,
                                onSubmit: R,
                                onCollapsedClick: w,
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
                          selectedTab: b,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
