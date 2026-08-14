a.d(e, { Z: () => o, q: () => n });
var s,
    i = a(582128),
    r = a(174459),
    l = a(652215),
    n =
        588245 != a.j
            ? (((s = {}).DETAIL = "Boost Perk Shop Details"), (s.DEACTIVATE = "Boost Perk Shop Disable"), s)
            : null;
function o(t, e, a) {
    i.useEffect(() => {
        r.default.track(l.HAw.OPEN_MODAL, { type: a, sku_id: e.skuId, guild_id: t });
    }, [a, t, e.skuId]);
}
