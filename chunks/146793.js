s.d(t, { A: () => l });
var r = s(64700),
    i = s(444927),
    n = s(629357);
function l(e) {
    let { searchOptions: t } = e,
        [s, l] = r.useState({ results: [], query: "" }),
        a = (0, i.A)(() => {
            let e = new n.Ay((e, t) => {
                l({ results: e, query: t });
            });
            return e.setLimit(20), e.search(""), e;
        });
    return (
        r.useEffect(() => () => a.destroy(), [a]),
        r.useEffect(() => {
            null != t && t !== a.options && a.setOptions(t);
        }, [a, t]),
        {
            search: r.useCallback(
                (e) => {
                    var t;
                    let { query: s, resultTypes: r } = e;
                    (null != a.resultTypes && ((t = a.resultTypes), r.length === t.size && r.every((e) => t.has(e)))) ||
                        (a.setResultTypes(r), a.setLimit(1 === r.length ? 50 : 20)),
                        a.search("" === s.trim() ? "" : s);
                },
                [a],
            ),
            ...s,
        }
    );
}
