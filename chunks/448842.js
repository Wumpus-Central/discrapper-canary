n.d(t, { Z: () => S }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(944486),
    s = n(607802),
    l = n(28964),
    c = n(532428),
    u = n(637879),
    d = n(794137),
    f = n(628221),
    _ = n(611004),
    p = n(579612),
    h = n(817190),
    m = n(315322),
    g = n(52459),
    E = n(981631),
    b = n(388032),
    y = n(493090);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { resultsState: t, searchContext: O, selectedChannel: I, setSearchQuery: S } = e,
        A = (0, l.KS)({
            isXDMSearch: O.type === E.aib.DMS,
            location: "SearchFiltersRedesignPopout",
        }),
        { autocompletes: C, mode: N } = t,
        R = (0, g.Z)({
            autocompletes: C,
            mode: N,
            searchContext: O,
            setSearchQuery: S,
        }),
        P = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("36745"), n.e("37979")]).then(n.bind(n, 238088));
                return (t) => (0, r.jsx)(e, T(v({}, t), { searchContext: O }));
            });
        },
        { items: w } = (0,
        {
            [E.Sap.EMPTY]: () => {
                let e = [];
                if (null != I) {
                    let t = (0, u.f)(I),
                        n = (e) => {
                            var t;
                            let { selectedChannel: n, searchAutocompleteSelectAction: r } = e;
                            (0, m.tA)({
                                searchContext: O,
                                searchAutocompleteSelectAction: r,
                            });
                            let i = E.dCx.FILTER_IN,
                                a = c.ZP[i],
                                o = (0, s.X3)(n);
                            S({
                                query: ""
                                    .concat(null != (t = null == a ? void 0 : a.key) ? t : i.toString(), " ")
                                    .concat(o),
                                performSearch: !1,
                                replace: !1,
                            });
                        },
                        i = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(p.MC, {
                                channel: I,
                                className: y.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, { label: b.intl.format(b.t["VGEH//"], { channelName: t }) }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return n({
                                    selectedChannel: I,
                                    searchAutocompleteSelectAction: t,
                                });
                            },
                        });
                    e.push(i);
                }
                let t = A ? b.intl.string(b.t.diOL4u) : b.intl.string(b.t["M1tf+/"]),
                    n = (0, f.fC)(d.i.ROW, {
                        icon: (0, r.jsx)(a.gXV, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: y.itemIcon,
                        }),
                        label: (0, r.jsx)(u.Q0, { label: t }),
                        onSelect: P,
                    });
                e.push(n);
                let i = e.length,
                    { autocompleteCount: o, autocompleteGroups: l } = R({
                        performSearch: !0,
                        filterFn: (e) => e.group === E.rtL.HISTORY && e.results.length > 0,
                        icon: (0, r.jsx)(a._Ve, {
                            size: "sm",
                            color: "currentColor",
                            className: y.itemIcon,
                        }),
                        getAutocompleteLabel: u.dx,
                        trackSearchResult: (e) => {
                            let { selectedIndex: t } = e;
                            (0, m.$z)({
                                searchContext: O,
                                searchHistoryIndex: t - i,
                                searchHistoryTotalResults: o,
                            });
                        },
                    });
                return o > 0 && e.push(...l), { items: e };
            },
            [E.Sap.FILTER_ALL]: () => {
                let e = [],
                    n = (0, f.fC)(d.i.ROW, {
                        icon: (0, r.jsx)(a._Ve, {
                            size: "sm",
                            color: "currentColor",
                            className: y.itemIcon,
                        }),
                        label:
                            O.type === E.aib.FAVORITES && (0, s.X$)()
                                ? (0, r.jsx)(u.Q0, { label: b.intl.string(b.t["6RVtLC"]) })
                                : (0, r.jsx)(u.Q0, { label: b.intl.format(b.t.ub226e, { value: t.query }) }),
                        onSelect: () => {},
                    });
                if ((e.push(n), O.type === E.aib.FAVORITES && (0, s.X$)())) {
                    let t = (0, f.fC)(d.i.ROW, {
                        icon: (0, r.jsx)(a._Ve, {
                            size: "sm",
                            color: "currentColor",
                            className: y.itemIcon,
                        }),
                        label: (0, r.jsx)(u.Q0, { label: b.intl.string(b.t.FtSUxc) }),
                        onSelect: () => {},
                    });
                    e.push(t);
                }
                let i = (0, f.fC)(d.i.ROW, {
                    icon: (0, r.jsx)(a.gXV, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: y.itemIcon,
                    }),
                    label: (0, r.jsx)(u.Q0, { label: b.intl.string(b.t["M1tf+/"]) }),
                    onSelect: P,
                });
                e.push(i);
                let { autocompleteCount: l, autocompleteGroups: p } = R({
                    performSearch: !1,
                    filterFn: (e) => e.group !== E.rtL.DATES && e.group !== E.dCx.FILTER_HAS && e.results.length > 0,
                    icon: (0, r.jsx)(a._Ve, {
                        size: "sm",
                        color: "currentColor",
                        className: y.itemIcon,
                    }),
                    getAutocompleteLabel: u.dx,
                    trackSearchResult: (e) => {
                        var t;
                        let {
                                selectedIndex: n,
                                searchAutocompleteSelectAction: r,
                                selectedAutocomplete: i,
                                selectedAutocompleteGroup: a,
                            } = e,
                            u = N.type,
                            d = N.filter,
                            { token: f, group: p } = i,
                            g = null != p && (0, c._m)(p) ? p : null,
                            b = null != (t = null != f ? f : d) ? t : g,
                            y = i.channel,
                            v = b === E.dCx.FILTER_IN && null != y && y.id === o.Z.getChannelId(),
                            I = (0, s.Tm)(O);
                        (0, m.bh)({
                            searchContext: O,
                            searchQuery: h.Z.getSearchResultsQuery(I),
                            searchQueryString: _.Z.getSearchInputText(O),
                            searchTokenType: b,
                            searchAutocompleteGroup: a,
                            searchAutocompleteMode: N,
                            searchAutocompleteResultIndex: n,
                            searchAutocompleteTotalResults: l,
                            isSearchFilterPrefix: u === E.Sap.EMPTY,
                            isSearchFilterAnswer: u === E.Sap.FILTER,
                            isSearchFilterComplete: u === E.Sap.FILTER_ALL,
                            isInFilterForSelectedChannel: v,
                            searchAutocompleteSelectAction: r,
                        });
                    },
                });
                return l > 0 && e.push(...p), { items: e };
            },
            [E.Sap.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: n } = R({
                    performSearch: !1,
                    filterFn: (e) => e.results.length > 0,
                    icon: (0, r.jsx)(a._Ve, {
                        size: "sm",
                        color: "currentColor",
                        className: y.itemIcon,
                    }),
                    getAutocompleteLabel: u.dx,
                    trackSearchResult: (t) => {
                        var n;
                        let {
                                selectedIndex: r,
                                searchAutocompleteSelectAction: i,
                                selectedAutocomplete: a,
                                selectedAutocompleteGroup: l,
                            } = t,
                            u = N.type,
                            d = N.filter,
                            { token: f, group: p } = a,
                            g = null != p && (0, c._m)(p) ? p : null,
                            b = null != (n = null != f ? f : d) ? n : g,
                            y = a.channel,
                            v = b === E.dCx.FILTER_IN && null != y && y.id === o.Z.getChannelId(),
                            I = (0, s.Tm)(O);
                        (0, m.bh)({
                            searchContext: O,
                            searchQuery: h.Z.getSearchResultsQuery(I),
                            searchQueryString: _.Z.getSearchInputText(O),
                            searchTokenType: b,
                            searchAutocompleteGroup: l,
                            searchAutocompleteMode: N,
                            searchAutocompleteResultIndex: r,
                            searchAutocompleteTotalResults: e,
                            isSearchFilterPrefix: u === E.Sap.EMPTY,
                            isSearchFilterAnswer: u === E.Sap.FILTER,
                            isSearchFilterComplete: u === E.Sap.FILTER_ALL,
                            isInFilterForSelectedChannel: v,
                            searchAutocompleteSelectAction: i,
                        });
                    },
                });
                return {
                    items: [
                        ...n,
                        (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: y.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, { label: b.intl.format(b.t.ub226e, { value: t.query }) }),
                            onSelect: () => {},
                        }),
                    ],
                };
            },
        }[N.type])(),
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
