n.d(t, { n: () => f }), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(429913),
    s = n(287809),
    o = n(147964),
    l = n(403362),
    c = n(723702),
    u = n(933958),
    d = n(847381);
function f(e) {
    let t = (0, i.bG)([s.default], s.default.getCurrentUser),
        n = (0, i.yK)([u.Ay], () => u.Ay.getShelfActivities(e)),
        f = (0, i.bG)([o.A], () => o.A.testModeEmbeddedApplicationId),
        p = n.map((e) => e.application_id),
        _ = null != f ? [f, ...p] : p,
        h = (0, a.A)(_),
        m = r.useMemo(() => h.filter(l.Vq), [h]),
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
                    .filter(l.Vq),
            [n, m],
        );
    return r.useMemo(
        () =>
            [...g, ...E]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null != (t = n.supported_platforms) ? t : []).includes((0, d.A)((0, c.getOS)()));
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
