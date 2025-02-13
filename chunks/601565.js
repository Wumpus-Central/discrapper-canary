n.d(t, { Z: () => s }), n(47120);
var a = n(192379),
    l = n(211266),
    i = n(212819);
function s(e) {
    let { searchOptions: t } = e,
        [n, s] = a.useState({
            results: [],
            query: ''
        }),
        r = (0, l.Z)(() => {
            let e = new i.ZP((e, t) => {
                s({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        a.useEffect(() => () => r.destroy(), [r]),
        a.useEffect(() => {
            null != t && t !== r.options && r.setOptions(t);
        }, [r, t]),
        {
            search: a.useCallback(
                (e) => {
                    var t;
                    let { query: n, resultTypes: a } = e;
                    (null == r.resultTypes || ((t = r.resultTypes), !(a.length === t.size && a.every((e) => t.has(e))))) && (r.setResultTypes(a), r.setLimit(1 === a.length ? 50 : 20)), r.search('' === n.trim() ? '' : n);
                },
                [r]
            ),
            ...n
        }
    );
}
