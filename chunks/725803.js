n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var A = n(192379),
    r = n(442837),
    a = n(881052),
    l = n(728345),
    i = n(812206);
function o(e, t) {
    let n = (0, r.e7)([i.Z], () => i.Z.getGuildApplication(e, t)),
        [o, s] = A.useState(null == n),
        [d, c] = A.useState(),
        [u, g] = A.useState(!1),
        h = A.useCallback(async () => {
            if (null == n && null != e) {
                g(!0), s(!0);
                try {
                    await l.ZP.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0
                    });
                } catch (e) {
                    c(new a.Hx(e));
                } finally {
                    s(!1);
                }
            }
        }, [n, t, e]);
    return (
        A.useEffect(() => {
            !u && h();
        }, [u, h]),
        {
            application: n,
            error: d,
            loading: o
        }
    );
}
