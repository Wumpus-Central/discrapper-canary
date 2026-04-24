n.d(t, { QR: () => E, zd: () => p, VA: () => I, w$: () => m });
var i = n(64700),
    r = n(207803),
    a = n(403362),
    l = n(369374),
    s = n(868714),
    o = n(52133),
    d = n(510373),
    c = n(17928),
    u = n(250105),
    _ = n(710195);
function A(e, t) {
    let n = (0, s.A)(e),
        r = (0, d.A)(() => t, t, o.A),
        a = (0, i.useMemo)(() => (0, u.cT)("user", { location: r.location }), [r]),
        l = (0, c.yK)(
            [_.A],
            () =>
                n.flatMap((e) =>
                    _.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, u.cT)(e.definition.kind, r),
                        e.definition.name,
                        a,
                    ),
                ),
            [n, r, a],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(r)])), [n, r, l]);
}
function h(e, t) {
    let { data: n } = (0, r.FY)(),
        l = A(n?.map(t).filter(a.Vq) ?? [], e);
    return i.useMemo(() => [...l.values()].some((e) => e.enabled), [l]);
}
function E(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        n = h(e, (e) => e.editExperiment);
    return !t && n;
}
function p(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        n = h(e, (e) => e.coachmarkExperiment);
    return !t && n;
}
function m(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        { data: n } = (0, r.FY)(),
        a = A(n?.map((e) => e.editExperiment) ?? [], e);
    return i.useMemo(() => (t ? [] : n?.filter((e) => a.get(e.editExperiment)?.enabled === !0)), [t, n, a]);
}
function I(e) {
    let { enabled: t } = l.A.useConfig({ location: e.location }),
        { data: n } = (0, r.FY)(),
        s = A(n?.map((e) => e.editExperiment) ?? [], e),
        o = A(n?.map((e) => e.coachmarkExperiment).filter(a.Vq) ?? [], e);
    return i.useMemo(
        () =>
            t
                ? []
                : n?.filter(
                      (e) =>
                          s.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          o.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, n, s, o],
    );
}
