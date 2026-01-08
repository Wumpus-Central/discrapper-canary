n.d(t, {
    no: () => d,
    q5: () => u,
    zw: () => c,
}),
    n(388685);
var r = n(473749),
    i = n(350327),
    a = n(438379),
    o = n(894883);
function s(e) {
    return (0, a.J)({
        location: e.location,
        autoTrackExposure: e.autoTrackExposure,
    });
}
function l(e, t) {
    var n;
    let { data: a } = (0, i.SK)(),
        l = (0, o.Z)(null != (n = null == a ? void 0 : a.map(t)) ? n : [], e),
        c = s(e);
    return r.useMemo(() => !c && [...l.values()].some((e) => e.enabled), [c, l]);
}
function c(e) {
    return l(e, (e) => e.viewExperiment);
}
function u(e) {
    return l(e, (e) => e.editExperiment);
}
function d(e) {
    var t;
    let { data: n } = (0, i.SK)(),
        a = (0, o.Z)(null != (t = null == n ? void 0 : n.map((e) => e.editExperiment)) ? t : [], e),
        l = s(e);
    return r.useMemo(
        () =>
            l
                ? []
                : null == n
                  ? void 0
                  : n.filter((e) => {
                        var t;
                        return (null == (t = a.get(e.editExperiment)) ? void 0 : t.enabled) === !0;
                    }),
        [n, a, l],
    );
}
