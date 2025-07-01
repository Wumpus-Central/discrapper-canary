(n.d(t, { E: () => p }), n(388685));
var l = n(73800),
    i = n(442837),
    r = n(835473),
    a = n(594174),
    o = n(695103),
    s = n(823379),
    c = n(358085),
    u = n(317381),
    d = n(761122);
function p(e) {
    let t = (0, i.e7)([a.default], a.default.getCurrentUser),
        n = (0, i.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
        p = (0, i.e7)([o.Z], () => o.Z.testModeEmbeddedApplicationId),
        m = n.map((e) => e.application_id),
        f = null != p ? [p, ...m] : m,
        h = (0, r.Z)(f),
        v = l.useMemo(() => h.filter(s.lm), [h]),
        y = l.useMemo(
            () =>
                null != p && v.length > 0 && v[0].id === p && null != v[0].embeddedActivityConfig
                    ? [
                          {
                              activity: v[0].embeddedActivityConfig,
                              application: v[0]
                          }
                      ]
                    : [],
            [v, p]
        ),
        x = l.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = v.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(s.lm),
            [n, v]
        );
    return l.useMemo(
        () =>
            [...y, ...x]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null != (t = n.supported_platforms) ? t : []).includes((0, d.Z)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, x, y]
    );
}
