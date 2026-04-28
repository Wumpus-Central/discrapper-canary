o.d(a, { R: () => i });
var r = o(64700),
    l = o(735438),
    n = o.n(l),
    c = o(17928),
    t = o(735321),
    u = o(760751),
    m = o(282435);
function s(e) {
    return m.Bf.get(e) ?? 0;
}
function i() {
    let e = (0, c.bG)([u.A], () => u.A.games),
        a = r.useMemo(
            () =>
                n()(e)
                    .filter((e) => (0, t.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return s(a);
                    })
                    .reverse()
                    .value(),
            [e],
        ),
        o = r.useCallback((e, a) => s(a.item.value) - s(e.item.value), []);
    return { options: a, matchSorterOptions: r.useMemo(() => ({ baseSort: o, keys: ["label"] }), [o]) };
}
