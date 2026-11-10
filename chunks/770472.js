var i = l(582128),
    n = l(488995),
    s = l(381645);
l.d(
    t,
    {},
    {
        p: function (e) {
            let { isSearchBarVisible: t, isSearchBarEmpty: l, searchBarState: a, setSearchBarState: r } = e,
                o = i.useCallback(
                    (e) => {
                        if (!t) return;
                        let i = Math.round(e);
                        switch (a) {
                            case n.Um.DEFAULT:
                                i < 20 && r(l ? n.Um.COLLAPSED : n.Um.FLOATING);
                                break;
                            case n.Um.COLLAPSED:
                                i > 236 && r(n.Um.DEFAULT);
                                break;
                            case n.Um.FLOATING:
                                i > 284 && r(n.Um.DEFAULT);
                        }
                    },
                    [l, t, a, r],
                ),
                c = i.useCallback(() => {
                    r(n.Um.FLOATING);
                }, [r]),
                d = i.useCallback(() => {
                    a === n.Um.FLOATING && l && r(n.Um.COLLAPSED);
                }, [l, a, r]);
            return {
                onTabsAvailableWidthChange: o,
                tabsClassName: a === n.Um.FLOATING ? s.b6 : void 0,
                onCollapsedSearchBarClick: c,
                onSearchBarBlur: d,
            };
        },
    },
);
