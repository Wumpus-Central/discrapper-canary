a.d(i, { R: () => v });
var l = a(582128),
    t = a(435558),
    r = a.n(t),
    o = a(651188),
    u = a(929396),
    s = a(471677),
    m = a(321108),
    n = a(735321),
    p = a(403362),
    d = a(282435);
let f = [];
function c(e) {
    return d.jN.get(e) ?? 0;
}
function v(e) {
    let { surface: i, query: a, selectedGameIds: t } = e,
        v = l.useMemo(() => [...new Set([...d.sx, ...(t ?? f)])], [t]),
        b = (0, m.A)(v),
        h = l.useMemo(() => new Map(b.map((e) => [e.id, e])), [b]),
        M = l.useMemo(
            () =>
                r()(d.sx)
                    .map((e) => h.get(e))
                    .filter(p.Vq)
                    .filter((e) => (0, n.XX)(e))
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sortBy((e) => {
                        let { value: i } = e;
                        return c(i);
                    })
                    .reverse()
                    .value(),
            [h],
        ),
        k = l.useCallback((e, i) => c(i.item.value) - c(e.item.value), []),
        y = l.useMemo(() => ({ baseSort: k, keys: ["label"] }), [k]),
        A = (a?.trim().length ?? 0) > 0,
        { results: w, onSelect: g, endSession: C } = (0, s.J$)(a ?? null, { surface: i, filterGroup: o.m.DEFAULT }),
        S = l.useMemo(() => new Set((w ?? []).filter((e) => (0, u.qS)(e)).map((e) => e.id)), [w]),
        q = l.useMemo(
            () => [
                ...(w ?? []).filter((e) => S.has(e.id)).map((e) => ({ id: e.id, value: e.id, label: e.name })),
                ...(t ?? f).filter((e) => !S.has(e)).map((e) => ({ id: e, value: e, label: h.get(e)?.name ?? "" })),
            ],
            [w, S, t, h],
        ),
        x = l.useMemo(() => {
            let e = new Map();
            for (let i of b) e.set(i.id, { icon: i.media?.icon, platformAvailability: i.platformAvailability });
            for (let i of w ?? []) {
                let a = e.get(i.id);
                e.set(i.id, {
                    icon: i.icon ?? a?.icon,
                    platformAvailability: i.platformAvailability ?? a?.platformAvailability,
                });
            }
            return e;
        }, [b, w]),
        X = l.useCallback((e) => e.filter((e) => S.has(e.value)), [S]);
    return {
        options: A ? q : M,
        matchSorterOptions: y,
        customMatchSorter: A ? X : void 0,
        metadataByGameId: x,
        onSelect: g,
        endSession: C,
    };
}
