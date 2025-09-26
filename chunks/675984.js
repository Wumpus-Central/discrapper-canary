n.d(t, { m: () => r }), n(953529), n(642613), n(388685);
var a = n(962774);
function r(e) {
    var t, n, r, i;
    let l = e.skus
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
        s = l.length > 0 ? Math.min(...l.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        gameId:
            null !=
            (i =
                null == (r = e.tenant_metadata) || null == (n = r.guild_monetization) || null == (t = n.game_server)
                    ? void 0
                    : t.game_application_id)
                ? i
                : "",
        imageUrl: "",
        developer: "Game Server Provider",
        plans: l,
        regions: a.Y9,
        baseCost: s,
    };
}
