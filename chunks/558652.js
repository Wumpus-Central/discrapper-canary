n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(626135),
    o = n(113434),
    s = n(937797),
    c = n(264282),
    u = n(78606),
    d = n(710914),
    p = n(46140),
    f = n(981631),
    h = n(388032),
    g = n(872058);
let m = [];
function b() {
    let { enabled: e } = s.$d.useConfig({ location: p.dr.QUEST_HOME_DESKTOP }),
        [t, n] = i.useState(p.yq.SUGGESTED),
        [b, _] = i.useState(m),
        { quests: O, isFetchingCurrentQuests: E } = (0, o.bA)(
            o.e5.ALL,
            i.useMemo(
                () => ({
                    sortMethod: t,
                    filters: b,
                }),
                [t, b],
            ),
        ),
        y = i.useCallback(() => {
            _(m);
        }, []);
    return (
        i.useEffect(() => {
            e && a.default.track(f.rMx.QUEST_HOME_SORT_METHOD_CHANGED, { sort_method: t });
        }, [t, e]),
        i.useEffect(() => {
            e &&
                a.default.track(f.rMx.QUEST_HOME_FILTERS_CHANGED, {
                    filters: b.map((e) => e.filter),
                    num_quests_visible: O.length,
                });
        }, [b, e, O.length]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                e &&
                    (0, r.jsxs)("div", {
                        className: g.headingWrapper,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: "heading-lg/medium",
                                children: h.intl.string(h.t.giYD09),
                            }),
                            (0, r.jsxs)("div", {
                                className: g.headingControls,
                                children: [
                                    (0, r.jsx)(u.Z, {
                                        onChange: n,
                                        optionClassName: g.filterSortOption,
                                        selectedSortMethod: t,
                                    }),
                                    (0, r.jsx)(c.Z, {
                                        onChange: _,
                                        optionClassName: g.filterSortOption,
                                        selectedFilters: b,
                                    }),
                                ],
                            }),
                        ],
                    }),
                (0, r.jsx)(d.Z, {
                    quests: O,
                    isFetching: E,
                    hasFiltersApplied: b.length > 0,
                    onClearFilters: y,
                }),
            ],
        })
    );
}
