n.d(t, { Z: () => O }), n(539854), n(388685), n(781311);
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
    _ = n(611004),
    p = n(817190),
    h = n(315322),
    m = n(52459),
    g = n(349504),
    E = n(981631),
    b = n(388032),
    y = n(493090);
function O(e) {
    let { resultsState: t, searchContext: n, selectedChannel: O, setSearchQuery: v } = e,
        { autocompletes: I, mode: T } = t,
        S = (0, m.Z)({
            autocompletes: I,
            mode: T,
        }),
        A = (0, g.Z)({
            setSearchQuery: v,
            searchContext: n,
            mode: T,
        }),
        C = (e) => {
            let { searchEverywhere: t } = e;
            s.S.dispatch(E.CkL.PERFORM_SEARCH, { searchEverywhere: t });
        },
        N = (e) => {
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
                { token: m, group: g } = s,
                b = null != g && (0, c._m)(g) ? g : null,
                y = null != (t = null != m ? m : f) ? t : b,
                O = s.channel,
                v = y === E.dCx.FILTER_IN && null != O && O.id === o.Z.getChannelId(),
                I = (0, l.Tm)(n);
            (0, h.bh)({
                searchContext: n,
                searchQuery: p.Z.getSearchResultsQuery(I),
                searchQueryString: _.Z.getSearchInputText(n),
                searchTokenType: y,
                searchAutocompleteGroup: u,
                searchAutocompleteMode: T,
                searchAutocompleteResultIndex: i,
                searchAutocompleteTotalResults: r,
                isSearchFilterPrefix: d === E.Sap.EMPTY,
                isSearchFilterAnswer: d === E.Sap.FILTER,
                isSearchFilterComplete: d === E.Sap.FILTER_ALL,
                isInFilterForSelectedChannel: v,
                searchAutocompleteSelectAction: a,
            });
        },
        R = i.useCallback(
            (e) => {
                let { hasOtherSearchFiltersVisible: t } = e,
                    i = t ? b.intl.string(b.t.diOL4i) : b.intl.string(b.t["M1tf+7"]);
                return (0, f.fC)(d.i.ROW, {
                    icon: (0, r.jsx)(a.gXV, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: y.itemIcon,
                    }),
                    label: (0, r.jsx)(u.Q0, { label: i }),
                    onSelect: () => _.Z.openSearchFiltersModal(n),
                });
            },
            [n],
        ),
        { items: P } = (0,
        {
            [E.Sap.EMPTY]: () => {
                let e = [];
                if (null != O && (0, l.R6)(n) && n.type === E.aib.DMS) {
                    let t = (0, u.f)(O),
                        i = (e) => {
                            var t;
                            let { selectedChannel: r, searchAutocompleteSelectAction: i } = e;
                            (0, h.tA)({
                                searchContext: n,
                                searchAutocompleteSelectAction: i,
                            });
                            let a = E.dCx.FILTER_IN,
                                o = c.ZP[a],
                                s = (0, l.X3)(r);
                            v({
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
                                className: y.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, {
                                label: b.intl.format(b.t["VGEH/0"], { channelName: t }),
                                className: y.labelWithElements,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return i({
                                    selectedChannel: O,
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
                        title: b.intl.string(b.t.UdhTtk),
                    }),
                );
                let i = e.length + A.length,
                    { autocompleteCount: o, autocompleteGroups: s } = S({
                        filterFn: (e) => e.group === E.rtL.HISTORY && e.results.length > 0,
                        getAutocompleteRowItem: (e) => {
                            let { result: t, modeType: r, group: a } = e,
                                s = (0, f.lw)({
                                    modeType: r,
                                    result: t,
                                    group: a,
                                }),
                                l = (0, u.GM)({
                                    result: t,
                                    group: a,
                                }),
                                { label: c, ariaLabel: _ } = (0, u.HU)({ value: t.text }),
                                p = (e) => {
                                    let { selectedIndex: t } = e;
                                    (0, h.$z)({
                                        searchContext: n,
                                        searchHistoryIndex: t - i,
                                        searchHistoryTotalResults: o,
                                    }),
                                        v({
                                            query: s,
                                            performSearch: !0,
                                            replace: !1,
                                        });
                                };
                            return (0, f.fC)(d.i.ROW, {
                                icon: l,
                                label: c,
                                ariaLabel: b.intl.formatToPlainString(b.t.WoiGrV, { suggestion: _ }),
                                resultText: s,
                                onSelect: p,
                            });
                        },
                        getAutocompleteGroupItem: (e) => {
                            let { group: t, rows: i } = e,
                                a = (0, f.Nk)(t),
                                o = t === E.rtL.HISTORY ? (0, r.jsx)(u.do, { searchContext: n }) : null;
                            return (0, f.fC)(d.i.GROUP, {
                                rows: i,
                                title: a,
                                trailingIcon: o,
                            });
                        },
                    });
                return o > 0 && e.push(...s), { items: e };
            },
            [E.Sap.FILTER_ALL]: () => {
                let e = [];
                if ("" !== t.query.trim()) {
                    let { label: i } = (0, u.HU)({ value: t.query }),
                        o = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: y.itemIcon,
                            }),
                            label:
                                n.type === E.aib.FAVORITES && (0, l.X$)()
                                    ? (0, r.jsx)(u.Q0, { label: b.intl.string(b.t["6RVtLA"]) })
                                    : (0, r.jsx)(u.Q0, {
                                          label: b.intl.format(b.t.rCnaoo, { value: i }),
                                          className: y.labelWithElements,
                                      }),
                            ariaLabel: b.intl.formatToPlainString(b.t.rCnaoo, { value: t.query }),
                            onSelect: () => C({ searchEverywhere: !1 }),
                        });
                    if ((e.push(o), n.type === E.aib.FAVORITES && (0, l.X$)())) {
                        let t = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: y.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, { label: b.intl.string(b.t.FtSUxc) }),
                            onSelect: () => C({ searchEverywhere: !0 }),
                        });
                        e.push(t);
                    }
                }
                let { autocompleteCount: i, autocompleteGroups: o } = S({
                        filterFn: (e) =>
                            e.group !== E.rtL.DATES &&
                            e.group !== E.rtL.SEARCH_OPTIONS &&
                            e.group !== E.dCx.FILTER_HAS &&
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
                                { label: c, ariaLabel: _ } = (0, u.Nk)(n),
                                p =
                                    o === E.dCx.FILTER_FROM || o === E.dCx.FILTER_MENTIONS
                                        ? (0, r.jsx)(u.mW, {
                                              searchTokenType: o,
                                              answer: null == (t = n.user) ? void 0 : t.username,
                                          })
                                        : void 0,
                                h = (e) => {
                                    let { selectedIndex: t, searchAutocompleteSelectAction: r } = e;
                                    N({
                                        selectedIndex: t,
                                        searchAutocompleteSelectAction: r,
                                        selectedAutocomplete: n,
                                        selectedAutocompleteGroup: o,
                                        autocompleteCount: i,
                                    }),
                                        v({
                                            query: s,
                                            performSearch: !1,
                                            replace: !1,
                                        });
                                };
                            return (0, f.fC)(d.i.ROW, {
                                icon: l,
                                label: c,
                                sublabel: p,
                                ariaLabel: _,
                                resultText: s,
                                onSelect: h,
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
                    }),
                    s = R({ hasOtherSearchFiltersVisible: 0 !== i });
                if (0 === i) {
                    let t = [...A, s];
                    e.push(
                        (0, f.fC)(d.i.GROUP, {
                            rows: t,
                            title: b.intl.string(b.t.UdhTtk),
                        }),
                    );
                } else e.push(s);
                return i > 0 && e.push(...o), { items: e };
            },
            [E.Sap.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = S({
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
                                N({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: o,
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
                P.forEach((t) => {
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
        }, [P]);
    return {
        items: P,
        itemsData: D,
    };
}
