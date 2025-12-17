n.d(t, { Z: () => a });
var r = n(10765),
    i = n(973772),
    l = n(535396);
function a(e, t) {
    let n = (0, i.ZP)(e, t).type !== l.A3.INACTIVE,
        a = (0, r.Z)(e, t, "GuildPowerupCardFooterAdmin");
    return {
        showToggleButton: n || !a,
        showConfigureButton: n && l.uc.has(t.skuId),
        isPowerupActive: n,
    };
}
