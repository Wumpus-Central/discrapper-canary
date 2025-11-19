n.d(t, {
    N: () => f,
    h: () => _,
}),
    n(583741);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(624238),
    s = n(442837),
    l = n(189451),
    c = n(77498),
    u = n(570911);
function d(e) {
    var t;
    return null != (t = u.gQ.get(e)) ? t : 0;
}
function f(e) {
    return (null == e ? void 0 : e.themes) != null && e.themes.includes(l.J8.EROTIC);
}
function _() {
    let e = (0, s.e7)([c.Z], () => c.Z.games),
        t = r.useMemo(
            () =>
                a()(e)
                    .filter((e) => !f(e) && !o.Fb.has(e.id))
                    .map((e) => ({
                        value: e.id,
                        label: e.name,
                    }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return d(t);
                    })
                    .reverse()
                    .value(),
            [e],
        ),
        n = r.useCallback((e, t) => d(t.item.value) - d(e.item.value), []);
    return {
        options: t,
        matchSorterOptions: r.useMemo(
            () => ({
                baseSort: n,
                keys: ["label"],
            }),
            [n],
        ),
    };
}
