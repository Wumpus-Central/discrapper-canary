r.d(t, { A: () => f });
var s = r(627968),
    n = r(64700),
    l = r(397927),
    a = r(822382),
    i = r(893162),
    o = r(771650),
    u = r(753806),
    c = r(272444),
    d = r(806595),
    h = r(949759),
    _ = r(65600),
    S = r(145331),
    E = r(652215),
    g = r(985018),
    p = r(935606);
function f(e) {
    let { setSearchQuery: t, searchContext: r, mode: f } = e,
        A = (0, i.R)(r);
    return n.useMemo(() => {
        let e = [
            {
                type: E.LWr.FILTER_FROM,
                isEligible: A.has(E.LWr.FILTER_FROM),
                icon: l.nys,
                label: g.intl.string(g.t.ktr6z5),
            },
            {
                type: E.LWr.FILTER_IN,
                isEligible: A.has(E.LWr.FILTER_IN),
                icon: l.N$i,
                label: g.intl.string(g.t.VMjDvS),
            },
            {
                type: E.LWr.FILTER_HAS,
                isEligible: A.has(E.LWr.FILTER_HAS),
                icon: l.PtA,
                label: g.intl.string(g.t.IhIpc7),
            },
            {
                type: E.LWr.FILTER_MENTIONS,
                isEligible: A.has(E.LWr.FILTER_MENTIONS),
                icon: l.XxR,
                label: g.intl.string(g.t.fpKv9Y),
            },
        ];
        return e
            .filter((e) => e.isEligible)
            .map((n) => {
                let { icon: l, label: i, type: E } = n;
                return (0, h.wE)(d.$.ROW, {
                    icon: (0, s.jsx)(l, { size: "sm", color: "currentColor", className: p.Fx }),
                    label: (0, s.jsx)(c.bg, { label: i }),
                    sublabel: (0, s.jsx)(c.bj, { searchTokenType: E }),
                    onSelect: (s) => {
                        let { selectedIndex: n, searchAutocompleteSelectAction: l } = s,
                            i = o.Ay[E]?.key ?? "",
                            c = (0, a.bS)(r);
                        (0, S.kc)({
                            searchContext: r,
                            searchQuery: _.A.getSearchResultsQuery(c),
                            searchQueryString: u.A.getSearchInputText(r),
                            searchTokenType: E,
                            searchAutocompleteGroup: E,
                            searchAutocompleteMode: f,
                            searchAutocompleteResultIndex: n - 1,
                            searchAutocompleteTotalResults: e.length,
                            isSearchFilterPrefix: !0,
                            isSearchFilterAnswer: !1,
                            isSearchFilterComplete: !1,
                            isInFilterForSelectedChannel: !1,
                            searchAutocompleteSelectAction: l,
                        }),
                            t({ query: `${i} `, performSearch: !1, replace: !1 });
                    },
                });
            });
    }, [A, r, f, t]);
}
