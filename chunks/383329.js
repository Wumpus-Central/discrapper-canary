a.d(t, { R: () => p });
var n = a(582128),
    l = a(435558),
    r = a.n(l),
    i = a(929396),
    u = a(471677),
    s = a(321108),
    o = a(735321),
    d = a(403362),
    c = a(282435);
let v = [];
function m(e) {
    return c.jN.get(e) ?? 0;
}
function p() {
    let { query: e, selectedGameIds: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = n.useMemo(() => [...new Set([...c.sx, ...(t ?? v)])], [t]),
        l = (0, s.A)(a),
        p = n.useMemo(() => new Map(l.map((e) => [e.id, e])), [l]),
        h = n.useMemo(
            () =>
                r()(c.sx)
                    .map((e) => p.get(e))
                    .filter(d.Vq)
                    .filter((e) => (0, o.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return m(t);
                    })
                    .reverse()
                    .value(),
            [p],
        ),
        f = n.useCallback((e, t) => m(t.item.value) - m(e.item.value), []),
        b = n.useMemo(() => ({ baseSort: f, keys: ["label"] }), [f]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, u.J$)(e ?? null),
        k = n.useMemo(() => new Set((x ?? []).filter((e) => (0, i.qS)(e)).map((e) => e.id)), [x]),
        j = n.useMemo(
            () => [
                ...(x ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(t ?? v).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: p.get(e)?.name ?? "" })),
            ],
            [x, k, t, p],
        ),
        y = n.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: g ? j : h, matchSorterOptions: b, customMatchSorter: g ? y : void 0 };
}
