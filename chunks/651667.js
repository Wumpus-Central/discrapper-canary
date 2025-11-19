function a(e) {
    var t, n, a, l, r, i, s, o, c, d;
    let u = e.skus
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
        m = u.length > 0 ? Math.min(...u.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId:
            null !=
            (d =
                null == (a = e.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server)
                    ? void 0
                    : t.game_application_id)
                ? d
                : "",
        provider:
            null == (i = e.tenant_metadata) || null == (r = i.guild_monetization) || null == (l = r.game_server)
                ? void 0
                : l.provider,
        plans: u,
        baseCost: m,
        disabled:
            null == (c = e.tenant_metadata) || null == (o = c.guild_monetization) || null == (s = o.game_server)
                ? void 0
                : s.disabled,
    };
}
n.d(t, { m: () => a }), n(953529), n(642613), n(388685);
