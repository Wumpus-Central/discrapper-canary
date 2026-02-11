s.d(e, { A: () => c });
var n = s(64700),
    t = s(868714),
    a = s(206572),
    l = s(311907),
    r = s(250105),
    o = s(217222);
function c(i, e) {
    let s = (0, t.A)(i),
        c = (0, a.A)(e),
        u = (0, n.useMemo)(() => (0, r.cT)("user", { location: c.location }), [c]),
        d = (0, l.yK)(
            [o.A],
            () =>
                s.flatMap((i) =>
                    o.A.getEvaluationAndAssignment(
                        i.definition.kind,
                        (0, r.cT)(i.definition.kind, c),
                        i.definition.name,
                        u,
                    ),
                ),
            [s, c, u],
        );
    return (0, n.useMemo)(() => new Map(s.map((i) => [i, i.getConfig(c)])), [s, c, d]);
}
