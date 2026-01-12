n.d(t, { Z: () => a });
var r = n(10765),
    i = n(973772),
    l = n(535396);
function a(e, t) {
    let n = (0, i.ZP)(e, t),
        a = n.type !== l.A3.INACTIVE,
        o = n.type === l.A3.TIER_OVERRIDE_ACTIVATED,
        s = (0, r.Z)(e, t, "GuildPowerupCardFooterAdmin"),
        c = l.ye;
    return {
        showToggleButton: (a || !s) && !o,
        showConfigureButton: a && c.has(t.skuId),
        isPowerupActive: a,
    };
}
