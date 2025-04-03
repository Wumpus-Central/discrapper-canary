r.d(t, { Z: () => i }), r(47120);
var n = r(192379),
    A = r(442837),
    a = r(881052),
    o = r(728345),
    l = r(812206);
function i(e, t) {
    let r = (0, A.e7)([l.Z], () => l.Z.getGuildApplication(e, t)),
        [i, s] = n.useState(null == r),
        [c, d] = n.useState(),
        [u, g] = n.useState(!1),
        f = n.useCallback(async () => {
            if (null == r && null != e) {
                g(!0), s(!0);
                try {
                    await o.ZP.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0
                    });
                } catch (e) {
                    d(new a.Hx(e));
                } finally {
                    s(!1);
                }
            }
        }, [r, t, e]);
    return (
        n.useEffect(() => {
            u || f();
        }, [u, f]),
        {
            application: r,
            error: c,
            loading: i
        }
    );
}
