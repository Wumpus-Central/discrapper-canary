n.d(t, { QR: () => h, zd: () => g, VA: () => x, w$: () => A });
var i = n(64700),
    a = n(207803),
    o = n(403362),
    l = n(369374),
    r = n(868714),
    c = n(52133),
    d = n(958538),
    s = n(17928),
    u = n(240921),
    m = n(710195);
function p(e, t) {
    let n = (0, r.A)(e),
        a = (0, d.A)(() => t, t, c.A),
        o = (0, i.useMemo)(() => (0, u.cT)("user", { location: a.location }), [a]),
        l = (0, s.yK)(
            [m.A],
            () =>
                n.flatMap((e) =>
                    m.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, u.cT)(e.definition.kind, a),
                        e.definition.name,
                        o,
                    ),
                ),
            [n, a, o],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(a)])), [n, a, l]);
}
function f(e, t) {
    let { data: n } = (0, a.FY)(),
        l = p(n?.map(t).filter(o.Vq) ?? [], e);
    return i.useMemo(() => [...l.values()].some((e) => e.enabled), [l]);
}
function h(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        n = f(e, (e) => e.editExperiment);
    return !t && n;
}
function g(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        n = f(e, (e) => e.coachmarkExperiment);
    return !t && n;
}
function A(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        { data: n } = (0, a.FY)(),
        o = p(n?.map((e) => e.editExperiment) ?? [], e);
    return i.useMemo(() => (t ? [] : n?.filter((e) => o.get(e.editExperiment)?.enabled === !0)), [t, n, o]);
}
function x(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        { data: n } = (0, a.FY)(),
        r = p(n?.map((e) => e.editExperiment) ?? [], e),
        c = p(n?.map((e) => e.coachmarkExperiment).filter(o.Vq) ?? [], e);
    return i.useMemo(
        () =>
            t
                ? []
                : n?.filter(
                      (e) =>
                          r.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          c.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, n, r, c],
    );
}
