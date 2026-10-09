n.d(t, { A: () => d });
var r = n(582128),
    s = n(158390),
    u = n(17928),
    c = n(71393),
    i = n(246338),
    l = n(371169),
    p = n(42766);
let a = new s.A(3e4, 3e5);
function d(e, t) {
    let n = (0, u.bG)(
            [c.A],
            () => t && null != e && (0, i.Qv)(c.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
            [t, e],
        ),
        s = (0, u.bG)([p.Ay], () => p.Ay.getProjectsFetchState()?.type ?? null);
    return (
        r.useEffect(() => {
            if (("success" === s && a.succeed(), n)) {
                if (null == s) return void (0, l.hF)();
                "error" !== s || a.pending || a.fail(() => (0, l.hF)());
            }
        }, [n, s]),
        (0, u.bG)(
            [p.Ay],
            () => {
                if (!n || null == e) return !1;
                let t = p.Ay.findProjectByApplicationId(e);
                return !!(null != t && (0, p.PV)(t)) || (p.Ay.getProjectsFetchState()?.type !== "success" && null);
            },
            [n, e],
        )
    );
}
