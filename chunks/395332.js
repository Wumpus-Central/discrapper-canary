n.d(t, { QR: () => c, VA: () => g, w$: () => u, zd: () => d });
var i = n(64700),
    a = n(207803),
    l = n(403362),
    s = n(369374),
    r = n(415539);
function o(e, t) {
    let { data: n } = (0, a.FY)(),
        s = (0, r.A)(n?.map(t).filter(l.Vq) ?? [], e);
    return i.useMemo(() => [...s.values()].some((e) => e.enabled), [s]);
}
function c(e) {
    let { enabled: t } = s.A.useConfig({ location: e.location }),
        n = o(e, (e) => e.editExperiment);
    return !t && n;
}
function d(e) {
    let { enabled: t } = s.A.useConfig({ location: e.location }),
        n = o(e, (e) => e.coachmarkExperiment);
    return !t && n;
}
function u(e) {
    let { enabled: t } = s.A.useConfig({ location: e.location }),
        { data: n } = (0, a.FY)(),
        l = (0, r.A)(n?.map((e) => e.editExperiment) ?? [], e);
    return i.useMemo(() => (t ? [] : n?.filter((e) => l.get(e.editExperiment)?.enabled === !0)), [t, n, l]);
}
function g(e) {
    let { enabled: t } = s.A.useConfig({ location: e.location }),
        { data: n } = (0, a.FY)(),
        o = (0, r.A)(n?.map((e) => e.editExperiment) ?? [], e),
        c = (0, r.A)(n?.map((e) => e.coachmarkExperiment).filter(l.Vq) ?? [], e);
    return i.useMemo(
        () =>
            t
                ? []
                : n?.filter(
                      (e) =>
                          o.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          c.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, n, o, c],
    );
}
