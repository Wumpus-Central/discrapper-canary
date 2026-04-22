n.d(t, { A: () => o });
var i = n(64700),
    l = n(311907),
    s = n(198982),
    r = n(627363),
    a = n(587895);
function o(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getGuildApplication(e, t)),
        [o, d] = i.useState(null == n),
        [c, u] = i.useState(),
        [m, g] = i.useState(!1),
        h = i.useCallback(async () => {
            if (null == n && null != e) {
                g(!0), d(!0);
                try {
                    await r.Ay.getApplicationsForGuild(e, { type: t, includeTeam: !0 });
                } catch (e) {
                    u(new s.LG(e));
                } finally {
                    d(!1);
                }
            }
        }, [n, t, e]);
    return (
        i.useEffect(() => {
            m || h();
        }, [m, h]),
        { application: n, error: c, loading: o }
    );
}
