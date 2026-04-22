i.d(t, { R: () => u });
var n = i(64700),
    l = i(735438),
    s = i.n(l),
    a = i(311907),
    r = i(735321),
    d = i(760751),
    o = i(282435);
function c(e) {
    return o.Bf.get(e) ?? 0;
}
function u() {
    let e = (0, a.bG)([d.A], () => d.A.games),
        t = n.useMemo(
            () =>
                s()(e)
                    .filter((e) => (0, r.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return c(t);
                    })
                    .reverse()
                    .value(),
            [e],
        ),
        i = n.useCallback((e, t) => c(t.item.value) - c(e.item.value), []);
    return { options: t, matchSorterOptions: n.useMemo(() => ({ baseSort: i, keys: ["label"] }), [i]) };
}
