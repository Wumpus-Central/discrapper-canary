var t,
    u = i(582128),
    e = i(129230),
    k = i(652215),
    a = (((t = {}).DETAIL = "Boost Perk Shop Details"), (t.DEACTIVATE = "Boost Perk Shop Disable"), t);
i.d(
    d,
    {},
    {
        Z: function (s, d, i) {
            u.useEffect(() => {
                e.default.track(k.HAw.OPEN_MODAL, { type: i, sku_id: d.skuId, guild_id: s });
            }, [i, s, d.skuId]);
        },
        q: a,
    },
);
