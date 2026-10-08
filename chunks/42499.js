l.d(t, { K: () => a });
var n = l(17928),
    i = l(645619),
    s = l(960960);
function a(e, t) {
    let l = (0, n.bG)([s.A], () => s.A.getWidget(e, t.type), [e, t.type]),
        a = l?.powerup_sku_id ?? null,
        r = (0, n.bG)([i.A], () => null != a && i.A.getStateForGuild(e)?.unlockedPowerups[a] != null, [e, a]);
    return t.locked && !r ? { boostPrice: l?.boost_price ?? null, powerupSkuId: a } : void 0;
}
