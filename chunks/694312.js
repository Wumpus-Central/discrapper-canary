i.d(t, { E: () => p }), i(47120);
var l = i(192379),
    n = i(442837),
    a = i(835473),
    r = i(594174),
    d = i(695103),
    o = i(823379),
    u = i(358085),
    c = i(317381),
    s = i(761122);
function p(e) {
    let t = (0, n.e7)([r.default], r.default.getCurrentUser),
        i = (0, n.Wu)([c.ZP], () => c.ZP.getShelfActivities(e)),
        p = (0, n.e7)([d.Z], () => d.Z.testModeEmbeddedApplicationId),
        f = i.map((e) => e.application_id),
        v = null != p ? [p, ...f] : f,
        h = (0, a.Z)(v),
        Z = l.useMemo(() => h.filter(o.lm), [h]),
        g = l.useMemo(
            () =>
                null != p && Z.length > 0 && Z[0].id === p && null != Z[0].embeddedActivityConfig
                    ? [
                          {
                              activity: Z[0].embeddedActivityConfig,
                              application: Z[0]
                          }
                      ]
                    : [],
            [Z, p]
        ),
        m = l.useMemo(
            () =>
                i
                    .map((e) => {
                        let t = Z.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(o.lm),
            [i, Z]
        );
    return l.useMemo(
        () =>
            [...g, ...m]
                .filter((e) => {
                    var t;
                    let { activity: i } = e;
                    return (null !== (t = i.supported_platforms) && void 0 !== t ? t : []).includes((0, s.Z)((0, u.getOS)()));
                })
                .filter((e) => {
                    let { activity: i } = e;
                    return !i.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, m, g]
    );
}
