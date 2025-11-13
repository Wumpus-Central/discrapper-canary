n.d(t, { E: () => f }), n(388685);
var r = n(647438),
    i = n(442837),
    a = n(835473),
    o = n(594174),
    s = n(695103),
    l = n(823379),
    c = n(358085),
    u = n(317381),
    d = n(761122);
function f(e) {
    let t = (0, i.e7)([o.default], o.default.getCurrentUser),
        n = (0, i.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
        f = (0, i.e7)([s.Z], () => s.Z.testModeEmbeddedApplicationId),
        _ = n.map((e) => e.application_id),
        p = null != f ? [f, ..._] : _,
        h = (0, a.Z)(p),
        m = r.useMemo(() => h.filter(l.lm), [h]),
        g = r.useMemo(
            () =>
                null != f && m.length > 0 && m[0].id === f && null != m[0].embeddedActivityConfig
                    ? [
                          {
                              activity: m[0].embeddedActivityConfig,
                              application: m[0],
                          },
                      ]
                    : [],
            [m, f],
        ),
        E = r.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = m.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t,
                              };
                    })
                    .filter(l.lm),
            [n, m],
        );
    return r.useMemo(
        () =>
            [...g, ...E]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null != (t = n.supported_platforms) ? t : []).includes((0, d.Z)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return (
                        !n.requires_age_gate ||
                        (null == t ? void 0 : t.nsfwAllowed) === !0 ||
                        (null == t ? void 0 : t.nsfwAllowed) == null
                    );
                }),
        [null == t ? void 0 : t.nsfwAllowed, E, g],
    );
}
