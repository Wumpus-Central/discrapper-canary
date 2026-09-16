t.d(a, { R: () => p });
var l = t(582128),
    n = t(435558),
    r = t.n(n),
    i = t(929396),
    u = t(471677),
    s = t(321108),
    d = t(735321),
    o = t(403362),
    c = t(282435);
let m = [];
function h(e) {
    return c.jN.get(e) ?? 0;
}
function p() {
    let { query: e, selectedGameIds: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = l.useMemo(() => [...new Set([...c.sx, ...(a ?? m)])], [a]),
        n = (0, s.A)(t),
        p = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        v = l.useMemo(
            () =>
                r()(c.sx)
                    .map((e) => p.get(e))
                    .filter(o.Vq)
                    .filter((e) => (0, d.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return h(a);
                    })
                    .reverse()
                    .value(),
            [p],
        ),
        b = l.useCallback((e, a) => h(a.item.value) - h(e.item.value), []),
        f = l.useMemo(() => ({ baseSort: b, keys: ["label"] }), [b]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, u.J$)(e ?? null),
        k = l.useMemo(() => new Set((x ?? []).filter((e) => (0, i.qS)(e)).map((e) => e.id)), [x]),
        j = l.useMemo(
            () => [
                ...(x ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(a ?? m).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: p.get(e)?.name ?? "" })),
            ],
            [x, k, a, p],
        ),
        y = l.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: g ? j : v, matchSorterOptions: f, customMatchSorter: g ? y : void 0 };
}
