n.d(t, {
    DB: () => p,
    JY: () => u,
    on: () => d,
    ul: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(207803),
    l = n(368629),
    a = n(403362),
    s = n(415539);

function o(e) {
    return (0, l.r)({
        location: e.location,
        autoTrackExposure: e.autoTrackExposure,
    });
}

function c(e, t) {
    var n;
    let { data: l } = (0, i.FY)(),
        c = (0, s.A)(null != (n = null == l ? void 0 : l.map(t).filter(a.Vq)) ? n : [], e),
        u = o(e);
    return r.useMemo(() => !u && [...c.values()].some((e) => e.enabled), [u, c]);
}

function u(e) {
    return c(e, (e) => e.editExperiment);
}

function d(e) {
    return c(e, (e) => e.coachmarkExperiment);
}

function p(e) {
    var t;
    let { data: n } = (0, i.FY)(),
        l = (0, s.A)(null != (t = null == n ? void 0 : n.map((e) => e.editExperiment)) ? t : [], e),
        a = o(e);
    return r.useMemo(
        () =>
            a
                ? []
                : null == n
                  ? void 0
                  : n.filter((e) => {
                        var t;
                        return (null == (t = l.get(e.editExperiment)) ? void 0 : t.enabled) === !0;
                    }),
        [n, l, a],
    );
}

function f(e) {
    var t, n;
    let { data: l } = (0, i.FY)(),
        c = (0, s.A)(null != (t = null == l ? void 0 : l.map((e) => e.editExperiment)) ? t : [], e),
        u = (0, s.A)(null != (n = null == l ? void 0 : l.map((e) => e.coachmarkExperiment).filter(a.Vq)) ? n : [], e),
        d = o(e);
    return r.useMemo(
        () =>
            d
                ? []
                : null == l
                  ? void 0
                  : l.filter((e) => {
                        var t, n;
                        return (
                            (null == (t = c.get(e.editExperiment)) ? void 0 : t.enabled) === !0 &&
                            null != e.coachmarkExperiment &&
                            (null == (n = u.get(e.coachmarkExperiment)) ? void 0 : n.enabled) === !0
                        );
                    }),
        [l, c, u, d],
    );
}
