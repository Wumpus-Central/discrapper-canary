n.d(t, { h: () => d }), n(583741);
var r = n(73800),
    i = n(392711),
    l = n.n(i),
    s = n(442837),
    a = n(189451),
    o = n(77498),
    c = n(570911);
function u(e) {
    var t;
    return null != (t = c.gQ.get(e)) ? t : 0;
}
function d() {
    let e = (0, s.e7)([o.Z], () => o.Z.games),
        t = r.useMemo(
            () =>
                l()(e)
                    .filter((e) => !((null == e ? void 0 : e.themes) != null && e.themes.includes(a.u.EROTIC)))
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
