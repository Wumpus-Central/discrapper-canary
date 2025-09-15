n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(607802),
    s = n(247902),
    l = n(532428),
    c = n(637879),
    u = n(794137),
    d = n(628221),
    f = n(611004),
    _ = n(817190),
    p = n(315322),
    h = n(981631),
    m = n(388032),
    g = n(493090);
function E(e) {
    let { setSearchQuery: t, searchContext: n, mode: E } = e,
        b = (0, s.N)(n);
    return i.useMemo(() => {
        let e = [
            {
                type: h.dCx.FILTER_FROM,
                isEligible: b.has(h.dCx.FILTER_FROM),
                icon: a.tBG,
                label: m.intl.string(m.t.ktr6z8),
            },
            {
                type: h.dCx.FILTER_IN,
                isEligible: b.has(h.dCx.FILTER_IN),
                icon: a.VL1,
                label: m.intl.string(m.t.VMjDvb),
            },
            {
                type: h.dCx.FILTER_MENTIONS,
                isEligible: b.has(h.dCx.FILTER_MENTIONS),
                icon: a.lOy,
                label: m.intl.string(m.t.fpKv9f),
            },
            {
                type: h.dCx.FILTER_HAS,
                isEligible: b.has(h.dCx.FILTER_HAS),
                icon: a.Ujz,
                label: m.intl.string(m.t.IhIpc3),
            },
        ];
        return e
            .filter((e) => e.isEligible)
            .map((i) => {
                let { icon: a, label: s, type: h } = i,
                    m = (r) => {
                        var i, a;
                        let { selectedIndex: s, searchAutocompleteSelectAction: c } = r,
                            u = null != (a = null == (i = l.ZP[h]) ? void 0 : i.key) ? a : "",
                            d = (0, o.Tm)(n);
                        (0, p.bh)({
                            searchContext: n,
                            searchQuery: _.Z.getSearchResultsQuery(d),
                            searchQueryString: f.Z.getSearchInputText(n),
                            searchTokenType: h,
                            searchAutocompleteGroup: h,
                            searchAutocompleteMode: E,
                            searchAutocompleteResultIndex: s - 1,
                            searchAutocompleteTotalResults: e.length,
                            isSearchFilterPrefix: !0,
                            isSearchFilterAnswer: !1,
                            isSearchFilterComplete: !1,
                            isInFilterForSelectedChannel: !1,
                            searchAutocompleteSelectAction: c,
                        }),
                            t({
                                query: "".concat(u, " "),
                                performSearch: !1,
                                replace: !1,
                            });
                    };
                return (0, d.fC)(u.i.ROW, {
                    icon: (0, r.jsx)(a, {
                        size: "sm",
                        color: "currentColor",
                        className: g.itemIcon,
                    }),
                    label: (0, r.jsx)(c.Q0, { label: s }),
                    sublabel: (0, r.jsx)(c.mW, { searchTokenType: h }),
                    onSelect: m,
                });
            });
    }, [b, n, E, t]);
}
