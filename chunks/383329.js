l.d(a, { R: () => h });
var o = l(64700),
    r = l(735438),
    t = l.n(r),
    n = l(17928),
    i = l(929396),
    c = l(471677),
    m = l(735321),
    u = l(760751),
    s = l(282435);
function d(e) {
    return s.Bf.get(e) ?? 0;
}
function h() {
    let { query: e, selectedGameIds: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        l = (0, n.bG)([u.A], () => u.A.games),
        r = o.useMemo(
            () =>
                t()(l)
                    .filter((e) => (0, m.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return d(a);
                    })
                    .reverse()
                    .value(),
            [l],
        ),
        s = o.useCallback((e, a) => d(a.item.value) - d(e.item.value), []),
        h = o.useMemo(() => ({ baseSort: s, keys: ["label"] }), [s]),
        p = (e?.trim().length ?? 0) > 0,
        { results: f } = (0, c.J$)(e ?? null),
        v = o.useMemo(() => new Set((f ?? []).filter((e) => (0, i.qS)(e)).map((e) => e.id)), [f]),
        b = o.useMemo(
            () => [
                ...(f ?? []).filter((e) => v.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(a ?? [])
                    .filter((e) => !v.has(e))
                    .map((e) => ({ id: e, value: e, label: u.A.getDetectableGame(e)?.name ?? "" })),
            ],
            [f, v, a],
        ),
        g = o.useCallback((e) => e.filter((e) => v.has(e.value)), [v]);
    return { options: p ? b : r, matchSorterOptions: h, customMatchSorter: p ? g : void 0 };
}
