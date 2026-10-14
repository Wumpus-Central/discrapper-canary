n.d(t, { K: () => s });
var l = n(17928),
    i = n(645619),
    a = n(960960);
function s(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getWidget(e, t.type), [e, t.type]),
        s = n?.powerup_sku_id ?? null,
        r = (0, l.bG)([i.A], () => null != s && i.A.getStateForGuild(e)?.unlockedPowerups[s] != null, [e, s]);
    return t.locked && !r ? { boostPrice: n?.boost_price ?? null, powerupSkuId: s } : void 0;
}
