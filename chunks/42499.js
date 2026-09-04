l.d(t, { K: () => s });
var i = l(17928),
    n = l(645619),
    a = l(960960);
function s(e, t) {
    let l = (0, i.bG)([a.A], () => a.A.getWidget(e, t.type), [e, t.type]),
        s = l?.powerup_sku_id ?? null,
        r = (0, i.bG)([n.A], () => null != s && n.A.getStateForGuild(e)?.unlockedPowerups[s] != null, [e, s]);
    return t.locked && !r ? { boostPrice: l?.boost_price ?? null, powerupSkuId: s } : void 0;
}
