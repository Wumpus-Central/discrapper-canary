n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var l = n(192379),
    i = n(211266),
    a = n(212819);
function r(e) {
    let { searchOptions: t } = e,
        [n, r] = l.useState({
            results: [],
            query: ''
        }),
        s = (0, i.Z)(() => {
            let e = new a.ZP((e, t) => {
                r({
                    results: e,
                    query: t
                });
            });
            return e.setLimit(20), e.search(''), e;
        });
    return (
        l.useEffect(() => () => s.destroy(), [s]),
        l.useEffect(() => {
            null != t && t !== s.options && s.setOptions(t);
        }, [s, t]),
        {
            search: l.useCallback(
                (e) => {
                    var t, n;
                    let { query: l, resultTypes: i } = e;
                    if (null == s.resultTypes || ((t = i), (n = s.resultTypes), !(t.length === n.size && t.every((e) => n.has(e))))) s.setResultTypes(i), s.setLimit(1 === i.length ? 50 : 20);
                    s.search('' === l.trim() ? '' : l);
                },
                [s]
            ),
            ...n
        }
    );
}
