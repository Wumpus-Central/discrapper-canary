n.d(t, {
    E: function () {
        return s;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(835473),
    o = n(594174),
    a = n(695103),
    u = n(823379),
    c = n(358085),
    d = n(317381),
    f = n(761122);
function s(e) {
    let t = (0, l.e7)([o.default], o.default.getCurrentUser),
        n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        s = (0, l.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId),
        p = n.map((e) => e.application_id),
        v = null != s ? [s, ...p] : p,
        h = (0, r.Z)(v),
        g = i.useMemo(() => h.filter(u.lm), [h]),
        Z = i.useMemo(
            () =>
                null != s && g.length > 0 && g[0].id === s && null != g[0].embeddedActivityConfig
                    ? [
                          {
                              activity: g[0].embeddedActivityConfig,
                              application: g[0]
                          }
                      ]
                    : [],
            [g, s]
        ),
        m = i.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = g.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(u.lm),
            [n, g]
        );
    return i.useMemo(
        () =>
            [...Z, ...m]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, f.Z)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, m, Z]
    );
}
