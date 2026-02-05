r.d(t, { A: () => y }), r(321073);
var s = r(627968),
    n = r(64700),
    l = r(397927),
    a = r(309010),
    i = r(203982),
    o = r(822382),
    u = r(771650),
    c = r(753806),
    d = r(272444),
    h = r(806595),
    _ = r(949759),
    S = r(65600),
    E = r(145331),
    g = r(835121),
    p = r(443486),
    f = r(768570),
    A = r(652215),
    m = r(985018),
    R = r(935606);
function y(e) {
    let { resultsState: t, searchContext: r, selectedChannel: y, setSearchQuery: T } = e,
        { autocompletes: x, mode: I } = t,
        L = (0, g.A)({ autocompletes: x, mode: I }),
        b = (0, p.A)({ setSearchQuery: T, searchContext: r, mode: I }),
        N = (e) => {
            let { searchEverywhere: t } = e;
            i._.dispatch(A.jej.PERFORM_SEARCH, { searchEverywhere: t, searchQuerySource: f.Q_.SEARCH_POPOUT });
        },
        v = (e) => {
            let {
                    autocompleteCount: t,
                    selectedIndex: s,
                    searchAutocompleteSelectAction: n,
                    selectedAutocomplete: l,
                    selectedAutocompleteGroup: i,
                } = e,
                d = I.type,
                h = I.filter,
                { token: _, group: g } = l,
                p = null != g && (0, u.If)(g) ? g : null,
                f = _ ?? h ?? p,
                m = l.channel,
                R = f === A.LWr.FILTER_IN && null != m && m.id === a.A.getChannelId(),
                y = (0, o.bS)(r);
            (0, E.kc)({
                searchContext: r,
                searchQuery: S.A.getSearchResultsQuery(y),
                searchQueryString: c.A.getSearchInputText(r),
                searchTokenType: f,
                searchAutocompleteGroup: i,
                searchAutocompleteMode: I,
                searchAutocompleteResultIndex: s,
                searchAutocompleteTotalResults: t,
                isSearchFilterPrefix: d === A.o$q.EMPTY,
                isSearchFilterAnswer: d === A.o$q.FILTER,
                isSearchFilterComplete: d === A.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: R,
                searchAutocompleteSelectAction: n,
            });
        },
        C = n.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    n = t ? m.intl.string(m.t.diOL4i) : m.intl.string(m.t["M1tf+7"]);
                return (0, _.wE)(h.$.ROW, {
                    icon: (0, s.jsx)(l.RgP, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: R.Fx,
                    }),
                    label: (0, s.jsx)(d.bg, { label: n }),
                    sublabel: t
                        ? (0, s.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: m.intl.string(m.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => c.A.openSearchFiltersModal(r),
                });
            },
            [r],
        ),
        { items: F } = (0,
        {
            [A.o$q.EMPTY]: () => {
                let e = [];
                if (null != y && (0, o.Wg)(r) && r.type === A.I4_.DMS) {
                    let t = (0, d.lF)(y),
                        n = (0, _.wE)(h.$.ROW, {
                            icon: (0, s.jsx)(l.$p$, { size: "sm", color: "currentColor", className: R.Fx }),
                            label: (0, s.jsx)(d.bg, {
                                label: m.intl.format(m.t["VGEH/0"], { channelName: t }),
                                className: R.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return ((e) => {
                                    let { selectedChannel: t, searchAutocompleteSelectAction: s } = e;
                                    (0, E.rE)({ searchContext: r, searchAutocompleteSelectAction: s });
                                    let n = A.LWr.FILTER_IN,
                                        l = u.Ay[n],
                                        a = (0, o.Rt)(t);
                                    T({ query: `${l?.key ?? n.toString()} ${a}`, performSearch: !0, replace: !1 });
                                })({ selectedChannel: y, searchAutocompleteSelectAction: t });
                            },
                        });
                    e.push(n);
                }
                let t = [...b, C({ hasOtherSearchFiltersVisible: !0 })];
                e.push((0, _.wE)(h.$.GROUP, { rows: t, title: m.intl.string(m.t.UdhTtk) }));
                let n = e.length + b.length,
                    { autocompleteCount: a, autocompleteGroups: i } = L({
                        filterFn: (e) => e.group === A.x2k.HISTORY && e.results.length > 0,
                        getAutocompleteRowItem: (e) => {
                            let { result: t, modeType: s, group: i } = e,
                                o = (0, _.pu)({ modeType: s, result: t, group: i }),
                                u = (0, d.ge)({ result: t, group: i }),
                                { label: c, ariaLabel: S } = (0, d.AX)({
                                    value: t.text,
                                    avatarSize: l._3J.SIZE_16,
                                    iconSize: "xs",
                                });
                            return (0, _.wE)(h.$.ROW, {
                                icon: u,
                                label: c,
                                ariaLabel: m.intl.formatToPlainString(m.t.WoiGrV, { suggestion: S }),
                                resultText: o,
                                onSelect: (e) => {
                                    let { selectedIndex: t } = e;
                                    (0, E.oR)({
                                        searchContext: r,
                                        searchHistoryIndex: t - n,
                                        searchHistoryTotalResults: a,
                                    }),
                                        T({ query: o, performSearch: !0, replace: !1 });
                                },
                            });
                        },
                        getAutocompleteGroupItem: (e) => {
                            let { group: t, rows: n } = e,
                                l = (0, _.JU)(t),
                                a = t === A.x2k.HISTORY ? (0, s.jsx)(d.k8, { searchContext: r }) : null;
                            return (0, _.wE)(h.$.GROUP, { rows: n, title: l, trailingIcon: a });
                        },
                    });
                return a > 0 && e.push(...i), { items: e };
            },
            [A.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: n } = (0, d.AX)({ value: t.query, avatarSize: l._3J.SIZE_16, iconSize: "xs" }),
                        a = (0, _.wE)(h.$.ROW, {
                            icon: (0, s.jsx)(l.$p$, { size: "sm", color: "currentColor", className: R.Fx }),
                            label:
                                r.type === A.I4_.FAVORITES && (0, o.Eq)()
                                    ? (0, s.jsx)(d.bg, { label: m.intl.string(m.t["6RVtLA"]) })
                                    : (0, s.jsx)(d.bg, {
                                          label: m.intl.format(m.t.rCnaoo, { value: n }),
                                          className: R.YL,
                                      }),
                            ariaLabel: m.intl.formatToPlainString(m.t.rCnaoo, { value: t.query }),
                            onSelect: () => N({ searchEverywhere: !1 }),
                        });
                    if ((e.push(a), r.type === A.I4_.FAVORITES && (0, o.Eq)())) {
                        let t = (0, _.wE)(h.$.ROW, {
                            icon: (0, s.jsx)(l.$p$, { size: "sm", color: "currentColor", className: R.Fx }),
                            label: (0, s.jsx)(d.bg, { label: m.intl.string(m.t.FtSUxc) }),
                            onSelect: () => N({ searchEverywhere: !0 }),
                        });
                        e.push(t);
                    }
                }
                let { autocompleteCount: n, autocompleteGroups: a } = L({
                    filterFn: (e) =>
                        e.group !== A.x2k.DATES &&
                        e.group !== A.x2k.SEARCH_OPTIONS &&
                        e.group !== A.LWr.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        let { result: t, modeType: r, group: l } = e,
                            a = (0, _.pu)({ modeType: r, result: t, group: l }),
                            i = (0, d.ge)({ result: t, group: l }),
                            { label: o, ariaLabel: u } = (0, d.c$)(t),
                            c =
                                l === A.LWr.FILTER_FROM || l === A.LWr.FILTER_MENTIONS
                                    ? (0, s.jsx)(d.bj, { searchTokenType: l, answer: t.user?.username })
                                    : void 0;
                        return (0, _.wE)(h.$.ROW, {
                            icon: i,
                            label: o,
                            sublabel: c,
                            ariaLabel: u,
                            resultText: a,
                            onSelect: (e) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: s } = e;
                                v({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: s,
                                    selectedAutocomplete: t,
                                    selectedAutocompleteGroup: l,
                                    autocompleteCount: n,
                                }),
                                    T({ query: a, performSearch: !1, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            s = (0, _.JU)(t);
                        return (0, _.wE)(h.$.GROUP, { rows: r, title: s });
                    },
                });
                if (0 === n) {
                    let t = [...b, C({ hasOtherSearchFiltersVisible: !0 })];
                    e.push((0, _.wE)(h.$.GROUP, { rows: t, title: m.intl.string(m.t.UdhTtk) }));
                } else {
                    let t = C({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return n > 0 && e.push(...a), { items: e };
            },
            [A.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = L({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: r, modeType: s, group: n } = t,
                            l = (0, _.pu)({ modeType: s, result: r, group: n }),
                            a = (0, d._h)({ result: r, group: n }),
                            { label: i, ariaLabel: o } = (0, d.JK)(r);
                        return (0, _.wE)(h.$.ROW, {
                            icon: a,
                            label: i,
                            ariaLabel: o,
                            resultText: l,
                            onSelect: (t) => {
                                let { selectedIndex: s, searchAutocompleteSelectAction: a } = t;
                                v({
                                    selectedIndex: s,
                                    searchAutocompleteSelectAction: a,
                                    selectedAutocomplete: r,
                                    selectedAutocompleteGroup: n,
                                    autocompleteCount: e,
                                }),
                                    T({ query: l, performSearch: !0, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            s = (0, _.JU)(t);
                        return (0, _.wE)(h.$.GROUP, { rows: r, title: s });
                    },
                });
                return { items: [...t] };
            },
        }[I.type])(),
        O = n.useMemo(() => {
            let e = [];
            return (
                F.forEach((t) => {
                    switch (t.type) {
                        case h.$.ROW:
                            e.push(t);
                            break;
                        case h.$.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [F]);
    return { items: F, itemsData: O };
}
