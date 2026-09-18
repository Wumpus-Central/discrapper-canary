l.d(t, { K: () => r });
var n = l(17928),
    i = l(645619),
    a = l(960960);
function r(e, t) {
    let l = (0, n.bG)([a.A], () => a.A.getWidget(e, t.type), [e, t.type]),
        r = l?.powerup_sku_id ?? null,
        s = (0, n.bG)([i.A], () => null != r && i.A.getStateForGuild(e)?.unlockedPowerups[r] != null, [e, r]);
    return t.locked && !s ? { boostPrice: l?.boost_price ?? null, powerupSkuId: r } : void 0;
}
