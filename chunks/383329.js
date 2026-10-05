i.d(a, { R: () => c });
var l = i(582128),
    t = i(435558),
    o = i.n(t),
    r = i(929396),
    s = i(471677),
    u = i(321108),
    m = i(735321),
    n = i(403362),
    p = i(282435);
let d = [];
function f(e) {
    return p.jN.get(e) ?? 0;
}
function c(e) {
    let { surface: a, query: i, selectedGameIds: t } = e,
        c = l.useMemo(() => [...new Set([...p.sx, ...(t ?? d)])], [t]),
        v = (0, u.A)(c),
        b = l.useMemo(() => new Map(v.map((e) => [e.id, e])), [v]),
        h = l.useMemo(
            () =>
                o()(p.sx)
                    .map((e) => b.get(e))
                    .filter(n.Vq)
                    .filter((e) => (0, m.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: a } = e;
                        return f(a);
                    })
                    .reverse()
                    .value(),
            [b],
        ),
        M = l.useCallback((e, a) => f(a.item.value) - f(e.item.value), []),
        k = l.useMemo(() => ({ baseSort: M, keys: ["label"] }), [M]),
        y = (i?.trim().length ?? 0) > 0,
        { results: w, onSelect: A, endSession: g } = (0, s.J$)(i ?? null, { surface: a }),
        C = l.useMemo(() => new Set((w ?? []).filter((e) => (0, r.qS)(e)).map((e) => e.id)), [w]),
        S = l.useMemo(
            () => [
                ...(w ?? []).filter((e) => C.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(t ?? d).filter((e) => !C.has(e)).map((e) => ({ id: e, value: e, label: b.get(e)?.name ?? "" })),
            ],
            [w, C, t, b],
        ),
        q = l.useMemo(() => {
            let e = new Map();
            for (let a of v) e.set(a.id, { icon: a.media?.icon, platformAvailability: a.platformAvailability });
            for (let a of w ?? []) {
                let i = e.get(a.id);
                e.set(a.id, {
                    icon: a.icon ?? i?.icon,
                    platformAvailability: a.platformAvailability ?? i?.platformAvailability,
                });
            }
            return e;
        }, [v, w]),
        x = l.useCallback((e) => e.filter((e) => C.has(e.value)), [C]);
    return {
        options: y ? S : h,
        matchSorterOptions: k,
        customMatchSorter: y ? x : void 0,
        metadataByGameId: q,
        onSelect: A,
        endSession: g,
    };
}
