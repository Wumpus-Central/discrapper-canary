l.d(a, { R: () => h });
var o = l(582128),
    r = l(435558),
    t = l.n(r),
    n = l(929396),
    i = l(471677),
    m = l(321108),
    s = l(735321),
    u = l(403362),
    c = l(282435);
let d = [];
function p(e) {
    return c.jN.get(e) ?? 0;
}
function h() {
    let { query: e, selectedGameIds: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        l = o.useMemo(() => [...new Set([...c.sx, ...(a ?? d)])], [a]),
        r = (0, m.A)(l),
        h = o.useMemo(() => new Map(r.map((e) => [e.id, e])), [r]),
        f = o.useMemo(
            () =>
                t()(c.sx)
                    .map((e) => h.get(e))
                    .filter(u.Vq)
                    .filter((e) => (0, s.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return p(a);
                    })
                    .reverse()
                    .value(),
            [h],
        ),
        v = o.useCallback((e, a) => p(a.item.value) - p(e.item.value), []),
        M = o.useMemo(() => ({ baseSort: v, keys: ["label"] }), [v]),
        b = (e?.trim().length ?? 0) > 0,
        { results: g } = (0, i.J$)(e ?? null),
        k = o.useMemo(() => new Set((g ?? []).filter((e) => (0, n.qS)(e)).map((e) => e.id)), [g]),
        w = o.useMemo(
            () => [
                ...(g ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(a ?? d).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: h.get(e)?.name ?? "" })),
            ],
            [g, k, a, h],
        ),
        C = o.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: b ? w : f, matchSorterOptions: M, customMatchSorter: b ? C : void 0 };
}
