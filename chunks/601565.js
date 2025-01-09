n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var l = n(192379),
    r = n(211266),
    s = n(212819);
function i(e) {
    let { searchOptions: t } = e,
        [n, i] = l.useState({
            results: [],
            query: ''
        }),
        a = (0, r.Z)(() => {
            let e = new s.ZP((e, t) => {
                i({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => a.destroy(), [a]),
        l.useEffect(() => {
            null != t && t !== a.options && a.setOptions(t);
        }, [a, t]),
        {
            search: l.useCallback(
                (e) => {
                    var t, n;
                    let { query: l, resultTypes: r } = e;
                    if (null == a.resultTypes || ((t = r), (n = a.resultTypes), !(t.length === n.size && t.every((e) => n.has(e))))) a.setResultTypes(r), a.setLimit(1 === r.length ? 50 : 20);
                    a.search('' === l.trim() ? '' : l);
                },
                [a]
            ),
            ...n
        }
    );
}
