t.d(s, { A: () => i });
var r = t(64700),
    u = t(444927),
    l = t(115718);
function i(e) {
    let { searchOptions: s } = e,
        [t, i] = r.useState({ results: [], query: "" }),
        a = (0, u.A)(() => {
            let e = new l.Ay((e, s) => {
                i({ results: e, query: s });
            });
            return e.setLimit(20), e.search(""), e;
        });
    return (
        r.useEffect(() => () => a.destroy(), [a]),
        r.useEffect(() => {
            null != s && s !== a.options && a.setOptions(s);
        }, [a, s]),
        {
            search: r.useCallback(
                (e) => {
                    var s;
                    let { query: t, resultTypes: r } = e;
                    (null != a.resultTypes && ((s = a.resultTypes), r.length === s.size && r.every((e) => s.has(e)))) ||
                        (a.setResultTypes(r), a.setLimit(1 === r.length ? 50 : 20)),
                        a.search("" === t.trim() ? "" : t);
                },
                [a],
            ),
            ...t,
        }
    );
}
