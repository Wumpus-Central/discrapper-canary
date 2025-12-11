n.d(t, { Z: () => v }), n(539854), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(944486),
    s = n(585483),
    l = n(607802),
    c = n(532428),
    u = n(637879),
    d = n(794137),
    f = n(628221),
    p = n(611004),
    _ = n(817190),
    m = n(315322),
    h = n(52459),
    g = n(349504),
    E = n(723642),
    b = n(981631),
    y = n(388032),
    O = n(409735);
function v(e) {
    let { resultsState: t, searchContext: n, selectedChannel: v, setSearchQuery: S } = e,
        { autocompletes: I, mode: T } = t,
        C = (0, h.Z)({
            autocompletes: I,
            mode: T,
        }),
        A = (0, g.Z)({
            setSearchQuery: S,
            searchContext: n,
            mode: T,
        }),
        N = (e) => {
            let { searchEverywhere: t } = e;
            s.S.dispatch(b.CkL.PERFORM_SEARCH, {
                searchEverywhere: t,
                searchQuerySource: E.w7.SEARCH_POPOUT,
            });
        },
        P = (e) => {
            var t;
            let {
                    autocompleteCount: r,
                    selectedIndex: i,
                    searchAutocompleteSelectAction: a,
                    selectedAutocomplete: s,
                    selectedAutocompleteGroup: u,
                } = e,
                d = T.type,
                f = T.filter,
                { token: h, group: g } = s,
                E = null != g && (0, c._m)(g) ? g : null,
                y = null != (t = null != h ? h : f) ? t : E,
                O = s.channel,
                v = y === b.dCx.FILTER_IN && null != O && O.id === o.Z.getChannelId(),
                S = (0, l.Tm)(n);
            (0, m.bh)({
                searchContext: n,
                searchQuery: _.Z.getSearchResultsQuery(S),
                searchQueryString: p.Z.getSearchInputText(n),
                searchTokenType: y,
                searchAutocompleteGroup: u,
                searchAutocompleteMode: T,
                searchAutocompleteResultIndex: i,
                searchAutocompleteTotalResults: r,
                isSearchFilterPrefix: d === b.Sap.EMPTY,
                isSearchFilterAnswer: d === b.Sap.FILTER,
                isSearchFilterComplete: d === b.Sap.FILTER_ALL,
                isInFilterForSelectedChannel: v,
                searchAutocompleteSelectAction: a,
            });
        },
        R = i.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    i = t ? y.intl.string(y.t.diOL4i) : y.intl.string(y.t["M1tf+7"]);
                return (0, f.fC)(d.i.ROW, {
                    icon: (0, r.jsx)(a.gXV, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: O.itemIcon,
                    }),
                    label: (0, r.jsx)(u.Q0, { label: i }),
                    sublabel: t
                        ? (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-muted",
                              children: y.intl.string(y.t["1axf1T"]),
                          })
                        : void 0,
                    onSelect: () => p.Z.openSearchFiltersModal(n),
                });
            },
            [n],
        ),
        { items: w } = (0,
        {
            [b.Sap.EMPTY]: () => {
                let e = [];
                if (null != v && (0, l.R6)(n) && n.type === b.aib.DMS) {
                    let t = (0, u.f)(v),
                        i = (e) => {
                            var t;
                            let { selectedChannel: r, searchAutocompleteSelectAction: i } = e;
                            (0, m.tA)({
                                searchContext: n,
                                searchAutocompleteSelectAction: i,
                            });
                            let a = b.dCx.FILTER_IN,
                                o = c.ZP[a],
                                s = (0, l.X3)(r);
                            S({
                                query: ""
                                    .concat(null != (t = null == o ? void 0 : o.key) ? t : a.toString(), " ")
                                    .concat(s),
                                performSearch: !0,
                                replace: !1,
                            });
                        },
                        o = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: O.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, {
                                label: y.intl.format(y.t["VGEH/0"], { channelName: t }),
                                className: O.labelWithElements,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return i({
                                    selectedChannel: v,
                                    searchAutocompleteSelectAction: t,
                                });
                            },
                        });
                    e.push(o);
                }
                let t = [...A, R({ hasOtherSearchFiltersVisible: !0 })];
                e.push(
                    (0, f.fC)(d.i.GROUP, {
                        rows: t,
                        title: y.intl.string(y.t.UdhTtk),
                    }),
                );
                let i = e.length + A.length,
                    { autocompleteCount: o, autocompleteGroups: s } = C({
                        filterFn: (e) => e.group === b.rtL.HISTORY && e.results.length > 0,
                        getAutocompleteRowItem: (e) => {
                            let { result: t, modeType: r, group: s } = e,
                                l = (0, f.lw)({
                                    modeType: r,
                                    result: t,
                                    group: s,
                                }),
                                c = (0, u.GM)({
                                    result: t,
                                    group: s,
                                }),
                                { label: p, ariaLabel: _ } = (0, u.HU)({
                                    value: t.text,
                                    avatarSize: a.EFr.SIZE_16,
                                    iconSize: "xs",
                                }),
                                h = (e) => {
                                    let { selectedIndex: t } = e;
                                    (0, m.$z)({
                                        searchContext: n,
                                        searchHistoryIndex: t - i,
                                        searchHistoryTotalResults: o,
                                    }),
                                        S({
                                            query: l,
                                            performSearch: !0,
                                            replace: !1,
                                        });
                                };
                            return (0, f.fC)(d.i.ROW, {
                                icon: c,
                                label: p,
                                ariaLabel: y.intl.formatToPlainString(y.t.WoiGrV, { suggestion: _ }),
                                resultText: l,
                                onSelect: h,
                            });
                        },
                        getAutocompleteGroupItem: (e) => {
                            let { group: t, rows: i } = e,
                                a = (0, f.Nk)(t),
                                o = t === b.rtL.HISTORY ? (0, r.jsx)(u.do, { searchContext: n }) : null;
                            return (0, f.fC)(d.i.GROUP, {
                                rows: i,
                                title: a,
                                trailingIcon: o,
                            });
                        },
                    });
                return o > 0 && e.push(...s), { items: e };
            },
            [b.Sap.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: i } = (0, u.HU)({
                            value: t.query,
                            avatarSize: a.EFr.SIZE_16,
                            iconSize: "xs",
                        }),
                        o = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: O.itemIcon,
                            }),
                            label:
                                n.type === b.aib.FAVORITES && (0, l.X$)()
                                    ? (0, r.jsx)(u.Q0, { label: y.intl.string(y.t["6RVtLA"]) })
                                    : (0, r.jsx)(u.Q0, {
                                          label: y.intl.format(y.t.rCnaoo, { value: i }),
                                          className: O.labelWithElements,
                                      }),
                            ariaLabel: y.intl.formatToPlainString(y.t.rCnaoo, { value: t.query }),
                            onSelect: () => N({ searchEverywhere: !1 }),
                        });
                    if ((e.push(o), n.type === b.aib.FAVORITES && (0, l.X$)())) {
                        let t = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: O.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, { label: y.intl.string(y.t.FtSUxc) }),
                            onSelect: () => N({ searchEverywhere: !0 }),
                        });
                        e.push(t);
                    }
                }
                let { autocompleteCount: i, autocompleteGroups: o } = C({
                    filterFn: (e) =>
                        e.group !== b.rtL.DATES &&
                        e.group !== b.rtL.SEARCH_OPTIONS &&
                        e.group !== b.dCx.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        var t;
                        let { result: n, modeType: a, group: o } = e,
                            s = (0, f.lw)({
                                modeType: a,
                                result: n,
                                group: o,
                            }),
                            l = (0, u.GM)({
                                result: n,
                                group: o,
                            }),
                            { label: c, ariaLabel: p } = (0, u.Nk)(n),
                            _ =
                                o === b.dCx.FILTER_FROM || o === b.dCx.FILTER_MENTIONS
                                    ? (0, r.jsx)(u.mW, {
                                          searchTokenType: o,
                                          answer: null == (t = n.user) ? void 0 : t.username,
                                      })
                                    : void 0,
                            m = (e) => {
                                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e;
                                P({
                                    selectedIndex: t,
                                    searchAutocompleteSelectAction: r,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: o,
                                    autocompleteCount: i,
                                }),
                                    S({
                                        query: s,
                                        performSearch: !1,
                                        replace: !1,
                                    });
                            };
                        return (0, f.fC)(d.i.ROW, {
                            icon: l,
                            label: c,
                            sublabel: _,
                            ariaLabel: p,
                            resultText: s,
                            onSelect: m,
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: n } = e,
                            r = (0, f.Nk)(t);
                        return (0, f.fC)(d.i.GROUP, {
                            rows: n,
                            title: r,
                        });
                    },
                });
                if (0 === i) {
                    let t = [...A, R({ hasOtherSearchFiltersVisible: !0 })];
                    e.push(
                        (0, f.fC)(d.i.GROUP, {
                            rows: t,
                            title: y.intl.string(y.t.UdhTtk),
                        }),
                    );
                } else {
                    let t = R({ hasOtherSearchFiltersVisible: !1 });
                    e.push(t);
                }
                return i > 0 && e.push(...o), { items: e };
            },
            [b.Sap.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = C({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: n, modeType: r, group: i } = t,
                            a = (0, f.lw)({
                                modeType: r,
                                result: n,
                                group: i,
                            }),
                            o = (0, u.uB)({
                                result: n,
                                group: i,
                            }),
                            { label: s, ariaLabel: l } = (0, u.V4)(n),
                            c = (t) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: o } = t;
                                P({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: o,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: i,
                                    autocompleteCount: e,
                                }),
                                    S({
                                        query: a,
                                        performSearch: !0,
                                        replace: !1,
                                    });
                            };
                        return (0, f.fC)(d.i.ROW, {
                            icon: o,
                            label: s,
                            ariaLabel: l,
                            resultText: a,
                            onSelect: c,
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: n } = e,
                            r = (0, f.Nk)(t);
                        return (0, f.fC)(d.i.GROUP, {
                            rows: n,
                            title: r,
                        });
                    },
                });
                return { items: [...t] };
            },
        }[T.type])(),
        D = i.useMemo(() => {
            let e = [];
            return (
                w.forEach((t) => {
                    switch (t.type) {
                        case d.i.ROW:
                            e.push(t);
                            break;
                        case d.i.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [w]);
    return {
        items: w,
        itemsData: D,
    };
}
