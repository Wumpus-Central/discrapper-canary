n.d(t, { A: () => d });
var r = n(582128),
    s = n(158390),
    u = n(17928),
    c = n(71393),
    i = n(948230),
    l = n(972786),
    p = n(683180);
let a = new s.A(3e4, 3e5);
function d(e, t) {
    let n = (0, u.bG)(
            [c.A],
            () => t && null != e && (0, p.RZ)(c.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
            [t, e],
        ),
        s = (0, u.bG)([l.Ay], () => l.Ay.getProjectsFetchState()?.type ?? null);
    return (
        r.useEffect(() => {
            if (("success" === s && a.succeed(), n)) {
                if (null == s) return void (0, i.hF)();
                "error" !== s || a.pending || a.fail(() => (0, i.hF)());
            }
        }, [n, s]),
        (0, u.bG)(
            [l.Ay],
            () => {
                if (!n || null == e) return !1;
                let t = l.Ay.findProjectByApplicationId(e);
                return !!(null != t && (0, l.PV)(t)) || (l.Ay.getProjectsFetchState()?.type !== "success" && null);
            },
            [n, e],
        )
    );
}
