r.d(t, { Z: () => i }), r(47120);
var A = r(192379),
    n = r(442837),
    o = r(881052),
    a = r(728345),
    l = r(812206);
function i(e, t) {
    let r = (0, n.e7)([l.Z], () => l.Z.getGuildApplication(e, t)),
        [i, s] = A.useState(null == r),
        [c, d] = A.useState(),
        [u, f] = A.useState(!1),
        g = A.useCallback(async () => {
            if (null == r && null != e) {
                f(!0), s(!0);
                try {
                    await a.ZP.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0
                    });
                } catch (e) {
                    d(new o.Hx(e));
                } finally {
                    s(!1);
                }
            }
        }, [r, t, e]);
    return (
        A.useEffect(() => {
            u || g();
        }, [u, g]),
        {
            application: r,
            error: c,
            loading: i
        }
    );
}
