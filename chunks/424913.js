r.d(t, { A: () => C }), r(321073);
var n = r(627968),
    s = r(64700),
    l = r(311907),
    a = r(397927),
    i = r(309010),
    o = r(351906),
    u = r(203982),
    c = r(822382),
    h = r(5990),
    d = r(771650),
    _ = r(753806),
    S = r(272444),
    E = r(806595),
    f = r(949759),
    p = r(842716),
    g = r(65600),
    A = r(145331),
    y = r(835121),
    R = r(443486),
    T = r(768570),
    I = r(652215),
    m = r(985018),
    L = r(611027);
let x = [];
function C(e) {
    let { resultsState: t, searchContext: r, selectedChannel: C, setSearchQuery: N } = e,
        { autocompletes: b, mode: F } = t,
        v = (0, y.A)({ autocompletes: b, mode: F }),
        O = (0, R.A)({ setSearchQuery: N, searchContext: r, mode: F }),
        W = (0, l.yK)([o.A, i.A, p.A], () => {
            if (o.A.hidePersonalInformation) return x;
            let e = (0, c.Jl)(r, i.A);
            if (null == e) return x;
            let t = p.A.getHistory(e);
            if (null == t) return x;
            let n = new Set(),
                s = [];
            return (
                t.forEach((e) => {
                    let t = r.type === I.I4_.CHANNEL ? (0, c.EH)(e) : e;
                    "" === t || n.has(t) || (n.add(t), s.push(t));
                }),
                s
            );
        }),
        k = (e) => {
            let {
                    autocompleteCount: t,
                    selectedIndex: n,
                    searchAutocompleteSelectAction: s,
                    selectedAutocomplete: l,
                    selectedAutocompleteGroup: a,
                } = e,
                o = F.type,
                u = F.filter,
                { token: h, group: S } = l,
                E = null != S && (0, d.If)(S) ? S : null,
                f = h ?? u ?? E,
                p = l.channel,
                y = f === I.LWr.FILTER_IN && null != p && p.id === i.A.getChannelId(),
                R = (0, c.bS)(r);
            (0, A.kc)({
                searchContext: r,
                searchQuery: g.A.getSearchResultsQuery(R),
                searchQueryString: _.A.getSearchInputText(r),
                searchTokenType: f,
                searchAutocompleteGroup: a,
                searchAutocompleteMode: F,
                searchAutocompleteResultIndex: n,
                searchAutocompleteTotalResults: t,
                isSearchFilterPrefix: o === I.o$q.EMPTY,
                isSearchFilterAnswer: o === I.o$q.FILTER,
                isSearchFilterComplete: o === I.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: y,
                searchAutocompleteSelectAction: s,
            });
        },
        M = s.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    s = t ? m.intl.string(m.t.diOL4i) : m.intl.string(m.t["M1tf+7"]);
                return (0, f.wE)(E.$.ROW, {
                    icon: (0, n.jsx)(a.RgP, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: L.Fx,
                    }),
                    label: (0, n.jsx)(S.bg, { label: s }),
                    sublabel: t
                        ? (0, n.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: m.intl.string(m.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => _.A.openSearchFiltersModal(r),
                });
            },
            [r],
        ),
        H = (0,
        {
            [I.o$q.EMPTY]: () => {
                let e = [];
                if (null != C && (0, h.HM)(r) && r.type === I.I4_.DMS) {
                    let t = (0, S.lF)(C),
                        s = (0, f.wE)(E.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: L.Fx }),
                            label: (0, n.jsx)(S.bg, {
                                label: m.intl.format(m.t["VGEH/0"], { channelName: t }),
                                className: L.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return ((e) => {
                                    let { selectedChannel: t, searchAutocompleteSelectAction: n } = e;
                                    (0, A.rE)({ searchContext: r, searchAutocompleteSelectAction: n });
                                    let s = I.LWr.FILTER_IN,
                                        l = d.Ay[s],
                                        a = (0, c.Rt)(t);
                                    N({ query: `${l?.key ?? s.toString()} ${a}`, performSearch: !0, replace: !1 });
                                })({ selectedChannel: C, searchAutocompleteSelectAction: t });
                            },
                        });
                    e.push(s);
                }
                let t = [...O, M({ hasOtherSearchFiltersVisible: !0 })];
                if ((e.push((0, f.wE)(E.$.GROUP, { rows: t, title: m.intl.string(m.t.UdhTtk) })), W.length > 0)) {
                    let t = W.map((e, t) => {
                            let { label: s, ariaLabel: l } = (0, S.AX)({
                                value: e,
                                avatarSize: a._3J.SIZE_16,
                                iconSize: "xs",
                            });
                            return (0, f.wE)(E.$.ROW, {
                                icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: L.Fx }),
                                label: s,
                                ariaLabel: m.intl.formatToPlainString(m.t.WoiGrV, { suggestion: l }),
                                resultText: e,
                                onSelect: () => {
                                    (0, A.oR)({
                                        searchContext: r,
                                        searchHistoryIndex: t,
                                        searchHistoryTotalResults: W.length,
                                    }),
                                        N({ query: e, performSearch: !0, replace: !1 });
                                },
                            });
                        }),
                        s = (0, f.wE)(E.$.GROUP, {
                            rows: t,
                            trailingIcon: (0, n.jsx)(S.k8, { searchContext: r }),
                            title: (0, f.JU)(I.x2k.HISTORY),
                        });
                    e.push(s);
                }
                return e;
            },
            [I.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: r } = (0, S.AX)({ value: t.query, avatarSize: a._3J.SIZE_16, iconSize: "xs" }),
                        s = (0, f.wE)(E.$.ROW, {
                            icon: (0, n.jsx)(a.$p$, { size: "sm", color: "currentColor", className: L.Fx }),
                            label: (0, n.jsx)(S.bg, {
                                label: m.intl.format(m.t.rCnaoo, { value: r }),
                                className: L.YL,
                            }),
                            ariaLabel: m.intl.formatToPlainString(m.t.rCnaoo, { value: t.query }),
                            onSelect: () =>
                                ((e) => {
                                    let { searchEverywhere: t } = e;
                                    u._.dispatch(I.jej.PERFORM_SEARCH, {
                                        searchEverywhere: t,
                                        searchQuerySource: T.Q_.SEARCH_POPOUT,
                                    });
                                })({ searchEverywhere: !1 }),
                        });
                    e.push(s);
                }
                let { autocompleteCount: r, autocompleteGroups: s } = v({
                    getAutocompleteRowItem: (e) => {
                        let { result: t, modeType: s, group: l } = e,
                            a = (0, f.pu)({ modeType: s, result: t, group: l }),
                            i = (0, S.ge)({ result: t, group: l }),
                            { label: o, ariaLabel: u } = (0, S.c$)(t),
                            c =
                                l === I.LWr.FILTER_FROM || l === I.LWr.FILTER_MENTIONS
                                    ? (0, n.jsx)(S.bj, { searchTokenType: l, answer: t.user?.username })
                                    : void 0;
                        return (0, f.wE)(E.$.ROW, {
                            icon: i,
                            label: o,
                            sublabel: c,
                            ariaLabel: u,
                            resultText: a,
                            onSelect: (e) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: s } = e;
                                k({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: s,
                                    selectedAutocomplete: t,
                                    selectedAutocompleteGroup: l,
                                    autocompleteCount: r,
                                }),
                                    N({ query: a, performSearch: !1, replace: !1 });
                            },
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: r } = e,
                            n = (0, f.JU)(t);
                        return (0, f.wE)(E.$.GROUP, { rows: r, title: n });
                    },
                });
                if (0 === r) {
                    let t = [...O, M({ hasOtherSearchFiltersVisible: !0 })];
                    e.push((0, f.wE)(E.$.GROUP, { rows: t, title: m.intl.string(m.t.UdhTtk) }));
                } else {
                    let t = M({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return r > 0 && e.push(...s), e;
            },
            [I.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = v({
                    getAutocompleteRowItem: (t) => {
                        let { result: r, modeType: n, group: s } = t,
                            l = (0, f.pu)({ modeType: n, result: r, group: s }),
                            a = (0, S._h)({ result: r, group: s }),
                            { label: i, ariaLabel: o } = (0, S.JK)(r);
                        return (0, f.wE)(E.$.ROW, {
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
                            n = (0, f.JU)(t);
                        return (0, f.wE)(E.$.GROUP, { rows: r, title: n });
                    },
                });
                return [...t];
            },
        }[F.type])(),
        w = s.useMemo(() => {
            let e = [];
            return (
                H.forEach((t) => {
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
        }, [H]);
    return { items: H, itemsData: w };
}
