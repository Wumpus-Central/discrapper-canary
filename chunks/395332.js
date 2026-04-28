n.d(t, { QR: () => u, VA: () => p, w$: () => m, zd: () => d });
var a = n(64700),
    i = n(207803),
    o = n(403362),
    r = n(369374),
    l = n(969988);
function c(e, t) {
    let { data: n } = (0, i.FY)(),
        r = (0, l.A)(n?.map(t).filter(o.Vq) ?? [], e);
    return a.useMemo(() => [...r.values()].some((e) => e.enabled), [r]);
}
function u(e) {
    let { enabled: t } = r.A.useConfig({ location: e.location }),
        n = c(e, (e) => e.editExperiment);
    return !t && n;
}
function d(e) {
    let { enabled: t } = r.A.useConfig({ location: e.location }),
        n = c(e, (e) => e.coachmarkExperiment);
    return !t && n;
}
function m(e) {
    let { enabled: t } = r.A.useConfig({ location: e.location }),
        { data: n } = (0, i.FY)(),
        o = (0, l.A)(n?.map((e) => e.editExperiment) ?? [], e);
    return a.useMemo(() => (t ? [] : n?.filter((e) => o.get(e.editExperiment)?.enabled === !0)), [t, n, o]);
}
function p(e) {
    let { enabled: t } = r.A.useConfig({ location: e.location }),
        { data: n } = (0, i.FY)(),
        c = (0, l.A)(n?.map((e) => e.editExperiment) ?? [], e),
        u = (0, l.A)(n?.map((e) => e.coachmarkExperiment).filter(o.Vq) ?? [], e);
    return a.useMemo(
        () =>
            t
                ? []
                : n?.filter(
                      (e) =>
                          c.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          u.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, n, c, u],
    );
}
