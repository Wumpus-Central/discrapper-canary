n.d(t, { Z: () => s }), n(47120);
var l = n(192379),
    i = n(211266),
    a = n(212819);
function s(e) {
    let { searchOptions: t } = e,
        [n, s] = l.useState({
            results: [],
            query: ''
        }),
        r = (0, i.Z)(() => {
            let e = new a.ZP((e, t) => {
                s({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => r.destroy(), [r]),
        l.useEffect(() => {
            null != t && t !== r.options && r.setOptions(t);
        }, [r, t]),
        {
            search: l.useCallback(
                (e) => {
                    var t;
                    let { query: n, resultTypes: l } = e;
                    (null == r.resultTypes || ((t = r.resultTypes), !(l.length === t.size && l.every((e) => t.has(e))))) && (r.setResultTypes(l), r.setLimit(1 === l.length ? 50 : 20)), r.search('' === n.trim() ? '' : n);
                },
                [r]
            ),
            ...n
        }
    );
}
