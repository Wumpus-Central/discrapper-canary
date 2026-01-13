function r(e) {
    var t, n, r, i, a, o, s, l, c, u, d, f, p;
    let _ = e.skus
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
        m = _.length > 0 ? Math.min(..._.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId:
            null !=
            (p =
                null == (r = e.tenant_metadata) || null == (n = r.guild_monetization) || null == (t = n.game_server)
                    ? void 0
                    : t.game_application_id)
                ? p
                : "",
        provider:
            null == (o = e.tenant_metadata) || null == (a = o.guild_monetization) || null == (i = a.game_server)
                ? void 0
                : i.provider,
        plans: _,
        baseCost: m,
        disabled:
            null == (c = e.tenant_metadata) || null == (l = c.guild_monetization) || null == (s = l.game_server)
                ? void 0
                : s.disabled,
        early_access:
            null == (f = e.tenant_metadata) || null == (d = f.guild_monetization) || null == (u = d.game_server)
                ? void 0
                : u.early_access,
    };
}
n.d(t, { m: () => r }), n(953529), n(642613), n(388685);
