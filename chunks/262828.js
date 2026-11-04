var u = a(582128),
    i = a(855986),
    l = a(627784),
    c = a(627363),
    n = a(587895);
a.d(
    e,
    {},
    {
        A: function (t, e) {
            let a = (0, i.bG)([n.A], () => n.A.getGuildApplication(t, e)),
                [s, p] = u.useState(null == a),
                [d, r] = u.useState(),
                [h, o] = u.useState(!1),
                A = u.useCallback(async () => {
                    if (null == a && null != t) {
                        (o(!0), p(!0));
                        try {
                            await c.Ay.getApplicationsForGuild(t, { type: e, includeTeam: !0 });
                        } catch (t) {
                            r(new l.LG(t));
                        } finally {
                            p(!1);
                        }
                    }
                }, [a, e, t]);
            return (
                u.useEffect(() => {
                    h || A();
                }, [h, A]),
                { application: a, error: d, loading: s }
            );
        },
    },
);
