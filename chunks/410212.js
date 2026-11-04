n.d(
    t,
    {},
    {
        A: function (e) {
            let t = e?.tenant_metadata?.guild_monetization,
                n = e?.sku?.tenant_metadata?.guild_monetization;
            return (
                t?.game_server?.boost_price ??
                t?.powerup?.boost_price ??
                n?.game_server?.boost_price ??
                n?.powerup?.boost_price
            );
        },
    },
);
