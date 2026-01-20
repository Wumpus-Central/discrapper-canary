n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(607802),
    s = n(247902),
    l = n(532428),
    c = n(611004),
    u = n(774322),
    d = n(398944),
    f = n(142243),
    p = n(817190),
    _ = n(315322),
    h = n(981631),
    m = n(388032),
    g = n(467611);
function E(e) {
    let { setSearchQuery: t, searchContext: n, mode: E } = e,
        b = (0, s.N)(n);
    return i.useMemo(() => {
        let e = [
            {
                type: h.dCx.FILTER_FROM,
                isEligible: b.has(h.dCx.FILTER_FROM),
                icon: a.tBG,
                label: m.intl.string(m.t.ktr6z5),
            },
            {
                type: h.dCx.FILTER_IN,
                isEligible: b.has(h.dCx.FILTER_IN),
                icon: a.VL1,
                label: m.intl.string(m.t.VMjDvS),
            },
            {
                type: h.dCx.FILTER_HAS,
                isEligible: b.has(h.dCx.FILTER_HAS),
                icon: a.Ujz,
                label: m.intl.string(m.t.IhIpc7),
            },
            {
                type: h.dCx.FILTER_MENTIONS,
                isEligible: b.has(h.dCx.FILTER_MENTIONS),
                icon: a.lOy,
                label: m.intl.string(m.t.fpKv9Y),
            },
        ];
        return e
            .filter((e) => e.isEligible)
            .map((i) => {
                let { icon: a, label: s, type: h } = i,
                    m = (r) => {
                        var i, a;
                        let { selectedIndex: s, searchAutocompleteSelectAction: u } = r,
                            d = null != (a = null == (i = l.ZP[h]) ? void 0 : i.key) ? a : "",
                            f = (0, o.Tm)(n);
                        (0, _.bh)({
                            searchContext: n,
                            searchQuery: p.Z.getSearchResultsQuery(f),
                            searchQueryString: c.Z.getSearchInputText(n),
                            searchTokenType: h,
                            searchAutocompleteGroup: h,
                            searchAutocompleteMode: E,
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
                        className: g.itemIcon,
                    }),
                    label: (0, r.jsx)(u.Q0, { label: s }),
                    sublabel: (0, r.jsx)(u.mW, { searchTokenType: h }),
                    onSelect: m,
                });
            });
    }, [b, n, E, t]);
}
