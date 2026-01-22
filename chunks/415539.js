n.d(t, {
    A: () => c,
}),
    n(114821),
    n(339614),
    n(896048);
var r = n(64700),
    i = n(868714),
    l = n(206572),
    a = n(311907),
    s = n(250105),
    o = n(217222);

function c(e, t) {
    let n = (0, i.A)(e),
        c = (0, l.A)(t),
        u = (0, a.yK)(
            [o.A],
            () =>
                n.flatMap((e) =>
                    o.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, s.cT)(e.definition.kind, c),
                        e.definition.name,
                    ),
                ),
            [n, c],
        );
    return (0, r.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(c)])), [n, c, u]);
}
