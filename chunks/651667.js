function r(e) {
    var t, n, r, i, a, o, s, l, c, u;
    let d = e.skus
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
        f = d.length > 0 ? Math.min(...d.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId:
            null !=
            (u =
                null == (r = e.tenant_metadata) || null == (n = r.guild_monetization) || null == (t = n.game_server)
                    ? void 0
                    : t.game_application_id)
                ? u
                : "",
        provider:
            null == (o = e.tenant_metadata) || null == (a = o.guild_monetization) || null == (i = a.game_server)
                ? void 0
                : i.provider,
        plans: d,
        baseCost: f,
        disabled:
            null == (c = e.tenant_metadata) || null == (l = c.guild_monetization) || null == (s = l.game_server)
                ? void 0
                : s.disabled,
    };
}
n.d(t, { m: () => r }), n(953529), n(642613), n(388685);
