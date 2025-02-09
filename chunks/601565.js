l.d(t, { Z: () => a }), l(47120);
var n = l(192379),
    s = l(211266),
    r = l(212819);
function a(e) {
    let { searchOptions: t } = e,
        [l, a] = n.useState({
            results: [],
            query: ''
        }),
        i = (0, s.Z)(() => {
            let e = new r.ZP((e, t) => {
                a({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        n.useEffect(() => () => i.destroy(), [i]),
        n.useEffect(() => {
            null != t && t !== i.options && i.setOptions(t);
        }, [i, t]),
        {
            search: n.useCallback(
                (e) => {
                    var t;
                    let { query: l, resultTypes: n } = e;
                    (null == i.resultTypes || ((t = i.resultTypes), !(n.length === t.size && n.every((e) => t.has(e))))) && (i.setResultTypes(n), i.setLimit(1 === n.length ? 50 : 20)), i.search('' === l.trim() ? '' : l);
                },
                [i]
            ),
            ...l
        }
    );
}
