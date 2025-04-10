n.d(t, { E: () => m }), n(388685);
var i = n(192379),
    r = n(442837),
    l = n(424602),
    a = n(835473),
    o = n(594174),
    s = n(695103),
    c = n(823379),
    u = n(358085),
    d = n(317381),
    p = n(761122);
function m(e, t) {
    let n = (0, r.e7)([o.default], o.default.getCurrentUser),
        m = (0, r.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        f = (0, r.e7)([s.Z], () => s.Z.testModeEmbeddedApplicationId),
        h = m.map((e) => e.application_id),
        b = null != f ? [f, ...h] : h,
        C = (0, a.Z)(b),
        x = 'channel' in t && (0, l.aZ)(t.channel, 'useActivityShelfData()'),
        _ = i.useMemo(() => C.filter(c.lm), [C]),
        y = i.useMemo(
            () =>
                null != f && _.length > 0 && _[0].id === f && null != _[0].embeddedActivityConfig
                    ? [
                          {
                              activity: _[0].embeddedActivityConfig,
                              application: _[0]
                          }
                      ]
                    : [],
            [_, f]
        ),
        v = i.useMemo(
            () =>
                m
                    .map((e) => {
                        let t = _.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(c.lm),
            [m, _]
        );
    return i.useMemo(
        () =>
            [...y, ...v]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null != (t = n.supported_platforms) ? t : []).includes((0, p.Z)((0, u.getOS)()));
                })
                .filter((e) => {
                    let { activity: t } = e;
                    return !t.requires_age_gate || (null == n ? void 0 : n.nsfwAllowed) === !0 || (null == n ? void 0 : n.nsfwAllowed) == null;
                })
                .filter((e) => !x || e.application.id !== l.gu),
        [null == n ? void 0 : n.nsfwAllowed, v, x, y]
    );
}
