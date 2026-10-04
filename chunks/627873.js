n.d(t, { A: () => c });
var i = n(582128),
    r = n(158390),
    l = n(17928),
    a = n(71393),
    o = n(477818),
    s = n(26278),
    u = n(870440);
let d = new r.A(3e4, 3e5);
function c(e, t) {
    let n = (0, l.bG)(
            [a.A],
            () => t && null != e && (0, u.RZ)(a.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
            [t, e],
        ),
        r = (0, l.bG)([s.Ay], () => s.Ay.getProjectsFetchState()?.type ?? null);
    return (
        i.useEffect(() => {
            if (("success" === r && d.succeed(), n)) {
                if (null == r) return void (0, o.hF)();
                "error" !== r || d.pending || d.fail(() => (0, o.hF)());
            }
        }, [n, r]),
        (0, l.bG)(
            [s.Ay],
            () => {
                if (!n || null == e) return !1;
                let t = s.Ay.findProjectByApplicationId(e);
                return !!(null != t && (0, s.PV)(t)) || (s.Ay.getProjectsFetchState()?.type !== "success" && null);
            },
            [n, e],
        )
    );
}
