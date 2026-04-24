a.d(t, { o: () => n });
function n(e) {
    let t = e.skus
            .map((e) => {
                let t = e.tenant_metadata.plan_features.map((e) => ({ title: e.title, description: e.description }));
                return { id: e.id, name: e.name, cost: e.tenant_metadata.boost_price, specifications: t };
            })
            .sort((e, t) => t.cost - e.cost),
        a = t.length > 0 ? Math.min(...t.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId: e.tenant_metadata?.guild_monetization?.game_server?.game_application_id ?? "",
        provider: e.tenant_metadata?.guild_monetization?.game_server?.provider,
        plans: t,
        baseCost: a,
        disabled: e.tenant_metadata?.guild_monetization?.game_server?.disabled,
        early_access: e.tenant_metadata?.guild_monetization?.game_server?.early_access,
        can_market: e.tenant_metadata?.guild_monetization?.game_server?.can_market,
    };
}
