l.d(t, { p: () => o });
var i = l(582128),
    s = l(488995),
    n = l(381645);
let a = 20 + s.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - s.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    r = 20 + s.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + s.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: l, searchBarState: o, setSearchBarState: c } = e,
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (o) {
                    case s.GlobalDiscoverySearchBarState.DEFAULT:
                        i < 20 &&
                            c(l ? s.GlobalDiscoverySearchBarState.COLLAPSED : s.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case s.GlobalDiscoverySearchBarState.COLLAPSED:
                        i > a && c(s.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case s.GlobalDiscoverySearchBarState.FLOATING:
                        i > r && c(s.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [l, t, o, c],
        ),
        u = i.useCallback(() => {
            c(s.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        h = i.useCallback(() => {
            o === s.GlobalDiscoverySearchBarState.FLOATING && l && c(s.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [l, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === s.GlobalDiscoverySearchBarState.FLOATING ? n.b6 : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h,
    };
}
