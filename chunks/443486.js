r.d(t, { A: () => g });
var n = r(627968),
    s = r(64700),
    l = r(397927),
    a = r(822382),
    i = r(771650),
    o = r(674142),
    u = r(753806),
    c = r(272444),
    h = r(806595),
    d = r(949759),
    _ = r(65600),
    S = r(145331),
    E = r(652215),
    f = r(985018),
    p = r(611027);
function g(e) {
    let { setSearchQuery: t, searchContext: r, mode: g } = e,
        A = (0, o.o)(r);
    return s.useMemo(() => {
        let e = [
            {
                type: E.LWr.FILTER_FROM,
                isEligible: A.has(E.LWr.FILTER_FROM),
                icon: l.nys,
                label: f.intl.string(f.t.ktr6z5),
            },
            {
                type: E.LWr.FILTER_IN,
                isEligible: A.has(E.LWr.FILTER_IN),
                icon: l.N$i,
                label: f.intl.string(f.t.VMjDvS),
            },
            {
                type: E.LWr.FILTER_HAS,
                isEligible: A.has(E.LWr.FILTER_HAS),
                icon: l.PtA,
                label: f.intl.string(f.t.IhIpc7),
            },
            {
                type: E.LWr.FILTER_MENTIONS,
                isEligible: A.has(E.LWr.FILTER_MENTIONS),
                icon: l.XxR,
                label: f.intl.string(f.t.fpKv9Y),
            },
        ];
        return e
            .filter((e) => e.isEligible)
            .map((s) => {
                let { icon: l, label: o, type: E } = s;
                return (0, d.wE)(h.$.ROW, {
                    icon: (0, n.jsx)(l, { size: "sm", color: "currentColor", className: p.Fx }),
                    label: (0, n.jsx)(c.bg, { label: o }),
                    sublabel: (0, n.jsx)(c.bj, { searchTokenType: E }),
                    onSelect: (n) => {
                        let { selectedIndex: s, searchAutocompleteSelectAction: l } = n,
                            o = i.Ay[E]?.key ?? "",
                            c = (0, a.bS)(r);
                        (0, S.kc)({
                            searchContext: r,
                            searchQuery: _.A.getSearchResultsQuery(c),
                            searchQueryString: u.A.getSearchInputText(r),
                            searchTokenType: E,
                            searchAutocompleteGroup: E,
                            searchAutocompleteMode: g,
                            searchAutocompleteResultIndex: s - 1,
                            searchAutocompleteTotalResults: e.length,
                            isSearchFilterPrefix: !0,
                            isSearchFilterAnswer: !1,
                            isSearchFilterComplete: !1,
                            isInFilterForSelectedChannel: !1,
                            searchAutocompleteSelectAction: l,
                        }),
                            t({ query: `${o} `, performSearch: !1, replace: !1 });
                    },
                });
            });
    }, [A, r, g, t]);
}
