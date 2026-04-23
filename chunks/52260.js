n.d(t, { A: () => d });
var i = n(64700),
    l = n(17928),
    s = n(993408),
    r = n(522055),
    a = n(645619),
    o = n(103821);
function d(e) {
    let t = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        n = (0, l.bG)([r.A], () => r.A.getStateForGuild(e)),
        d = (0, o.i)("useFeaturedExpiringPowerup");
    return i.useMemo(() => {
        if (!d) return;
        let e = [...Object.values(t?.unlockedPowerups ?? {}), ...Object.values(n?.entitlements ?? {})].filter(
            (e) => null != e.ends_at && (e.metadata?.num_expiring_boosts ?? 0) > 0,
        );
        if (0 === e.length) return;
        let i = e.reduce((e, t) => (t.ends_at > e.ends_at ? t : e)),
            l = t?.allPowerups[i.sku_id]?.title ?? null,
            r = i.sku?.tenant_metadata?.guild_monetization?.game_server != null;
        if (null !== l || r)
            return {
                name: l,
                daysUntilExpiry: Math.max(0, (0, s.WU)(new Date(i.ends_at))),
                numExpiringBoosts: i.metadata?.num_expiring_boosts ?? 0,
                isGameServer: r,
                skuId: i.sku_id,
            };
    }, [t, n, d]);
}
