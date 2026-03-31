n.d(t, { DB: () => c, JY: () => o, on: () => d, ul: () => u });
var i = n(64700),
    a = n(207803),
    l = n(403362),
    s = n(415539);
function r(e, t) {
    let { data: n } = (0, a.FY)(),
        r = (0, s.A)(n?.map(t).filter(l.Vq) ?? [], e);
    return i.useMemo(() => [...r.values()].some((e) => e.enabled), [r]);
}
function o(e) {
    return r(e, (e) => e.editExperiment);
}
function d(e) {
    return r(e, (e) => e.coachmarkExperiment);
}
function c(e) {
    let { data: t } = (0, a.FY)(),
        n = (0, s.A)(t?.map((e) => e.editExperiment) ?? [], e);
    return i.useMemo(() => t?.filter((e) => n.get(e.editExperiment)?.enabled === !0), [t, n]);
}
function u(e) {
    let { data: t } = (0, a.FY)(),
        n = (0, s.A)(t?.map((e) => e.editExperiment) ?? [], e),
        r = (0, s.A)(t?.map((e) => e.coachmarkExperiment).filter(l.Vq) ?? [], e);
    return i.useMemo(
        () =>
            t?.filter(
                (e) =>
                    n.get(e.editExperiment)?.enabled === !0 &&
                    null != e.coachmarkExperiment &&
                    r.get(e.coachmarkExperiment)?.enabled === !0,
            ),
        [t, n, r],
    );
}
