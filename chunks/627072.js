function r(e) {
    var t, n, r, i, a, s, o, l, c, u, d, f, p;
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
        h = _.length > 0 ? Math.min(..._.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId:
            null !=
            (t =
                null == (i = e.tenant_metadata) || null == (r = i.guild_monetization) || null == (n = r.game_server)
                    ? void 0
                    : n.game_application_id)
                ? t
                : "",
        provider:
            null == (o = e.tenant_metadata) || null == (s = o.guild_monetization) || null == (a = s.game_server)
                ? void 0
                : a.provider,
        plans: _,
        baseCost: h,
        disabled:
            null == (u = e.tenant_metadata) || null == (c = u.guild_monetization) || null == (l = c.game_server)
                ? void 0
                : l.disabled,
        early_access:
            null == (p = e.tenant_metadata) || null == (f = p.guild_monetization) || null == (d = f.game_server)
                ? void 0
                : d.early_access,
    };
}
n.d(t, { o: () => r }), n(228524), n(638769), n(896048);
