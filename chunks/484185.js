n.d(t, { A: () => c });
var i = n(582128),
    r = n(158390),
    l = n(17928),
    a = n(71393),
    s = n(948230),
    o = n(972786),
    u = n(683180);
let d = new r.A(3e4, 3e5);
function c(e, t) {
    let n = (0, l.bG)(
            [a.A],
            () => t && null != e && (0, u.RZ)(a.A.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0,
            [t, e],
        ),
        r = (0, l.bG)([o.Ay], () => o.Ay.getProjectsFetchState()?.type ?? null);
    return (
        i.useEffect(() => {
            if (("success" === r && d.succeed(), n)) {
                if (null == r) return void (0, s.hF)();
                "error" !== r || d.pending || d.fail(() => (0, s.hF)());
            }
        }, [n, r]),
        (0, l.bG)(
            [o.Ay],
            () => {
                if (!n || null == e) return !1;
                let t = o.Ay.findProjectByApplicationId(e);
                return !!(null != t && (0, o.PV)(t)) || (o.Ay.getProjectsFetchState()?.type !== "success" && null);
            },
            [n, e],
        )
    );
}
