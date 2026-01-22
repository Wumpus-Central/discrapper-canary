n.d(t, {
    p: () => c,
});
var l = n(64700),
    a = n(488995),
    r = n(982339);
let i = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    s = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

function c(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: c, setSearchBarState: o } = e,
        d = l.useCallback(
            (e) => {
                if (!t) return;
                let l = Math.round(e);
                switch (c) {
                    case a.GlobalDiscoverySearchBarState.DEFAULT:
                        l < 20 &&
                            o(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case a.GlobalDiscoverySearchBarState.COLLAPSED:
                        l > i && o(a.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case a.GlobalDiscoverySearchBarState.FLOATING:
                        l > s && o(a.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, c, o],
        ),
        u = l.useCallback(() => {
            o(a.GlobalDiscoverySearchBarState.FLOATING);
        }, [o]),
        p = l.useCallback(() => {
            c === a.GlobalDiscoverySearchBarState.FLOATING && n && o(a.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, c, o]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: c === a.GlobalDiscoverySearchBarState.FLOATING ? r.b6 : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: p,
    };
}
