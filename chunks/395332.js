a.d(t, { QR: () => d, VA: () => u, w$: () => m, zd: () => s });
var n = a(64700),
    i = a(207803),
    l = a(403362),
    o = a(369374),
    r = a(969988);
function c(e, t) {
    let { data: a } = (0, i.FY)(),
        o = (0, r.A)(a?.map(t).filter(l.Vq) ?? [], e);
    return n.useMemo(() => [...o.values()].some((e) => e.enabled), [o]);
}
function d(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        a = c(e, (e) => e.editExperiment);
    return !t && a;
}
function s(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        a = c(e, (e) => e.coachmarkExperiment);
    return !t && a;
}
function m(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        { data: a } = (0, i.FY)(),
        l = (0, r.A)(a?.map((e) => e.editExperiment) ?? [], e);
    return n.useMemo(() => (t ? [] : a?.filter((e) => l.get(e.editExperiment)?.enabled === !0)), [t, a, l]);
}
function u(e) {
    let { enabled: t } = o.A.useConfig({ location: e.location }),
        { data: a } = (0, i.FY)(),
        c = (0, r.A)(a?.map((e) => e.editExperiment) ?? [], e),
        d = (0, r.A)(a?.map((e) => e.coachmarkExperiment).filter(l.Vq) ?? [], e);
    return n.useMemo(
        () =>
            t
                ? []
                : a?.filter(
                      (e) =>
                          c.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          d.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, a, c, d],
    );
}
