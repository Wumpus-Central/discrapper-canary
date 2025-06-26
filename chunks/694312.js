n.d(t, { E: () => p }), n(388685);
var i = n(73800),
    l = n(442837),
    r = n(835473),
    o = n(594174),
    a = n(695103),
    c = n(823379),
    s = n(358085),
    u = n(317381),
    d = n(761122);
function p(e) {
    let t = (0, l.e7)([o.default], o.default.getCurrentUser),
        n = (0, l.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
        p = (0, l.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId),
        m = n.map((e) => e.application_id),
        f = null != p ? [p, ...m] : m,
        h = (0, r.Z)(f),
        b = i.useMemo(() => h.filter(c.lm), [h]),
        _ = i.useMemo(
            () =>
                null != p && b.length > 0 && b[0].id === p && null != b[0].embeddedActivityConfig
                    ? [
                          {
                              activity: b[0].embeddedActivityConfig,
                              application: b[0]
                          }
                      ]
                    : [],
            [b, p]
        ),
        C = i.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = b.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(c.lm),
            [n, b]
        );
    return i.useMemo(
        () =>
            [..._, ...C]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null != (t = n.supported_platforms) ? t : []).includes((0, d.Z)((0, s.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, C, _]
    );
}
