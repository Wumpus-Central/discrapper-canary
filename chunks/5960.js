n.d(t, { A: () => A });
var u = n(582128),
    r = n(158390),
    c = n(17928),
    l = n(71393),
    s = n(246338),
    i = n(371169),
    p = n(260498);
let d = new r.A(3e4, 3e5);
function A(e, t) {
    let n = (0, c.bG)(
            [l.A],
            () => t && null != e && (0, s.Qv)(l.A.getGuildsArray(), "useIsOwnedConjureApplication").length > 0,
            [t, e],
        ),
        r = (0, c.bG)([p.Ay], () => p.Ay.getProjectsFetchState()?.type ?? null);
    return (
        u.useEffect(() => {
            if (("success" === r && d.succeed(), n)) {
                if (null == r) return void (0, i.hF)();
                "error" !== r || d.pending || d.fail(() => (0, i.hF)());
            }
        }, [n, r]),
        (0, c.bG)(
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
