n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(881052),
    s = n(728345),
    a = n(812206);
function o(e, t) {
    let n = (0, r.e7)([a.Z], () => a.Z.getGuildApplication(e, t)),
        [o, c] = i.useState(null == n),
        [d, u] = i.useState(),
        [m, h] = i.useState(!1),
        g = i.useCallback(async () => {
            if (null == n && null != e) {
                h(!0), c(!0);
                try {
                    await s.ZP.getApplicationsForGuild(e, {
                        type: t,
                        includeTeam: !0
                    });
                } catch (e) {
                    u(new l.Hx(e));
                } finally {
                    c(!1);
                }
            }
        }, [n, t, e]);
    return (
        i.useEffect(() => {
            !m && g();
        }, [m, g]),
        {
            application: n,
            error: d,
            loading: o
        }
    );
}
