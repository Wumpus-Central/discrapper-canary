n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(442837),
    l = n(881052),
    s = n(728345),
    a = n(812206);
function o(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.getGuildApplication(e, t)),
        [o, c] = r.useState(null == n),
        [u, d] = r.useState(),
        [m, g] = r.useState(!1),
        p = r.useCallback(async () => {
            if (null == n && null != e) {
                g(!0), c(!0);
                try {
                    await s.ZP.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0
                    });
                } catch (e) {
                    d(new l.Hx(e));
                } finally {
                    c(!1);
                }
            }
        }, [n, t, e]);
    return (
        r.useEffect(() => {
            m || p();
        }, [m, p]),
        {
            application: n,
            error: u,
            loading: o
        }
    );
}
