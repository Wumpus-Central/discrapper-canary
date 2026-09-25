a.d(i, { R: () => c });
var l = a(582128),
    t = a(435558),
    o = a.n(t),
    r = a(929396),
    s = a(471677),
    u = a(321108),
    n = a(735321),
    m = a(403362),
    p = a(282435);
let d = [];
function f(e) {
    return p.jN.get(e) ?? 0;
}
function c() {
    let { query: e, selectedGameIds: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        a = l.useMemo(() => [...new Set([...p.sx, ...(i ?? d)])], [i]),
        t = (0, u.A)(a),
        c = l.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        v = l.useMemo(
            () =>
                o()(p.sx)
                    .map((e) => c.get(e))
                    .filter(m.Vq)
                    .filter((e) => (0, n.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: i } = e;
                        return f(i);
                    })
                    .reverse()
                    .value(),
            [c],
        ),
        b = l.useCallback((e, i) => f(i.item.value) - f(e.item.value), []),
        h = l.useMemo(() => ({ baseSort: b, keys: ["label"] }), [b]),
        M = (e?.trim().length ?? 0) > 0,
        { results: k } = (0, s.J$)(e ?? null),
        y = l.useMemo(() => new Set((k ?? []).filter((e) => (0, r.qS)(e)).map((e) => e.id)), [k]),
        g = l.useMemo(
            () => [
                ...(k ?? []).filter((e) => y.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(i ?? d).filter((e) => !y.has(e)).map((e) => ({ id: e, value: e, label: c.get(e)?.name ?? "" })),
            ],
            [k, y, i, c],
        ),
        w = l.useMemo(() => {
            let e = new Map();
            for (let i of t) e.set(i.id, { icon: i.media?.icon, platformAvailability: i.platformAvailability });
            for (let i of k ?? []) {
                let a = e.get(i.id);
                e.set(i.id, {
                    icon: i.icon ?? a?.icon,
                    platformAvailability: i.platformAvailability ?? a?.platformAvailability,
                });
            }
            return e;
        }, [t, k]),
        A = l.useCallback((e) => e.filter((e) => y.has(e.value)), [y]);
    return { options: M ? g : v, matchSorterOptions: h, customMatchSorter: M ? A : void 0, metadataByGameId: w };
}
