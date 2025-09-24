n.d(t, { Z: () => C }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(944486),
    s = n(585483),
    l = n(607802),
    c = n(28964),
    u = n(532428),
    d = n(637879),
    f = n(794137),
    _ = n(628221),
    p = n(611004),
    h = n(579612),
    m = n(817190),
    g = n(315322),
    E = n(52459),
    b = n(349504),
    y = n(981631),
    O = n(388032),
    v = n(493090);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { resultsState: t, searchContext: I, selectedChannel: S, setSearchQuery: C } = e,
        N = (0, c.KS)({ location: "SearchFiltersRedesignPopout" }),
        { autocompletes: R, mode: P } = t,
        w = (0, E.Z)({
            autocompletes: R,
            mode: P,
        }),
        D = (0, b.Z)({
            setSearchQuery: C,
            searchContext: I,
            mode: P,
        }),
        x = (e) => {
            let { searchEverywhere: t } = e;
            s.S.dispatch(y.CkL.PERFORM_SEARCH, { searchEverywhere: t });
        },
        L = () => {
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("30474"), n.e("37979"), n.e("49205")]).then(
                    n.bind(n, 238088),
                );
                return (t) => (0, r.jsx)(e, A(T({}, t), { searchContext: I }));
            });
        },
        j = (e) => {
            var t;
            let {
                    autocompleteCount: n,
                    selectedIndex: r,
                    searchAutocompleteSelectAction: i,
                    selectedAutocomplete: a,
                    selectedAutocompleteGroup: s,
                } = e,
                c = P.type,
                d = P.filter,
                { token: f, group: _ } = a,
                h = null != _ && (0, u._m)(_) ? _ : null,
                E = null != (t = null != f ? f : d) ? t : h,
                b = a.channel,
                O = E === y.dCx.FILTER_IN && null != b && b.id === o.Z.getChannelId(),
                v = (0, l.Tm)(I);
            (0, g.bh)({
                searchContext: I,
                searchQuery: m.Z.getSearchResultsQuery(v),
                searchQueryString: p.Z.getSearchInputText(I),
                searchTokenType: E,
                searchAutocompleteGroup: s,
                searchAutocompleteMode: P,
                searchAutocompleteResultIndex: r,
                searchAutocompleteTotalResults: n,
                isSearchFilterPrefix: c === y.Sap.EMPTY,
                isSearchFilterAnswer: c === y.Sap.FILTER,
                isSearchFilterComplete: c === y.Sap.FILTER_ALL,
                isInFilterForSelectedChannel: O,
                searchAutocompleteSelectAction: i,
            });
        },
        M = i.useMemo(() => {
            let { label: e } = (0, d.HU)({ value: t.query });
            return (0, _.fC)(f.i.ROW, {
                icon: (0, r.jsx)(a._Ve, {
                    size: "sm",
                    color: "currentColor",
                    className: v.itemIcon,
                }),
                label:
                    I.type === y.aib.FAVORITES && (0, l.X$)()
                        ? (0, r.jsx)(d.Q0, { label: O.intl.string(O.t["6RVtLC"]) })
                        : (0, r.jsx)(d.Q0, {
                              label: O.intl.format(O.t.rCnaoq, { value: e }),
                              className: v.labelWithElements,
                          }),
                ariaLabel: O.intl.formatToPlainString(O.t.rCnaoq, { value: t.query }),
                onSelect: () => x({ searchEverywhere: !1 }),
            });
        }, [t.query, I.type]),
        { items: k } = (0,
        {
            [y.Sap.EMPTY]: () => {
                let e = [];
                if (null != S && (0, l.R6)(I)) {
                    let t = (0, d.f)(S),
                        n = (e) => {
                            var t;
                            let { selectedChannel: n, searchAutocompleteSelectAction: r } = e;
                            (0, g.tA)({
                                searchContext: I,
                                searchAutocompleteSelectAction: r,
                            });
                            let i = y.dCx.FILTER_IN,
                                a = u.ZP[i],
                                o = (0, l.X3)(n);
                            C({
                                query: ""
                                    .concat(null != (t = null == a ? void 0 : a.key) ? t : i.toString(), " ")
                                    .concat(o),
                                performSearch: !0,
                                replace: !1,
                            });
                        },
                        i = (0, _.fC)(f.i.ROW, {
                            icon: (0, r.jsx)(h.MC, {
                                channel: S,
                                className: v.itemIcon,
                            }),
                            label: (0, r.jsx)(d.Q0, {
                                label: O.intl.format(O.t["VGEH//"], { channelName: t }),
                                className: v.labelWithElements,
                            }),
                            onSelect: (e) => {
                                let { searchAutocompleteSelectAction: t } = e;
                                return n({
                                    selectedChannel: S,
                                    searchAutocompleteSelectAction: t,
                                });
                            },
                        });
                    e.push(i);
                }
                let t = N ? O.intl.string(O.t.diOL4u) : O.intl.string(O.t["M1tf+/"]),
                    n = (0, _.fC)(f.i.ROW, {
                        icon: (0, r.jsx)(a.gXV, {
                            size: "custom",
                            color: "currentColor",
                            width: 20,
                            height: 20,
                            className: v.itemIcon,
                        }),
                        label: (0, r.jsx)(d.Q0, { label: t }),
                        onSelect: L,
                    });
                if (N) {
                    let t = [...D, n];
                    e.push(
                        (0, _.fC)(f.i.GROUP, {
                            rows: t,
                            title: O.intl.string(O.t.UdhTtr),
                        }),
                    );
                } else e.push(n);
                let i = N ? e.length + D.length : e.length,
                    { autocompleteCount: o, autocompleteGroups: s } = w({
                        filterFn: (e) => e.group === y.rtL.HISTORY && e.results.length > 0,
                        getAutocompleteRowItem: (e) => {
                            let { result: t, modeType: n, group: r } = e,
                                a = (0, _.lw)({
                                    modeType: n,
                                    result: t,
                                    group: r,
                                }),
                                s = (0, d.GM)({
                                    result: t,
                                    group: r,
                                }),
                                { label: l, ariaLabel: c } = (0, d.HU)({ value: t.text }),
                                u = (e) => {
                                    let { selectedIndex: t } = e;
                                    (0, g.$z)({
                                        searchContext: I,
                                        searchHistoryIndex: t - i,
                                        searchHistoryTotalResults: o,
                                    }),
                                        C({
                                            query: a,
                                            performSearch: !0,
                                            replace: !1,
                                        });
                                };
                            return (0, _.fC)(f.i.ROW, {
                                icon: s,
                                label: l,
                                ariaLabel: O.intl.formatToPlainString(O.t.WoiGra, { suggestion: c }),
                                resultText: a,
                                onSelect: u,
                            });
                        },
                        getAutocompleteGroupItem: (e) => {
                            let { group: t, rows: n } = e,
                                i = (0, _.Nk)(t),
                                a = t === y.rtL.HISTORY ? (0, r.jsx)(d.do, { searchContext: I }) : null;
                            return (0, _.fC)(f.i.GROUP, {
                                rows: n,
                                title: i,
                                trailingIcon: a,
                            });
                        },
                    });
                return o > 0 && e.push(...s), { items: e };
            },
            [y.Sap.FILTER_ALL]: () => {
                let e = [];
                if ((e.push(M), I.type === y.aib.FAVORITES && (0, l.X$)())) {
                    let t = (0, _.fC)(f.i.ROW, {
                        icon: (0, r.jsx)(a._Ve, {
                            size: "sm",
                            color: "currentColor",
                            className: v.itemIcon,
                        }),
                        label: (0, r.jsx)(d.Q0, { label: O.intl.string(O.t.FtSUxc) }),
                        onSelect: () => x({ searchEverywhere: !0 }),
                    });
                    e.push(t);
                }
                let t = (0, _.fC)(f.i.ROW, {
                    icon: (0, r.jsx)(a.gXV, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: v.itemIcon,
                    }),
                    label: (0, r.jsx)(d.Q0, { label: O.intl.string(O.t["M1tf+/"]) }),
                    onSelect: L,
                });
                e.push(t);
                let { autocompleteCount: n, autocompleteGroups: i } = w({
                    filterFn: (e) =>
                        e.group !== y.rtL.DATES &&
                        e.group !== y.rtL.SEARCH_OPTIONS &&
                        e.group !== y.dCx.FILTER_HAS &&
                        e.results.length > 0,
                    getAutocompleteRowItem: (e) => {
                        var t;
                        let { result: i, modeType: a, group: o } = e,
                            s = (0, _.lw)({
                                modeType: a,
                                result: i,
                                group: o,
                            }),
                            l = (0, d.GM)({
                                result: i,
                                group: o,
                            }),
                            { label: c, ariaLabel: u } = (0, d.Nk)(i),
                            p =
                                o === y.dCx.FILTER_FROM || o === y.dCx.FILTER_MENTIONS
                                    ? (0, r.jsx)(d.mW, {
                                          searchTokenType: o,
                                          answer: null == (t = i.user) ? void 0 : t.username,
                                      })
                                    : void 0,
                            h = (e) => {
                                let { selectedIndex: t, searchAutocompleteSelectAction: r } = e;
                                j({
                                    selectedIndex: t,
                                    searchAutocompleteSelectAction: r,
                                    selectedAutocomplete: i,
                                    selectedAutocompleteGroup: o,
                                    autocompleteCount: n,
                                }),
                                    C({
                                        query: s,
                                        performSearch: !1,
                                        replace: !1,
                                    });
                            };
                        return (0, _.fC)(f.i.ROW, {
                            icon: l,
                            label: c,
                            sublabel: p,
                            ariaLabel: u,
                            resultText: s,
                            onSelect: h,
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: n } = e,
                            r = (0, _.Nk)(t);
                        return (0, _.fC)(f.i.GROUP, {
                            rows: n,
                            title: r,
                        });
                    },
                });
                return n > 0 && e.push(...i), { items: e };
            },
            [y.Sap.FILTER]: () => {
                let { autocompleteCount: e, autocompleteGroups: t } = w({
                    filterFn: (e) => e.results.length > 0,
                    getAutocompleteRowItem: (t) => {
                        let { result: n, modeType: r, group: i } = t,
                            a = (0, _.lw)({
                                modeType: r,
                                result: n,
                                group: i,
                            }),
                            o = (0, d.uB)(n),
                            { label: s, ariaLabel: l } = (0, d.V4)(n),
                            c = (t) => {
                                let { selectedIndex: r, searchAutocompleteSelectAction: o } = t;
                                j({
                                    selectedIndex: r,
                                    searchAutocompleteSelectAction: o,
                                    selectedAutocomplete: n,
                                    selectedAutocompleteGroup: i,
                                    autocompleteCount: e,
                                }),
                                    C({
                                        query: a,
                                        performSearch: !0,
                                        replace: !1,
                                    });
                            };
                        return (0, _.fC)(f.i.ROW, {
                            icon: o,
                            label: s,
                            ariaLabel: l,
                            resultText: a,
                            onSelect: c,
                        });
                    },
                    getAutocompleteGroupItem: (e) => {
                        let { group: t, rows: n } = e,
                            r = (0, _.Nk)(t);
                        return (0, _.fC)(f.i.GROUP, {
                            rows: n,
                            title: r,
                        });
                    },
                });
                return { items: [...t] };
            },
        }[P.type])(),
        U = i.useMemo(() => {
            let e = [];
            return (
                k.forEach((t) => {
                    switch (t.type) {
                        case f.i.ROW:
                            e.push(t);
                            break;
                        case f.i.GROUP:
                            t.data.rows.forEach((t) => e.push(t));
                    }
                }),
                e
            );
        }, [k]);
    return {
        items: k,
        itemsData: U,
    };
}
