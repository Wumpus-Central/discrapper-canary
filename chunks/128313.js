l.d(t, { A: () => A });
var n = l(582128),
    u = l(17928),
    r = l(993408),
    i = l(475669),
    o = l(645619);
let s = (0, l(240921).Ay)({
    name: "2026-02-expiring-powerup-coachmark",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function A(e) {
    let t = (0, u.bG)([o.A], () => o.A.getStateForGuild(e)),
        l = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
        A = s.useConfig({ location: "useFeaturedExpiringPowerup" }).enabled;
    return n.useMemo(() => {
        if (!A) return;
        let e = [...Object.values(t?.unlockedPowerups ?? {}), ...Object.values(l?.entitlements ?? {})].filter(
            (e) => null != e.ends_at && (e.metadata?.num_expiring_boosts ?? 0) > 0,
        );
        if (0 === e.length) return;
        let n = e.reduce((e, t) => (t.ends_at > e.ends_at ? t : e)),
            u = t?.allPowerups[n.sku_id]?.title ?? null,
            i = n.sku?.tenant_metadata?.guild_monetization?.game_server != null;
        if (null !== u || i)
            return {
                name: u,
                daysUntilExpiry: Math.max(0, (0, r.WU)(new Date(n.ends_at))),
                numExpiringBoosts: n.metadata?.num_expiring_boosts ?? 0,
                isGameServer: i,
                skuId: n.sku_id,
            };
    }, [t, l, A]);
}
