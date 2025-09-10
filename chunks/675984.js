n.d(t, { m: () => r }), n(953529), n(642613), n(388685);
var a = n(962774);
function r(e) {
    let t = e.skus
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
            .sort((e, t) => e.cost - t.cost),
        n = t.length > 0 ? Math.min(...t.map((e) => e.cost)) : 0;
    return {
        id: e.id,
        name: e.name,
        imageUrl: "",
        developer: "Game Server Provider",
        plans: t,
        locations: a.ai,
        baseCost: n,
    };
}
