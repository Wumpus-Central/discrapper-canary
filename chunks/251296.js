n.d(t, {
    hX: () => d,
    no: () => f,
    q5: () => u,
    vl: () => p,
}),
    n(388685);
var r = n(473749),
    i = n(350327),
    a = n(438379),
    o = n(823379),
    s = n(894883);
function l(e) {
    return (0, a.J)({
        location: e.location,
        autoTrackExposure: e.autoTrackExposure,
    });
}
function c(e, t) {
    var n;
    let { data: a } = (0, i.SK)(),
        c = (0, s.Z)(null != (n = null == a ? void 0 : a.map(t).filter(o.lm)) ? n : [], e),
        u = l(e);
    return r.useMemo(() => !u && [...c.values()].some((e) => e.enabled), [u, c]);
}
function u(e) {
    return c(e, (e) => e.editExperiment);
}
function d(e) {
    return c(e, (e) => e.coachmarkExperiment);
}
function f(e) {
    var t;
    let { data: n } = (0, i.SK)(),
        a = (0, s.Z)(null != (t = null == n ? void 0 : n.map((e) => e.editExperiment)) ? t : [], e),
        o = l(e);
    return r.useMemo(
        () =>
            o
                ? []
                : null == n
                  ? void 0
                  : n.filter((e) => {
                        var t;
                        return (null == (t = a.get(e.editExperiment)) ? void 0 : t.enabled) === !0;
                    }),
        [n, a, o],
    );
}
function p(e) {
    var t, n;
    let { data: a } = (0, i.SK)(),
        c = (0, s.Z)(null != (t = null == a ? void 0 : a.map((e) => e.editExperiment)) ? t : [], e),
        u = (0, s.Z)(null != (n = null == a ? void 0 : a.map((e) => e.coachmarkExperiment).filter(o.lm)) ? n : [], e),
        d = l(e);
    return r.useMemo(
        () =>
            d
                ? []
                : null == a
                  ? void 0
                  : a.filter((e) => {
                        var t, n;
                        return (
                            (null == (t = c.get(e.editExperiment)) ? void 0 : t.enabled) === !0 &&
                            null != e.coachmarkExperiment &&
                            (null == (n = u.get(e.coachmarkExperiment)) ? void 0 : n.enabled) === !0
                        );
                    }),
        [a, c, u, d],
    );
}
