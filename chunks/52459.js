n.d(t, { Z: () => i }), n(539854), n(388685);
var r = n(473749);
function i(e) {
    let { autocompletes: t, mode: n } = e;
    return r.useCallback(
        (e) => {
            let { filterFn: r, getAutocompleteRowItem: i, getAutocompleteGroupItem: a } = e,
                o = 0,
                s = [],
                l = [];
            for (let e of t) {
                let t = [],
                    { group: c, results: u } = e;
                if (r(e)) {
                    for (let e of u) {
                        let r = i({
                            result: e,
                            modeType: n.type,
                            group: c,
                        });
                        t.push(r);
                    }
                    o += u.length;
                    let e = a({
                        group: c,
                        rows: t,
                    });
                    s.push(e), l.push(...t);
                }
            }
            return {
                autocompleteCount: o,
                autocompleteGroups: s,
                allAutocompleteRows: l,
            };
        },
        [t, n.type],
    );
}
