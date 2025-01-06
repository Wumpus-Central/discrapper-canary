n.d(t, {
    P: function () {
        return d;
    }
});
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    s = n(77498),
    o = n(308083);
function c(e) {
    var t;
    return null !== (t = o.gQ.get(e)) && void 0 !== t ? t : 0;
}
function d() {
    let e = (0, a.e7)([s.Z], () => s.Z.games),
        t = i.useMemo(
            () =>
                l()(e)
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
        n = i.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: i.useMemo(
            () => ({
                baseSort: n,
                keys: ['label']
            }),
            [n]
        )
    };
}
