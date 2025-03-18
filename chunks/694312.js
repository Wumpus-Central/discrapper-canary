n.d(t, { E: () => f }), n(47120);
var i = n(192379),
    r = n(442837),
    l = n(424602),
    o = n(835473),
    a = n(594174),
    c = n(695103),
    u = n(823379),
    d = n(358085),
    s = n(317381),
    p = n(761122);
function f(e, t) {
    let n = (0, r.e7)([a.default], a.default.getCurrentUser),
        f = (0, r.Wu)([s.ZP], () => s.ZP.getShelfActivities(e)),
        v = (0, r.e7)([c.Z], () => c.Z.testModeEmbeddedApplicationId),
        y = f.map((e) => e.application_id),
        b = null != v ? [v, ...y] : y,
        g = (0, o.Z)(b),
        h = 'channel' in t && (0, l.aZ)(t.channel, 'useActivityShelfData()'),
        O = i.useMemo(() => g.filter(u.lm), [g]),
        m = i.useMemo(
            () =>
                null != v && O.length > 0 && O[0].id === v && null != O[0].embeddedActivityConfig
                    ? [
                          {
                              activity: O[0].embeddedActivityConfig,
                              application: O[0]
                          }
                      ]
                    : [],
            [O, v]
        ),
        w = i.useMemo(
            () =>
                f
                    .map((e) => {
                        let t = O.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(u.lm),
            [f, O]
        );
    return i.useMemo(
        () =>
            [...m, ...w]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, p.Z)((0, d.getOS)()));
                })
                .filter((e) => {
                    let { activity: t } = e;
                    return !t.requires_age_gate || (null == n ? void 0 : n.nsfwAllowed) === !0 || (null == n ? void 0 : n.nsfwAllowed) == null;
                })
                .filter((e) => !h || e.application.id !== l.gu),
        [null == n ? void 0 : n.nsfwAllowed, w, h, m]
    );
}
