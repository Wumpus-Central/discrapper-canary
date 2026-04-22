r.d(t, { A: () => F }), r(321073);
var n = r(627968),
    s = r(64700),
    l = r(311907),
    a = r(783977),
    i = r(834730),
    o = r(7689),
    u = r(778712),
    c = r(309010),
    h = r(351906),
    d = r(203982),
    _ = r(822382),
    E = r(5990),
    S = r(771650),
    f = r(753806),
    p = r(272444),
    g = r(806595),
    A = r(949759),
    y = r(842716),
    R = r(65600),
    m = r(145331),
    I = r(835121),
    T = r(443486),
    L = r(768570),
    x = r(652215),
    b = r(985018),
    N = r(611027);
let C = [];
function F(e) {
    let { resultsState: t, searchContext: r, selectedChannel: F, setSearchQuery: v } = e,
        { autocompletes: O, mode: W } = t,
        k = (0, I.A)({ autocompletes: O, mode: W }),
        M = (0, T.A)({ setSearchQuery: v, searchContext: r, mode: W }),
        w = (0, l.yK)([h.A, c.A, y.A], () => {
            if (h.A.hidePersonalInformation) return C;
            let e = (0, _.Jl)(r, c.A);
            if (null == e) return C;
            let t = y.A.getHistory(e);
            if (null == t) return C;
            let n = new Set(),
                s = [];
            return (
                t.forEach((e) => {
                    let t = r.type === x.I4_.CHANNEL ? (0, _.EH)(e) : e;
                    "" === t || n.has(t) || (n.add(t), s.push(t));
                }),
                s
            );
        }),
        H = (e) => {
            let {
                    autocompleteCount: t,
                    selectedIndex: n,
                    searchAutocompleteSelectAction: s,
                    selectedAutocomplete: l,
                    selectedAutocompleteGroup: a,
                } = e,
                i = W.type,
                o = W.filter,
                { token: u, group: h } = l,
                d = null != h && (0, S.If)(h) ? h : null,
                E = u ?? o ?? d,
                p = l.channel,
                g = E === x.LWr.FILTER_IN && null != p && p.id === c.A.getChannelId(),
                A = (0, _.bS)(r);
            (0, m.kc)({
                searchContext: r,
                searchQuery: R.A.getSearchResultsQuery(A),
                searchQueryString: f.A.getSearchInputText(r),
                searchTokenType: E,
                searchAutocompleteGroup: a,
                searchAutocompleteMode: W,
                searchAutocompleteResultIndex: n,
                searchAutocompleteTotalResults: t,
                isSearchFilterPrefix: i === x.o$q.EMPTY,
                isSearchFilterAnswer: i === x.o$q.FILTER,
                isSearchFilterComplete: i === x.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: g,
                searchAutocompleteSelectAction: s,
            });
        },
        j = s.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    s = t ? b.intl.string(b.t.diOL4i) : b.intl.string(b.t["M1tf+7"]);
                return (0, A.wE)(g.$.ROW, {
                    icon: (0, n.jsx)(a.R, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: N.Fx,
                    }),
                    label: (0, n.jsx)(p.bg, { label: s }),
                    sublabel: t
                        ? (0, n.jsx)(i.E, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: b.intl.string(b.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => f.A.openSearchFiltersModal(r),
                });
            },
            [r],
        ),
        D = (0,
        {
            [x.o$q.EMPTY]: () => {
                let e = [];
                if (null != F && (0, E.HM)(r) && r.type === x.I4_.DMS) {
                    let t = (0, p.lF)(F),
                        s = (0, A.wE)(g.$.ROW, {
                            icon: (0, n.jsx)(o.$, { size: "sm", color: "currentColor", className: N.Fx }),
                            label: (0, n.jsx)(p.bg, {
                                label: b.intl.format(b.t["VGEH/0"], { channelName: t }),
                                className: N.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return ((e) => {
                                    let { selectedChannel: t, searchAutocompleteSelectAction: n } = e;
                                    (0, m.rE)({ searchContext: r, searchAutocompleteSelectAction: n });
                                    let s = x.LWr.FILTER_IN,
                                        l = S.Ay[s],
                                        a = (0, _.Rt)(t);
                                    v({ query: `${l?.key ?? s.toString()} ${a}`, performSearch: !0, replace: !1 });
                                })({ selectedChannel: F, searchAutocompleteSelectAction: t });
                            },
                        });
                    e.push(s);
                }
                let t = [...M, j({ hasOtherSearchFiltersVisible: !0 })];
                if ((e.push((0, A.wE)(g.$.GROUP, { rows: t, title: b.intl.string(b.t.UdhTtk) })), w.length > 0)) {
                    let t = w.map((e, t) => {
                            let { label: s, ariaLabel: l } = (0, p.AX)({
                                value: e,
                                avatarSize: u._3.SIZE_16,
                                iconSize: "xs",
                            });
                            return (0, A.wE)(g.$.ROW, {
                                icon: (0, n.jsx)(o.$, { size: "sm", color: "currentColor", className: N.Fx }),
                                label: s,
                                ariaLabel: b.intl.formatToPlainString(b.t.WoiGrV, { suggestion: l }),
                                resultText: e,
                                onSelect: () => {
                                    (0, m.oR)({
                                        searchContext: r,
                                        searchHistoryIndex: t,
                                        searchHistoryTotalResults: w.length,
                                    }),
                                        v({ query: e, performSearch: !0, replace: !1 });
                                },
                            });
                        }),
                        s = (0, A.wE)(g.$.GROUP, {
                            rows: t,
                            trailingIcon: (0, n.jsx)(p.k8, { searchContext: r }),
                            title: (0, A.JU)(x.x2k.HISTORY),
                        });
                    e.push(s);
                }
                return e;
            },
            [x.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: r } = (0, p.AX)({ value: t.query, avatarSize: u._3.SIZE_16, iconSize: "xs" }),
                        s = (0, A.wE)(g.$.ROW, {
                            icon: (0, n.jsx)(o.$, { size: "sm", color: "currentColor", className: N.Fx }),
                            label: (0, n.jsx)(p.bg, {
                                label: b.intl.format(b.t.rCnaoo, { value: r }),
                                className: N.YL,
                            }),
                            ariaLabel: b.intl.formatToPlainString(b.t.rCnaoo, { value: t.query }),
                            onSelect: () =>
                                ((e) => {
                                    let { searchEverywhere: t } = e;
                                    d._.dispatch(x.jej.PERFORM_SEARCH, {
                                        searchEverywhere: t,
                                        searchQuerySource: L.Q_.SEARCH_POPOUT,
                                    });
                                })({ searchEverywhere: !1 }),
                        });
                    e.push(s);
                }
                let { autocompleteCount: r, autocompleteGroups: s } = k({
                    getAutocompleteRowItem: (e) => {
                        let { result: t, modeType: s, group: l } = e,
                            a = (0, A.pu)({ modeType: s, result: t, group: l }),
                            i = (0, p.ge)({ result: t, group: l }),
                            { label: o, ariaLabel: u } = (0, p.c$)(t),
                            c =
                                l === x.LWr.FILTER_FROM || l === x.LWr.FILTER_MENTIONS
                                    ? (0, n.jsx)(p.bj, { searchTokenType: l, answer: t.user?.username })
                                    : void 0;
                        return (0, A.wE)(g.$.ROW, {
                            icon: i,
                            label: o,
                            sublabel: c,
                            ariaLabel: u,
                            resultText: a,
                            onSelect: (e) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: s } = e;
                                H({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: s,
                                    selectedAutocomplete: t,
                                    selectedAutocompleteGroup: l,
                                    autocompleteCount: r,
                                }),
                                    v({ query: a, performSearch: !1, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, A.JU)(t);
                        return (0, A.wE)(g.$.GROUP, { rows: r, title: n });
                    },
                });
                if (0 === r) {
                    let t = [...M, j({ hasOtherSearchFiltersVisible: !0 })];
                    e.push((0, A.wE)(g.$.GROUP, { rows: t, title: b.intl.string(b.t.UdhTtk) }));
                } else {
                    let t = j({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return r > 0 && e.push(...s), e;
            },
            [x.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = k({
                    getAutocompleteRowItem: (t) => {
                        let { result: r, modeType: n, group: s } = t,
                            l = (0, A.pu)({ modeType: n, result: r, group: s }),
                            a = (0, p._h)({ result: r, group: s }),
                            { label: i, ariaLabel: o } = (0, p.JK)(r);
                        return (0, A.wE)(g.$.ROW, {
                            icon: a,
                            label: i,
                            ariaLabel: o,
                            resultText: l,
                            onSelect: (t) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: a } = t;
                                H({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: a,
                                    selectedAutocomplete: r,
                                    selectedAutocompleteGroup: s,
                                    autocompleteCount: e,
                                }),
                                    v({ query: l, performSearch: !0, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, A.JU)(t);
                        return (0, A.wE)(g.$.GROUP, { rows: r, title: n });
                    },
                });
                return [...t];
            },
        }[W.type])(),
        P = s.useMemo(() => {
            let e = [];
            return (
                D.forEach((t) => {
                    switch (t.type) {
                        case g.$.ROW:
                            e.push(t);
                            break;
                        case g.$.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [D]);
    return { items: D, itemsData: P };
}
