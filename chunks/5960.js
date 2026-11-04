var r = s(582128),
    c = s(158390),
    n = s(855986),
    u = s(71393),
    l = s(246338),
    i = s(371169),
    p = s(260498);
let o = new c.A(3e4, 3e5);
s.d(
    t,
    {},
    {
        A: function (e, t) {
            let s = (0, n.bG)(
                    [u.A],
                    () => t && null != e && (0, l.XF)(u.A.getGuildsArray(), "useIsOwnedConjureApplication"),
                    [t, e],
                ),
                c = (0, n.bG)([p.Ay], () => p.Ay.getProjectsFetchState()?.type ?? null);
            return (
                r.useEffect(() => {
                    if (("success" === c && o.succeed(), s)) {
                        if (null == c) return void (0, i.listProjects)();
                        "error" !== c || o.pending || o.fail(() => (0, i.listProjects)());
                    }
                }, [s, c]),
                (0, n.bG)(
                    [p.Ay],
                    () => {
                        if (!s || null == e) return !1;
                        let t = p.Ay.findProjectByApplicationId(e);
                        return (
                            !!(null != t && (0, p.PV)(t)) || (p.Ay.getProjectsFetchState()?.type !== "success" && null)
                        );
                    },
                    [s, e],
                )
            );
        },
    },
);
