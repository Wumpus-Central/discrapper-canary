var s = l(582128),
    i = l(488995),
    n = l(381645);
l.d(
    t,
    {},
    {
        p: function (e) {
            let { isSearchBarVisible: t, isSearchBarEmpty: l, searchBarState: a, setSearchBarState: r } = e,
                o = s.useCallback(
                    (e) => {
                        if (!t) return;
                        let s = Math.round(e);
                        switch (a) {
                            case i.Um.DEFAULT:
                                s < 20 && r(l ? i.Um.COLLAPSED : i.Um.FLOATING);
                                break;
                            case i.Um.COLLAPSED:
                                s > 236 && r(i.Um.DEFAULT);
                                break;
                            case i.Um.FLOATING:
                                s > 284 && r(i.Um.DEFAULT);
                        }
                    },
                    [l, t, a, r],
                ),
                c = s.useCallback(() => {
                    r(i.Um.FLOATING);
                }, [r]),
                d = s.useCallback(() => {
                    a === i.Um.FLOATING && l && r(i.Um.COLLAPSED);
                }, [l, a, r]);
            return {
                onTabsAvailableWidthChange: o,
                tabsClassName: a === i.Um.FLOATING ? n.b6 : void 0,
                onCollapsedSearchBarClick: c,
                onSearchBarBlur: d,
            };
        },
    },
);
