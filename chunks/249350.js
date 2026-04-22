n.d(t, { n: () => m });
var l = n(64700),
    i = n(311907),
    a = n(429913),
    s = n(287809),
    r = n(147964),
    o = n(403362),
    c = n(723702),
    d = n(933958),
    u = n(847381);
function m(e) {
    let t = (0, i.bG)([s.default], s.default.getCurrentUser),
        n = (0, i.yK)([d.Ay], () => d.Ay.getShelfActivities(e)),
        m = (0, i.bG)([r.A], () => r.A.testModeEmbeddedApplicationId),
        p = n.map((e) => e.application_id),
        _ = null != m ? [m, ...p] : p,
        A = (0, a.A)(_),
        h = l.useMemo(() => A.filter(o.Vq), [A]),
        f = l.useMemo(
            () =>
                null != m && h.length > 0 && h[0].id === m && null != h[0].embeddedActivityConfig
                    ? [{ activity: h[0].embeddedActivityConfig, application: h[0] }]
                    : [],
            [h, m],
        ),
        x = l.useMemo(
            () =>
                n
                    .map((e) => {
                        let t = h.find((t) => t.id === e.application_id);
                        return null == t ? null : { activity: e, application: t };
                    })
                    .filter(o.Vq),
            [n, h],
        );
    return l.useMemo(
        () =>
            [...f, ...x]
                .filter((e) => {
                    let { activity: t } = e;
                    return (t.supported_platforms ?? []).includes((0, u.A)((0, c.getOS)()));
                })
                .filter((e) => {
                    let { activity: n } = e;
                    return !n.requires_age_gate || t?.nsfwAllowed === !0 || t?.nsfwAllowed == null;
                }),
        [t?.nsfwAllowed, x, f],
    );
}
