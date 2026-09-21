t.d(a, { R: () => h });
var l = t(582128),
    i = t(435558),
    u = t.n(i),
    s = t(929396),
    r = t(471677),
    n = t(321108),
    m = t(735321),
    o = t(403362),
    d = t(282435);
let p = [];
function c(e) {
    return d.jN.get(e) ?? 0;
}
function h() {
    let { query: e, selectedGameIds: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = l.useMemo(() => [...new Set([...d.sx, ...(a ?? p)])], [a]),
        i = (0, n.A)(t),
        h = l.useMemo(() => new Map(i.map((e) => [e.id, e])), [i]),
        v = l.useMemo(
            () =>
                u()(d.sx)
                    .map((e) => h.get(e))
                    .filter(o.Vq)
                    .filter((e) => (0, m.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return c(a);
                    })
                    .reverse()
                    .value(),
            [h],
        ),
        b = l.useCallback((e, a) => c(a.item.value) - c(e.item.value), []),
        f = l.useMemo(() => ({ baseSort: b, keys: ["label"] }), [b]),
        M = (e?.trim().length ?? 0) > 0,
        { results: k } = (0, r.J$)(e ?? null),
        g = l.useMemo(() => new Set((k ?? []).filter((e) => (0, s.qS)(e)).map((e) => e.id)), [k]),
        w = l.useMemo(
            () => [
                ...(k ?? []).filter((e) => g.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(a ?? p).filter((e) => !g.has(e)).map((e) => ({ id: e, value: e, label: h.get(e)?.name ?? "" })),
            ],
            [k, g, a, h],
        ),
        C = l.useCallback((e) => e.filter((e) => g.has(e.value)), [g]);
    return { options: M ? w : v, matchSorterOptions: f, customMatchSorter: M ? C : void 0 };
}
