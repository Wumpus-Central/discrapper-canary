n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(993408),
    a = n(522055),
    r = n(645619),
    o = n(103821);
function c(e) {
    let t = (0, l.bG)([r.A], () => r.A.getStateForGuild(e)),
        n = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        c = (0, o.i)("useFeaturedExpiringPowerup");
    return i.useMemo(() => {
        if (!c) return;
        let e = [...Object.values(t?.unlockedPowerups ?? {}), ...Object.values(n?.entitlements ?? {})].filter(
            (e) => null != e.ends_at && (e.metadata?.num_expiring_boosts ?? 0) > 0,
        );
        if (0 === e.length) return;
        let i = e.reduce((e, t) => (t.ends_at > e.ends_at ? t : e)),
            l = t?.allPowerups[i.sku_id]?.title ?? null,
            a = i.sku?.tenant_metadata?.guild_monetization?.game_server != null;
        if (null !== l || a)
            return {
                name: l,
                daysUntilExpiry: Math.max(0, (0, s.WU)(new Date(i.ends_at))),
                numExpiringBoosts: i.metadata?.num_expiring_boosts ?? 0,
                isGameServer: a,
                skuId: i.sku_id,
            };
    }, [t, n, c]);
}
