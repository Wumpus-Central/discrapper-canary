"use strict";
n.d(t, { n: () => _ });
var r = n(64700),
    i = n(311907),
    a = n(429913),
    s = n(287809),
    o = n(147964),
    l = n(403362),
    u = n(723702),
    c = n(933958),
    d = n(847381);
function _(e) {
    let t = (0, i.bG)([s.default], s.default.getCurrentUser),
        n = (0, i.yK)([c.Ay], () => c.Ay.getShelfActivities(e)),
        _ = (0, i.bG)([o.A], () => o.A.testModeEmbeddedApplicationId),
        f = n.map((e) => e.application_id),
        p = null != _ ? [_, ...f] : f,
        h = (0, a.A)(p),
        m = r.useMemo(() => h.filter(l.Vq), [h]),
        g = r.useMemo(
            () =>
                null != _ && m.length > 0 && m[0].id === _ && null != m[0].embeddedActivityConfig
                    ? [{ activity: m[0].embeddedActivityConfig, application: m[0] }]
                    : [],
            [m, _],
        ),
        E = r.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = m.find((t) => t.id === e.application_id);
                        return null == t ? null : { activity: e, application: t };
                    })
                    .filter(l.Vq),
            [n, m],
        );
    return r.useMemo(
        () =>
            [...g, ...E]
                .filter((e) => {
                    let { activity: t } = e;
                    return (t.supported_platforms ?? []).includes((0, d.A)((0, u.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || t?.nsfwAllowed === !0 || t?.nsfwAllowed == null;
                }),
        [t?.nsfwAllowed, E, g],
    );
}
