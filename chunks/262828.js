n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    l = n(198982),
    s = n(627363),
    a = n(587895);

function c(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuildApplication(e, t)),
        [c, o] = r.useState(null == n),
        [d, u] = r.useState(),
        [f, g] = r.useState(!1),
        b = r.useCallback(async () => {
            if (null == n && null != e) {
                g(!0), o(!0);
                try {
                    await s.Ay.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0,
                    });
                } catch (e) {
                    u(new l.LG(e));
                } finally {
                    o(!1);
                }
            }
        }, [n, t, e]);
    return (
        r.useEffect(() => {
            f || b();
        }, [f, b]),
        {
            application: n,
            error: d,
            loading: c,
        }
    );
}
