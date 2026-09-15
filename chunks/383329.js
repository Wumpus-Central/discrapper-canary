a.d(t, { R: () => p });
var l = a(582128),
    n = a(435558),
    r = a.n(n),
    i = a(929396),
    u = a(471677),
    s = a(321108),
    o = a(735321),
    d = a(403362),
    c = a(282435);
let m = [];
function h(e) {
    return c.jN.get(e) ?? 0;
}
function p() {
    let { query: e, selectedGameIds: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = l.useMemo(() => [...new Set([...c.sx, ...(t ?? m)])], [t]),
        n = (0, s.A)(a),
        p = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        v = l.useMemo(
            () =>
                r()(c.sx)
                    .map((e) => p.get(e))
                    .filter(d.Vq)
                    .filter((e) => (0, o.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: t } = e;
                        return h(t);
                    })
                    .reverse()
                    .value(),
            [p],
        ),
        b = l.useCallback((e, t) => h(t.item.value) - h(e.item.value), []),
        f = l.useMemo(() => ({ baseSort: b, keys: ["label"] }), [b]),
        g = (e?.trim().length ?? 0) > 0,
        { results: x } = (0, u.J$)(e ?? null),
        k = l.useMemo(() => new Set((x ?? []).filter((e) => (0, i.qS)(e)).map((e) => e.id)), [x]),
        j = l.useMemo(
            () => [
                ...(x ?? []).filter((e) => k.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(t ?? m).filter((e) => !k.has(e)).map((e) => ({ id: e, value: e, label: p.get(e)?.name ?? "" })),
            ],
            [x, k, t, p],
        ),
        y = l.useCallback((e) => e.filter((e) => k.has(e.value)), [k]);
    return { options: g ? j : v, matchSorterOptions: f, customMatchSorter: g ? y : void 0 };
}
