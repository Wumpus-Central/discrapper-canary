n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(607802),
    s = n(28964),
    l = n(247902),
    c = n(532428),
    u = n(637879),
    d = n(794137),
    f = n(628221),
    _ = n(611004),
    p = n(817190),
    h = n(315322),
    m = n(981631),
    g = n(388032),
    E = n(493090);
function b(e) {
    let { setSearchQuery: t, searchContext: n, mode: b } = e,
        y = (0, l.N)(n),
        O = (0, s.g)({ location: "usePopularAutocompleteFilters" }),
        v = i.useMemo(
            () => ({
                type: m.dCx.FILTER_MENTIONS,
                isEligible: y.has(m.dCx.FILTER_MENTIONS),
                icon: a.lOy,
                label: g.intl.string(g.t.fpKv9Y),
            }),
            [y],
        ),
        I = i.useMemo(
            () => ({
                type: m.dCx.FILTER_HAS,
                isEligible: y.has(m.dCx.FILTER_HAS),
                icon: a.Ujz,
                label: g.intl.string(g.t.IhIpc7),
            }),
            [y],
        );
    return i.useMemo(() => {
        let e = [
            {
                type: m.dCx.FILTER_FROM,
                isEligible: y.has(m.dCx.FILTER_FROM),
                icon: a.tBG,
                label: g.intl.string(g.t.ktr6z5),
            },
            {
                type: m.dCx.FILTER_IN,
                isEligible: y.has(m.dCx.FILTER_IN),
                icon: a.VL1,
                label: g.intl.string(g.t.VMjDvS),
            },
            O ? I : v,
            O ? v : I,
        ];
        return e
            .filter((e) => e.isEligible)
            .map((i) => {
                let { icon: a, label: s, type: l } = i,
                    m = (r) => {
                        var i, a;
                        let { selectedIndex: s, searchAutocompleteSelectAction: u } = r,
                            d = null != (a = null == (i = c.ZP[l]) ? void 0 : i.key) ? a : "",
                            f = (0, o.Tm)(n);
                        (0, h.bh)({
                            searchContext: n,
                            searchQuery: p.Z.getSearchResultsQuery(f),
                            searchQueryString: _.Z.getSearchInputText(n),
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
                    onSelect: m,
                });
            });
    }, [y, n, b, t, I, v, O]);
}
