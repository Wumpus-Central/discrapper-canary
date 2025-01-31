t.d(e, { Z: () => o }), t(47120);
var n = t(192379),
    a = t(442837),
    l = t(881052),
    r = t(728345),
    i = t(812206);
function o(A, e) {
    let t = (0, a.e7)([i.Z], () => i.Z.getGuildApplication(A, e)),
        [o, s] = n.useState(null == t),
        [d, c] = n.useState(),
        [u, g] = n.useState(!1),
        m = n.useCallback(async () => {
            if (null == t && null != A) {
                g(!0), s(!0);
                try {
                    await r.ZP.getApplicationsForGuild(A, {
                        type: e,
                        includeTeam: !0
                    });
                } catch (A) {
                    c(new l.Hx(A));
                } finally {
                    s(!1);
                }
            }
        }, [t, e, A]);
    return (
        n.useEffect(() => {
            u || m();
        }, [u, m]),
        {
            application: t,
            error: d,
            loading: o
        }
    );
}
