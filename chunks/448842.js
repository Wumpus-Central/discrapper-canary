n.d(t, { Z: () => A }), n(539854), n(388685);
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
    E = n(349504),
    b = n(981631),
    y = n(388032),
    O = n(493090);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { resultsState: t, searchContext: v, selectedChannel: T, setSearchQuery: A } = e,
        C = (0, l.KS)({ location: "SearchFiltersRedesignPopout" }),
        { autocompletes: N, mode: R } = t,
        P = (0, g.Z)({
            autocompletes: N,
            mode: R,
        }),
        w = (0, E.Z)({
            setSearchQuery: A,
            searchContext: v,
            mode: R,
        }),
        D = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("30474"), n.e("37979")]).then(n.bind(n, 238088));
                return (t) => (0, r.jsx)(e, S(I({}, t), { searchContext: v }));
            });
        },
        x = (e) => {
            var t;
            let {
                    autocompleteCount: n,
                    selectedIndex: r,
                    searchAutocompleteSelectAction: i,
                    selectedAutocomplete: a,
                    selectedAutocompleteGroup: l,
                } = e,
                u = R.type,
                d = R.filter,
                { token: f, group: p } = a,
                g = null != p && (0, c._m)(p) ? p : null,
                E = null != (t = null != f ? f : d) ? t : g,
                y = a.channel,
                O = E === b.dCx.FILTER_IN && null != y && y.id === o.Z.getChannelId(),
                I = (0, s.Tm)(v);
            (0, m.bh)({
                searchContext: v,
                searchQuery: h.Z.getSearchResultsQuery(I),
                searchQueryString: _.Z.getSearchInputText(v),
                searchTokenType: E,
                searchAutocompleteGroup: l,
                searchAutocompleteMode: R,
                searchAutocompleteResultIndex: r,
                searchAutocompleteTotalResults: n,
                isSearchFilterPrefix: u === b.Sap.EMPTY,
                isSearchFilterAnswer: u === b.Sap.FILTER,
                isSearchFilterComplete: u === b.Sap.FILTER_ALL,
                isInFilterForSelectedChannel: O,
                searchAutocompleteSelectAction: i,
            });
        },
        { items: L } = (0,
        {
            [b.Sap.EMPTY]: () => {
                let e = [];
                if (null != T && (0, s.R6)(v)) {
                    let t = (0, u.f)(T),
                        n = (e) => {
                            var t;
                            let { selectedChannel: n, searchAutocompleteSelectAction: r } = e;
                            (0, m.tA)({
                                searchContext: v,
                                searchAutocompleteSelectAction: r,
                            });
                            let i = b.dCx.FILTER_IN,
                                a = c.ZP[i],
                                o = (0, s.X3)(n);
                            A({
                                query: ""
                                    .concat(null != (t = null == a ? void 0 : a.key) ? t : i.toString(), " ")
                                    .concat(o),
                                performSearch: !1,
                                replace: !1,
                            });
                        },
                        i = (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(p.MC, {
                                channel: T,
                                className: O.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, {
                                label: y.intl.format(y.t["VGEH//"], { channelName: t }),
                                className: O.labelWithElements,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return n({
                                    selectedChannel: T,
                                    searchAutocompleteSelectAction: t,
                                });
                            },
                        });
                    e.push(i);
                }
                let t = C ? y.intl.string(y.t.diOL4u) : y.intl.string(y.t["M1tf+/"]),
                    n = (0, f.fC)(d.i.ROW, {
                        icon: (0, r.jsx)(a.gXV, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: O.itemIcon,
                        }),
                        label: (0, r.jsx)(u.Q0, { label: t }),
                        onSelect: D,
                    });
                if (C) {
                    let t = [...w, n];
                    e.push(
                        (0, f.fC)(d.i.GROUP, {
                            rows: t,
                            title: y.intl.string(y.t.UdhTtr),
                        }),
                    );
                } else e.push(n);
                let i = C ? e.length + w.length : e.length,
                    { autocompleteCount: o, autocompleteGroups: l } = P({
                        filterFn: (e) => e.group === b.rtL.HISTORY && e.results.length > 0,
                        getAutocompleteRowItem: (e) => {
                            let { result: t, modeType: n, group: r } = e,
                                a = (0, f.lw)({
                                    modeType: n,
                                    result: t,
                                    group: r,
                                }),
                                s = (0, u.GM)({
                                    result: t,
                                    group: r,
                                }),
                                { label: l, ariaLabel: c } = (0, u.dx)(t),
                                _ = (e) => {
                                    let { selectedIndex: t } = e;
                                    (0, m.$z)({
                                        searchContext: v,
                                        searchHistoryIndex: t - i,
                                        searchHistoryTotalResults: o,
                                    }),
                                        A({
                                            query: a,
                                            performSearch: !0,
                                            replace: !1,
                                        });
                                };
                            return (0, f.fC)(d.i.ROW, {
                                icon: s,
                                label: l,
                                ariaLabel: c,
                                resultText: a,
                                onSelect: _,
                            });
                        },
                        getAutocompleteGroupItem: (e) => {
                            let { group: t, rows: n } = e,
                                i = (0, f.Nk)(t),
                                a = t === b.rtL.HISTORY ? (0, r.jsx)(u.do, { searchContext: v }) : null;
                            return (0, f.fC)(d.i.GROUP, {
                                rows: n,
                                title: i,
                                trailingIcon: a,
                            });
                        },
                    });
                return o > 0 && e.push(...l), { items: e };
            },
            [b.Sap.FILTER_ALL]: () => {
                let e = [],
                    n = (0, f.fC)(d.i.ROW, {
                        icon: (0, r.jsx)(a._Ve, {
                            size: "sm",
                            color: "currentColor",
                            className: O.itemIcon,
                        }),
                        label:
                            v.type === b.aib.FAVORITES && (0, s.X$)()
                                ? (0, r.jsx)(u.Q0, { label: y.intl.string(y.t["6RVtLC"]) })
                                : (0, r.jsx)(u.Q0, { label: y.intl.format(y.t.ub226e, { value: t.query }) }),
                        onSelect: () => {},
                    });
                if ((e.push(n), v.type === b.aib.FAVORITES && (0, s.X$)())) {
                    let t = (0, f.fC)(d.i.ROW, {
                        icon: (0, r.jsx)(a._Ve, {
                            size: "sm",
                            color: "currentColor",
                            className: O.itemIcon,
                        }),
                        label: (0, r.jsx)(u.Q0, { label: y.intl.string(y.t.FtSUxc) }),
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
                        className: O.itemIcon,
                    }),
                    label: (0, r.jsx)(u.Q0, { label: y.intl.string(y.t["M1tf+/"]) }),
                    onSelect: D,
                });
                e.push(i);
                let { autocompleteCount: o, autocompleteGroups: l } = P({
                    filterFn: (e) =>
                        e.group !== b.rtL.DATES &&
                        e.group !== b.rtL.SEARCH_OPTIONS &&
                        e.group !== b.dCx.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        var t;
                        let { result: n, modeType: i, group: a } = e,
                            s = (0, f.lw)({
                                modeType: i,
                                result: n,
                                group: a,
                            }),
                            l = (0, u.GM)({
                                result: n,
                                group: a,
                            }),
                            { label: c, ariaLabel: _ } = (0, u.V4)(n),
                            p =
                                a === b.dCx.FILTER_FROM || a === b.dCx.FILTER_MENTIONS
                                    ? (0, r.jsx)(u.mW, {
                                          searchTokenType: a,
                                          answer: null == (t = n.user) ? void 0 : t.username,
                                      })
                                    : void 0,
                            h = (e) => {
                                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e;
                                x({
                                    selectedIndex: t,
                                    searchAutocompleteSelectAction: r,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: a,
                                    autocompleteCount: o,
                                }),
                                    A({
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
                });
                return o > 0 && e.push(...l), { items: e };
            },
            [b.Sap.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: n } = P({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: n, modeType: r, group: i } = t,
                            a = (0, f.lw)({
                                modeType: r,
                                result: n,
                                group: i,
                            }),
                            o = (0, u.GM)({
                                result: n,
                                group: i,
                            }),
                            { label: s, ariaLabel: l } = (0, u.V4)(n),
                            c = (t) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: o } = t;
                                x({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: o,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: i,
                                    autocompleteCount: e,
                                }),
                                    A({
                                        query: a,
                                        performSearch: !1,
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
                return {
                    items: [
                        ...n,
                        (0, f.fC)(d.i.ROW, {
                            icon: (0, r.jsx)(a._Ve, {
                                size: "sm",
                                color: "currentColor",
                                className: O.itemIcon,
                            }),
                            label: (0, r.jsx)(u.Q0, { label: y.intl.format(y.t.ub226e, { value: t.query }) }),
                            onSelect: () => {},
                        }),
                    ],
                };
            },
        }[R.type])(),
        j = i.useMemo(() => {
            let e = [];
            return (
                L.forEach((t) => {
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
        }, [L]);
    return {
        items: L,
        itemsData: j,
    };
}
