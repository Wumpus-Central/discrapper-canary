n.d(t, { h: () => u }), n(583741);
var r = n(473749),
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    s = n(86419),
    o = n(404577),
    c = n(570911);
function d(e) {
    var t;
    return null != (t = c.gQ.get(e)) ? t : 0;
}
function u() {
    let e = (0, a.e7)([o.Z], () => o.Z.games),
        t = r.useMemo(
            () =>
                l()(e)
                    .filter((e) => (0, s.pZ)(e))
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
