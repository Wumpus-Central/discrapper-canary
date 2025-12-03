n.d(t, { Z: () => o });
var r = n(10765),
    i = n(973772),
    l = n(535396);
function o(e, t) {
    let n = (0, i.ZP)(e, t).type !== l.A3.INACTIVE,
        o = (0, r.Z)(e, t, "GuildPowerupCardFooterAdmin");
    return {
        showToggleButton: n || !o,
        showConfigureButton: n && l.uc.has(t.skuId),
        isPowerupActive: n,
    };
}
