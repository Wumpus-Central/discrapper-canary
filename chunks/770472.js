var n = l(582128),
    s = l(488995),
    i = l(381645);
l.d(
    t,
    {},
    {
        p: function (e) {
            let { isSearchBarVisible: t, isSearchBarEmpty: l, searchBarState: a, setSearchBarState: r } = e,
                o = n.useCallback(
                    (e) => {
                        if (!t) return;
                        let n = Math.round(e);
                        switch (a) {
                            case s.Um.DEFAULT:
                                n < 20 && r(l ? s.Um.COLLAPSED : s.Um.FLOATING);
                                break;
                            case s.Um.COLLAPSED:
                                n > 236 && r(s.Um.DEFAULT);
                                break;
                            case s.Um.FLOATING:
                                n > 284 && r(s.Um.DEFAULT);
                        }
                    },
                    [l, t, a, r],
                ),
                c = n.useCallback(() => {
                    r(s.Um.FLOATING);
                }, [r]),
                d = n.useCallback(() => {
                    a === s.Um.FLOATING && l && r(s.Um.COLLAPSED);
                }, [l, a, r]);
            return {
                onTabsAvailableWidthChange: o,
                tabsClassName: a === s.Um.FLOATING ? i.b6 : void 0,
                onCollapsedSearchBarClick: c,
                onSearchBarBlur: d,
            };
        },
    },
);
