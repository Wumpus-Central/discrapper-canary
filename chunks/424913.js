r.d(t, { A: () => L }), r(321073);
var n = r(627968),
    s = r(64700),
    l = r(311907),
    a = r(397927),
    i = r(309010),
    o = r(351906),
    u = r(203982),
    c = r(822382),
    d = r(771650),
    h = r(753806),
    _ = r(272444),
    S = r(806595),
    E = r(949759),
    f = r(842716),
    g = r(65600),
    p = r(145331),
    A = r(835121),
    m = r(443486),
    R = r(768570),
    y = r(652215),
    T = r(985018),
    x = r(935606);
let I = [];
function L(e) {
    let { resultsState: t, searchContext: r, selectedChannel: L, setSearchQuery: N } = e,
        { autocompletes: b, mode: C } = t,
        v = (0, A.A)({ autocompletes: b, mode: C }),
        F = (0, m.A)({ setSearchQuery: N, searchContext: r, mode: C }),
        O = (0, l.yK)([o.A, i.A, f.A], () => {
            if (o.A.hidePersonalInformation) return I;
            let e = (0, c.Jl)(r, i.A);
            if (null == e) return I;
            let t = f.A.getHistory(e);
            if (null == t) return I;
            let n = new Set(),
                s = [];
            return (
                t.forEach((e) => {
                    let t = r.type === y.I4_.CHANNEL ? (0, c.EH)(e) : e;
                    "" === t || n.has(t) || (n.add(t), s.push(t));
                }),
                s
            );
        }),
        j = (e) => {
            let { searchEverywhere: t } = e;
            u._.dispatch(y.jej.PERFORM_SEARCH, { searchEverywhere: t, searchQuerySource: R.Q_.SEARCH_POPOUT });
        },
        k = (e) => {
            let {
                    autocompleteCount: t,
                    selectedIndex: n,
                    searchAutocompleteSelectAction: s,
                    selectedAutocomplete: l,
                    selectedAutocompleteGroup: a,
                } = e,
                o = C.type,
                u = C.filter,
                { token: _, group: S } = l,
                E = null != S && (0, d.If)(S) ? S : null,
                f = _ ?? u ?? E,
                A = l.channel,
                m = f === y.LWr.FILTER_IN && null != A && A.id === i.A.getChannelId(),
                R = (0, c.bS)(r);
            (0, p.kc)({
                searchContext: r,
                searchQuery: g.A.getSearchResultsQuery(R),
                searchQueryString: h.A.getSearchInputText(r),
                searchTokenType: f,
                searchAutocompleteGroup: a,
                searchAutocompleteMode: C,
                searchAutocompleteResultIndex: n,
                searchAutocompleteTotalResults: t,
                isSearchFilterPrefix: o === y.o$q.EMPTY,
                isSearchFilterAnswer: o === y.o$q.FILTER,
                isSearchFilterComplete: o === y.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: m,
                searchAutocompleteSelectAction: s,
            });
        },
        W = s.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    s = t ? T.intl.string(T.t.diOL4i) : T.intl.string(T.t["M1tf+7"]);
                return (0, E.wE)(S.$.ROW, {
                    icon: (0, n.jsx)(a.RgP, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: x.Fx,
                    }),
                    label: (0, n.jsx)(_.bg, { label: s }),
                    sublabel: t
                        ? (0, n.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: T.intl.string(T.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => h.A.openSearchFiltersModal(r),
                });
            },
            [r],
        ),
        { items: M } = (0,
        {
            [y.o$q.EMPTY]: () => {
                let e = [];
                if (null != L && (0, c.Wg)(r) && r.type === y.I4_.DMS) {
                    let t = (0, _.lF)(L),
                        s = (0, E.wE)(S.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: x.Fx }),
                            label: (0, n.jsx)(_.bg, {
                                label: T.intl.format(T.t["VGEH/0"], { channelName: t }),
                                className: x.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return ((e) => {
                                    let { selectedChannel: t, searchAutocompleteSelectAction: n } = e;
                                    (0, p.rE)({ searchContext: r, searchAutocompleteSelectAction: n });
                                    let s = y.LWr.FILTER_IN,
                                        l = d.Ay[s],
                                        a = (0, c.Rt)(t);
                                    N({ query: `${l?.key ?? s.toString()} ${a}`, performSearch: !0, replace: !1 });
                                })({ selectedChannel: L, searchAutocompleteSelectAction: t });
                            },
                        });
                    e.push(s);
                }
                let t = [...F, W({ hasOtherSearchFiltersVisible: !0 })];
                if ((e.push((0, E.wE)(S.$.GROUP, { rows: t, title: T.intl.string(T.t.UdhTtk) })), O.length > 0)) {
                    let t = O.map((e, t) => {
                            let { label: s, ariaLabel: l } = (0, _.AX)({
                                value: e,
                                avatarSize: a._3J.SIZE_16,
                                iconSize: "xs",
                            });
                            return (0, E.wE)(S.$.ROW, {
                                icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: x.Fx }),
                                label: s,
                                ariaLabel: T.intl.formatToPlainString(T.t.WoiGrV, { suggestion: l }),
                                resultText: e,
                                onSelect: () => {
                                    (0, p.oR)({
                                        searchContext: r,
                                        searchHistoryIndex: t,
                                        searchHistoryTotalResults: O.length,
                                    }),
                                        N({ query: e, performSearch: !0, replace: !1 });
                                },
                            });
                        }),
                        s = (0, E.wE)(S.$.GROUP, {
                            rows: t,
                            trailingIcon: (0, n.jsx)(_.k8, { searchContext: r }),
                            title: (0, E.JU)(y.x2k.HISTORY),
                        });
                    e.push(s);
                }
                return { items: e };
            },
            [y.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: s } = (0, _.AX)({ value: t.query, avatarSize: a._3J.SIZE_16, iconSize: "xs" }),
                        l = (0, E.wE)(S.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: x.Fx }),
                            label:
                                r.type === y.I4_.FAVORITES && (0, c.Eq)()
                                    ? (0, n.jsx)(_.bg, { label: T.intl.string(T.t["6RVtLA"]) })
                                    : (0, n.jsx)(_.bg, {
                                          label: T.intl.format(T.t.rCnaoo, { value: s }),
                                          className: x.YL,
                                      }),
                            ariaLabel: T.intl.formatToPlainString(T.t.rCnaoo, { value: t.query }),
                            onSelect: () => j({ searchEverywhere: !1 }),
                        });
                    if ((e.push(l), r.type === y.I4_.FAVORITES && (0, c.Eq)())) {
                        let t = (0, E.wE)(S.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: x.Fx }),
                            label: (0, n.jsx)(_.bg, { label: T.intl.string(T.t.FtSUxc) }),
                            onSelect: () => j({ searchEverywhere: !0 }),
                        });
                        e.push(t);
                    }
                }
                let { autocompleteCount: s, autocompleteGroups: l } = v({
                    filterFn: (e) =>
                        e.group !== y.x2k.DATES &&
                        e.group !== y.x2k.SEARCH_OPTIONS &&
                        e.group !== y.LWr.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        let { result: t, modeType: r, group: l } = e,
                            a = (0, E.pu)({ modeType: r, result: t, group: l }),
                            i = (0, _.ge)({ result: t, group: l }),
                            { label: o, ariaLabel: u } = (0, _.c$)(t),
                            c =
                                l === y.LWr.FILTER_FROM || l === y.LWr.FILTER_MENTIONS
                                    ? (0, n.jsx)(_.bj, { searchTokenType: l, answer: t.user?.username })
                                    : void 0;
                        return (0, E.wE)(S.$.ROW, {
                            icon: i,
                            label: o,
                            sublabel: c,
                            ariaLabel: u,
                            resultText: a,
                            onSelect: (e) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: n } = e;
                                k({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: n,
                                    selectedAutocomplete: t,
                                    selectedAutocompleteGroup: l,
                                    autocompleteCount: s,
                                }),
                                    N({ query: a, performSearch: !1, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, E.JU)(t);
                        return (0, E.wE)(S.$.GROUP, { rows: r, title: n });
                    },
                });
                if (0 === s) {
                    let t = [...F, W({ hasOtherSearchFiltersVisible: !0 })];
                    e.push((0, E.wE)(S.$.GROUP, { rows: t, title: T.intl.string(T.t.UdhTtk) }));
                } else {
                    let t = W({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return s > 0 && e.push(...l), { items: e };
            },
            [y.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = v({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: r, modeType: n, group: s } = t,
                            l = (0, E.pu)({ modeType: n, result: r, group: s }),
                            a = (0, _._h)({ result: r, group: s }),
                            { label: i, ariaLabel: o } = (0, _.JK)(r);
                        return (0, E.wE)(S.$.ROW, {
                            icon: a,
                            label: i,
                            ariaLabel: o,
                            resultText: l,
                            onSelect: (t) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: a } = t;
                                k({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: a,
                                    selectedAutocomplete: r,
                                    selectedAutocompleteGroup: s,
                                    autocompleteCount: e,
                                }),
                                    N({ query: l, performSearch: !0, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, E.JU)(t);
                        return (0, E.wE)(S.$.GROUP, { rows: r, title: n });
                    },
                });
                return { items: [...t] };
            },
        }[C.type])(),
        w = s.useMemo(() => {
            let e = [];
            return (
                M.forEach((t) => {
                    switch (t.type) {
                        case S.$.ROW:
                            e.push(t);
                            break;
                        case S.$.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [M]);
    return { items: M, itemsData: w };
}
