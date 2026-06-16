n.d(t, { A: () => E });
var u = n(64700),
    l = n(17928),
    r = n(993408),
    i = n(522055),
    o = n(645619),
    s = n(103821);
function E(e) {
    let t = (0, l.bG)([o.A], () => o.A.getStateForGuild(e)),
        n = (0, l.bG)([i.A], () => i.A.getStateForGuild(e)),
        E = (0, s.i)("useFeaturedExpiringPowerup");
    return u.useMemo(() => {
        if (!E) return;
        let e = [...Object.values(t?.unlockedPowerups ?? {}), ...Object.values(n?.entitlements ?? {})].filter(
            (e) => null != e.ends_at && (e.metadata?.num_expiring_boosts ?? 0) > 0,
        );
        if (0 === e.length) return;
        let u = e.reduce((e, t) => (t.ends_at > e.ends_at ? t : e)),
            l = t?.allPowerups[u.sku_id]?.title ?? null,
            i = u.sku?.tenant_metadata?.guild_monetization?.game_server != null;
        if (null !== l || i)
            return {
                name: l,
                daysUntilExpiry: Math.max(0, (0, r.WU)(new Date(u.ends_at))),
                numExpiringBoosts: u.metadata?.num_expiring_boosts ?? 0,
                isGameServer: i,
                skuId: u.sku_id,
            };
    }, [t, n, E]);
}
