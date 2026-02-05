n.d(t, { DB: () => A, JY: () => c, on: () => u, ul: () => h });
var i = n(64700),
    r = n(207803),
    a = n(368629),
    l = n(403362),
    s = n(415539);
function o(e) {
    return (0, a.r)({ location: e.location, autoTrackExposure: e.autoTrackExposure });
}
function d(e, t) {
    let { data: n } = (0, r.FY)(),
        a = (0, s.A)(n?.map(t).filter(l.Vq) ?? [], e),
        d = o(e);
    return i.useMemo(() => !d && [...a.values()].some((e) => e.enabled), [d, a]);
}
function c(e) {
    return d(e, (e) => e.editExperiment);
}
function u(e) {
    return d(e, (e) => e.coachmarkExperiment);
}
function A(e) {
    let { data: t } = (0, r.FY)(),
        n = (0, s.A)(t?.map((e) => e.editExperiment) ?? [], e),
        a = o(e);
    return i.useMemo(() => (a ? [] : t?.filter((e) => n.get(e.editExperiment)?.enabled === !0)), [t, n, a]);
}
function h(e) {
    let { data: t } = (0, r.FY)(),
        n = (0, s.A)(t?.map((e) => e.editExperiment) ?? [], e),
        a = (0, s.A)(t?.map((e) => e.coachmarkExperiment).filter(l.Vq) ?? [], e),
        d = o(e);
    return i.useMemo(
        () =>
            d
                ? []
                : t?.filter(
                      (e) =>
                          n.get(e.editExperiment)?.enabled === !0 &&
                          null != e.coachmarkExperiment &&
                          a.get(e.coachmarkExperiment)?.enabled === !0,
                  ),
        [t, n, a, d],
    );
}
