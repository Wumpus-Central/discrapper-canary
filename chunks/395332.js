n.d(t, { DB: () => d, JY: () => o, on: () => c, ul: () => u });
var i = n(64700),
    l = n(207803),
    a = n(403362),
    s = n(415539);
function r(e, t) {
    let { data: n } = (0, l.FY)(),
        r = (0, s.A)(n?.map(t).filter(a.Vq) ?? [], e);
    return i.useMemo(() => [...r.values()].some((e) => e.enabled), [r]);
}
function o(e) {
    return r(e, (e) => e.editExperiment);
}
function c(e) {
    return r(e, (e) => e.coachmarkExperiment);
}
function d(e) {
    let { data: t } = (0, l.FY)(),
        n = (0, s.A)(t?.map((e) => e.editExperiment) ?? [], e);
    return i.useMemo(() => t?.filter((e) => n.get(e.editExperiment)?.enabled === !0), [t, n]);
}
function u(e) {
    let { data: t } = (0, l.FY)(),
        n = (0, s.A)(t?.map((e) => e.editExperiment) ?? [], e),
        r = (0, s.A)(t?.map((e) => e.coachmarkExperiment).filter(a.Vq) ?? [], e);
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
