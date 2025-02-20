n.d(t, { h: () => d }), n(978209);
var r = n(192379),
    i = n(392711),
    s = n.n(i),
    a = n(442837),
    l = n(77498),
    o = n(570911);
function c(e) {
    var t;
    return null !== (t = o.gQ.get(e)) && void 0 !== t ? t : 0;
}
function d() {
    let e = (0, a.e7)([l.Z], () => l.Z.games),
        t = r.useMemo(
            () =>
                s()(e)
                    .map((e) => ({
                        value: e.id,
                        label: e.name
                    }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return c(t);
                    })
                    .reverse()
                    .value(),
            [e]
        ),
        n = r.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: r.useMemo(
            () => ({
                baseSort: n,
                keys: ['label']
            }),
            [n]
        )
    };
}
