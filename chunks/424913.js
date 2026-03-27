r.d(t, { A: () => L }), r(321073);
var n = r(627968),
    s = r(64700),
    l = r(311907),
    a = r(397927),
    i = r(309010),
    o = r(351906),
    c = r(203982),
    u = r(822382),
    d = r(5990),
    h = r(771650),
    _ = r(753806),
    f = r(272444),
    S = r(806595),
    g = r(949759),
    E = r(842716),
    p = r(65600),
    A = r(145331),
    m = r(835121),
    y = r(443486),
    R = r(768570),
    x = r(652215),
    I = r(985018),
    T = r(158008);
let b = [];
function L(e) {
    let { resultsState: t, searchContext: r, selectedChannel: L, setSearchQuery: C } = e,
        { autocompletes: N, mode: v } = t,
        F = (0, m.A)({ autocompletes: N, mode: v }),
        O = (0, y.A)({ setSearchQuery: C, searchContext: r, mode: v }),
        k = (0, l.yK)([o.A, i.A, E.A], () => {
            if (o.A.hidePersonalInformation) return b;
            let e = (0, u.Jl)(r, i.A);
            if (null == e) return b;
            let t = E.A.getHistory(e);
            if (null == t) return b;
            let n = new Set(),
                s = [];
            return (
                t.forEach((e) => {
                    let t = r.type === x.I4_.CHANNEL ? (0, u.EH)(e) : e;
                    "" === t || n.has(t) || (n.add(t), s.push(t));
                }),
                s
            );
        }),
        j = (e) => {
            let {
                    autocompleteCount: t,
                    selectedIndex: n,
                    searchAutocompleteSelectAction: s,
                    selectedAutocomplete: l,
                    selectedAutocompleteGroup: a,
                } = e,
                o = v.type,
                c = v.filter,
                { token: d, group: f } = l,
                S = null != f && (0, h.If)(f) ? f : null,
                g = d ?? c ?? S,
                E = l.channel,
                m = g === x.LWr.FILTER_IN && null != E && E.id === i.A.getChannelId(),
                y = (0, u.bS)(r);
            (0, A.kc)({
                searchContext: r,
                searchQuery: p.A.getSearchResultsQuery(y),
                searchQueryString: _.A.getSearchInputText(r),
                searchTokenType: g,
                searchAutocompleteGroup: a,
                searchAutocompleteMode: v,
                searchAutocompleteResultIndex: n,
                searchAutocompleteTotalResults: t,
                isSearchFilterPrefix: o === x.o$q.EMPTY,
                isSearchFilterAnswer: o === x.o$q.FILTER,
                isSearchFilterComplete: o === x.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: m,
                searchAutocompleteSelectAction: s,
            });
        },
        M = s.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    s = t ? I.intl.string(I.t.diOL4i) : I.intl.string(I.t["M1tf+7"]);
                return (0, g.wE)(S.$.ROW, {
                    icon: (0, n.jsx)(a.RgP, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: T.Fx,
                    }),
                    label: (0, n.jsx)(f.bg, { label: s }),
                    sublabel: t
                        ? (0, n.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: I.intl.string(I.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => _.A.openSearchFiltersModal(r),
                });
            },
            [r],
        ),
        W = (0,
        {
            [x.o$q.EMPTY]: () => {
                let e = [];
                if (null != L && (0, d.HM)(r) && r.type === x.I4_.DMS) {
                    let t = (0, f.lF)(L),
                        s = (0, g.wE)(S.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: T.Fx }),
                            label: (0, n.jsx)(f.bg, {
                                label: I.intl.format(I.t["VGEH/0"], { channelName: t }),
                                className: T.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return ((e) => {
                                    let { selectedChannel: t, searchAutocompleteSelectAction: n } = e;
                                    (0, A.rE)({ searchContext: r, searchAutocompleteSelectAction: n });
                                    let s = x.LWr.FILTER_IN,
                                        l = h.Ay[s],
                                        a = (0, u.Rt)(t);
                                    C({ query: `${l?.key ?? s.toString()} ${a}`, performSearch: !0, replace: !1 });
                                })({ selectedChannel: L, searchAutocompleteSelectAction: t });
                            },
                        });
                    e.push(s);
                }
                let t = [...O, M({ hasOtherSearchFiltersVisible: !0 })];
                if ((e.push((0, g.wE)(S.$.GROUP, { rows: t, title: I.intl.string(I.t.UdhTtk) })), k.length > 0)) {
                    let t = k.map((e, t) => {
                            let { label: s, ariaLabel: l } = (0, f.AX)({
                                value: e,
                                avatarSize: a._3J.SIZE_16,
                                iconSize: "xs",
                            });
                            return (0, g.wE)(S.$.ROW, {
                                icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: T.Fx }),
                                label: s,
                                ariaLabel: I.intl.formatToPlainString(I.t.WoiGrV, { suggestion: l }),
                                resultText: e,
                                onSelect: () => {
                                    (0, A.oR)({
                                        searchContext: r,
                                        searchHistoryIndex: t,
                                        searchHistoryTotalResults: k.length,
                                    }),
                                        C({ query: e, performSearch: !0, replace: !1 });
                                },
                            });
                        }),
                        s = (0, g.wE)(S.$.GROUP, {
                            rows: t,
                            trailingIcon: (0, n.jsx)(f.k8, { searchContext: r }),
                            title: (0, g.JU)(x.x2k.HISTORY),
                        });
                    e.push(s);
                }
                return e;
            },
            [x.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: r } = (0, f.AX)({ value: t.query, avatarSize: a._3J.SIZE_16, iconSize: "xs" }),
                        s = (0, g.wE)(S.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: T.Fx }),
                            label: (0, n.jsx)(f.bg, {
                                label: I.intl.format(I.t.rCnaoo, { value: r }),
                                className: T.YL,
                            }),
                            ariaLabel: I.intl.formatToPlainString(I.t.rCnaoo, { value: t.query }),
                            onSelect: () =>
                                ((e) => {
                                    let { searchEverywhere: t } = e;
                                    c._.dispatch(x.jej.PERFORM_SEARCH, {
                                        searchEverywhere: t,
                                        searchQuerySource: R.Q_.SEARCH_POPOUT,
                                    });
                                })({ searchEverywhere: !1 }),
                        });
                    e.push(s);
                }
                let { autocompleteCount: r, autocompleteGroups: s } = F({
                    getAutocompleteRowItem: (e) => {
                        let { result: t, modeType: s, group: l } = e,
                            a = (0, g.pu)({ modeType: s, result: t, group: l }),
                            i = (0, f.ge)({ result: t, group: l }),
                            { label: o, ariaLabel: c } = (0, f.c$)(t),
                            u =
                                l === x.LWr.FILTER_FROM || l === x.LWr.FILTER_MENTIONS
                                    ? (0, n.jsx)(f.bj, { searchTokenType: l, answer: t.user?.username })
                                    : void 0;
                        return (0, g.wE)(S.$.ROW, {
                            icon: i,
                            label: o,
                            sublabel: u,
                            ariaLabel: c,
                            resultText: a,
                            onSelect: (e) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: s } = e;
                                j({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: s,
                                    selectedAutocomplete: t,
                                    selectedAutocompleteGroup: l,
                                    autocompleteCount: r,
                                }),
                                    C({ query: a, performSearch: !1, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, g.JU)(t);
                        return (0, g.wE)(S.$.GROUP, { rows: r, title: n });
                    },
                });
                if (0 === r) {
                    let t = [...O, M({ hasOtherSearchFiltersVisible: !0 })];
                    e.push((0, g.wE)(S.$.GROUP, { rows: t, title: I.intl.string(I.t.UdhTtk) }));
                } else {
                    let t = M({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return r > 0 && e.push(...s), e;
            },
            [x.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = F({
                    getAutocompleteRowItem: (t) => {
                        let { result: r, modeType: n, group: s } = t,
                            l = (0, g.pu)({ modeType: n, result: r, group: s }),
                            a = (0, f._h)({ result: r, group: s }),
                            { label: i, ariaLabel: o } = (0, f.JK)(r);
                        return (0, g.wE)(S.$.ROW, {
                            icon: a,
                            label: i,
                            ariaLabel: o,
                            resultText: l,
                            onSelect: (t) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: a } = t;
                                j({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: a,
                                    selectedAutocomplete: r,
                                    selectedAutocompleteGroup: s,
                                    autocompleteCount: e,
                                }),
                                    C({ query: l, performSearch: !0, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, g.JU)(t);
                        return (0, g.wE)(S.$.GROUP, { rows: r, title: n });
                    },
                });
                return [...t];
            },
        }[v.type])(),
        w = s.useMemo(() => {
            let e = [];
            return (
                W.forEach((t) => {
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
        }, [W]);
    return { items: W, itemsData: w };
}
