n.d(t, {
    A: () => E,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(822382),
    o = n(893162),
    l = n(771650),
    c = n(753806),
    u = n(272444),
    d = n(806595),
    f = n(949759),
    p = n(65600),
    _ = n(145331),
    h = n(652215),
    m = n(985018),
    g = n(935606);

function E(e) {
    let { setSearchQuery: t, searchContext: n, mode: E } = e,
        b = (0, o.R)(n);
    return i.useMemo(() => {
        let e = [
            {
                type: h.LWr.FILTER_FROM,
                isEligible: b.has(h.LWr.FILTER_FROM),
                icon: a.nys,
                label: m.intl.string(m.t.ktr6z5),
            },
            {
                type: h.LWr.FILTER_IN,
                isEligible: b.has(h.LWr.FILTER_IN),
                icon: a.N$i,
                label: m.intl.string(m.t.VMjDvS),
            },
            {
                type: h.LWr.FILTER_HAS,
                isEligible: b.has(h.LWr.FILTER_HAS),
                icon: a.PtA,
                label: m.intl.string(m.t.IhIpc7),
            },
            {
                type: h.LWr.FILTER_MENTIONS,
                isEligible: b.has(h.LWr.FILTER_MENTIONS),
                icon: a.XxR,
                label: m.intl.string(m.t.fpKv9Y),
            },
        ];
        return e
            .filter((e) => e.isEligible)
            .map((i) => {
                let { icon: a, label: o, type: h } = i,
                    m = (r) => {
                        var i, a;
                        let { selectedIndex: o, searchAutocompleteSelectAction: u } = r,
                            d = null != (i = null == (a = l.Ay[h]) ? void 0 : a.key) ? i : "",
                            f = (0, s.bS)(n);
                        (0, _.kc)({
                            searchContext: n,
                            searchQuery: p.A.getSearchResultsQuery(f),
                            searchQueryString: c.A.getSearchInputText(n),
                            searchTokenType: h,
                            searchAutocompleteGroup: h,
                            searchAutocompleteMode: E,
                            searchAutocompleteResultIndex: o - 1,
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
                return (0, f.wE)(d.$.ROW, {
                    icon: (0, r.jsx)(a, {
                        size: "sm",
                        color: "currentColor",
                        className: g.Fx,
                    }),
                    label: (0, r.jsx)(u.bg, {
                        label: o,
                    }),
                    sublabel: (0, r.jsx)(u.bj, {
                        searchTokenType: h,
                    }),
                    onSelect: m,
                });
            });
    }, [b, n, E, t]);
}
