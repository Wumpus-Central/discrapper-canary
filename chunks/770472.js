l.d(t, { p: () => o });
var s = l(64700),
    i = l(488995),
    a = l(295890);
let n = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    r = 20 + i.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + i.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: l, searchBarState: o, setSearchBarState: c } = e,
        d = s.useCallback(
            (e) => {
                if (!t) return;
                let s = Math.round(e);
                switch (o) {
                    case i.GlobalDiscoverySearchBarState.DEFAULT:
                        s < 20 &&
                            c(l ? i.GlobalDiscoverySearchBarState.COLLAPSED : i.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case i.GlobalDiscoverySearchBarState.COLLAPSED:
                        s > n && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case i.GlobalDiscoverySearchBarState.FLOATING:
                        s > r && c(i.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [l, t, o, c],
        ),
        u = s.useCallback(() => {
            c(i.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        h = s.useCallback(() => {
            o === i.GlobalDiscoverySearchBarState.FLOATING && l && c(i.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [l, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === i.GlobalDiscoverySearchBarState.FLOATING ? a.b6 : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h,
    };
}
