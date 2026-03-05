r.d(t, { A: () => b }), r(321073);
var s = r(627968),
    n = r(64700),
    l = r(311907),
    a = r(397927),
    i = r(309010),
    o = r(351906),
    u = r(203982),
    c = r(822382),
    d = r(739422),
    h = r(771650),
    _ = r(753806),
    S = r(272444),
    E = r(806595),
    f = r(949759),
    g = r(842716),
    A = r(65600),
    p = r(145331),
    R = r(835121),
    m = r(443486),
    y = r(768570),
    T = r(652215),
    x = r(985018),
    I = r(935606);
let L = [];
function b(e) {
    let { resultsState: t, searchContext: r, selectedChannel: b, setSearchQuery: N } = e,
        { autocompletes: C, mode: v } = t,
        O = (0, R.A)({ autocompletes: C, mode: v }),
        F = (0, m.A)({ setSearchQuery: N, searchContext: r, mode: v }),
        j = (0, l.yK)([o.A, i.A, g.A], () => {
            if (o.A.hidePersonalInformation) return L;
            let e = (0, c.Jl)(r, i.A);
            if (null == e) return L;
            let t = g.A.getHistory(e);
            if (null == t) return L;
            let s = new Set(),
                n = [];
            return (
                t.forEach((e) => {
                    let t = r.type === T.I4_.CHANNEL ? (0, c.EH)(e) : e;
                    "" === t || s.has(t) || (s.add(t), n.push(t));
                }),
                n
            );
        }),
        k = (e) => {
            let { searchEverywhere: t } = e;
            u._.dispatch(T.jej.PERFORM_SEARCH, { searchEverywhere: t, searchQuerySource: y.Q_.SEARCH_POPOUT });
        },
        M = (e) => {
            let {
                    autocompleteCount: t,
                    selectedIndex: s,
                    searchAutocompleteSelectAction: n,
                    selectedAutocomplete: l,
                    selectedAutocompleteGroup: a,
                } = e,
                o = v.type,
                u = v.filter,
                { token: d, group: S } = l,
                E = null != S && (0, h.If)(S) ? S : null,
                f = d ?? u ?? E,
                g = l.channel,
                R = f === T.LWr.FILTER_IN && null != g && g.id === i.A.getChannelId(),
                m = (0, c.bS)(r);
            (0, p.kc)({
                searchContext: r,
                searchQuery: A.A.getSearchResultsQuery(m),
                searchQueryString: _.A.getSearchInputText(r),
                searchTokenType: f,
                searchAutocompleteGroup: a,
                searchAutocompleteMode: v,
                searchAutocompleteResultIndex: s,
                searchAutocompleteTotalResults: t,
                isSearchFilterPrefix: o === T.o$q.EMPTY,
                isSearchFilterAnswer: o === T.o$q.FILTER,
                isSearchFilterComplete: o === T.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: R,
                searchAutocompleteSelectAction: n,
            });
        },
        W = n.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    n = t ? x.intl.string(x.t.diOL4i) : x.intl.string(x.t["M1tf+7"]);
                return (0, f.wE)(E.$.ROW, {
                    icon: (0, s.jsx)(a.RgP, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: I.Fx,
                    }),
                    label: (0, s.jsx)(S.bg, { label: n }),
                    sublabel: t
                        ? (0, s.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: x.intl.string(x.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => _.A.openSearchFiltersModal(r),
                });
            },
            [r],
        ),
        { items: w } = (0,
        {
            [T.o$q.EMPTY]: () => {
                let e = [];
                if (null != b && (0, d.HM)(r) && r.type === T.I4_.DMS) {
                    let t = (0, S.lF)(b),
                        n = (0, f.wE)(E.$.ROW, {
                            icon: (0, s.jsx)(a.$p$, { size: "sm", color: "currentColor", className: I.Fx }),
                            label: (0, s.jsx)(S.bg, {
                                label: x.intl.format(x.t["VGEH/0"], { channelName: t }),
                                className: I.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return ((e) => {
                                    let { selectedChannel: t, searchAutocompleteSelectAction: s } = e;
                                    (0, p.rE)({ searchContext: r, searchAutocompleteSelectAction: s });
                                    let n = T.LWr.FILTER_IN,
                                        l = h.Ay[n],
                                        a = (0, c.Rt)(t);
                                    N({ query: `${l?.key ?? n.toString()} ${a}`, performSearch: !0, replace: !1 });
                                })({ selectedChannel: b, searchAutocompleteSelectAction: t });
                            },
                        });
                    e.push(n);
                }
                let t = [...F, W({ hasOtherSearchFiltersVisible: !0 })];
                if ((e.push((0, f.wE)(E.$.GROUP, { rows: t, title: x.intl.string(x.t.UdhTtk) })), j.length > 0)) {
                    let t = j.map((e, t) => {
                            let { label: n, ariaLabel: l } = (0, S.AX)({
                                value: e,
                                avatarSize: a._3J.SIZE_16,
                                iconSize: "xs",
                            });
                            return (0, f.wE)(E.$.ROW, {
                                icon: (0, s.jsx)(a.$p$, { size: "sm", color: "currentColor", className: I.Fx }),
                                label: n,
                                ariaLabel: x.intl.formatToPlainString(x.t.WoiGrV, { suggestion: l }),
                                resultText: e,
                                onSelect: () => {
                                    (0, p.oR)({
                                        searchContext: r,
                                        searchHistoryIndex: t,
                                        searchHistoryTotalResults: j.length,
                                    }),
                                        N({ query: e, performSearch: !0, replace: !1 });
                                },
                            });
                        }),
                        n = (0, f.wE)(E.$.GROUP, {
                            rows: t,
                            trailingIcon: (0, s.jsx)(S.k8, { searchContext: r }),
                            title: (0, f.JU)(T.x2k.HISTORY),
                        });
                    e.push(n);
                }
                return { items: e };
            },
            [T.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: n } = (0, S.AX)({ value: t.query, avatarSize: a._3J.SIZE_16, iconSize: "xs" }),
                        l = (0, f.wE)(E.$.ROW, {
                            icon: (0, s.jsx)(a.$p$, { size: "sm", color: "currentColor", className: I.Fx }),
                            label:
                                r.type === T.I4_.FAVORITES && (0, c.Eq)()
                                    ? (0, s.jsx)(S.bg, { label: x.intl.string(x.t["6RVtLA"]) })
                                    : (0, s.jsx)(S.bg, {
                                          label: x.intl.format(x.t.rCnaoo, { value: n }),
                                          className: I.YL,
                                      }),
                            ariaLabel: x.intl.formatToPlainString(x.t.rCnaoo, { value: t.query }),
                            onSelect: () => k({ searchEverywhere: !1 }),
                        });
                    if ((e.push(l), r.type === T.I4_.FAVORITES && (0, c.Eq)())) {
                        let t = (0, f.wE)(E.$.ROW, {
                            icon: (0, s.jsx)(a.$p$, { size: "sm", color: "currentColor", className: I.Fx }),
                            label: (0, s.jsx)(S.bg, { label: x.intl.string(x.t.FtSUxc) }),
                            onSelect: () => k({ searchEverywhere: !0 }),
                        });
                        e.push(t);
                    }
                }
                let { autocompleteCount: n, autocompleteGroups: l } = O({
                    filterFn: (e) =>
                        e.group !== T.x2k.DATES &&
                        e.group !== T.x2k.SEARCH_OPTIONS &&
                        e.group !== T.LWr.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        let { result: t, modeType: r, group: l } = e,
                            a = (0, f.pu)({ modeType: r, result: t, group: l }),
                            i = (0, S.ge)({ result: t, group: l }),
                            { label: o, ariaLabel: u } = (0, S.c$)(t),
                            c =
                                l === T.LWr.FILTER_FROM || l === T.LWr.FILTER_MENTIONS
                                    ? (0, s.jsx)(S.bj, { searchTokenType: l, answer: t.user?.username })
                                    : void 0;
                        return (0, f.wE)(E.$.ROW, {
                            icon: i,
                            label: o,
                            sublabel: c,
                            ariaLabel: u,
                            resultText: a,
                            onSelect: (e) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: s } = e;
                                M({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: s,
                                    selectedAutocomplete: t,
                                    selectedAutocompleteGroup: l,
                                    autocompleteCount: n,
                                }),
                                    N({ query: a, performSearch: !1, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            s = (0, f.JU)(t);
                        return (0, f.wE)(E.$.GROUP, { rows: r, title: s });
                    },
                });
                if (0 === n) {
                    let t = [...F, W({ hasOtherSearchFiltersVisible: !0 })];
                    e.push((0, f.wE)(E.$.GROUP, { rows: t, title: x.intl.string(x.t.UdhTtk) }));
                } else {
                    let t = W({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return n > 0 && e.push(...l), { items: e };
            },
            [T.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = O({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: r, modeType: s, group: n } = t,
                            l = (0, f.pu)({ modeType: s, result: r, group: n }),
                            a = (0, S._h)({ result: r, group: n }),
                            { label: i, ariaLabel: o } = (0, S.JK)(r);
                        return (0, f.wE)(E.$.ROW, {
                            icon: a,
                            label: i,
                            ariaLabel: o,
                            resultText: l,
                            onSelect: (t) => {
                                let { selectedIndex: s, searchAutocompleteSelectAction: a } = t;
                                M({
                                    selectedIndex: s,
                                    searchAutocompleteSelectAction: a,
                                    selectedAutocomplete: r,
                                    selectedAutocompleteGroup: n,
                                    autocompleteCount: e,
                                }),
                                    N({ query: l, performSearch: !0, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            s = (0, f.JU)(t);
                        return (0, f.wE)(E.$.GROUP, { rows: r, title: s });
                    },
                });
                return { items: [...t] };
            },
        }[v.type])(),
        D = n.useMemo(() => {
            let e = [];
            return (
                w.forEach((t) => {
                    switch (t.type) {
                        case E.$.ROW:
                            e.push(t);
                            break;
                        case E.$.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [w]);
    return { items: w, itemsData: D };
}
