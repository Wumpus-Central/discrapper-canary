"use strict";
n.d(t, { p: () => o });
var i = n(64700),
    a = n(488995),
    s = n(295890);
let l = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    r = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n, searchBarState: o, setSearchBarState: c } = e,
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (o) {
                    case a.GlobalDiscoverySearchBarState.DEFAULT:
                        i < 20 &&
                            c(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
                        break;
                    case a.GlobalDiscoverySearchBarState.COLLAPSED:
                        i > l && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                        break;
                    case a.GlobalDiscoverySearchBarState.FLOATING:
                        i > r && c(a.GlobalDiscoverySearchBarState.DEFAULT);
                }
            },
            [n, t, o, c],
        ),
        u = i.useCallback(() => {
            c(a.GlobalDiscoverySearchBarState.FLOATING);
        }, [c]),
        h = i.useCallback(() => {
            o === a.GlobalDiscoverySearchBarState.FLOATING && n && c(a.GlobalDiscoverySearchBarState.COLLAPSED);
        }, [n, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === a.GlobalDiscoverySearchBarState.FLOATING ? s.b6 : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h,
    };
}
