n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(607802),
    s = n(28964),
    l = n(247902),
    c = n(532428),
    u = n(637879),
    d = n(794137),
    f = n(628221),
    p = n(611004),
    _ = n(817190),
    m = n(315322),
    h = n(981631),
    g = n(388032),
    E = n(409735);
function b(e) {
    let { setSearchQuery: t, searchContext: n, mode: b } = e,
        y = (0, l.N)(n),
        O = (0, s.g_)({ location: "usePopularAutocompleteFilters" }),
        v = i.useMemo(
            () => ({
                type: h.dCx.FILTER_MENTIONS,
                isEligible: y.has(h.dCx.FILTER_MENTIONS),
                icon: a.lOy,
                label: g.intl.string(g.t.fpKv9Y),
            }),
            [y],
        ),
        S = i.useMemo(
            () => ({
                type: h.dCx.FILTER_HAS,
                isEligible: y.has(h.dCx.FILTER_HAS),
                icon: a.Ujz,
                label: g.intl.string(g.t.IhIpc7),
            }),
            [y],
        );
    return i.useMemo(() => {
        let e = [
            {
                type: h.dCx.FILTER_FROM,
                isEligible: y.has(h.dCx.FILTER_FROM),
                icon: a.tBG,
                label: g.intl.string(g.t.ktr6z5),
            },
            {
                type: h.dCx.FILTER_IN,
                isEligible: y.has(h.dCx.FILTER_IN),
                icon: a.VL1,
                label: g.intl.string(g.t.VMjDvS),
            },
            O ? S : v,
            O ? v : S,
        ];
        return e
            .filter((e) => e.isEligible)
            .map((i) => {
                let { icon: a, label: s, type: l } = i,
                    h = (r) => {
                        var i, a;
                        let { selectedIndex: s, searchAutocompleteSelectAction: u } = r,
                            d = null != (a = null == (i = c.ZP[l]) ? void 0 : i.key) ? a : "",
                            f = (0, o.Tm)(n);
                        (0, m.bh)({
                            searchContext: n,
                            searchQuery: _.Z.getSearchResultsQuery(f),
                            searchQueryString: p.Z.getSearchInputText(n),
                            searchTokenType: l,
                            searchAutocompleteGroup: l,
                            searchAutocompleteMode: b,
                            searchAutocompleteResultIndex: s - 1,
                            searchAutocompleteTotalResults: e.length,
                            isSearchFilterPrefix: !0,
                            isSearchFilterAnswer: !1,
                            isSearchFilterComplete: !1,
                            isInFilterForSelectedChannel: !1,
                            searchAutocompleteSelectAction: u,
                        }),
                            t({
                                query: "".concat(d, " "),
                                performSearch: !1,
                                replace: !1,
                            });
                    };
                return (0, f.fC)(d.i.ROW, {
                    icon: (0, r.jsx)(a, {
                        size: "sm",
                        color: "currentColor",
                        className: E.itemIcon,
                    }),
                    label: (0, r.jsx)(u.Q0, { label: s }),
                    sublabel: (0, r.jsx)(u.mW, { searchTokenType: l }),
                    onSelect: h,
                });
            });
    }, [y, n, b, t, S, v, O]);
}
