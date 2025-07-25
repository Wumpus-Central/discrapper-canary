(n.d(t, {
    N: () => d,
    h: () => _
}),
    n(583741));
var r = n(73800),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(189451),
    l = n(77498),
    c = n(570911);
function u(e) {
    var t;
    return null != (t = c.gQ.get(e)) ? t : 0;
}
function d(e) {
    return (null == e ? void 0 : e.themes) != null && e.themes.includes(s.u.EROTIC);
}
function _() {
    let e = (0, o.e7)([l.Z], () => l.Z.games),
        t = r.useMemo(
            () =>
                a()(e)
                    .filter((e) => !d(e))
                    .map((e) => ({
                        value: e.id,
                        label: e.name
                    }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return u(t);
                    })
                    .reverse()
                    .value(),
            [e]
        ),
        n = r.useCallback((e, t) => u(t.item.value) - u(e.item.value), []);
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
