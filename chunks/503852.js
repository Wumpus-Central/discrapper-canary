r.d(t, {
    Z: () => i,
    q: () => c,
});
var n,
    a = r(64700),
    l = r(954571),
    s = r(652215),
    c = (((n = {}).DETAIL = "Boost Perk Shop Details"), (n.DEACTIVATE = "Boost Perk Shop Disable"), n);

function i(e, t, r) {
    a.useEffect(() => {
        l.default.track(s.HAw.OPEN_MODAL, {
            type: r,
            sku_id: t.skuId,
            guild_id: e,
        });
    }, [r, e, t.skuId]);
}
