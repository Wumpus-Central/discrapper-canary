n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(881052),
    a = n(728345),
    s = n(812206);
function o(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getGuildApplication(e, t)),
        [o, c] = r.useState(null == n),
        [d, u] = r.useState(),
        [g, m] = r.useState(!1),
        p = r.useCallback(async () => {
            if (null == n && null != e) {
                m(!0), c(!0);
                try {
                    await a.ZP.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0,
                    });
                } catch (e) {
                    u(new l.Hx(e));
                } finally {
                    c(!1);
                }
            }
        }, [n, t, e]);
    return (
        r.useEffect(() => {
            g || p();
        }, [g, p]),
        {
            application: n,
            error: d,
            loading: o,
        }
    );
}
