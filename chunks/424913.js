n.d(t, { A: () => A }), n(321073), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(309010),
    o = n(203982),
    l = n(822382),
    c = n(771650),
    u = n(753806),
    d = n(272444),
    f = n(806595),
    p = n(949759),
    _ = n(65600),
    h = n(145331),
    m = n(835121),
    g = n(443486),
    E = n(768570),
    b = n(652215),
    y = n(985018),
    O = n(935606);
function A(e) {
    let { resultsState: t, searchContext: n, selectedChannel: A, setSearchQuery: v } = e,
        { autocompletes: S, mode: I } = t,
        T = (0, m.A)({
            autocompletes: S,
            mode: I,
        }),
        C = (0, g.A)({
            setSearchQuery: v,
            searchContext: n,
            mode: I,
        }),
        N = (e) => {
            let { searchEverywhere: t } = e;
            o._.dispatch(b.jej.PERFORM_SEARCH, {
                searchEverywhere: t,
                searchQuerySource: E.Q_.SEARCH_POPOUT,
            });
        },
        R = (e) => {
            var t;
            let {
                    autocompleteCount: r,
                    selectedIndex: i,
                    searchAutocompleteSelectAction: a,
                    selectedAutocomplete: o,
                    selectedAutocompleteGroup: d,
                } = e,
                f = I.type,
                p = I.filter,
                { token: m, group: g } = o,
                E = null != g && (0, c.If)(g) ? g : null,
                y = null != (t = null != m ? m : p) ? t : E,
                O = o.channel,
                A = y === b.LWr.FILTER_IN && null != O && O.id === s.A.getChannelId(),
                v = (0, l.bS)(n);
            (0, h.kc)({
                searchContext: n,
                searchQuery: _.A.getSearchResultsQuery(v),
                searchQueryString: u.A.getSearchInputText(n),
                searchTokenType: y,
                searchAutocompleteGroup: d,
                searchAutocompleteMode: I,
                searchAutocompleteResultIndex: i,
                searchAutocompleteTotalResults: r,
                isSearchFilterPrefix: f === b.o$q.EMPTY,
                isSearchFilterAnswer: f === b.o$q.FILTER,
                isSearchFilterComplete: f === b.o$q.FILTER_ALL,
                isInFilterForSelectedChannel: A,
                searchAutocompleteSelectAction: a,
            });
        },
        w = i.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    i = t ? y.intl.string(y.t.diOL4i) : y.intl.string(y.t["M1tf+7"]);
                return (0, p.wE)(f.$.ROW, {
                    icon: (0, r.jsx)(a.RgP, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: O.Fx,
                    }),
                    label: (0, r.jsx)(d.bg, { label: i }),
                    sublabel: t
                        ? (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: y.intl.string(y.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => u.A.openSearchFiltersModal(n),
                });
            },
            [n],
        ),
        { items: P } = (0,
        {
            [b.o$q.EMPTY]: () => {
                let e = [];
                if (null != A && (0, l.Wg)(n) && n.type === b.I4_.DMS) {
                    let t = (0, d.lF)(A),
                        i = (e) => {
                            var t;
                            let { selectedChannel: r, searchAutocompleteSelectAction: i } = e;
                            (0, h.rE)({
                                searchContext: n,
                                searchAutocompleteSelectAction: i,
                            });
                            let a = b.LWr.FILTER_IN,
                                s = c.Ay[a],
                                o = (0, l.Rt)(r);
                            v({
                                query: ""
                                    .concat(null != (t = null == s ? void 0 : s.key) ? t : a.toString(), " ")
                                    .concat(o),
                                performSearch: !0,
                                replace: !1,
                            });
                        },
                        s = (0, p.wE)(f.$.ROW, {
                            icon: (0, r.jsx)(a.$p$, {
                                size: "sm",
                                color: "currentColor",
                                className: O.Fx,
                            }),
                            label: (0, r.jsx)(d.bg, {
                                label: y.intl.format(y.t["VGEH/0"], { channelName: t }),
                                className: O.YL,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return i({
                                    selectedChannel: A,
                                    searchAutocompleteSelectAction: t,
                                });
                            },
                        });
                    e.push(s);
                }
                let t = [...C, w({ hasOtherSearchFiltersVisible: !0 })];
                e.push(
                    (0, p.wE)(f.$.GROUP, {
                        rows: t,
                        title: y.intl.string(y.t.UdhTtk),
                    }),
                );
                let i = e.length + C.length,
                    { autocompleteCount: s, autocompleteGroups: o } = T({
                        filterFn: (e) => e.group === b.x2k.HISTORY && e.results.length > 0,
                        getAutocompleteRowItem: (e) => {
                            let { result: t, modeType: r, group: o } = e,
                                l = (0, p.pu)({
                                    modeType: r,
                                    result: t,
                                    group: o,
                                }),
                                c = (0, d.ge)({
                                    result: t,
                                    group: o,
                                }),
                                { label: u, ariaLabel: _ } = (0, d.AX)({
                                    value: t.text,
                                    avatarSize: a._3J.SIZE_16,
                                    iconSize: "xs",
                                }),
                                m = (e) => {
                                    let { selectedIndex: t } = e;
                                    (0, h.oR)({
                                        searchContext: n,
                                        searchHistoryIndex: t - i,
                                        searchHistoryTotalResults: s,
                                    }),
                                        v({
                                            query: l,
                                            performSearch: !0,
                                            replace: !1,
                                        });
                                };
                            return (0, p.wE)(f.$.ROW, {
                                icon: c,
                                label: u,
                                ariaLabel: y.intl.formatToPlainString(y.t.WoiGrV, { suggestion: _ }),
                                resultText: l,
                                onSelect: m,
                            });
                        },
                        getAutocompleteGroupItem: (e) => {
                            let { group: t, rows: i } = e,
                                a = (0, p.JU)(t),
                                s = t === b.x2k.HISTORY ? (0, r.jsx)(d.k8, { searchContext: n }) : null;
                            return (0, p.wE)(f.$.GROUP, {
                                rows: i,
                                title: a,
                                trailingIcon: s,
                            });
                        },
                    });
                return s > 0 && e.push(...o), { items: e };
            },
            [b.o$q.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: i } = (0, d.AX)({
                            value: t.query,
                            avatarSize: a._3J.SIZE_16,
                            iconSize: "xs",
                        }),
                        s = (0, p.wE)(f.$.ROW, {
                            icon: (0, r.jsx)(a.$p$, {
                                size: "sm",
                                color: "currentColor",
                                className: O.Fx,
                            }),
                            label:
                                n.type === b.I4_.FAVORITES && (0, l.Eq)()
                                    ? (0, r.jsx)(d.bg, { label: y.intl.string(y.t["6RVtLA"]) })
                                    : (0, r.jsx)(d.bg, {
                                          label: y.intl.format(y.t.rCnaoo, { value: i }),
                                          className: O.YL,
                                      }),
                            ariaLabel: y.intl.formatToPlainString(y.t.rCnaoo, { value: t.query }),
                            onSelect: () => N({ searchEverywhere: !1 }),
                        });
                    if ((e.push(s), n.type === b.I4_.FAVORITES && (0, l.Eq)())) {
                        let t = (0, p.wE)(f.$.ROW, {
                            icon: (0, r.jsx)(a.$p$, {
                                size: "sm",
                                color: "currentColor",
                                className: O.Fx,
                            }),
                            label: (0, r.jsx)(d.bg, { label: y.intl.string(y.t.FtSUxc) }),
                            onSelect: () => N({ searchEverywhere: !0 }),
                        });
                        e.push(t);
                    }
                }
                let { autocompleteCount: i, autocompleteGroups: s } = T({
                    filterFn: (e) =>
                        e.group !== b.x2k.DATES &&
                        e.group !== b.x2k.SEARCH_OPTIONS &&
                        e.group !== b.LWr.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        var t;
                        let { result: n, modeType: a, group: s } = e,
                            o = (0, p.pu)({
                                modeType: a,
                                result: n,
                                group: s,
                            }),
                            l = (0, d.ge)({
                                result: n,
                                group: s,
                            }),
                            { label: c, ariaLabel: u } = (0, d.c$)(n),
                            _ =
                                s === b.LWr.FILTER_FROM || s === b.LWr.FILTER_MENTIONS
                                    ? (0, r.jsx)(d.bj, {
                                          searchTokenType: s,
                                          answer: null == (t = n.user) ? void 0 : t.username,
                                      })
                                    : void 0,
                            h = (e) => {
                                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e;
                                R({
                                    selectedIndex: t,
                                    searchAutocompleteSelectAction: r,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: s,
                                    autocompleteCount: i,
                                }),
                                    v({
                                        query: o,
                                        performSearch: !1,
                                        replace: !1,
                                    });
                            };
                        return (0, p.wE)(f.$.ROW, {
                            icon: l,
                            label: c,
                            sublabel: _,
                            ariaLabel: u,
                            resultText: o,
                            onSelect: h,
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: n } = e,
                            r = (0, p.JU)(t);
                        return (0, p.wE)(f.$.GROUP, {
                            rows: n,
                            title: r,
                        });
                    },
                });
                if (0 === i) {
                    let t = [...C, w({ hasOtherSearchFiltersVisible: !0 })];
                    e.push(
                        (0, p.wE)(f.$.GROUP, {
                            rows: t,
                            title: y.intl.string(y.t.UdhTtk),
                        }),
                    );
                } else {
                    let t = w({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return i > 0 && e.push(...s), { items: e };
            },
            [b.o$q.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = T({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: n, modeType: r, group: i } = t,
                            a = (0, p.pu)({
                                modeType: r,
                                result: n,
                                group: i,
                            }),
                            s = (0, d._h)({
                                result: n,
                                group: i,
                            }),
                            { label: o, ariaLabel: l } = (0, d.JK)(n),
                            c = (t) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: s } = t;
                                R({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: s,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: i,
                                    autocompleteCount: e,
                                }),
                                    v({
                                        query: a,
                                        performSearch: !0,
                                        replace: !1,
                                    });
                            };
                        return (0, p.wE)(f.$.ROW, {
                            icon: s,
                            label: o,
                            ariaLabel: l,
                            resultText: a,
                            onSelect: c,
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: n } = e,
                            r = (0, p.JU)(t);
                        return (0, p.wE)(f.$.GROUP, {
                            rows: n,
                            title: r,
                        });
                    },
                });
                return { items: [...t] };
            },
        }[I.type])(),
        D = i.useMemo(() => {
            let e = [];
            return (
                P.forEach((t) => {
                    switch (t.type) {
                        case f.$.ROW:
                            e.push(t);
                            break;
                        case f.$.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [P]);
    return {
        items: P,
        itemsData: D,
    };
}
