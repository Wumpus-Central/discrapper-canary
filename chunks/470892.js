n.d(t, { A: () => A });
var l = n(582128),
    u = n(855986),
    r = n(993408),
    i = n(475669),
    o = n(645619);
let s = (0, n(400845).Ay)({
    name: "2026-02-expiring-powerup-coachmark",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function A(e) {
    let t = (0, u.bG)([o.A], () => o.A.getStateForGuild(e)),
        n = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
        A = s.useConfig({ location: "useFeaturedExpiringPowerup" }).enabled;
    return l.useMemo(() => {
        if (!A) return;
        let e = Object.values(t?.unlockedPowerups ?? {}),
            l = Object.values(n?.entitlements ?? {}),
            u = [...e, ...l].filter((e) => null != e.ends_at && (e.metadata?.num_expiring_boosts ?? 0) > 0);
        if (0 === u.length) return;
        let i = u.reduce((e, t) => (t.ends_at > e.ends_at ? t : e)),
            o = t?.allPowerups[i.sku_id]?.title ?? null,
            s = i.sku?.tenant_metadata?.guild_monetization?.game_server != null;
        if (null !== o || s)
            return {
                name: o,
                daysUntilExpiry: Math.max(0, (0, r.WU)(new Date(i.ends_at))),
                numExpiringBoosts: i.metadata?.num_expiring_boosts ?? 0,
                isGameServer: s,
                skuId: i.sku_id,
            };
    }, [t, n, A]);
}
