function a(e) {
    var t, n, a, r, l, i, o;
    let s = e.skus
            .map((e) => {
                let t = e.tenant_metadata.plan_features.map((e) => ({
                    title: e.title,
                    description: e.description,
                }));
                return {
                    id: e.id,
                    name: e.name,
                    cost: e.tenant_metadata.boost_price,
                    specifications: t,
                };
            })
            .sort((e, t) => t.cost - e.cost),
        c = s.length > 0 ? Math.min(...s.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId:
            null !=
            (o =
                null == (a = e.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server)
                    ? void 0
                    : t.game_application_id)
                ? o
                : "",
        provider:
            null == (i = e.tenant_metadata) || null == (l = i.guild_monetization) || null == (r = l.game_server)
                ? void 0
                : r.provider,
        plans: s,
        baseCost: c,
    };
}
n.d(t, { m: () => a }), n(953529), n(642613), n(388685);
