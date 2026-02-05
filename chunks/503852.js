s.d(t, { Z: () => o, q: () => i });
var n,
    a = s(64700),
    r = s(954571),
    l = s(652215),
    i = (((n = {}).DETAIL = "Boost Perk Shop Details"), (n.DEACTIVATE = "Boost Perk Shop Disable"), n);
function o(e, t, s) {
    a.useEffect(() => {
        r.default.track(l.HAw.OPEN_MODAL, { type: s, sku_id: t.skuId, guild_id: e });
    }, [s, e, t.skuId]);
}
