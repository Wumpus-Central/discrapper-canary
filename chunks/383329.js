n.d(t, {
    R: () => u,
}),
    n(264879);
var r = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(311907),
    a = n(735321),
    c = n(760751),
    o = n(282435);

function d(e) {
    var t;
    return null != (t = o.Bf.get(e)) ? t : 0;
}

function u() {
    let e = (0, s.bG)([c.A], () => c.A.games),
        t = r.useMemo(
            () =>
                l()(e)
                    .filter((e) => (0, a.XX)(e))
                    .map((e) => ({
                        id: e.id,
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
