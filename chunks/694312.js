n.d(t, { E: () => m }), n(47120);
var i = n(192379),
    r = n(442837),
    l = n(424602),
    a = n(835473),
    o = n(594174),
    c = n(695103),
    s = n(823379),
    u = n(358085),
    d = n(317381),
    p = n(761122);
function m(e, t) {
    let n = (0, r.e7)([o.default], o.default.getCurrentUser),
        m = (0, r.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        f = (0, r.e7)([c.Z], () => c.Z.testModeEmbeddedApplicationId),
        h = m.map((e) => e.application_id),
        b = null != f ? [f, ...h] : h,
        C = (0, a.Z)(b),
        _ = 'channel' in t && (0, l.aZ)(t.channel, 'useActivityShelfData()'),
        x = i.useMemo(() => C.filter(s.lm), [C]),
        v = i.useMemo(
            () =>
                null != f && x.length > 0 && x[0].id === f && null != x[0].embeddedActivityConfig
                    ? [
                          {
                              activity: x[0].embeddedActivityConfig,
                              application: x[0]
                          }
                      ]
                    : [],
            [x, f]
        ),
        y = i.useMemo(
            () =>
                m
                    .map((e) => {
                        let t = x.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(s.lm),
            [m, x]
        );
    return i.useMemo(
        () =>
            [...v, ...y]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null != (t = n.supported_platforms) ? t : []).includes((0, p.Z)((0, u.getOS)()));
                })
                .filter((e) => {
                    let { activity: t } = e;
                    return !t.requires_age_gate || (null == n ? void 0 : n.nsfwAllowed) === !0 || (null == n ? void 0 : n.nsfwAllowed) == null;
                })
                .filter((e) => !_ || e.application.id !== l.gu),
        [null == n ? void 0 : n.nsfwAllowed, y, _, v]
    );
}
