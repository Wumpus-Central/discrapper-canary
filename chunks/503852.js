i.d(d, { Z: () => o, q: () => a });
var t,
    u = i(64700),
    e = i(174459),
    k = i(652215),
    a = (((t = {}).DETAIL = "Boost Perk Shop Details"), (t.DEACTIVATE = "Boost Perk Shop Disable"), t);
function o(s, d, i) {
    u.useEffect(() => {
        e.default.track(k.HAw.OPEN_MODAL, { type: i, sku_id: d.skuId, guild_id: s });
    }, [i, s, d.skuId]);
}
