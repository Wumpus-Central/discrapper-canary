a.d(t, { p: () => o });
var n = a(64700),
    i = a(488995),
    l = a(295890);
let s = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    r = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: a, searchBarState: o, setSearchBarState: c } = e,
        d = n.useCallback(
            (e) => {
                if (!t) return;
                let n = Math.round(e);
                switch (o) {
                    case i.GlobalDiscoverySearchBarState.DEFAULT:
                        n < 20 &&
                            c(a ? i.GlobalDiscoverySearchBarState.COLLAPSED : i.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case i.GlobalDiscoverySearchBarState.COLLAPSED:
                        n > s && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case i.GlobalDiscoverySearchBarState.FLOATING:
                        n > r && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [a, t, o, c],
        ),
        u = n.useCallback(() => {
            c(i.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        m = n.useCallback(() => {
            o === i.GlobalDiscoverySearchBarState.FLOATING && a && c(i.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [a, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === i.GlobalDiscoverySearchBarState.FLOATING ? l.b6 : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: m,
    };
}
