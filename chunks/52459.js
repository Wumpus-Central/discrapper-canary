n.d(t, { Z: () => d }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(607802),
    o = n(532428),
    s = n(637879),
    l = n(794137),
    c = n(628221),
    u = n(981631);
function d(e) {
    let { autocompletes: t, mode: n, searchContext: d, setSearchQuery: f } = e;
    return i.useCallback(
        (e) => {
            let { performSearch: i, filterFn: _, icon: p, getAutocompleteLabel: h, trackSearchResult: m } = e,
                g = 0,
                E = [],
                b = [];
            for (let e of t) {
                let t = [],
                    { group: y, results: O } = e;
                if (_(e)) {
                    for (let e of O) {
                        let { text: r, channel: s, group: d } = e,
                            _ = r;
                        if ((null != s && (_ = (0, a.Jl)(_)), n.type === u.Sap.FILTER_ALL)) {
                            let e = null != d ? d : y,
                                t = o.ZP[e];
                            (null == t ? void 0 : t.key) != null &&
                                (null == t ? void 0 : t.key) !== "" &&
                                (_ = "".concat(t.key, " ").concat(_));
                        }
                        let g = (t) => {
                                let { selectedIndex: n, searchAutocompleteSelectAction: r } = t;
                                m({
                                    selectedIndex: n,
                                    searchAutocompleteSelectAction: r,
                                    selectedAutocomplete: e,
                                    selectedAutocompleteGroup: null != d ? d : y,
                                }),
                                    f({
                                        query: _,
                                        performSearch: i,
                                        replace: !1,
                                    });
                            },
                            { label: E, ariaLabel: b } = h(e),
                            O = (0, c.fC)(l.i.ROW, {
                                icon: p,
                                label: E,
                                ariaLabel: b,
                                resultText: _,
                                onSelect: g,
                            });
                        t.push(O);
                    }
                    g += O.length;
                    let e = (0, c.Nk)(y),
                        _ = y === u.rtL.HISTORY ? (0, r.jsx)(s.do, { searchContext: d }) : null;
                    E.push(
                        (0, c.fC)(l.i.GROUP, {
                            rows: t,
                            title: e,
                            trailingIcon: _,
                        }),
                    ),
                        b.push(...t);
                }
            }
            return {
                autocompleteCount: g,
                autocompleteGroups: E,
                allAutocompleteRows: b,
            };
        },
        [t, n.type, d, f],
    );
}
