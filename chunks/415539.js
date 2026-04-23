n.d(t, { A: () => d });
var i = n(64700),
    r = n(868714),
    a = n(206572),
    l = n(311907),
    s = n(250105),
    o = n(217222);
function d(e, t) {
    let n = (0, r.A)(e),
        d = (0, a.A)(t),
        u = (0, i.useMemo)(() => (0, s.cT)("user", { location: d.location }), [d]),
        c = (0, l.yK)(
            [o.A],
            () =>
                n.flatMap((e) =>
                    o.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, s.cT)(e.definition.kind, d),
                        e.definition.name,
                        u,
                    ),
                ),
            [n, d, u],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(d)])), [n, d, c]);
}
