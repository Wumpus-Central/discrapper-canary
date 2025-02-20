n.d(t, { E: () => s }), n(47120);
var i = n(192379),
    r = n(442837),
    l = n(835473),
    o = n(594174),
    c = n(695103),
    a = n(823379),
    u = n(358085),
    d = n(317381),
    p = n(761122);
function s(e) {
    let t = (0, r.e7)([o.default], o.default.getCurrentUser),
        n = (0, r.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
        s = (0, r.e7)([c.Z], () => c.Z.testModeEmbeddedApplicationId),
        f = n.map((e) => e.application_id),
        v = null != s ? [s, ...f] : f,
        b = (0, l.Z)(v),
        y = i.useMemo(() => b.filter(a.lm), [b]),
        g = i.useMemo(
            () =>
                null != s && y.length > 0 && y[0].id === s && null != y[0].embeddedActivityConfig
                    ? [
                          {
                              activity: y[0].embeddedActivityConfig,
                              application: y[0]
                          }
                      ]
                    : [],
            [y, s]
        ),
        O = i.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = y.find((t) => t.id === e.application_id);
                        return null == t
                            ? null
                            : {
                                  activity: e,
                                  application: t
                              };
                    })
                    .filter(a.lm),
            [n, y]
        );
    return i.useMemo(
        () =>
            [...g, ...O]
                .filter((e) => {
                    var t;
                    let { activity: n } = e;
                    return (null !== (t = n.supported_platforms) && void 0 !== t ? t : []).includes((0, p.Z)((0, u.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null;
                }),
        [null == t ? void 0 : t.nsfwAllowed, O, g]
    );
}
