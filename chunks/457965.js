"use strict";
n.d(t, { QR: () => p, zd: () => E, VA: () => g, w$: () => m });
var i = n(64700),
    r = n(207803),
    s = n(403362),
    a = n(369374),
    o = n(868714),
    l = n(52133),
    u = n(958538),
    c = n(17928),
    d = n(240921),
    _ = n(710195);
function f(e, t) {
    let n = (0, o.A)(e),
        r = (0, u.A)(() => t, t, l.A),
        s = (0, i.useMemo)(() => (0, d.cT)("user", { location: r.location }), [r]),
        a = (0, c.yK)(
            [_.A],
            () =>
                n.flatMap((e) =>
                    _.A.getEvaluationAndAssignment(
                        e.definition.kind,
                        (0, d.cT)(e.definition.kind, r),
                        e.definition.name,
                        s,
                    ),
                ),
            [n, r, s],
        );
    return (0, i.useMemo)(() => new Map(n.map((e) => [e, e.getConfig(r)])), [n, r, a]);
}
function h(e, t) {
    let { data: n } = (0, r.FY)(),
        a = f(n?.map(t).filter(s.Vq) ?? [], e);
    return i.useMemo(() => [...a.values()].some((e) => e.enabled), [a]);
}
function p(e) {
    let { enabled: t } = a.A.useConfig({ location: e.location }),
        n = h(e, (e) => e.editExperiment);
    return !t && n;
}
function E(e) {
    let { enabled: t } = a.A.useConfig({ location: e.location }),
        n = h(e, (e) => e.coachmarkExperiment);
    return !t && n;
}
function m(e) {
    let { enabled: t } = a.A.useConfig({ location: e.location }),
        { data: n } = (0, r.FY)(),
        s = f(n?.map((e) => e.editExperiment) ?? [], e);
    return i.useMemo(() => (t ? [] : n?.filter((e) => s.get(e.editExperiment)?.enabled === !0)), [t, n, s]);
}
function g(e) {
    let { enabled: t } = a.A.useConfig({ location: e.location }),
        { data: n } = (0, r.FY)(),
        o = f(n?.map((e) => e.editExperiment) ?? [], e),
        l = f(n?.map((e) => e.coachmarkExperiment).filter(s.Vq) ?? [], e);
    return i.useMemo(
        () =>
            t
                ? []
                : n?.filter(
                      (e) =>
                          o.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          l.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, n, o, l],
    );
}
