r.d(t, { A: () => R });
var n = r(627968),
    s = r(64700),
    l = r(950305),
    a = r(276293),
    i = r(588975),
    o = r(935063),
    u = r(822382),
    c = r(771650),
    h = r(674142),
    d = r(753806),
    _ = r(272444),
    E = r(806595),
    S = r(949759),
    f = r(65600),
    p = r(145331),
    g = r(652215),
    A = r(985018),
    y = r(611027);
function R(e) {
    let { setSearchQuery: t, searchContext: r, mode: R } = e,
        m = (0, h.o)(r);
    return s.useMemo(() => {
        let e = [
            {
                type: g.LWr.FILTER_FROM,
                isEligible: m.has(g.LWr.FILTER_FROM),
                icon: l.n,
                label: A.intl.string(A.t.ktr6z5),
            },
            { type: g.LWr.FILTER_IN, isEligible: m.has(g.LWr.FILTER_IN), icon: a.N, label: A.intl.string(A.t.VMjDvS) },
            {
                type: g.LWr.FILTER_HAS,
                isEligible: m.has(g.LWr.FILTER_HAS),
                icon: i.P,
                label: A.intl.string(A.t.IhIpc7),
            },
            {
                type: g.LWr.FILTER_MENTIONS,
                isEligible: m.has(g.LWr.FILTER_MENTIONS),
                icon: o.X,
                label: A.intl.string(A.t.fpKv9Y),
            },
        ];
        return e
            .filter((e) => e.isEligible)
            .map((s) => {
                let { icon: l, label: a, type: i } = s;
                return (0, S.wE)(E.$.ROW, {
                    icon: (0, n.jsx)(l, { size: "sm", color: "currentColor", className: y.Fx }),
                    label: (0, n.jsx)(_.bg, { label: a }),
                    sublabel: (0, n.jsx)(_.bj, { searchTokenType: i }),
                    onSelect: (n) => {
                        let { selectedIndex: s, searchAutocompleteSelectAction: l } = n,
                            a = c.Ay[i]?.key ?? "",
                            o = (0, u.bS)(r);
                        (0, p.kc)({
                            searchContext: r,
                            searchQuery: f.A.getSearchResultsQuery(o),
                            searchQueryString: d.A.getSearchInputText(r),
                            searchTokenType: i,
                            searchAutocompleteGroup: i,
                            searchAutocompleteMode: R,
                            searchAutocompleteResultIndex: s - 1,
                            searchAutocompleteTotalResults: e.length,
                            isSearchFilterPrefix: !0,
                            isSearchFilterAnswer: !1,
                            isSearchFilterComplete: !1,
                            isInFilterForSelectedChannel: !1,
                            searchAutocompleteSelectAction: l,
                        }),
                            t({ query: `${a} `, performSearch: !1, replace: !1 });
                    },
                });
            });
    }, [m, r, R, t]);
}
